"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { ArrowUpRight, ImageIcon, Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects, projectTypeLabels, sectionTitles, type Project } from "@/data";
import { projectPath } from "@/lib/projects";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import ProjectTypeBadge from "./ProjectTypeBadge";
import TechIcon from "./TechIcon";

type ProjectTypeFilter = "all" | Project["type"];

const projectTypeFilters: ProjectTypeFilter[] = [
  "all",
  "professional",
  "university",
  "personal",
];

const featuredProjectOrder = [1, 30, 12, 13, 10, 25, 27, 26];
const featuredProjectRank = new Map(
  featuredProjectOrder.map((projectId, index) => [projectId, index])
);

const technologyOptions = Array.from(
  new Set(projects.flatMap((project) => project.technologies))
).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

const projectTypeCounts: Record<ProjectTypeFilter, number> = {
  all: projects.length,
  professional: projects.filter((project) => project.type === "professional").length,
  university: projects.filter((project) => project.type === "university").length,
  personal: projects.filter((project) => project.type === "personal").length,
};

const normalizeSearchText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();

const projectSearchText = (project: Project) =>
  normalizeSearchText(
    [
      project.title,
      project.shortDescription.es,
      project.shortDescription.en,
      project.fullDescription.es,
      project.fullDescription.en,
      projectTypeLabels[project.type].es,
      projectTypeLabels[project.type].en,
      ...project.technologies,
      ...(project.features ?? []).flatMap((feature) => [feature.es, feature.en]),
      ...(project.highlights ?? []).flatMap((highlight) => [highlight.es, highlight.en]),
    ].join(" ")
  );

const projectSearchIndex = new Map(
  projects.map((project) => [project.id, projectSearchText(project)])
);

export default function Projects() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<ProjectTypeFilter>("all");
  const [technologyFilter, setTechnologyFilter] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const queryTerms = useMemo(
    () => normalizeSearchText(deferredQuery.trim()).split(/\s+/).filter(Boolean),
    [deferredQuery]
  );
  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesType = typeFilter === "all" || project.type === typeFilter;
        const matchesTechnology =
          technologyFilter === "all" || project.technologies.includes(technologyFilter);
        const searchableText = projectSearchIndex.get(project.id) ?? "";
        const matchesQuery = queryTerms.every((term) => searchableText.includes(term));

        return matchesType && matchesTechnology && matchesQuery;
      }),
    [queryTerms, technologyFilter, typeFilter]
  );

  const { featured, others } = useMemo(
    () => ({
      featured: filteredProjects
        .filter((project) => project.featured)
        .sort(
          (a, b) =>
            (featuredProjectRank.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
            (featuredProjectRank.get(b.id) ?? Number.MAX_SAFE_INTEGER)
        ),
      others: filteredProjects.filter((project) => !project.featured),
    }),
    [filteredProjects]
  );
  const hasActiveFilters = Boolean(query.trim()) || typeFilter !== "all" || technologyFilter !== "all";

  const resetFilters = () => {
    setQuery("");
    setTypeFilter("all");
    setTechnologyFilter("all");
  };

  const shotsLabel = (count: number) =>
    t({
      es: `${count} ${count === 1 ? "imagen" : "imágenes"}`,
      en: `${count} ${count === 1 ? "image" : "images"}`,
    });

  const resultsLabel = hasActiveFilters
    ? t({
        es: `${filteredProjects.length} de ${projects.length} proyectos`,
        en: `${filteredProjects.length} of ${projects.length} projects`,
      })
    : t({ es: `${projects.length} proyectos`, en: `${projects.length} projects` });

  return (
    <section id="projects" className="section-container scroll-mt-20 py-16">
      <SectionHeading index="03" title={sectionTitles.projects} />

      <div className="reveal mb-12 rounded-lg border border-border bg-card/70 p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_15rem]">
          <label className="relative block">
            <span className="sr-only">
              {t({ es: "Buscar proyectos", en: "Search projects" })}
            </span>
            <Search
              aria-hidden
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t({
                es: "Buscar proyecto o tecnología…",
                en: "Search project or technology…",
              })}
              className="h-11 w-full appearance-none rounded-md border border-border bg-background pl-10 pr-10 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={t({ es: "Limpiar búsqueda", en: "Clear search" })}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X aria-hidden className="h-3.5 w-3.5" />
              </button>
            )}
          </label>

          <label>
            <span className="sr-only">
              {t({ es: "Filtrar por tecnología", en: "Filter by technology" })}
            </span>
            <select
              value={technologyFilter}
              onChange={(event) => setTechnologyFilter(event.target.value)}
              className="h-11 w-full rounded-md border border-border bg-background px-3 font-mono text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            >
              <option value="all">
                {t({ es: "Todas las tecnologías", en: "All technologies" })}
              </option>
              {technologyOptions.map((technology) => (
                <option key={technology} value={technology}>
                  {technology}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div
            role="group"
            aria-label={t({ es: "Filtrar por tipo de proyecto", en: "Filter by project type" })}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="mr-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {t({ es: "Tipo", en: "Type" })}
            </span>
            {projectTypeFilters.map((filter) => {
              const isActive = typeFilter === filter;
              const label =
                filter === "all"
                  ? t({ es: "Todos", en: "All" })
                  : t(projectTypeLabels[filter]);

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setTypeFilter(filter)}
                  className={`project-type-filter min-h-10 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-accent/60 hover:text-foreground"
                  }`}
                >
                  {label} <span className="opacity-65">({projectTypeCounts[filter]})</span>
                </button>
              );
            })}
          </div>

          <span className="ml-auto font-mono text-xs text-muted-foreground" aria-live="polite">
            {resultsLabel}
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-mono text-xs text-accent transition-opacity hover:opacity-70"
            >
              <X aria-hidden className="h-3.5 w-3.5" />
              {t({ es: "Limpiar filtros", en: "Clear filters" })}
            </button>
          )}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="reveal rounded-lg border border-dashed border-border px-6 py-12 text-center">
          <p className="font-serif text-2xl">
            {t({ es: "No encontré proyectos con esos filtros", en: "No projects match those filters" })}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t({
              es: "Prueba otra tecnología o limpia los filtros para ver el catálogo completo.",
              en: "Try another technology or clear the filters to see the full catalog.",
            })}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 font-mono text-sm text-accent transition-opacity hover:opacity-70"
          >
            {t({ es: "Ver todos los proyectos", en: "View all projects" })}
          </button>
        </div>
      ) : (
        <>
          {featured.length > 0 && (
            <div className="space-y-12">
              {featured.map((project) => (
                <article key={project.id} className="reveal group relative pl-5">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100"
                  />
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        className="text-left font-serif text-2xl tracking-tight transition-colors hover:text-accent md:text-3xl"
                      >
                        {project.title}
                      </button>
                    </h3>
                    <ProjectTypeBadge type={project.type} />
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {t(project.shortDescription)}
                  </p>

                  {project.highlights && (
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="font-mono text-xs text-muted-foreground">
                          <span className="text-accent">·</span> {t(highlight)}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="tag inline-flex items-center gap-1.5">
                        <TechIcon name={technology} />
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-6 font-mono text-sm">
                    <button
                      onClick={() => setSelected(project)}
                      className="group/btn inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-70"
                    >
                      {t({ es: "Ver detalle", en: "View details" })}
                      {project.images && (
                        <span className="inline-flex items-center gap-1 text-muted-foreground">
                          <ImageIcon className="h-3.5 w-3.5" />
                          {shotsLabel(project.images.length)}
                        </span>
                      )}
                    </button>

                    <Link
                      href={projectPath(project)}
                      className="group/link inline-flex items-center gap-1 transition-colors hover:text-accent"
                    >
                      {t({ es: "Caso completo", en: "Full case study" })}
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover/link:text-accent" />
                    </Link>

                    {(project.repositories ??
                      (project.repoUrl
                        ? [
                            {
                              label: { es: "Código", en: "Code" },
                              url: project.repoUrl,
                            },
                          ]
                        : [])
                    ).map((repository) => (
                      <a
                        key={repository.url}
                        href={repository.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 transition-colors hover:text-accent"
                      >
                        {t(repository.label)}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover/link:text-accent" />
                      </a>
                    ))}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 transition-colors hover:text-accent"
                      >
                        {t({ es: "Sitio", en: "Website" })}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover/link:text-accent" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {others.length > 0 && (
            <div className={featured.length > 0 ? "mt-16" : "mt-2"}>
              <h3 className="reveal mono-label mb-6">
                {featured.length > 0
                  ? t({ es: "Otros proyectos", en: "More projects" })
                  : t({ es: "Proyectos encontrados", en: "Matching projects" })}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {others.map((project) => {
                  const compactTechnologies =
                    technologyFilter === "all"
                      ? project.technologies.slice(0, 3)
                      : [
                          technologyFilter,
                          ...project.technologies.filter(
                            (technology) => technology !== technologyFilter
                          ),
                        ].slice(0, 3);

                  return (
                    <article
                      key={project.id}
                      className="reveal group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-5 text-left transition-colors hover:border-accent"
                    >
                      <button
                        type="button"
                        onClick={() => setSelected(project)}
                        aria-label={t({
                          es: `Abrir vista rápida de ${project.title}`,
                          en: `Open quick view for ${project.title}`,
                        })}
                        className="absolute inset-0 z-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                      />

                      <div className="pointer-events-none relative z-10 flex h-full flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <ProjectTypeBadge type={project.type} />
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                        </div>

                        <h3 className="mt-3 font-medium">
                          <Link
                            href={projectPath(project)}
                            className="pointer-events-auto transition-colors hover:text-accent"
                          >
                            {project.title}
                          </Link>
                        </h3>

                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {t(project.shortDescription)}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
                          <span>{compactTechnologies.join(" · ")}</span>
                          {project.images && (
                            <span className="inline-flex shrink-0 items-center gap-1 text-accent">
                              <ImageIcon className="h-3.5 w-3.5" />
                              {project.images.length}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
