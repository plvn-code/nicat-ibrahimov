import type { Metadata } from "next";
import Image from "next/image";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Instagram } from "@/components/Icons";
import { CtaBand, d, PageHero, SecHead } from "@/components/Sections";
import { cases } from "@/lib/cases";
import { href, tr, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

const copy = {
  az: {
    title: "İşlər",
    eyebrow: "[ Əvvəl / sonra ] · Real pasiyentlər",
    h: ["Nəticə", "göz qabağındadır."],
    lead: "Bütün fotolar — həkimin öz pasiyentləri, Instagram-dan. Sürüşdürün və fərqi görün.",
    ba: "Müqayisə",
    baTitle: "Sürüşdürün — əvvəl və sonra.",
    ig: "Instagram-da bax",
    lab: "Laboratoriya",
    labTitle: "Detallarda incəlik.",
    labLead: "Vinirlər, zirkonium körpülər və implantüstü taclar — hər iş rəqəmsal olaraq planlanır və CAD/CAM ilə hazırlanır.",
    xray: "Planlama",
    xrayTitle: "Rentgendən nəticəyə.",
    more: "Daha çox iş — Instagram-da",
  },
  ru: {
    title: "Работы",
    eyebrow: "[ До / после ] · Реальные пациенты",
    h: ["Результат", "говорит сам."],
    lead: "Все фото — собственные пациенты врача, из Instagram. Двигайте ползунок и сравнивайте.",
    ba: "Сравнение",
    baTitle: "Ведите ползунок — до и после.",
    ig: "Смотреть в Instagram",
    lab: "Лаборатория",
    labTitle: "Тонкость в деталях.",
    labLead: "Виниры, циркониевые мосты и коронки на имплантах — каждая работа планируется цифровым способом и изготавливается по CAD/CAM.",
    xray: "Планирование",
    xrayTitle: "От снимка к результату.",
    more: "Больше работ — в Instagram",
  },
};

const lab = [
  { src: "/photos/lab-veneers.jpg", wide: true },
  { src: "/photos/lab-crown.jpg" },
  { src: "/photos/lab-zirconia.jpg" },
  { src: "/photos/lab-zirconia-model.jpg", wide: true },
  { src: "/photos/lab-veneers-2.jpg", wide: true },
];

const xrays = [
  { src: "/photos/xray-plan.jpg", label: { az: "Plan: 8 implant", ru: "План: 8 имплантов" } },
  { src: "/photos/xray-result.jpg", label: { az: "Nəticə: implantlar yerində", ru: "Результат: импланты установлены" } },
  { src: "/photos/xray-allon6-2.jpg", label: { az: "All-on-6: bucaq altında implantlar", ru: "All-on-6: наклонные импланты" } },
  { src: "/photos/xray-allon6.jpg", label: { az: "All-on-6: daimi konstruksiya", ru: "All-on-6: постоянная конструкция" } },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = (await params).lang as Lang;
  return { title: copy[lang].title, alternates: { canonical: href(lang, "/isler") } };
}

export default async function Cases({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const c = copy[lang];
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h}
        lead={c.lead}
        image="/photos/smile-implants.jpg"
        pos="50% 55%"
        crumbs={[{ label: lang === "az" ? "Ana səhifə" : "Главная", href: href(lang, "/") }, { label: c.title }]}
      />

      <section className="section container">
        <SecHead eyebrow={c.ba} title={c.baTitle} />
        <div className="cases-grid">
          {cases.map((k, i) => (
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

      <section className="lab">
        <div className="container">
          <div className="section-head" data-reveal>
            <div className="section-head__text">
              <span className="eyebrow eyebrow--light">{c.lab}</span>
              <h2 className="title">{c.labTitle}</h2>
            </div>
            <p className="lab__lead">{c.labLead}</p>
          </div>
          <div className="lab__grid">
            {lab.map((l, i) => (
              <div key={l.src} className={`lab__item ${l.wide ? "lab__item--wide" : ""}`} data-reveal="img" style={d(i * 90)}>
                <Image src={l.src} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SecHead eyebrow={c.xray} title={c.xrayTitle} link={{ href: site.instagram, label: c.more, external: true }} />
        <div className="xrays">
          {xrays.map((x, i) => (
            <figure key={x.src} className="xray" data-reveal style={d(i * 90)}>
              <div className="xray__img">
                <Image src={x.src} alt={tr(x.label, lang)} fill sizes="(max-width: 760px) 100vw, 25vw" style={{ objectFit: "cover" }} />
              </div>
              <figcaption>
                <span>{String(i + 1).padStart(2, "0")}</span> {tr(x.label, lang)}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
