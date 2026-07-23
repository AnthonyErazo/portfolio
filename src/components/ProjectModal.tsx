"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { type Project } from "@/data";
import { getProjectImageSizes } from "@/lib/projectImageSizes";
import ProjectTypeBadge from "./ProjectTypeBadge";
import TechIcon from "./TechIcon";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  const { t } = useLanguage();
  if (!project) return null;

  const isLearningProject = project.type === "personal";

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="max-h-full w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-card shadow-2xl outline-none"
      >
        <div
          className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-xl border-b border-border bg-card/95 px-6 py-5 backdrop-blur-sm sm:px-8"
        >
          <div>
            <ProjectTypeBadge type={project.type} />
            <h3 className="mt-2 font-serif text-2xl tracking-tight sm:text-3xl">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label={t({ es: "Cerrar", en: "Close" })}
            className="-mr-2 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8">
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="mono-label">
                {t(
                  isLearningProject
                    ? { es: "Aprendizajes destacados", en: "Key learnings" }
                    : { es: "En una mirada", en: "At a glance" }
                )}
              </h4>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-accent">—</span>
                    <span>{t(highlight)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={project.highlights?.length ? "mt-8" : undefined}>
            <h4 className="mono-label">
              {t(
                isLearningProject
                  ? { es: "Objetivo y alcance", en: "Goal and scope" }
                  : { es: "Problema y contexto", en: "Problem and context" }
              )}
            </h4>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t(project.fullDescription)}
            </p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="mt-8">
              <h4 className="mono-label">
                {t(
                  isLearningProject
                    ? { es: "Práctica técnica", en: "Technical practice" }
                    : { es: "Decisiones y ejecución", en: "Decisions and execution" }
                )}
              </h4>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-accent">—</span>
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h4 className="mono-label">
              {t(
                isLearningProject
                  ? { es: "Tecnologías practicadas", en: "Technologies practiced" }
                  : { es: "Stack técnico", en: "Technical stack" }
              )}
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag inline-flex items-center gap-1.5">
                  <TechIcon name={tech} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mt-10">
              <h4 className="mono-label">
                {t({ es: "Galería del proyecto", en: "Project gallery" })}
              </h4>
              <div className="mt-4 space-y-6">
                {project.images.map((image) => (
                  <figure key={image.src}>
                    <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-border bg-muted">
                      <Image
                        src={image.src}
                        alt={t(image.caption)}
                        fill
                        sizes={getProjectImageSizes(image.src, 700)}
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="mt-2 font-mono text-xs text-muted-foreground">
                      {t(image.caption)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {(project.repoUrl || project.repositories?.length || project.liveUrl) && (
            <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-6 font-mono text-sm">
              {(project.repositories ?? (project.repoUrl
                ? [{ label: { es: "Ver código", en: "View code" }, url: project.repoUrl }]
                : [])).map((repository) => (
                  <a
                    key={repository.url}
                    href={repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 transition-colors hover:text-accent"
                  >
                    {t(repository.label)}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
                  </a>
                ))}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 transition-colors hover:text-accent"
                >
                  {t({ es: "Visitar sitio", en: "Visit website" })}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
