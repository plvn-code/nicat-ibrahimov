"use client";

import Link from "next/link";
import { Mark } from "@/components/Logo";
import { useLang } from "@/components/Lang";
import { href } from "@/lib/i18n";

export default function NotFound() {
  const { lang, t } = useLang();
  return (
    <section className="nf">
      <Mark className="nf__mark" />
      <span className="eyebrow">404</span>
      <h1 className="display">{lang === "az" ? "Səhifə tapılmadı" : "Страница не найдена"}</h1>
      <p className="lead">{lang === "az" ? "Ola bilsin, ünvan dəyişib. Ana səhifədən davam edin." : "Возможно, адрес изменился. Продолжите с главной страницы."}</p>
      <Link href={href(lang, "/")} className="btn btn--accent">
        {t.home}
      </Link>
    </section>
  );
}
