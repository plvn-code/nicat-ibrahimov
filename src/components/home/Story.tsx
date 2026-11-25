"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface Chapter {
  label: string;
  title: string;
  lead: string;
  text: string;
  accent?: string;
  image: string;
}

/**
 * Scroll story: chapters scroll on the right, the photo on the left is sticky
 * and cross-fades to the chapter currently in the middle of the viewport.
 */
export function Story({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="story">
      <div className="story__media" aria-hidden="true">
        {chapters.map((c, i) => (
          <div key={c.image} className={`story__img ${i === active ? "story__img--on" : ""}`}>
            <Image src={c.image} alt="" fill sizes="(max-width: 960px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
        <span className="story__count">
          {String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
        </span>
        <div className="story__progress">
          {chapters.map((c, i) => (
            <i key={c.image} data-on={i <= active} />
          ))}
        </div>
      </div>
      <div className="story__list">
        {chapters.map((c, i) => (
          <article
            key={c.image}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className={`story__item ${i === active ? "story__item--on" : ""}`}
          >
            <div className="story__img-mobile">
              <Image src={c.image} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>
            <span className="eyebrow">
              {String(i + 1).padStart(2, "0")} — {c.label}
            </span>
            <h3 className="story__title">{c.title}</h3>
            <p className="story__lead">{c.lead}</p>
            <p className="story__text">{c.text}</p>
            {c.accent && <p className="story__accent">[ {c.accent} ]</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
