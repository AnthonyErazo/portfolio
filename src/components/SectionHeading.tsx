"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { BiText } from "@/data";

interface SectionHeadingProps {
  index: string;
  title: BiText;
}

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4">
        <span className="section-number font-mono text-xs text-accent">{index}</span>
        <span aria-hidden className="heading-rule h-px flex-1 bg-border" />
      </div>
      <h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">
        {t(title)}
      </h2>
    </div>
  );
}
