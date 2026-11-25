"use client";

import { useState } from "react";
import { tr } from "@/lib/i18n";
import { services, serviceBySlug } from "@/lib/services";
import { site, waLink } from "@/lib/site";
import { ArrowRight, Check } from "@/components/Icons";
import { useLang } from "@/components/Lang";

const copy = {
  az: {
    name: "Adınız",
    namePh: "Sizə necə müraciət edək",
    phone: "Telefon",
    service: "Xidmət",
    consult: "Konsultasiya / bilmirəm",
    time: "Rahat vaxt",
    times: ["Ən yaxın boş vaxt", "Səhər", "Gündüz", "Axşam"],
    comment: "Şərh",
    commentPh: "Nə narahat edir və ya hansı sualınız var",
    note: "Düyməni basmaqla WhatsApp açılır — mesajı göndərməklə qeydiyyat üçün razılıq verirsiniz.",
    submit: "WhatsApp-da göndər",
    errName: "Zəhmət olmasa, adınızı yazın.",
    errPhone: "Telefon nömrəsini tam yazın.",
    doneTitle: "Mesaj hazırdır",
    doneText: "WhatsApp yeni pəncərədə açıldı — sadəcə «Göndər» düyməsini basın. Açılmadısa, zəng edin:",
    msg: (n: string, p: string, s: string, t: string, c: string) =>
      `Salam, Nicat həkim! Qəbula yazılmaq istəyirəm.\nAd: ${n}\nTelefon: ${p}\nXidmət: ${s}\nRahat vaxt: ${t}${c ? `\nŞərh: ${c}` : ""}`,
  },
  ru: {
    name: "Имя",
    namePh: "Как к вам обращаться",
    phone: "Телефон",
    service: "Услуга",
    consult: "Консультация / не знаю",
    time: "Удобное время",
    times: ["Ближайшее свободное", "Утро", "День", "Вечер"],
    comment: "Комментарий",
    commentPh: "Что беспокоит или какой у вас вопрос",
    note: "Кнопка откроет WhatsApp — отправляя сообщение, вы соглашаетесь на обработку данных для записи.",
    submit: "Отправить в WhatsApp",
    errName: "Пожалуйста, укажите имя.",
    errPhone: "Укажите номер телефона полностью.",
    doneTitle: "Сообщение готово",
    doneText: "WhatsApp открылся в новом окне — просто нажмите «Отправить». Если не открылся, позвоните:",
    msg: (n: string, p: string, s: string, t: string, c: string) =>
      `Здравствуйте, доктор Ниджат! Хочу записаться на приём.\nИмя: ${n}\nТелефон: ${p}\nУслуга: ${s}\nУдобное время: ${t}${c ? `\nКомментарий: ${c}` : ""}`,
  },
};

/** "+994 55 573 71 62" mask; keeps the +994 prefix. */
function formatPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("994")) d = d.slice(3);
  else if (d.startsWith("0")) d = d.slice(1);
  d = d.slice(0, 9);
  const parts = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
  return "+994" + (parts.length ? " " + parts.join(" ") : "");
}

/** No backend: the request opens in WhatsApp as a ready message to the doctor. */
export function BookingForm({ service = "", dark = false }: { service?: string; dark?: boolean }) {
  const { lang } = useLang();
  const c = copy[lang];
  const [phone, setPhone] = useState("+994");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    if (name.length < 2) return setError(c.errName);
    if (phone.replace(/\D/g, "").length !== 12) return setError(c.errPhone);
    setError("");
    const s = serviceBySlug.get(String(f.get("service") || ""));
    const text = c.msg(name, phone, s ? tr(s.short, lang) : c.consult, String(f.get("time") || ""), String(f.get("comment") || "").trim());
    window.open(waLink(text), "_blank", "noopener");
    setDone(true);
  }

  if (done) {
    return (
      <div className="done" role="status">
        <span className="done__mark">
          <Check />
        </span>
        <h3 className="h-md">{c.doneTitle}</h3>
        <p className="muted">
          {c.doneText}{" "}
          <a href={site.phoneHref} className="u">
            {site.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form className={`form ${dark ? "form--dark" : ""}`} onSubmit={submit} noValidate>
      <div className="form__row">
        <label className="field">
          <span>{c.name}</span>
          <input name="name" autoComplete="name" required maxLength={60} placeholder={c.namePh} />
        </label>
        <label className="field">
          <span>{c.phone}</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} />
        </label>
      </div>
      <div className="form__row">
        <label className="field">
          <span>{c.service}</span>
          <select name="service" defaultValue={service}>
            <option value="">{c.consult}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {tr(s.short, lang)}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{c.time}</span>
          <select name="time" defaultValue={c.times[0]}>
            {c.times.map((tm) => (
              <option key={tm}>{tm}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="field">
        <span>{c.comment}</span>
        <textarea name="comment" maxLength={400} rows={2} placeholder={c.commentPh} />
      </label>
      {error && (
        <p className="form__err" role="alert">
          {error}
        </p>
      )}
      <div className="form__foot">
        <p className="form__note">{c.note}</p>
        <button className="btn btn--accent" type="submit">
          {c.submit}
          <ArrowRight />
        </button>
      </div>
    </form>
  );
}
