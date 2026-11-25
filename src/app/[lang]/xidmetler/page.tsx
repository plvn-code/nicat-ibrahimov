import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/home/ServiceRail";
import { CtaBand, d, PageHero, SecHead } from "@/components/Sections";
import { href, tr, type Lang } from "@/lib/i18n";
import { services } from "@/lib/services";

const copy = {
  az: { title: "Xidmətlər", eyebrow: "[ Xidmətlər ] · 7 istiqamət", h: ["Sağlam gülüş", "üçün hər şey."], lead: "İmplantasiyadan estetik bərpaya qədər — hər müalicə rəqəmsal planlama və fərdi yanaşma ilə.", list: "Bütün istiqamətlər", listTitle: "Müalicəni seçin." },
  ru: { title: "Услуги", eyebrow: "[ Услуги ] · 7 направлений", h: ["Всё для", "здоровой улыбки."], lead: "От имплантации до эстетической реставрации — каждое лечение с цифровым планированием и индивидуальным подходом.", list: "Все направления", listTitle: "Выберите лечение." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = (await params).lang as Lang;
  return { title: copy[lang].title, alternates: { canonical: href(lang, "/xidmetler") } };
}

export default async function Services({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const c = copy[lang];
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h}
        lead={c.lead}
        image="/photos/lab-veneers-2.jpg"
        pos="50% 50%"
        crumbs={[{ label: lang === "az" ? "Ana səhifə" : "Главная", href: href(lang, "/") }, { label: c.title }]}
      />
      <section className="section container">
        <SecHead eyebrow={c.list} title={c.listTitle} />
        <div className="grid-cards">
          {services.map((s, i) => (
            <div key={s.slug} data-reveal style={d((i % 3) * 90)}>
              <ServiceCard s={s} index={i} />
            </div>
          ))}
        </div>
      </section>
      <section className="section section--tint">
        <div className="container svc-index">
          {services.map((s, i) => (
            <Link key={s.slug} href={href(lang, `/xidmetler/${s.slug}`)} className="svc-index__row" data-reveal style={d(i * 50)}>
              <span className="svc-index__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="svc-index__name">{tr(s.short, lang)}</span>
              <span className="svc-index__tag">{tr(s.tagline, lang)}</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand lang={lang} />
    </>
  );
}
