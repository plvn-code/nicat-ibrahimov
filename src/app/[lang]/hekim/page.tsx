import type { Metadata } from "next";
import Image from "next/image";
import { BookButton } from "@/components/booking/Booking";
import { Mark } from "@/components/Logo";
import { CtaBand, d, PageHero, SecHead } from "@/components/Sections";
import { conferences, principles } from "@/lib/content";
import { href, tr, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

const copy = {
  az: {
    title: "Həkim",
    eyebrow: "[ Həkim ] · Stomatoloq · İmplantoloq",
    h: ["Nicat", "İbrahimov."],
    lead: "Səbirli və gülərüz həkim. İtirilmiş dişlərin implantlarla bərpası, vinirlər və zirkonium üzrə ixtisaslaşır.",
    aboutEyebrow: "[ Haqqında ]",
    aboutTitle: ["Hər gülüş —", "ayrıca layihə."],
    about: [
      "Nicat İbrahimov — Bakıda çalışan stomatoloq-ortoped və implantoloqdur. Stomatologiya fakültəsini bitirəndən bəri implantasiya və estetik stomatologiya ilə məşğuldur: tək implantdan tutmuş All-on-6 konsepsiyası ilə tam çənə bərpasına qədər.",
      "Hər müalicə rəqəmsal planlama ilə başlayır — 3D rentgen, DSD (Digital Smile Design), mock-up və cərrahi şablonlar. Məqsəd sadədir: üz cizgilərinə uyğun, harmonik və uzunömürlü gülüş.",
      "Pasiyentləri onu «uşaqların sevimlisi» adlandırır: həkim qorxusu olanlar da kabinetdə özünü evdəki kimi hiss edir. Ağrısız müalicə — onun əsas prinsiplərindən biridir.",
    ],
    skills: "İxtisas",
    skillList: ["İmplantasiya və All-on-4 / All-on-6", "Vinirlər və lamina vinirlər", "Zirkonium və keramik taclar", "Rəqəmsal gülüş dizaynı (DSD)", "Ağrısız terapevtik müalicə", "Ağıl dişlərinin çəkimi"],
    edu: "[ Təhsil və konfranslar ]",
    eduTitle: ["Daim öyrənir —", "dünyanın aparıcı klinikalarında."],
    principles: "[ Prinsiplər ]",
    principlesTitle: "Necə işləyir.",
    quote: "«Sən gülərkən dişlərin də gülsün.»",
    quoteBy: "— Nicat İbrahimov",
  },
  ru: {
    title: "Врач",
    eyebrow: "[ Врач ] · Стоматолог · Имплантолог",
    h: ["Ниджат", "Ибрагимов."],
    lead: "Терпеливый и улыбчивый врач. Специализация — восстановление зубов на имплантах, виниры и цирконий.",
    aboutEyebrow: "[ О враче ]",
    aboutTitle: ["Каждая улыбка —", "отдельный проект."],
    about: [
      "Ниджат Ибрагимов — стоматолог-ортопед и имплантолог из Баку. С окончания стоматологического факультета занимается имплантацией и эстетической стоматологией: от одного импланта до полного восстановления челюсти по концепции All-on-6.",
      "Каждое лечение начинается с цифрового планирования — 3D-снимок, DSD (Digital Smile Design), mock-up и хирургические шаблоны. Цель простая: гармоничная, долговечная улыбка под черты лица.",
      "Пациенты называют его «любимцем детей»: даже те, кто боится врачей, чувствуют себя в кабинете как дома. Безболезненное лечение — один из его главных принципов.",
    ],
    skills: "Специализация",
    skillList: ["Имплантация и All-on-4 / All-on-6", "Виниры и ламинаты", "Циркониевые и керамические коронки", "Цифровой дизайн улыбки (DSD)", "Безболезненное терапевтическое лечение", "Удаление зубов мудрости"],
    edu: "[ Обучение и конференции ]",
    eduTitle: ["Постоянно учится —", "у ведущих мировых школ."],
    principles: "[ Принципы ]",
    principlesTitle: "Как он работает.",
    quote: "«Пусть, когда вы улыбаетесь, улыбаются и ваши зубы.»",
    quoteBy: "— Ниджат Ибрагимов",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = (await params).lang as Lang;
  return { title: copy[lang].title, alternates: { canonical: href(lang, "/hekim") } };
}

export default async function Doctor({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const c = copy[lang];
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h}
        lead={c.lead}
        image="/photos/doc-portrait.jpg"
        pos="50% 18%"
        crumbs={[{ label: lang === "az" ? "Ana səhifə" : "Главная", href: href(lang, "/") }, { label: c.title }]}
      >
        <BookButton className="btn btn--accent" />
      </PageHero>

      <section className="section container">
        <div className="about">
          <div className="about__photo" data-reveal="img">
            <Image src="/photos/doc-standing.jpg" alt={site.name} fill sizes="(max-width: 960px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
          </div>
          <div className="about__body">
            <div data-reveal>
              <span className="eyebrow">{c.aboutEyebrow}</span>
              <h2 className="title">
                {c.aboutTitle[0]}
                <br />
                <em>{c.aboutTitle[1]}</em>
              </h2>
            </div>
            {c.about.map((p, i) => (
              <p key={i} className="lead" data-reveal style={d(80 + i * 80)}>
                {p}
              </p>
            ))}
            <div className="skills" data-reveal style={d(320)}>
              <span className="eyebrow">{c.skills}</span>
              <ul>
                {c.skillList.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="quote">
        <Mark className="quote__mark" />
        <div className="container" data-reveal>
          <p className="quote__text">{c.quote}</p>
          <span className="quote__by">{c.quoteBy}</span>
        </div>
      </section>

      <section className="section container">
        <SecHead
          eyebrow={c.edu}
          title={
            <>
              {c.eduTitle[0]}
              <br />
              <em>{c.eduTitle[1]}</em>
            </>
          }
        />
        <div className="timeline">
          {conferences.map((k, i) => (
            <article key={k.photo} className="tl" data-reveal style={d((i % 3) * 90)}>
              <div className="tl__img">
                <Image src={k.photo} alt={tr(k.title, lang)} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <span className="tl__year">{k.year}</span>
              </div>
              <span className="tl__place">{tr(k.place, lang)}</span>
              <h3 className="tl__title">{tr(k.title, lang)}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SecHead eyebrow={c.principles} title={c.principlesTitle} />
          <div className="principles">
            {principles.map((p, i) => (
              <article key={i} className="principle" data-reveal style={d(i * 90)}>
                <span className="principle__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h-md">{tr(p.title, lang)}</h3>
                <p>{tr(p.text, lang)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="duo">
          {["/photos/doc-shield.jpg", "/photos/doc-check.jpg", "/photos/doc-desk.jpg"].map((src, i) => (
            <div key={src} className="duo__item" data-reveal="img" style={d(i * 100)}>
              <Image src={src} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
            </div>
          ))}
        </div>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
