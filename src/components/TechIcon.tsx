import type { CSSProperties } from "react";
import { techIconMetaFor } from "@/lib/techIconMeta";

const MONOGRAMS: Record<string, string> = {
  typesense: "TS",
  "protocol buffers": "PB",
  "ci/cd": "CI",
  sql: "SQ",
};

export default function TechIcon({ name, className = "" }: { name: string; className?: string }) {
  const key = name.toLowerCase().trim();
  const icon = techIconMetaFor(key);
  if (icon) {
    return (
      <svg
        viewBox={icon.viewBox}
        fill="currentColor"
        aria-hidden
        className={`tech-icon ${className}`}
        style={{ "--brand": `#${icon.hex}` } as CSSProperties}
      >
        <use href={`#${icon.symbolId}`} />
      </svg>
    );
  }

  const monogram = MONOGRAMS[key];
  if (!monogram) return null;

  return (
    <span aria-hidden className={`tech-mono ${className}`}>
      {monogram}
    </span>
  );
}
