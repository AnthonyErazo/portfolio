"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { experiences, sectionTitles } from "@/data";
import { getLogoDimensions } from "@/lib/logo-dimensions";
import SectionHeading from "./SectionHeading";
import TechIcon from "./TechIcon";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-container scroll-mt-20 py-24">
      <SectionHeading index="02" title={sectionTitles.experience} />

      <div className="space-y-16">
        {experiences.map((exp) => (
          <article key={exp.id} className="group grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
            <div className="reveal self-start flex items-center gap-3 md:flex-col md:items-start md:gap-4">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  {...getLogoDimensions(exp.logo, { width: 56, height: 56 })}
                  sizes={exp.logoSize === "sm" ? "32px" : "96px"}
                  loading={exp.id === 1 ? "eager" : "lazy"}
                  style={{ width: "auto", height: "auto" }}
                  className={`brand-logo h-auto w-auto object-contain ${exp.logoSize === "sm" ? "max-h-8 max-w-16" : "max-h-11 max-w-24"}`}
                />
              ) : (
                <span className="company-mark">{exp.mark}</span>
              )}
              <p className="font-mono text-xs text-muted-foreground">{t(exp.period)}</p>
            </div>

            <div className="min-w-0">
              <div className="reveal">
                <h3 className="text-lg font-medium">
                  {t(exp.title)} <span className="text-muted-foreground">·</span>{" "}
                  <span className="text-accent">{exp.company}</span>
                </h3>
                <h4 className="mono-label mt-4">
                  {t({ es: "Contexto y responsabilidad", en: "Context and responsibility" })}
                </h4>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {t(exp.description)}
                </p>
              </div>

              <h4 className="reveal mono-label mt-5">
                {t({ es: "Decisiones y resultados", en: "Decisions and outcomes" })}
              </h4>
              <ul className="mt-3 space-y-1.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="reveal flex max-w-2xl gap-3 text-sm leading-relaxed">
                    <span className="text-accent">—</span>
                    <span>{t(achievement)}</span>
                  </li>
                ))}
              </ul>

              {exp.products && (
                <div className="reveal mt-6">
                  <h4 className="mono-label">
                    {t({ es: "Productos en los que trabajé", en: "Products I worked on" })}
                  </h4>
                  <div className="-mx-1 mt-4 flex items-start gap-x-5 overflow-x-auto px-1 pb-1 sm:gap-x-6">
                    {exp.products.map((product) => (
                      <div key={product.name} className="flex w-16 shrink-0 flex-col items-center gap-2 sm:w-20">
                        {product.logo ? (
                          <Image
                            src={product.logo}
                            alt={product.name}
                            {...getLogoDimensions(product.logo, { width: 80, height: 32 })}
                            sizes="80px"
                            style={{ width: "auto", height: "auto" }}
                            className="brand-logo h-auto max-h-8 w-auto max-w-16 object-contain sm:max-h-9 sm:max-w-20"
                          />
                        ) : (
                          <span className="company-mark h-8 w-8 text-[0.6rem]">
                            {product.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                        <span className="text-center font-mono text-[0.65rem] leading-tight text-muted-foreground">
                          {product.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {exp.collaborations && (
                <div className="reveal mt-6">
                  <h4 className="mono-label">
                    {t({ es: "Colaboraciones", en: "Collaborations" })}
                  </h4>
                  <div className="-mx-1 mt-4 flex items-start gap-x-5 overflow-x-auto px-1 pb-1 sm:gap-x-6">
                    {exp.collaborations.map((collab) => (
                      <div key={collab.name} className="flex w-16 shrink-0 flex-col items-center gap-2 sm:w-20">
                        {collab.logo && (
                          <Image
                            src={collab.logo}
                            alt={collab.name}
                            {...getLogoDimensions(collab.logo, { width: 80, height: 28 })}
                            sizes="80px"
                            style={{ width: "auto", height: "auto" }}
                            className="brand-logo h-auto max-h-8 w-auto max-w-16 object-contain sm:max-h-9 sm:max-w-20"
                          />
                        )}
                        <span className="text-center font-mono text-[0.65rem] leading-tight text-muted-foreground">
                          {collab.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="reveal mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag inline-flex items-center gap-1.5">
                    <TechIcon name={tech} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
