import type { T } from "./i18n";

/** Contacts — from the doctor's Instagram bio (@stomatoloq.nicat.ibrahimov). */
export const site = {
  name: "Nicat İbrahimov",
  brand: "NICAT IBRAHIMOV",
  role: { az: "Stomatoloq · İmplantoloq · Ortoped", ru: "Стоматолог · Имплантолог · Ортопед" } as T,
  city: { az: "Bakı", ru: "Баку" } as T,
  url: "https://nicat-ibrahimov.vercel.app",
  phone: "+994 55 573 71 62",
  phoneHref: "tel:+994555737162",
  whatsapp: "994555737162",
  instagram: "https://www.instagram.com/stomatoloq.nicat.ibrahimov/",
  instagramHandle: "@stomatoloq.nicat.ibrahimov",
  followers: "11K+",
  // TODO(client): the exact clinic address and hours are not in the profile — see docs/STATUS.md.
  address: {
    az: "Bakı, Azərbaycan — qəbul yeri və vaxtı zəng zamanı razılaşdırılır",
    ru: "Баку, Азербайджан — место и время приёма согласуем по телефону",
  } as T,
  hours: { az: "Qəbul əvvəlcədən yazılışla", ru: "Приём по предварительной записи" } as T,
  description: {
    az: "Stomatoloq Nicat İbrahimov — Bakıda implantasiya, All-on-6, vinirlər, zirkonium tac və ağrısız müalicə. Hər pasiyent üçün rəqəmsal planlama və fərdi yanaşma.",
    ru: "Стоматолог Ниджат Ибрагимов — имплантация, All-on-6, виниры, циркониевые коронки и безболезненное лечение в Баку. Цифровое планирование и индивидуальный подход к каждому пациенту.",
  } as T,
};

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
