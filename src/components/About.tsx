"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, sectionTitles } from "@/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container scroll-mt-20 py-24">
      <SectionHeading index="01" title={sectionTitles.about} />

      <div className="grid gap-12 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-14">
        <div className="reveal relative w-fit self-start">
          <span
            aria-hidden
            className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-accent/40"
          />
          <Image
            src="/profile.jpeg"
            alt={personalInfo.name}
            width={240}
            height={240}
            sizes="(max-width: 768px) 60vw, 240px"
            className="relative h-56 w-56 rounded-lg border border-border object-cover md:h-60 md:w-60"
          />
        </div>

        <div>
          <p className="reveal max-w-2xl text-lg leading-relaxed">
            {t(personalInfo.about)}
          </p>

          <ul className="mt-10 space-y-0">
            {personalInfo.facts.map((fact, i) => (
              <li
                key={i}
                className="reveal flex items-baseline gap-4 border-b border-border py-3.5 last:border-0"
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{t(fact)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
