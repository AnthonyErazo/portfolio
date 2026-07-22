import { NextResponse } from "next/server";

const MAX_PER_WINDOW = 3;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface Message {
  name: string;
  email: string;
  message: string;
}

function render({ name, email, message }: Message) {
  return {
    subject: `Portafolio — mensaje de ${name}`,
    text: `${name} <${email}>\n\n${message}\n\nResponde a este correo para contestarle directamente.`,
    html: `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111827">
        <p style="margin:0 0 4px"><strong>${escapeHtml(name)}</strong></p>
        <p style="margin:0 0 20px;color:#5a6675">${escapeHtml(email)}</p>
        <div style="border-left:3px solid #1e5fd8;padding-left:16px;white-space:pre-wrap">${escapeHtml(
          message
        )}</div>
        <p style="margin:24px 0 0;color:#6b7683;font-size:13px">
          Responde a este correo para contestarle directamente.
        </p>
      </div>
    `,
  };
}

async function sendWithGmail(user: string, pass: string, to: string, msg: Message) {
  const nodemailer = (await import("nodemailer")).default;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass: pass.replace(/\s/g, "") },
  });

  const { subject, text, html } = render(msg);
  const info = await transporter.sendMail({
    from: `"Portafolio" <${user}>`,
    to,
    replyTo: `"${msg.name}" <${msg.email}>`,
    subject,
    text,
    html,
  });

  return info.messageId;
}

async function sendWithResend(apiKey: string, to: string, msg: Message) {
  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { subject, text, html } = render(msg);
  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portafolio <onboarding@resend.dev>",
    to,
    replyTo: msg.email,
    subject,
    text,
    html,
  });

  if (error) throw new Error(`${error.name}: ${error.message}`);
  return data?.id;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "invalid_name" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "invalid_message" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? gmailUser;

  if (!to || (!gmailUser && !resendKey)) {
    console.error(
      "Configura GMAIL_USER + GMAIL_APP_PASSWORD, o RESEND_API_KEY + CONTACT_TO_EMAIL."
    );
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const msg = { name, email, message };
  try {
    if (gmailUser && gmailPassword) {
      const id = await sendWithGmail(gmailUser, gmailPassword, to, msg);
      console.log(`Mensaje enviado por Gmail SMTP — id: ${id}`);
    } else {
      const id = await sendWithResend(resendKey!, to, msg);
      console.log(`Mensaje enviado por Resend — id: ${id}`);
    }
  } catch (error) {
    console.error("Falló el envío del correo:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
