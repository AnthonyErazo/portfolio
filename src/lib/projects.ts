import type { Project } from "@/data";
import { projects } from "@/data/projects";
import {
  projectPath,
  projectPathFromSlug,
  projectSlug,
} from "@/lib/projectPaths";

export { projectPath, projectPathFromSlug };

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
  const slug = projectSlug(project.id);

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
