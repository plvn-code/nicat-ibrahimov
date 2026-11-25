"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { basePath, href, nav, tr, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { useLang } from "./Lang";
import { useBooking } from "./booking/Booking";
import { Close, Instagram, Menu, Phone, WhatsApp } from "./Icons";

const isActive = (path: string, item: string) => path === item || path.startsWith(item + "/");

export function Header() {
  const { lang, t } = useLang();
  const path = basePath(usePathname());
  const other: Lang = lang === "az" ? "ru" : "az";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [path, lang]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Every page opens with a full-bleed photo hero → transparent header with light text until scrolled.
  const cls = ["header", scrolled ? "header--solid" : "header--clear"].join(" ");

  const langSwitch = (
    <span className="lang" role="group" aria-label="Language">
      <span className="lang__on" aria-current="true">
        {t.langName}
      </span>
      <Link href={href(other, path)} hrefLang={other} lang={other} className="lang__off" aria-label={t.otherLangLabel} prefetch={false}>
        {t.otherLang}
      </Link>
    </span>
  );

  return (
    <>
      <header className={cls}>
        <div className="container header__inner">
          <Link href={href(lang, "/")} className="header__logo" aria-label={`${site.name} — ${t.home}`}>
            <Logo />
          </Link>

          <nav className="header__nav" aria-label="Menu">
            {nav.map((item) => (
              <Link key={item.path} href={href(lang, item.path)} className="header__link" aria-current={isActive(path, item.path) ? "page" : undefined}>
                {tr(item.label, lang)}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            {langSwitch}
            <a href={site.phoneHref} className="icon-btn header__phone" aria-label={`${t.call}: ${site.phone}`}>
              <Phone />
            </a>
            <button className="btn btn--sm header__book" onClick={() => open()}>
              {t.book}
            </button>
            <button className="icon-btn header__burger" onClick={() => setMenuOpen(true)} aria-label={t.menuOpen} aria-expanded={menuOpen}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} inert={!menuOpen}>
        <div className="mobile-menu__top">
          <Logo />
          <button className="icon-btn" onClick={() => setMenuOpen(false)} aria-label={t.menuClose}>
            <Close />
          </button>
        </div>
        <nav className="mobile-menu__nav" aria-label="Menu">
          {[{ path: "/", label: { az: "Ana səhifə", ru: "Главная" } }, ...nav].map((item, i) => (
            <Link key={item.path} href={href(lang, item.path)} style={{ transitionDelay: menuOpen ? `${120 + i * 50}ms` : "0ms" }}>
              <span className="mobile-menu__num">{String(i + 1).padStart(2, "0")}</span>
              {tr(item.label, lang)}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__cta">
          <button
            className="btn btn--accent"
            onClick={() => {
              setMenuOpen(false);
              open();
            }}
          >
            {t.bookLong}
          </button>
          {langSwitch}
        </div>
        <div className="mobile-menu__foot">
          <a href={site.phoneHref}>
            <Phone /> {site.phone}
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsApp /> WhatsApp
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer">
            <Instagram /> Instagram
          </a>
        </div>
      </div>
    </>
  );
}
