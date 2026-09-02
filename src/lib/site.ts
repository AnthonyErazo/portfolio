export const SITE_URL = "https://anthonyerazo.dev";
export const SITE_NAME = "Anthony Erazo";
export const SITE_TITLE =
  "Anthony Erazo | Desarrollador Full Stack e IA aplicada en Lima, Perú";
export const SITE_DESCRIPTION =
  "Portafolio de Anthony Erazo, desarrollador Full Stack en Lima, Perú. Backend, aplicaciones web y móviles, Google Cloud y AWS, y agentes de IA con Python, LangGraph y RAG.";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
