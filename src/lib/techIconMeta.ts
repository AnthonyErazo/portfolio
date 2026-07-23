export interface TechIconMeta {
  symbolId: string;
  hex: string;
  viewBox: string;
}

const SIMPLE_VIEWBOX = "0 0 24 24";

const ICONS: Record<string, TechIconMeta> = {
  angular: {
    symbolId: "tech-icon-angular",
    hex: "0F0F11",
    viewBox: SIMPLE_VIEWBOX,
  },
  dart: {
    symbolId: "tech-icon-dart",
    hex: "0175C2",
    viewBox: SIMPLE_VIEWBOX,
  },
  docker: {
    symbolId: "tech-icon-docker",
    hex: "2496ED",
    viewBox: SIMPLE_VIEWBOX,
  },
  express: {
    symbolId: "tech-icon-express",
    hex: "0A0A0A",
    viewBox: SIMPLE_VIEWBOX,
  },
  fastapi: {
    symbolId: "tech-icon-fastapi",
    hex: "009688",
    viewBox: SIMPLE_VIEWBOX,
  },
  flutter: {
    symbolId: "tech-icon-flutter",
    hex: "02569B",
    viewBox: SIMPLE_VIEWBOX,
  },
  gemini: {
    symbolId: "tech-icon-gemini",
    hex: "8E75B2",
    viewBox: SIMPLE_VIEWBOX,
  },
  github: {
    symbolId: "tech-icon-github",
    hex: "181717",
    viewBox: SIMPLE_VIEWBOX,
  },
  "github actions": {
    symbolId: "tech-icon-github-actions",
    hex: "2088FF",
    viewBox: SIMPLE_VIEWBOX,
  },
  "google cloud": {
    symbolId: "tech-icon-google-cloud",
    hex: "4285F4",
    viewBox: SIMPLE_VIEWBOX,
  },
  java: {
    symbolId: "tech-icon-java",
    hex: "E76F00",
    viewBox: "0 0 128 128",
  },
  "java 17": {
    symbolId: "tech-icon-java",
    hex: "E76F00",
    viewBox: "0 0 128 128",
  },
  "java 21": {
    symbolId: "tech-icon-java",
    hex: "E76F00",
    viewBox: "0 0 128 128",
  },
  jwt: {
    symbolId: "tech-icon-jwt",
    hex: "000000",
    viewBox: SIMPLE_VIEWBOX,
  },
  kafka: {
    symbolId: "tech-icon-kafka",
    hex: "231F20",
    viewBox: SIMPLE_VIEWBOX,
  },
  "kafka streams": {
    symbolId: "tech-icon-kafka",
    hex: "231F20",
    viewBox: SIMPLE_VIEWBOX,
  },
  mongodb: {
    symbolId: "tech-icon-mongodb",
    hex: "47A248",
    viewBox: SIMPLE_VIEWBOX,
  },
  mysql: {
    symbolId: "tech-icon-mysql",
    hex: "4479A1",
    viewBox: SIMPLE_VIEWBOX,
  },
  nestjs: {
    symbolId: "tech-icon-nestjs",
    hex: "E0234E",
    viewBox: SIMPLE_VIEWBOX,
  },
  "next.js": {
    symbolId: "tech-icon-nextjs",
    hex: "000000",
    viewBox: SIMPLE_VIEWBOX,
  },
  "node.js": {
    symbolId: "tech-icon-nodejs",
    hex: "5FA04E",
    viewBox: SIMPLE_VIEWBOX,
  },
  postgresql: {
    symbolId: "tech-icon-postgresql",
    hex: "4169E1",
    viewBox: SIMPLE_VIEWBOX,
  },
  python: {
    symbolId: "tech-icon-python",
    hex: "3776AB",
    viewBox: SIMPLE_VIEWBOX,
  },
  rabbitmq: {
    symbolId: "tech-icon-rabbitmq",
    hex: "FF6600",
    viewBox: SIMPLE_VIEWBOX,
  },
  react: {
    symbolId: "tech-icon-react",
    hex: "61DAFB",
    viewBox: SIMPLE_VIEWBOX,
  },
  redis: {
    symbolId: "tech-icon-redis",
    hex: "FF4438",
    viewBox: SIMPLE_VIEWBOX,
  },
  "spring boot": {
    symbolId: "tech-icon-springboot",
    hex: "6DB33F",
    viewBox: SIMPLE_VIEWBOX,
  },
  "spring boot 3": {
    symbolId: "tech-icon-springboot",
    hex: "6DB33F",
    viewBox: SIMPLE_VIEWBOX,
  },
  "spring webflux": {
    symbolId: "tech-icon-springboot",
    hex: "6DB33F",
    viewBox: SIMPLE_VIEWBOX,
  },
  typescript: {
    symbolId: "tech-icon-typescript",
    hex: "3178C6",
    viewBox: SIMPLE_VIEWBOX,
  },
  aws: {
    symbolId: "tech-icon-aws",
    hex: "FF9900",
    viewBox: "0 0 128 128",
  },
};

export function techIconMetaFor(name: string): TechIconMeta | null {
  return ICONS[name.toLowerCase().trim()] ?? null;
}
