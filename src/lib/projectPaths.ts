const PROJECT_SLUGS: Record<number, string> = {
  1: "turuta-app",
  4: "comuni",
  5: "educareer",
  6: "linkshort",
  7: "payment-system",
  8: "customer-registration-microservices",
  9: "spring-webflux-enrollment",
  10: "sistema-bibliotecas-ci-fiis",
  11: "biblioteca-hexagonal",
  12: "flyboard",
  13: "guia-de-fe",
  14: "intranet-academica",
  15: "tienda-virtual-movil",
  16: "online-shop",
  17: "base-datos-tienda-ropa",
  18: "book-rental-system",
  19: "chambita",
  20: "grupo-wired",
  21: "modelo-causal-interactivo",
  22: "techparts",
  23: "clothingurban",
  24: "sistema-matricula",
  25: "prediccion-rotura-stock",
  26: "sistema-contable",
  27: "sistema-gestion-transporte",
  28: "sabores-deliciosos",
  29: "voice-dictation",
  30: "phone-assistant",
};

export function projectPathFromSlug(slug: string): `/proyectos/${string}` {
  return `/proyectos/${slug}`;
}

export function projectPath(project: {
  id: number;
  slug?: string;
}): `/proyectos/${string}` {
  const slug = project.slug ?? PROJECT_SLUGS[project.id];

  if (!slug) {
    throw new Error(`Falta definir un slug para el proyecto ${project.id}.`);
  }

  return projectPathFromSlug(slug);
}

export function projectSlug(projectId: number): string | undefined {
  return PROJECT_SLUGS[projectId];
}
