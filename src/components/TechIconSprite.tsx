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
  siPostgresql,
  siPython,
  siRabbitmq,
  siReact,
  siRedis,
  siSpringboot,
  siTypescript,
} from "simple-icons";
import { LOCAL_ICONS } from "@/lib/localIcons";

const SIMPLE_ICONS = [
  ["tech-icon-angular", siAngular],
  ["tech-icon-kafka", siApachekafka],
  ["tech-icon-dart", siDart],
  ["tech-icon-docker", siDocker],
  ["tech-icon-express", siExpress],
  ["tech-icon-fastapi", siFastapi],
  ["tech-icon-flutter", siFlutter],
  ["tech-icon-github", siGithub],
  ["tech-icon-github-actions", siGithubactions],
  ["tech-icon-google-cloud", siGooglecloud],
  ["tech-icon-gemini", siGooglegemini],
  ["tech-icon-jwt", siJsonwebtokens],
  ["tech-icon-mongodb", siMongodb],
  ["tech-icon-mysql", siMysql],
  ["tech-icon-nestjs", siNestjs],
  ["tech-icon-nextjs", siNextdotjs],
  ["tech-icon-nodejs", siNodedotjs],
  ["tech-icon-postgresql", siPostgresql],
  ["tech-icon-python", siPython],
  ["tech-icon-rabbitmq", siRabbitmq],
  ["tech-icon-react", siReact],
  ["tech-icon-redis", siRedis],
  ["tech-icon-springboot", siSpringboot],
  ["tech-icon-typescript", siTypescript],
] as const;

const LOCAL = [
  ["tech-icon-aws", LOCAL_ICONS.aws],
  ["tech-icon-java", LOCAL_ICONS.java],
] as const;

export default function TechIconSprite() {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <defs>
        {SIMPLE_ICONS.map(([id, icon]) => (
          <symbol key={id} id={id} viewBox="0 0 24 24">
            <path d={icon.path} />
          </symbol>
        ))}
        {LOCAL.map(([id, icon]) => (
          <symbol key={id} id={id} viewBox={icon.viewBox}>
            <path d={icon.d} />
          </symbol>
        ))}
      </defs>
    </svg>
  );
}
