"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (text: { es: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = useCallback(
    (text: { es: string; en: string }) => text[language],
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
