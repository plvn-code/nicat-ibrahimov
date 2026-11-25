"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { href, tr } from "@/lib/i18n";
import type { Service } from "@/lib/services";
import { useBooking } from "@/components/booking/Booking";
import { useLang } from "@/components/Lang";
import { ArrowRight, ChevronLeft, ChevronRight } from "@/components/Icons";

/** Service card in the calmrage product-card style: photo + hover photo, badges, index, quick action. */
export function ServiceCard({ s, index }: { s: Service; index?: number }) {
  const { open } = useBooking();
  const { lang, t } = useLang();
  const url = href(lang, `/xidmetler/${s.slug}`);
  const title = tr(s.title, lang);
  const sizes = "(max-width: 760px) 72vw, 27vw";
  return (
    <article className="card">
      <div className="card__media">
        <Link href={url} aria-label={title}>
          <Image className="card__img" src={s.photo} alt={title} fill sizes={sizes} style={{ objectFit: "cover" }} />
          <Image className="card__img card__img--alt" src={s.photo2} alt="" fill sizes={sizes} style={{ objectFit: "cover" }} />
        </Link>
        <div className="card__badges">
          <span className="badge">{tr(s.badge, lang)}</span>
        </div>
        {index !== undefined && <span className="card__index">{String(index + 1).padStart(2, "0")}</span>}
        <div className="card__quick">
          <span>{t.quick}</span>
          <button onClick={() => open(s.slug)}>{t.book}</button>
        </div>
      </div>
      <Link href={url} className="card__info">
        <div className="card__row">
          <h3 className="card__name">{tr(s.short, lang)}</h3>
          <ArrowRight className="card__arrow" />
        </div>
        <p className="card__sub">{tr(s.tagline, lang)}</p>
      </Link>
    </article>
  );
}

/** Horizontal, snap-scrolling rail with arrow controls. */
export function ServiceRail({ items }: { items: Service[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  function scroll(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".rail__item");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 16), behavior: "smooth" });
  }

  return (
    <div className="rail">
      <div className="rail__controls">
        <button className="round-btn" onClick={() => scroll(-1)} aria-label={t.prev}>
          <ChevronLeft />
        </button>
        <button className="round-btn" onClick={() => scroll(1)} aria-label={t.next}>
          <ChevronRight />
        </button>
      </div>
      <div className="rail__track" ref={ref}>
        {items.map((s, i) => (
          <div key={s.slug} className="rail__item">
            <ServiceCard s={s} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
