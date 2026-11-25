import Image from "next/image";
import Link from "next/link";
import { BookButton } from "./booking/Booking";
import { ArrowUpRight, Instagram, Phone, Pin, Plus, WhatsApp } from "./Icons";
import { Mark } from "./Logo";
import { MadeBy } from "./MadeBy";
import { href, nav, tr, ui, type Lang } from "@/lib/i18n";
import { faq as faqItems, tickerWords } from "@/lib/content";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Inner-page hero: full-bleed photo with a deep-teal shade, title rising line by line. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  pos = "50% 40%",
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string[];
  lead?: string;
  image: string;
  pos?: string;
  crumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="phero">
      <div className="phero__media">
        <Image src={image} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: pos }} />
      </div>
      <div className="phero__shade" />
      <div className="container phero__content">
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumbs">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <span className="phero__eyebrow">{eyebrow}</span>
        <h1 className="phero__title">
          {title.map((l, i) => (
            <span key={i} className="hero__line">
              <span style={{ animationDelay: `${0.15 + i * 0.12}s` }}>{l}</span>
            </span>
          ))}
        </h1>
        {lead && <p className="phero__lead">{lead}</p>}
        {children && <div className="phero__cta">{children}</div>}
      </div>
    </section>
  );
}

export function SecHead({ eyebrow, title, id, link }: { eyebrow: string; title: React.ReactNode; id?: string; link?: { href: string; label: string; external?: boolean } }) {
  return (
    <div className="section-head" data-reveal>
      <div className="section-head__text">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="title" id={id}>
          {title}
        </h2>
      </div>
      {link &&
        (link.external ? (
          <a href={link.href} target="_blank" rel="noreferrer" className="link-underline">
            {link.label}
          </a>
        ) : (
          <Link href={link.href} className="link-underline">
            {link.label}
          </Link>
        ))}
    </div>
  );
}

/** Outlined marquee of services with the monogram between words. */
export function Ticker({ lang }: { lang: Lang }) {
  const words = tickerWords.map((w) => tr(w, lang));
  const row = [...words, ...words];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {[0, 1].map((k) => (
          <div key={k} className="ticker__group">
            {row.map((w, i) => (
              <span key={i}>
                {w}
                <Mark className="ticker__mark" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Faq({ lang, items = faqItems }: { lang: Lang; items?: typeof faqItems }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={i} className="faq__item" data-reveal style={d(i * 60)}>
          <summary>
            <span className="faq__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="faq__q">{tr(f.q, lang)}</span>
            <Plus className="faq__icon" />
          </summary>
          <p>{tr(f.a, lang)}</p>
        </details>
      ))}
    </div>
  );
}

const ctaCopy = {
  az: { eyebrow: "[ İlk addım — konsultasiya ]", title: ["Gülüşünüzü", "bizimlə dəyişin."], lead: "Yazın və ya zəng edin — müayinə, plan və bütün suallarınıza cavab bir görüşdə." },
  ru: { eyebrow: "[ Первый шаг — консультация ]", title: ["Измените", "улыбку с нами."], lead: "Напишите или позвоните — осмотр, план и ответы на все вопросы за одну встречу." },
};

export function CtaBand({ lang }: { lang: Lang }) {
  const c = ctaCopy[lang];
  const t = ui[lang];
  return (
    <section className="cta">
      <Mark className="cta__bg" />
      <div className="container cta__inner" data-reveal>
        <Mark className="cta__mark" />
        <span className="eyebrow eyebrow--light">{c.eyebrow}</span>
        <h2 className="display">
          {c.title[0]}
          <br />
          {c.title[1]}
        </h2>
        <p className="lead">{c.lead}</p>
        <div className="cta__buttons">
          <BookButton className="btn btn--light" />
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn--ghost">
            <WhatsApp /> {t.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

const contactCopy = {
  az: { eyebrow: "[ Əlaqə ]", title: "Qəbula yazılın", phone: "Telefon", wa: "WhatsApp", ig: "Instagram", where: "Ünvan" },
  ru: { eyebrow: "[ Контакты ]", title: "Запишитесь на приём", phone: "Телефон", wa: "WhatsApp", ig: "Instagram", where: "Адрес" },
};

export function ContactCards({ lang }: { lang: Lang }) {
  const c = contactCopy[lang];
  const cards = [
    { icon: <Phone />, label: c.phone, value: site.phone, href: site.phoneHref },
    { icon: <WhatsApp />, label: c.wa, value: site.phone, href: `https://wa.me/${site.whatsapp}`, ext: true },
    { icon: <Instagram />, label: c.ig, value: site.instagramHandle, href: site.instagram, ext: true },
    { icon: <Pin />, label: c.where, value: tr(site.address, lang) },
  ];
  return (
    <div className="ccards">
      {cards.map((k, i) => {
        const inner = (
          <>
            <span className="ccard__icon">{k.icon}</span>
            <span className="ccard__label">{k.label}</span>
            <span className="ccard__value">{k.value}</span>
            {k.href && <ArrowUpRight className="ccard__arrow" />}
          </>
        );
        return k.href ? (
          <a key={i} className="ccard" href={k.href} target={k.ext ? "_blank" : undefined} rel={k.ext ? "noreferrer" : undefined} data-reveal style={d(i * 80)}>
            {inner}
          </a>
        ) : (
          <div key={i} className="ccard ccard--static" data-reveal style={d(i * 80)}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

const footerCopy = {
  az: { about: "Stomatoloq-implantoloq Nicat İbrahimov. İmplantlar, vinirlər, zirkonium və ağrısız müalicə — Bakıda.", menu: "Menyu", services: "Xidmətlər", contact: "Əlaqə", rights: "Bütün hüquqlar qorunur.", motto: "Sağlam gülüş — ən gözəl mənzərə" },
  ru: { about: "Стоматолог-имплантолог Ниджат Ибрагимов. Импланты, виниры, цирконий и безболезненное лечение — в Баку.", menu: "Меню", services: "Услуги", contact: "Контакты", rights: "Все права защищены.", motto: "Здоровая улыбка — самый красивый вид" },
};

export function Footer({ lang }: { lang: Lang }) {
  const c = footerCopy[lang];
  const t = ui[lang];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Mark className="footer__mark" />
            <p>{c.about}</p>
            <BookButton className="btn btn--accent btn--sm" />
          </div>
          <div className="footer__col">
            <span className="footer__title">{c.menu}</span>
            <Link href={href(lang, "/")}>{t.home}</Link>
            {nav.map((n) => (
              <Link key={n.path} href={href(lang, n.path)}>
                {tr(n.label, lang)}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <span className="footer__title">{c.services}</span>
            {services.map((s) => (
              <Link key={s.slug} href={href(lang, `/xidmetler/${s.slug}`)}>
                {tr(s.short, lang)}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <span className="footer__title">{c.contact}</span>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              {site.instagramHandle}
            </a>
            <span className="footer__muted">{tr(site.hours, lang)}</span>
          </div>
        </div>
      </div>
      <svg className="footer__word" viewBox="0 0 1000 118" aria-hidden="true">
        <text x="500" y="98" textAnchor="middle" textLength="980" lengthAdjust="spacingAndGlyphs">
          NICAT IBRAHIMOV
        </text>
      </svg>
      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. {c.rights}
        </span>
        <span className="footer__motto">{c.motto}</span>
        <MadeBy label={t.madeBy} />
      </div>
    </footer>
  );
}
