"use client";

import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, socialLinks } from "@/data";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="footer-grid absolute inset-0" />
        <div className="footer-fade absolute inset-0" />
      </div>

      <div className="section-container relative py-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p>
            {t({ es: "Desarrollado con", en: "Built with" })} Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
