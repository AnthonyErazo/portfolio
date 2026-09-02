export const SITE_URL = "https://anthonyerazo.dev";
export const SITE_NAME = "Anthony Erazo";
export const SITE_TITLE =
  "Anthony Erazo | Agentes de IA y desarrollo Full Stack en Lima, Perú";
export const SITE_DESCRIPTION =
  "Portafolio de Anthony Erazo, desarrollador en Lima, Perú. Agentes de IA con Python, LangGraph y RAG, evaluación y gobierno de agentes, APIs con FastAPI, Google Cloud y AWS.";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
