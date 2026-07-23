"use client";

import { useRef } from "react";
import { ArrowUpRight, FileDown, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, socialLinks } from "@/data";
import RouteSchematic from "./RouteSchematic";
import TypedText from "./TypedText";

export default function Hero() {
  const { t } = useLanguage();
  const stageRef = useRef<HTMLElement>(null);
  const frame = useRef(0);
  const github = socialLinks.find((s) => s.name === "GitHub");
  const linkedin = socialLinks.find((s) => s.name === "LinkedIn");

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    const stage = stageRef.current;
    if (!stage) return;

    cancelAnimationFrame(frame.current);
    const { clientX, clientY } = event;
    frame.current = requestAnimationFrame(() => {
      const rect = stage.getBoundingClientRect();
      stage.style.setProperty("--mx", `${clientX - rect.left}px`);
      stage.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  }

  return (
    <section
      ref={stageRef}
      onPointerMove={handlePointerMove}
      className="hero-stage relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <div aria-hidden className="engineering-grid absolute inset-0" />
      <div aria-hidden className="grid-spotlight absolute inset-0" />
      <RouteSchematic className="route-mask pointer-events-none absolute left-[calc(50%+11rem)] top-[33%] hidden w-[clamp(26rem,40vw,44rem)] -translate-y-1/2 lg:block" />

      <div className="section-container relative py-28 sm:py-32">
        <p className="font-mono text-xs text-accent sm:text-sm">
          {t(personalInfo.title)}
        </p>

        <h1 className="name-sweep mt-6 font-serif text-[clamp(3.25rem,12vw,8rem)] leading-[0.92] tracking-tight">
          Anthony
          <br />
          Erazo<span className="text-accent">.</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t(personalInfo.subtitle)}
        </p>

        <p className="mt-6 min-h-6 font-mono text-xs text-foreground sm:text-sm">
          <TypedText items={personalInfo.ticker} />
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-sm">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta cta-primary"
          >
            <FileDown className="h-4 w-4" />
            {t({ es: "Descargar CV", en: "Download CV" })}
          </a>
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          )}
        </div>

        <p className="mt-6 inline-flex items-center gap-2.5 font-mono text-sm text-muted-foreground">
          <span aria-hidden className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-soft-pulse rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t(personalInfo.availability)}
        </p>
      </div>

      <a
        href="#about"
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">
          {t({ es: "Desliza", en: "Scroll" })}
        </span>
        <span aria-hidden className="h-10 w-px bg-border">
          <span className="scroll-cue-line block h-full w-px bg-accent" />
        </span>
      </a>
    </section>
  );
}
