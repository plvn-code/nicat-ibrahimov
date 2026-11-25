import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/booking/Booking";
import { CasesShowcase } from "@/components/CasesShowcase";
import { Intro } from "@/components/home/Intro";
import { ServiceRail } from "@/components/home/ServiceRail";
import { Story } from "@/components/home/Story";
import { ArrowRight, Instagram } from "@/components/Icons";
import { Mark } from "@/components/Logo";
import { ContactCards, CtaBand, d, Faq, SecHead, Ticker } from "@/components/Sections";
import { cases } from "@/lib/cases";
import { backstage, chapters, conferences, heroImages, manifesto, principles, stats } from "@/lib/content";
import { href, tr, type Lang } from "@/lib/i18n";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const copy = {
  az: {
    heroLabel: "Stomatoloq Nicat İbrahimov — sağlam və gözəl gülüş",
    eyebrow: "Stomatoloq · İmplantoloq · Bakı",
    title: ["Gülüşünüzü", "bizimlə", "tamamlayın."],
    lead: "İtirilmiş dişlərin implantlarla bərpası, vinirlər, zirkonium və ağrısız müalicə. Hər pasiyent üçün rəqəmsal plan və fərdi yanaşma.",
    services: "Xidmətlər",
    foot: "Ağrısız müalicə · Vinirlər · İmplantlar",
    svcEyebrow: "[ Xidmətlər ] · 7 istiqamət",
    svcTitle: ["Sağlam gülüş üçün", "hər şey."],
    manifestoEyebrow: "[ Fəlsəfə ]",
    storyEyebrow: "Necə işləyirik",
    storyTitle: ["Əvvəl — plan.", "Sonra — nəticə."],
    doctor: "Həkim haqqında",
    featureEyebrow: "[ Həkim ]",
    featureTitle: ["Nicat", "İbrahimov."],
    featureLead:
      "Stomatoloq-ortoped və implantoloq. İmplantasiya, All-on-6, vinirlər və zirkonium üzrə ixtisaslaşır. Səbirli, gülərüz və hər detala diqqətli — pasiyentlər ona illərlə qayıdır.",
    confTitle: "Daim öyrənir",
    statsEyebrow: "[ Rəqəmlərlə ]",
    statsTitle: "Təcrübə, təhsil, etibar.",
    statsLead:
      "Biotech, Cowell, MegaGen, Straumann (ITI), M-Guide — dünyanın aparıcı implant sistemlərinin konfrans və kursları. Öyrəndiklərimizi hər gün kabinetdə tətbiq edirik.",
    casesEyebrow: "[ Əvvəl / sonra ] · Real pasiyentlər",
    casesTitle: "Nəticə göz qabağındadır.",
    principlesEyebrow: "[ Prinsiplər ]",
    principlesTitle: "Dörd sözlə.",
    videoEyebrow: "[ Cərrahiyyə ]",
    videoTitle: ["Bir gündə", "yeni başlanğıc."],
    videoLead: "Yararsız dişlərin atravmatik çəkimi və elə həmin gün implantların yerləşdirilməsi — doğru planlama, cərrahi dəqiqlik və steril şərait.",
    videoLink: "All-on-6 haqqında",
    backstageEyebrow: "Backstage",
    backstageTitle: "Kabinetdən kadrlar.",
    faqEyebrow: "[ Suallar ]",
    faqTitle: ["Pasiyentlərin", "ən çox verdiyi suallar."],
    contactEyebrow: "[ Əlaqə ]",
    contactTitle: "Bizə yazın və ya zəng edin.",
  },
  ru: {
    heroLabel: "Стоматолог Ниджат Ибрагимов — здоровая и красивая улыбка",
    eyebrow: "Стоматолог · Имплантолог · Баку",
    title: ["Улыбка,", "которой", "хочется делиться."],
    lead: "Восстановление зубов на имплантах, виниры, цирконий и безболезненное лечение. Цифровой план и индивидуальный подход к каждому пациенту.",
    services: "Услуги",
    foot: "Без боли · Виниры · Импланты",
    svcEyebrow: "[ Услуги ] · 7 направлений",
    svcTitle: ["Всё для", "здоровой улыбки."],
    manifestoEyebrow: "[ Философия ]",
    storyEyebrow: "Как мы работаем",
    storyTitle: ["Сначала — план.", "Потом — результат."],
    doctor: "О враче",
    featureEyebrow: "[ Врач ]",
    featureTitle: ["Ниджат", "Ибрагимов."],
    featureLead:
      "Стоматолог-ортопед и имплантолог. Специализация — имплантация, All-on-6, виниры и цирконий. Терпеливый, улыбчивый и внимательный к каждой детали — пациенты возвращаются к нему годами.",
    confTitle: "Постоянно учится",
    statsEyebrow: "[ В цифрах ]",
    statsTitle: "Опыт, обучение, доверие.",
    statsLead:
      "Biotech, Cowell, MegaGen, Straumann (ITI), M-Guide — конференции и курсы ведущих мировых систем имплантов. Всё, чему учимся, каждый день применяем в кабинете.",
    casesEyebrow: "[ До / после ] · Реальные пациенты",
    casesTitle: "Результат говорит сам.",
    principlesEyebrow: "[ Принципы ]",
    principlesTitle: "В четырёх словах.",
    videoEyebrow: "[ Хирургия ]",
    videoTitle: ["Новое начало", "за один день."],
    videoLead: "Атравматичное удаление непригодных зубов и установка имплантов в тот же день — точное планирование, хирургическая аккуратность и стерильность.",
    videoLink: "Об All-on-6",
    backstageEyebrow: "Backstage",
    backstageTitle: "Кадры из кабинета.",
    faqEyebrow: "[ Вопросы ]",
    faqTitle: ["Самые частые", "вопросы пациентов."],
    contactEyebrow: "[ Контакты ]",
    contactTitle: "Напишите или позвоните.",
  },
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const c = copy[lang];

  return (
    <>
      <Intro />

      {/* HERO */}
      <section className="hero" aria-label={c.heroLabel}>
        <div className="hero__media">
          {heroImages.map((img, i) => (
            <div key={img.src} className="hero__panel" style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
              <Image src={img.src} alt={tr(img.alt, lang)} fill priority sizes="(max-width: 760px) 100vw, 34vw" style={{ objectFit: "cover", objectPosition: img.pos }} />
            </div>
          ))}
        </div>
        <div className="hero__shade" />
        <div className="container hero__content">
          <span className="hero__eyebrow">
            <i /> {c.eyebrow}
          </span>
          <h1 className="hero__title">
            {c.title.map((l, i) => (
              <span key={i} className={`hero__line ${i === 2 ? "hero__line--accent" : ""}`}>
                <span style={{ animationDelay: `${0.55 + i * 0.14}s` }}>{l}</span>
              </span>
            ))}
          </h1>
          <p className="hero__lead">{c.lead}</p>
          <div className="hero__cta">
            <BookButton className="btn btn--accent" />
            <Link href={href(lang, "/xidmetler")} className="btn btn--ghost">
              {c.services}
            </Link>
          </div>
        </div>
        <div className="hero__foot container">
          <span>{c.foot}</span>
          <a href={site.phoneHref} className="hero__phone">
            {site.phone}
          </a>
          <span className="hero__scroll" aria-hidden="true">
            Scroll <i />
          </span>
        </div>
      </section>

      <Ticker lang={lang} />

      {/* SERVICES RAIL */}
      <section className="section container" aria-labelledby="services-title">
        <SecHead
          eyebrow={c.svcEyebrow}
          id="services-title"
          title={
            <>
              {c.svcTitle[0]}
              <br />
              <em>{c.svcTitle[1]}</em>
            </>
          }
          link={{ href: href(lang, "/xidmetler"), label: `${lang === "az" ? "Bütün xidmətlər" : "Все услуги"} · ${services.length}` }}
        />
        <div data-reveal>
          <ServiceRail items={services} />
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <Mark className="manifesto__mark" />
        <div className="container manifesto__inner">
          <span className="eyebrow eyebrow--light" data-reveal>
            {c.manifestoEyebrow}
          </span>
          <p className="manifesto__title" data-reveal style={d(80)}>
            {tr(manifesto.title, lang)}
          </p>
          {manifesto.lines.map((l, i) => (
            <p key={i} className="manifesto__line" data-reveal style={d(160 + i * 80)}>
              {tr(l, lang)}
            </p>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="section container" aria-labelledby="approach-title">
        <SecHead
          eyebrow={c.storyEyebrow}
          id="approach-title"
          title={
            <>
              {c.storyTitle[0]}
              <br />
              <em>{c.storyTitle[1]}</em>
            </>
          }
          link={{ href: href(lang, "/hekim"), label: c.doctor }}
        />
        <Story
          chapters={chapters.map((ch) => ({
            label: tr(ch.label, lang),
            title: tr(ch.title, lang),
            lead: tr(ch.lead, lang),
            text: tr(ch.text, lang),
            accent: tr(ch.accent, lang),
            image: ch.image,
          }))}
        />
      </section>

      {/* DOCTOR FEATURE */}
      <section className="feature">
        <div className="feature__media" data-reveal="img">
          <Image src="/photos/doc-portrait.jpg" alt={site.name} fill sizes="(max-width: 960px) 100vw, 55vw" style={{ objectFit: "cover", objectPosition: "50% 25%" }} />
          <span className="feature__tag">
            <Mark /> {tr(site.role, lang)}
          </span>
        </div>
        <div className="feature__body">
          <div className="feature__copy" data-reveal>
            <span className="eyebrow">{c.featureEyebrow}</span>
            <h2 className="display">
              {c.featureTitle[0]}
              <br />
              <em>{c.featureTitle[1]}</em>
            </h2>
            <p className="lead">{c.featureLead}</p>
          </div>
          <div className="feature__items">
            <span className="feature__label">{c.confTitle}</span>
            {conferences.slice(0, 4).map((k, i) => (
              <div key={k.photo} data-reveal style={d(100 + i * 90)}>
                <Link href={href(lang, "/hekim")} className="mini">
                  <span className="mini__img">
                    <Image src={k.photo} alt="" fill sizes="96px" style={{ objectFit: "cover" }} />
                  </span>
                  <span className="mini__body">
                    <strong>{tr(k.title, lang)}</strong>
                    <small>
                      {k.year} · {tr(k.place, lang)}
                    </small>
                  </span>
                  <span className="mini__arrow">
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div data-reveal>
            <Link href={href(lang, "/hekim")} className="btn btn--outline">
              {c.doctor}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section container" aria-labelledby="stats-title">
        <div className="materials">
          <div className="materials__img" data-reveal="img">
            <Image src="/photos/conf-italy.jpg" alt="Cowell International Conference 2023" fill sizes="(max-width: 960px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
          </div>
          <div className="materials__body">
            <div className="materials__copy" data-reveal>
              <span className="eyebrow">{c.statsEyebrow}</span>
              <h2 className="title" id="stats-title">
                {c.statsTitle}
              </h2>
              <p className="lead">{c.statsLead}</p>
            </div>
            <div className="stats">
              {stats.map((s, i) => (
                <div key={i} className="stat" data-reveal style={d(i * 90)}>
                  <strong>
                    <span data-count={s.value}>{s.value}</span>
                    <small>{typeof s.suffix === "string" ? s.suffix : tr(s.suffix, lang)}</small>
                  </strong>
                  <span>{tr(s.label, lang)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section section--tint" aria-labelledby="cases-title">
        <div className="container">
          <SecHead eyebrow={c.casesEyebrow} id="cases-title" title={c.casesTitle} link={{ href: href(lang, "/isler"), label: lang === "az" ? "Bütün işlər" : "Все работы" }} />
          <CasesShowcase items={cases.slice(0, 6)} />
        </div>
      </section>

      {/* VIDEO BAND */}
      <section className="vband">
        <video className="vband__video" src="/video/surgery.mp4" poster="/photos/surgery.jpg" autoPlay muted loop playsInline preload="none" aria-hidden="true" />
        <div className="vband__shade" />
        <div className="container vband__inner" data-reveal>
          <span className="eyebrow eyebrow--light">{c.videoEyebrow}</span>
          <h2 className="display">
            {c.videoTitle[0]}
            <br />
            {c.videoTitle[1]}
          </h2>
          <p className="lead">{c.videoLead}</p>
          <Link href={href(lang, "/xidmetler/all-on-6")} className="btn btn--light">
            {c.videoLink} <ArrowRight />
          </Link>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section container" aria-labelledby="principles-title">
        <SecHead eyebrow={c.principlesEyebrow} id="principles-title" title={c.principlesTitle} />
        <div className="principles">
          {principles.map((p, i) => (
            <article key={i} className="principle" data-reveal style={d(i * 90)}>
              <span className="principle__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="h-md">{tr(p.title, lang)}</h3>
              <p>{tr(p.text, lang)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BACKSTAGE */}
      <section className="section container section--flush-top" aria-labelledby="backstage-title">
        <SecHead
          eyebrow={`${site.brand} | ${c.backstageEyebrow}`}
          id="backstage-title"
          title={c.backstageTitle}
          link={{ href: site.instagram, label: site.instagramHandle, external: true }}
        />
        <div className="mosaic">
          {backstage.map((img, i) => (
            <div key={img.src} className={`mosaic__item mosaic__item--${i + 1}`} data-reveal="img" style={d(i * 80)}>
              <Image src={img.src} alt={tr(img.alt, lang)} fill sizes="(max-width: 760px) 50vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
          <a href={site.instagram} target="_blank" rel="noreferrer" className="mosaic__ig" data-reveal style={d(400)}>
            <Instagram />
            <b>{site.followers}</b>
            <span>{lang === "az" ? "izləyici Instagram-da" : "подписчиков в Instagram"}</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--tint" aria-labelledby="faq-title">
        <div className="container faq-wrap">
          <SecHead
            eyebrow={c.faqEyebrow}
            id="faq-title"
            title={
              <>
                {c.faqTitle[0]}
                <br />
                <em>{c.faqTitle[1]}</em>
              </>
            }
          />
          <Faq lang={lang} />
        </div>
      </section>

      <CtaBand lang={lang} />

      <section className="section container" aria-labelledby="contact-title">
        <SecHead eyebrow={c.contactEyebrow} id="contact-title" title={c.contactTitle} link={{ href: href(lang, "/elaqe"), label: lang === "az" ? "Əlaqə" : "Контакты" }} />
        <ContactCards lang={lang} />
      </section>
    </>
  );
}
