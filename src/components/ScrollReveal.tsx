"use client";

import { useEffect } from "react";

const FADE_RATIO = 0.3;
const SHIFT = 44;

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const rules = Array.from(document.querySelectorAll<HTMLElement>(".heading-rule"));

    rules.forEach((rule) => {
      rule.style.transform = "scaleX(0)";
      rule.style.transition = "transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)";
    });

    const ruleObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).style.transform = "scaleX(1)";
          ruleObserver.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    rules.forEach((rule) => ruleObserver.observe(rule));

    const active = new Set<HTMLElement>();
    let frame = 0;

    const paint = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const band = viewport * FADE_RATIO;
      const measurements: Array<{
        el: HTMLElement;
        visibility: number;
        direction: number;
      }> = [];

      for (const el of active) {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;

        let visibility = 1;
        if (center < band) visibility = center / band;
        else if (center > viewport - band) visibility = (viewport - center) / band;
        visibility = Math.min(1, Math.max(0, visibility));

        const direction = center < viewport / 2 ? -1 : 1;
        measurements.push({ el, visibility, direction });
      }

      for (const { el, visibility, direction } of measurements) {
        const hidden = 1 - visibility;
        el.style.opacity = String(visibility);
        el.style.transform =
          visibility >= 1
            ? "none"
            : `translateY(${(hidden * SHIFT * direction).toFixed(1)}px) scale(${(1 - hidden * 0.04).toFixed(3)})`;
        el.style.filter = visibility >= 1 ? "none" : `blur(${(hidden * 0.9).toFixed(1)}px)`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const nearObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            active.add(el);
            el.style.willChange = "opacity, transform, filter";
          } else {
            active.delete(el);
            el.style.opacity = "0";
            el.style.transform = "none";
            el.style.filter = "none";
            el.style.willChange = "";
          }
        }
        schedule();
      },
      { rootMargin: "320px 0px 320px 0px" }
    );

    items.forEach((el) => {
      nearObserver.observe(el);
    });

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      nearObserver.disconnect();
      ruleObserver.disconnect();
      items.forEach((el) => {
        el.style.opacity = "";
        el.style.transform = "";
        el.style.filter = "";
        el.style.willChange = "";
      });
    };
  }, []);

  return null;
}
