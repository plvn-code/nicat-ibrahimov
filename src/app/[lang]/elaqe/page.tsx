import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking/BookingForm";
import { ContactCards, d, Faq, PageHero, SecHead } from "@/components/Sections";
import { faq } from "@/lib/content";
import { href, tr, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

const copy = {
  az: {
    title: "Əlaqə",
    eyebrow: "[ Əlaqə ] · Bakı",
    h: ["Qəbula", "yazılın."],
    lead: "Zəng edin, WhatsApp-a yazın və ya formu doldurun — həkim vaxtı təsdiqləyəcək.",
    formEyebrow: "[ Onlayn qeydiyyat ]",
    formTitle: ["Rahat vaxtı", "seçin."],
    formLead: "Form WhatsApp-da hazır mesaj açır — sadəcə göndərin, həkim vaxtı təsdiqləyəcək.",
    contacts: "Kontaktlar",
    contactsTitle: "Birbaşa əlaqə.",
    faq: "Suallar",
    faqTitle: "Qəbuldan əvvəl.",
  },
  ru: {
    title: "Контакты",
    eyebrow: "[ Контакты ] · Баку",
    h: ["Запишитесь", "на приём."],
    lead: "Позвоните, напишите в WhatsApp или заполните форму — врач подтвердит время.",
    formEyebrow: "[ Онлайн-запись ]",
    formTitle: ["Выберите", "удобное время."],
    formLead: "Форма открывает готовое сообщение в WhatsApp — просто отправьте его, врач подтвердит время.",
    contacts: "Контакты",
    contactsTitle: "Связаться напрямую.",
    faq: "Вопросы",
    faqTitle: "Перед визитом.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = (await params).lang as Lang;
  return { title: copy[lang].title, alternates: { canonical: href(lang, "/elaqe") } };
}

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const c = copy[lang];
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h}
        lead={c.lead}
        image="/photos/clinic-patient.jpg"
        pos="50% 35%"
        crumbs={[{ label: lang === "az" ? "Ana səhifə" : "Главная", href: href(lang, "/") }, { label: c.title }]}
      />

      <section className="section container">
        <SecHead eyebrow={c.contacts} title={c.contactsTitle} />
        <ContactCards lang={lang} />
      </section>

      <section className="section section--tint">
        <div className="container booking-block">
          <div className="booking-block__media" data-reveal="img">
            <Image src="/photos/doc-turquoise.jpg" alt={site.name} fill sizes="(max-width: 960px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "50% 30%" }} />
          </div>
          <div className="booking-block__body" data-reveal style={d(100)}>
            <span className="eyebrow">{c.formEyebrow}</span>
            <h2 className="title">
              {c.formTitle[0]}
              <br />
              <em>{c.formTitle[1]}</em>
            </h2>
            <p className="lead">{c.formLead}</p>
            <BookingForm />
            <p className="muted small">{tr(site.address, lang)}</p>
          </div>
        </div>
      </section>

      <section className="section container faq-wrap">
        <SecHead eyebrow={c.faq} title={c.faqTitle} />
        <Faq lang={lang} items={faq.slice(3)} />
      </section>
    </>
  );
}
