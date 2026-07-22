"use client";

import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { navItems } from "@/data";

const emptySubscribe = () => () => {};

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="section-container flex h-14 items-center justify-between">
        <a href="#top" className="font-serif text-xl italic tracking-tight">
          Anthony E<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              {t(item.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleLanguage}
            className="rounded-md px-2 py-1.5 font-mono text-xs transition-colors hover:bg-muted"
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            <span className={language === "es" ? "text-accent" : "text-muted-foreground"}>ES</span>
            <span className="text-muted-foreground"> / </span>
            <span className={language === "en" ? "text-accent" : "text-muted-foreground"}>EN</span>
          </button>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={t({ es: "Cambiar tema", en: "Toggle theme" })}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            aria-label={t({ es: "Abrir menú", en: "Open menu" })}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/70 md:hidden">
          <div className="section-container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
              >
                {t(item.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
