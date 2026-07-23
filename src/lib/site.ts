export const SITE_URL = "https://anthonyerazo.dev";
export const SITE_NAME = "Anthony Erazo";
export const SITE_TITLE = "Anthony Erazo | Desarrollador Full Stack en Lima, Perú";
export const SITE_DESCRIPTION =
  "Portafolio de Anthony Erazo, desarrollador Full Stack en Lima, Perú. Experiencia en backend, aplicaciones web y móviles, AWS, Google Cloud y analítica de datos.";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
