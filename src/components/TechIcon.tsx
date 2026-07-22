import {
  siAngular,
  siApachekafka,
  siDart,
  siDocker,
  siExpress,
  siFastapi,
  siFlutter,
  siGithub,
  siGithubactions,
  siGooglecloud,
  siGooglegemini,
  siJsonwebtokens,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siRabbitmq,
  siReact,
  siRedis,
  siSpringboot,
  siTypescript,
} from "simple-icons";
import { LOCAL_ICONS } from "@/lib/localIcons";

type Icon = { path: string; hex: string };

const ICONS: Record<string, Icon> = {
  angular: siAngular,
  dart: siDart,
  docker: siDocker,
  express: siExpress,
  fastapi: siFastapi,
  flutter: siFlutter,
  gemini: siGooglegemini,
  github: siGithub,
  "github actions": siGithubactions,
  "google cloud": siGooglecloud,
  java: siOpenjdk,
  "java 17": siOpenjdk,
  "java 21": siOpenjdk,
  jwt: siJsonwebtokens,
  kafka: siApachekafka,
  "kafka streams": siApachekafka,
  mongodb: siMongodb,
  mysql: siMysql,
  nestjs: siNestjs,
  "next.js": siNextdotjs,
  "node.js": siNodedotjs,
  postgresql: siPostgresql,
  python: siPython,
  rabbitmq: siRabbitmq,
  react: siReact,
  redis: siRedis,
  "spring boot": siSpringboot,
  "spring boot 3": siSpringboot,
  "spring webflux": siSpringboot,
  typescript: siTypescript,
};

const LOCAL: Record<string, { key: keyof typeof LOCAL_ICONS; hex: string }> = {
  aws: { key: "aws", hex: "FF9900" },
  java: { key: "java", hex: "E76F00" },
  "java 17": { key: "java", hex: "E76F00" },
  "java 21": { key: "java", hex: "E76F00" },
};

const MONOGRAMS: Record<string, string> = {
  typesense: "TS",
  "protocol buffers": "PB",
  "ci/cd": "CI",
  sql: "SQ",
};

export function techIconFor(name: string) {
  const key = name.toLowerCase().trim();
  return ICONS[key] ?? null;
}

export default function TechIcon({ name, className = "" }: { name: string; className?: string }) {
  const key = name.toLowerCase().trim();

  const local = LOCAL[key];
  if (local) {
    const shape = LOCAL_ICONS[local.key];
    return (
      <svg
        viewBox={shape.viewBox}
        fill="currentColor"
        aria-hidden
        className={`tech-icon ${className}`}
        style={{ "--brand": `#${local.hex}` } as React.CSSProperties}
      >
        <path d={shape.d} />
      </svg>
    );
  }

  const icon = ICONS[key];
  if (icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className={`tech-icon ${className}`}
        style={{ "--brand": `#${icon.hex}` } as React.CSSProperties}
      >
        <path d={icon.path} />
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
