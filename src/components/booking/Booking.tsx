"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { tr } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Close, Phone, WhatsApp } from "@/components/Icons";
import { useLang } from "@/components/Lang";
import { BookingForm } from "./BookingForm";

type Ctx = { open: (service?: string) => void };
const BookingCtx = createContext<Ctx>({ open: () => {} });

export const useBooking = () => useContext(BookingCtx);

const copy = {
  az: { eyebrow: "Qəbula yazılış", title: ["Rahat", "vaxt seçin"], text: "Məlumatları doldurun — müraciətiniz WhatsApp-da hazır mesaj kimi açılacaq. Həkim tarixi və vaxtı təsdiqləyəcək." },
  ru: { eyebrow: "Запись на приём", title: ["Выберите", "удобное время"], text: "Заполните форму — заявка откроется в WhatsApp готовым сообщением. Врач подтвердит дату и время." },
};

/** Site-wide booking side panel. Any <BookButton> opens it. */
export function BookingProvider({ children }: { children: React.ReactNode }) {
  const { lang, t } = useLang();
  const c = copy[lang];
  const [isOpen, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [key, setKey] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((s = "") => {
    lastFocus.current = document.activeElement as HTMLElement;
    setService(s);
    setKey((k) => k + 1);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    lastFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    const tm = setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      clearTimeout(tm);
    };
  }, [isOpen, close]);

  return (
    <BookingCtx.Provider value={{ open }}>
      {children}
      <div className={`modal ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="modal__scrim" onClick={close} />
        <div className="modal__panel" role="dialog" aria-modal="true" aria-labelledby="booking-title" inert={!isOpen}>
          <button ref={closeRef} className="modal__close" onClick={close} aria-label={t.close}>
            <Close />
          </button>
          <div className="modal__head">
            <span className="eyebrow">{c.eyebrow}</span>
            <h2 id="booking-title" className="h-lg">
              {c.title[0]} <em>{c.title[1]}</em>
            </h2>
            <p className="muted">{c.text}</p>
          </div>
          <BookingForm key={key} service={service} />
          <div className="modal__aside">
            <a href={site.phoneHref}>
              <Phone /> {site.phone}
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
              <WhatsApp /> WhatsApp
            </a>
            <span>{tr(site.hours, lang)}</span>
          </div>
        </div>
      </div>
    </BookingCtx.Provider>
  );
}

export function BookButton({ children, service, className = "btn" }: { children?: React.ReactNode; service?: string; className?: string }) {
  const { open } = useBooking();
  const { t } = useLang();
  return (
    <button type="button" className={className} onClick={() => open(service)}>
      {children ?? t.bookLong}
    </button>
  );
}
