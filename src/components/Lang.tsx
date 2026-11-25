"use client";

import { createContext, useContext } from "react";
import { ui, type Lang } from "@/lib/i18n";

const LangCtx = createContext<Lang>("az");

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangCtx.Provider value={lang}>{children}</LangCtx.Provider>;
}

/** Current language + its UI dictionary (client components). */
export function useLang() {
  const lang = useContext(LangCtx);
  return { lang, t: ui[lang] };
}
