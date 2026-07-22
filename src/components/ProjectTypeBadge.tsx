"use client";

import {
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import { projectTypeLabels, type Project } from "@/data";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const icons: Record<Project["type"], LucideIcon> = {
  professional: BriefcaseBusiness,
  university: GraduationCap,
  personal: Lightbulb,
};

const styles: Record<Project["type"], string> = {
  professional: "border-accent/40 bg-accent/10 text-accent",
  university: "border-foreground/20 bg-foreground/5 text-foreground",
  personal: "border-border bg-muted text-muted-foreground",
};

interface ProjectTypeBadgeProps {
  type: Project["type"];
  className?: string;
}

export default function ProjectTypeBadge({ type, className }: ProjectTypeBadgeProps) {
  const { t } = useLanguage();
  const Icon = icons[type];

  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-wider",
        styles[type],
        className
      )}
    >
      <Icon aria-hidden className="h-3.5 w-3.5" />
      {t(projectTypeLabels[type])}
    </span>
  );
}
