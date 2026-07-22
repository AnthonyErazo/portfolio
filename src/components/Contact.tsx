"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, sectionTitles, socialLinks, type BiText } from "@/data";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const ERROR_MESSAGES: Record<string, BiText> = {
  invalid_name: { es: "Escribe tu nombre.", en: "Please enter your name." },
  invalid_email: { es: "Revisa tu correo.", en: "Please check your email." },
  invalid_message: {
    es: "El mensaje debe tener al menos 10 caracteres.",
    en: "The message must be at least 10 characters.",
  },
  rate_limited: {
    es: "Demasiados envíos. Intenta de nuevo en unos minutos.",
    en: "Too many submissions. Try again in a few minutes.",
  },
  not_configured: {
    es: "El envío no está configurado. Escríbeme directo al correo.",
    en: "Sending isn't configured. Please email me directly.",
  },
  default: {
    es: "No se pudo enviar. Escríbeme directo al correo.",
    en: "Couldn't send. Please email me directly.",
  },
};

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState("default");
  const links = socialLinks.filter((s) => s.name !== "Email");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setErrorKey(payload.error in ERROR_MESSAGES ? payload.error : "default");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setErrorKey("default");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-container scroll-mt-20 py-16 pb-28">
      <SectionHeading index="06" title={sectionTitles.contact} />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="reveal">
            <p className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              {t({
                es: "¿Buscas un perfil Full Stack con experiencia en productos digitales?",
                en: "Looking for a Full Stack developer with digital product experience?",
              })}
            </p>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              {t({
                es: "Si mi perfil encaja con tu equipo o tienes un proyecto en el que pueda aportar, escríbeme mediante el formulario o directamente a mi correo.",
                en: "If my profile fits your team or you have a project I could contribute to, use the form or email me directly.",
              })}
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-8 inline-flex items-center gap-1.5 font-mono text-sm transition-colors hover:text-accent"
            >
              {personalInfo.email}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
            </a>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.name}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-colors group-hover:text-accent" />
                </a>
              ))}
              <span className="text-muted-foreground">{personalInfo.phone}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal flex flex-col gap-7">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <label className="block">
              <span className="mono-label">{t({ es: "Nombre", en: "Name" })}</span>
              <input
                type="text"
                name="name"
                required
                maxLength={100}
                disabled={status === "sending"}
                className="field mt-2"
                placeholder={t({ es: "Cómo te llamas", en: "Your name" })}
              />
            </label>

            <label className="block">
              <span className="mono-label">{t({ es: "Correo", en: "Email" })}</span>
              <input
                type="email"
                name="email"
                required
                maxLength={200}
                disabled={status === "sending"}
                className="field mt-2"
                placeholder="tu@correo.com"
              />
            </label>

            <label className="block">
              <span className="mono-label">{t({ es: "Mensaje", en: "Message" })}</span>
              <textarea
                name="message"
                required
                rows={4}
                minLength={10}
                maxLength={5000}
                disabled={status === "sending"}
                className="field mt-2 resize-none"
                placeholder={t({
                  es: "Cuéntame en qué estás pensando",
                  en: "Tell me what you have in mind",
                })}
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="on-accent inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                {status === "sent" && <Check className="h-3.5 w-3.5" />}
                {status === "sending"
                  ? t({ es: "Enviando...", en: "Sending..." })
                  : status === "sent"
                    ? t({ es: "Mensaje enviado", en: "Message sent" })
                    : t({ es: "Enviar mensaje", en: "Send message" })}
              </button>

              {status === "error" && (
                <p role="alert" className="font-mono text-xs text-destructive">
                  {t(ERROR_MESSAGES[errorKey])}
                </p>
              )}
              {status === "sent" && (
                <p role="status" className="font-mono text-xs text-muted-foreground">
                  {t({ es: "Te respondo pronto.", en: "I'll get back to you soon." })}
                </p>
              )}
            </div>
          </form>
      </div>
    </section>
  );
}
