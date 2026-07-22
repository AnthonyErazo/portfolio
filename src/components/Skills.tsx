"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillGroups, sectionTitles } from "@/data";
import SectionHeading from "./SectionHeading";
import TechIcon from "./TechIcon";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-container scroll-mt-20 py-24">
      <SectionHeading index="04" title={sectionTitles.skills} />

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label.en} className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
            <span className="reveal pt-1.5 font-mono text-xs text-muted-foreground">
              {t(group.label)}
            </span>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const label = typeof item === "string" ? item : t(item);
                const iconName = typeof item === "string" ? item : item.en;

                return (
                  <span
                    key={iconName}
                    className="stack-item reveal inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm"
                  >
                    <TechIcon name={iconName} />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
