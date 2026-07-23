import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectTypeLabels } from "@/data";
import {
  getProjectBySlug,
  portfolioProjects,
  projectPath,
  type PortfolioProject,
} from "@/lib/projects";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

const categoryLabels: Record<PortfolioProject["category"], string> = {
  web: "Web",
  mobile: "Móvil",
  desktop: "Escritorio",
  other: "Otro",
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const canonical = absoluteUrl(projectPath(project));
  const title = `${project.title} | Proyecto de ${SITE_NAME}`;
  const description = project.shortDescription.es;
  const image = project.images?.[0];
  const images = image
    ? [
        {
          url: absoluteUrl(image.src),
          alt: image.caption.es,
        },
      ]
    : [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: "Portafolio de Anthony Erazo",
        },
      ];

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: project.indexable,
      follow: true,
      googleBot: {
        index: project.indexable,
        follow: true,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "es_PE",
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image ? absoluteUrl(image.src) : absoluteUrl("/opengraph-image")],
    },
  };
}

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const canonical = absoluteUrl(projectPath(project));
  const externalLinks = [
    project.liveUrl,
    project.repoUrl,
    ...(project.repositories?.map((repository) => repository.url) ?? []),
  ].filter((url): url is string => Boolean(url));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${canonical}#project`,
        name: project.title,
        headline: project.title,
        description: project.shortDescription.es,
        url: canonical,
        inLanguage: "es-PE",
        creator: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: SITE_NAME,
          url: SITE_URL,
        },
        keywords: project.technologies.join(", "),
        ...(project.images?.length
          ? { image: project.images.map((image) => absoluteUrl(image.src)) }
          : {}),
        ...(externalLinks.length ? { sameAs: externalLinks } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Proyectos",
            item: absoluteUrl("/proyectos"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  const repositories = project.repositories ??
    (project.repoUrl
      ? [
          {
            label: { es: "Ver código", en: "View code" },
            url: project.repoUrl,
          },
        ]
      : []);
  const isLearningProject = project.type === "personal";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight transition-colors hover:text-accent"
          >
            Anthony Erazo
          </Link>
          <Link
            href="/proyectos"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent"
          >
            Proyectos
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-14 sm:py-20 lg:px-10">
        <nav
          aria-label="Migas de pan"
          className="font-mono text-xs text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/proyectos"
                className="transition-colors hover:text-accent"
              >
                Proyectos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground">
              {project.title}
            </li>
          </ol>
        </nav>

        <header className="mt-12 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {projectTypeLabels[project.type].es} · {categoryLabels[project.category]}
          </p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {project.shortDescription.es}
          </p>
          <ul
            className="mt-8 flex flex-wrap gap-2"
            aria-label="Tecnologías utilizadas"
          >
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        </header>

        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-20 border-t border-border pt-10" aria-labelledby="highlights-title">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <h2
                id="highlights-title"
                className="font-serif text-3xl tracking-tight"
              >
                {isLearningProject ? "Aprendizajes destacados" : "En una mirada"}
              </h2>
              <ul className="space-y-5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight.es}
                    className="flex gap-4 text-sm leading-relaxed sm:text-base"
                  >
                    <span className="text-accent" aria-hidden="true">
                      —
                    </span>
                    <span>{highlight.es}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="mt-20 border-t border-border pt-10" aria-labelledby="context-title">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <h2 id="context-title" className="font-serif text-3xl tracking-tight">
              {isLearningProject ? "Objetivo y alcance" : "Problema y contexto"}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.fullDescription.es}
            </p>
          </div>
        </section>

        {project.features && project.features.length > 0 && (
          <section className="mt-20 border-t border-border pt-10" aria-labelledby="execution-title">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <h2
                id="execution-title"
                className="font-serif text-3xl tracking-tight"
              >
                {isLearningProject ? "Práctica técnica" : "Decisiones y ejecución"}
              </h2>
              <ul className="space-y-5">
                {project.features.map((feature) => (
                  <li
                    key={feature.es}
                    className="flex gap-4 text-sm leading-relaxed sm:text-base"
                  >
                    <span className="text-accent" aria-hidden="true">
                      —
                    </span>
                    <span>{feature.es}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {project.images && project.images.length > 0 && (
          <section className="mt-20 border-t border-border pt-10" aria-labelledby="gallery-title">
            <h2 id="gallery-title" className="font-serif text-3xl tracking-tight">
              Galería del proyecto
            </h2>
            <div className="mt-8 grid gap-8">
              {project.images.map((image) => (
                <figure key={image.src}>
                  <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-border bg-muted">
                    <Image
                      src={image.src}
                      alt={image.caption.es}
                      fill
                      sizes="(max-width: 1024px) 100vw, 960px"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
                    {image.caption.es}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {(repositories.length > 0 || project.liveUrl) && (
          <section className="mt-20 border-t border-border pt-10" aria-labelledby="links-title">
            <h2 id="links-title" className="font-serif text-3xl tracking-tight">
              Enlaces del proyecto
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm">
              {repositories.map((repository) => (
                <a
                  key={repository.url}
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {repository.label.es} <span aria-hidden="true">↗</span>
                </a>
              ))}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Visitar sitio <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </section>
        )}

        <footer className="mt-20 border-t border-border pt-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent"
          >
            <span aria-hidden="true">←</span> Todos los proyectos
          </Link>
        </footer>
      </article>
    </main>
  );
}
