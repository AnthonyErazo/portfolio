"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { certificationGroups, education, sectionTitles } from "@/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { t } = useLanguage();
  const totalCertifications = certificationGroups.reduce(
    (sum, group) => sum + group.items.length,
    0
  );

  return (
    <section id="education" className="section-container scroll-mt-20 py-16">
      <SectionHeading index="05" title={sectionTitles.education} />

      <div className="space-y-12">
        {education.map((item) => (
          <article key={item.id} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
            <div className="reveal flex items-center gap-3 md:flex-col md:items-start md:gap-4">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.institution}
                  width={56}
                  height={56}
                  data-tone={item.logoTone}
                  className="brand-logo h-auto max-h-12 w-auto max-w-24 object-contain"
                />
              ) : (
                <span className="company-mark">
                  {item.institution
                    .split(" ")
                    .filter((w) => w.length > 3)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
              )}
              <p className="font-mono text-xs text-muted-foreground">{t(item.period)}</p>
            </div>
            <div className="reveal">
              <h3 className="text-lg font-medium">
                {t(item.title)}
                {item.grade && (
                  <span className="ml-3 font-mono text-xs text-accent">{item.grade}</span>
                )}
              </h3>
              <p className="mt-1 text-sm text-accent">{item.institution}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {t(item.description)}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="reveal mono-label">
          {t({ es: "Certificaciones y cursos", en: "Certifications & courses" })}
          <span className="ml-2 text-accent">{totalCertifications}</span>
        </h3>

        <div className="mt-8 space-y-10">
          {certificationGroups.map((group) => (
            <div key={group.label.en} className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
              <p className="reveal pt-1 font-mono text-xs text-muted-foreground">
                {t(group.label)}
              </p>

              <ul className="space-y-2.5">
                {group.items.map((cert) => (
                  <li
                    key={`${cert.name}-${cert.institution}`}
                    className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5"
                  >
                    <span className="text-sm">
                      {cert.name}{" "}
                      <span className="text-muted-foreground">— {cert.institution}</span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{t(cert.date)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
