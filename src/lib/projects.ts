import { projects, type Project } from "@/data";

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

const INDEXABLE_PERSONAL_PROJECT_IDS = new Set([7, 11, 19]);

export type PortfolioProject = Project & {
  slug: string;
  indexable: boolean;
};

export function isProjectIndexable(project: Project): boolean {
  return (
    project.type === "professional" ||
    project.type === "university" ||
    INDEXABLE_PERSONAL_PROJECT_IDS.has(project.id)
  );
}

export const portfolioProjects: PortfolioProject[] = projects.map((project) => {
  const slug = PROJECT_SLUGS[project.id];

  if (!slug) {
    throw new Error(`Falta definir un slug para el proyecto ${project.id}.`);
  }

  return {
    ...project,
    slug,
    indexable: isProjectIndexable(project),
  };
});

export const indexableProjects = portfolioProjects.filter(
  (project) => project.indexable,
);

const projectsBySlug = new Map(
  portfolioProjects.map((project) => [project.slug, project]),
);

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projectsBySlug.get(slug);
}

export function projectPathFromSlug(slug: string): `/proyectos/${string}` {
  return `/proyectos/${slug}`;
}

export function projectPath(project: Project | PortfolioProject): `/proyectos/${string}` {
  const slug = "slug" in project ? project.slug : PROJECT_SLUGS[project.id];

  if (!slug) {
    throw new Error(`Falta definir un slug para el proyecto ${project.id}.`);
  }

  return projectPathFromSlug(slug);
}
