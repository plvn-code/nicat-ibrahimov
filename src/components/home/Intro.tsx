"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/Logo";
import { useLang } from "@/components/Lang";

const WORD = "NICAT IBRAHIMOV";
const SEEN_KEY = "nicat.intro.seen";

/** Splash shown once per browser session on the home page: the monogram draws itself, the name rises, the curtain lifts. */
export function Intro() {
  const { lang } = useLang();
  const [state, setState] = useState<"hidden" | "on" | "leaving">("hidden");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode */
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setState("on");
    const t1 = setTimeout(() => setState("leaving"), 2900);
    const t2 = setTimeout(() => setState("hidden"), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div className={`intro ${state === "leaving" ? "intro--leave" : ""}`} onClick={() => setState("hidden")} aria-hidden="true">
      <div className="intro__inner">
        <Mark className="intro__mark" />
        <div className="intro__word">
          {WORD.split("").map((ch, i) => (
            <span key={i} style={{ animationDelay: `${1.25 + i * 0.045}s` }}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </div>
        <p className="intro__sub">{lang === "az" ? "[ STOMATOLOQ · BAKI ]" : "[ СТОМАТОЛОГ · БАКУ ]"}</p>
      </div>
    </div>
  );
}
