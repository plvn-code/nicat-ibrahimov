import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BeforeAfter } from "@/components/BeforeAfter";
import { BookButton } from "@/components/booking/Booking";
import { ServiceCard } from "@/components/home/ServiceRail";
import { Check, Instagram } from "@/components/Icons";
import { CtaBand, d, Faq, PageHero, SecHead } from "@/components/Sections";
import { caseById } from "@/lib/cases";
import { faq } from "@/lib/content";
import { href, LANGS, tr, type Lang } from "@/lib/i18n";
import { serviceBySlug, services } from "@/lib/services";

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.flatMap((lang) => services.map((s) => ({ lang, slug: s.slug })));

const copy = {
  az: { services: "Xidmətlər", about: "Müalicə haqqında", when: "Göstərişlər və imkanlar", steps: "Mərhələlər", stepsTitle: "Necə keçir.", cases: "Real nəticələr", casesTitle: "Əvvəl və sonra.", ig: "Instagram-da bax", faq: "Suallar", faqTitle: "Tez-tez verilən suallar.", other: "Digər xidmətlər", otherTitle: "Bunlar da maraqlı ola bilər.", price: "Qiymət müayinədən və plandan sonra dəqiqləşdirilir." },
  ru: { services: "Услуги", about: "О лечении", when: "Показания и возможности", steps: "Этапы", stepsTitle: "Как проходит.", cases: "Реальные результаты", casesTitle: "До и после.", ig: "Смотреть в Instagram", faq: "Вопросы", faqTitle: "Частые вопросы.", other: "Другие услуги", otherTitle: "Может быть интересно.", price: "Стоимость уточняется после осмотра и составления плана." },
};

type P = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const s = serviceBySlug.get(slug);
  if (!s) return {};
  return { title: tr(s.title, lang), description: tr(s.intro, lang).slice(0, 160), alternates: { canonical: href(lang, `/xidmetler/${slug}`) } };
}

export default async function ServicePage({ params }: P) {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const s = serviceBySlug.get(slug);
  if (!s) notFound();
  const c = copy[lang];
  const related = s.cases.map((id) => caseById.get(id)).filter((x) => !!x);
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  // Topic-relevant questions first.
  const faqItems = faq.slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`[ ${tr(s.badge, lang)} ]`}
        title={[tr(s.title, lang)]}
        lead={tr(s.tagline, lang)}
        image={s.hero}
        crumbs={[
          { label: lang === "az" ? "Ana səhifə" : "Главная", href: href(lang, "/") },
          { label: c.services, href: href(lang, "/xidmetler") },
          { label: tr(s.short, lang) },
        ]}
      >
        <BookButton service={s.slug} className="btn btn--accent" />
      </PageHero>

      <section className="section container">
        <div className="split">
          <div className="split__text" data-reveal>
            <span className="eyebrow">{c.about}</span>
            <p className="split__intro">{tr(s.intro, lang)}</p>
            <div className="facts">
              {s.facts.map((f, i) => (
                <div key={i} className="fact">
                  <strong>{f.value}</strong>
                  <span>{tr(f.label, lang)}</span>
                </div>
              ))}
            </div>
            <p className="muted small">{c.price}</p>
          </div>
          <div className="split__aside" data-reveal style={d(120)}>
            <div className="split__img">
              <Image src={s.photo2} alt={tr(s.title, lang)} fill sizes="(max-width: 960px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </div>
            <span className="eyebrow">{c.when}</span>
            <ul className="checks">
              {s.points.map((p, i) => (
                <li key={i}>
                  <Check /> {tr(p, lang)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SecHead eyebrow={c.steps} title={c.stepsTitle} />
          <ol className="steps">
            {s.steps.map((st, i) => (
              <li key={i} className="step" data-reveal style={d(i * 90)}>
                <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h-sm">{tr(st.title, lang)}</h3>
                <p>{tr(st.text, lang)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section container">
          <SecHead eyebrow={c.cases} title={c.casesTitle} link={{ href: href(lang, "/isler"), label: lang === "az" ? "Bütün işlər" : "Все работы" }} />
          <div className="cases-grid">
            {related.map((k, i) => (
              <article key={k.id} className="case" data-reveal style={d((i % 2) * 100)}>
                <BeforeAfter before={k.before} after={k.after} ratio={k.ratio} alt={tr(k.title, lang)} />
                <div className="case__body">
                  <span className="badge badge--soft">{tr(k.tag, lang)}</span>
                  <h3 className="h-sm">{tr(k.title, lang)}</h3>
                  <p>{tr(k.text, lang)}</p>
                  <a href={k.post} target="_blank" rel="noreferrer" className="link-arrow">
                    <Instagram /> {c.ig}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section section--tint">
        <div className="container faq-wrap">
          <SecHead eyebrow={c.faq} title={c.faqTitle} />
          <Faq lang={lang} items={faqItems} />
        </div>
      </section>

      <section className="section container">
        <SecHead eyebrow={c.other} title={c.otherTitle} link={{ href: href(lang, "/xidmetler"), label: c.services }} />
        <div className="grid-cards">
          {others.map((o, i) => (
            <div key={o.slug} data-reveal style={d(i * 90)}>
              <ServiceCard s={o} />
            </div>
          ))}
        </div>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
