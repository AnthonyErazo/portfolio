import { ImageResponse } from "next/og";

export const alt = "Anthony Erazo, desarrollador Full Stack en Lima, Perú";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          background: "#04070c",
          color: "#dde6f2",
          padding: "76px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.22,
            backgroundImage:
              "linear-gradient(#151d28 1px, transparent 1px), linear-gradient(90deg, #151d28 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -150,
            top: -180,
            display: "flex",
            height: 620,
            width: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(77,157,255,0.30), rgba(77,157,255,0))",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#4d9dff", fontSize: 24 }}>
            <div style={{ display: "flex", height: 10, width: 10, borderRadius: "50%", background: "#4d9dff" }} />
            PORTAFOLIO · LIMA, PERÚ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 86, fontWeight: 700, letterSpacing: -4 }}>
              Anthony Erazo<span style={{ color: "#4d9dff" }}>.</span>
            </div>
            <div style={{ display: "flex", marginTop: 18, fontSize: 36, color: "#9fb0c5" }}>
              Desarrollador Full Stack · Backend · Cloud
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 23, color: "#76889f" }}>
            Node.js · TypeScript · Next.js · Flutter · AWS · Google Cloud
          </div>
        </div>
      </div>
    ),
    size
  );
}
