import type { Metadata } from "next";
import Link from "next/link";
import { projectTypeLabels } from "@/data";
import {
  portfolioProjects,
  projectPath,
  type PortfolioProject,
} from "@/lib/projects";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

const title = `Proyectos de software | ${SITE_NAME}`;
const description =
  "Casos de desarrollo backend, web, móvil, cloud y datos realizados por Anthony Erazo en contextos profesionales, universitarios y personales.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: absoluteUrl("/proyectos"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/proyectos"),
    siteName: SITE_NAME,
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Proyectos de software de Anthony Erazo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteUrl("/opengraph-image")],
  },
};

const groups: Array<{
  type: PortfolioProject["type"];
  description: string;
}> = [
  {
    type: "professional",
    description:
      "Productos y soluciones desarrollados dentro de una experiencia laboral real.",
  },
  {
    type: "university",
    description:
      "Proyectos académicos con problemas, decisiones técnicas y resultados documentados.",
  },
  {
    type: "personal",
    description:
      "Implementaciones propias orientadas a practicar arquitecturas, herramientas y producto.",
  },
];

const categoryLabels: Record<PortfolioProject["category"], string> = {
  web: "Web",
  mobile: "Móvil",
  desktop: "Escritorio",
  other: "Otro",
};

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="group flex h-full flex-col border-t border-border py-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-2xl tracking-tight transition-colors group-hover:text-accent">
          <Link href={projectPath(project)}>{project.title}</Link>
        </h3>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {categoryLabels[project.category]}
        </span>
      </div>

      <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription.es}
      </p>

      <ul
        className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] text-muted-foreground"
        aria-label={`Tecnologías de ${project.title}`}
      >
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <Link
        href={projectPath(project)}
        className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:text-accent"
        aria-label={`Ver caso de ${project.title}`}
      >
        Ver caso <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight transition-colors hover:text-accent"
          >
            Anthony Erazo
          </Link>
          <nav aria-label="Navegación principal">
            <Link
              href="/#contact"
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-10">
        <nav
          aria-label="Migas de pan"
          className="font-mono text-xs text-muted-foreground"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              Proyectos
            </li>
          </ol>
        </nav>

        <div className="mt-12 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Casos de trabajo
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-7xl">
            Proyectos de software
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {SITE_DESCRIPTION} Este catálogo reúne el contexto, las decisiones,
            la ejecución técnica y los resultados disponibles de cada proyecto.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {groups.map((group) => {
            const groupProjects = portfolioProjects.filter(
              (project) => project.type === group.type,
            );

            return (
              <section key={group.type} aria-labelledby={`${group.type}-title`}>
                <div className="grid gap-4 border-b border-border pb-6 md:grid-cols-[1fr_2fr]">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                      {String(groupProjects.length).padStart(2, "0")} proyectos
                    </p>
                    <h2
                      id={`${group.type}-title`}
                      className="mt-2 font-serif text-4xl tracking-tight"
                    >
                      {projectTypeLabels[group.type].es}
                    </h2>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:pt-6">
                    {group.description}
                  </p>
                </div>

                <div className="grid gap-x-10 md:grid-cols-2">
                  {groupProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
