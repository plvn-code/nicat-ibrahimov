"use client";

import { useState } from "react";
import type { Case } from "@/lib/cases";
import { tr } from "@/lib/i18n";
import { BeforeAfter } from "./BeforeAfter";
import { useLang } from "./Lang";

/** Home page: one big before/after slider with tabs to switch the case. */
export function CasesShowcase({ items }: { items: Case[] }) {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  const c = items[i];
  return (
    <div className="showcase">
      <div className="showcase__main" data-reveal>
        <BeforeAfter key={c.id} before={c.before} after={c.after} ratio={c.ratio} alt={tr(c.title, lang)} />
        <p className="showcase__caption">
          <b>{tr(c.tag, lang)}</b> {tr(c.text, lang)}
        </p>
      </div>
      <div className="showcase__tabs" role="tablist" data-reveal style={{ "--d": ".15s" } as React.CSSProperties}>
        {items.map((it, k) => (
          <button key={it.id} role="tab" aria-selected={k === i} className="showcase__tab" onClick={() => setI(k)}>
            <small>{String(k + 1).padStart(2, "0")}</small>
            <b>{tr(it.title, lang)}</b>
            <span>{tr(it.tag, lang)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
