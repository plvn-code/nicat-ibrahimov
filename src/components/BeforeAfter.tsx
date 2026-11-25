"use client";

import { useState } from "react";
import { Drag } from "./Icons";
import { useLang } from "./Lang";

/** Drag (or arrow-key) comparison of two equally framed photos. */
export function BeforeAfter({ before, after, ratio, alt }: { before: string; after: string; ratio: string; alt: string }) {
  const { t } = useLang();
  const [pos, setPos] = useState(50);
  return (
    <div className="ba" style={{ aspectRatio: ratio, "--pos": `${pos}%` } as React.CSSProperties}>
      <img src={before} alt={`${alt} — ${t.before}`} loading="lazy" decoding="async" />
      <img className="ba__after" src={after} alt={`${alt} — ${t.after}`} loading="lazy" decoding="async" />
      <span className="ba__label ba__label--b">{t.before}</span>
      <span className="ba__label ba__label--a">{t.after}</span>
      <span className="ba__line">
        <span className="ba__knob">
          <Drag />
        </span>
      </span>
      <input type="range" min={0} max={100} step={0.5} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label={`${alt}: ${t.compare}`} />
    </div>
  );
}
