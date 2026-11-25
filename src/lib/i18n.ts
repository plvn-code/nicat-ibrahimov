/**
 * Two languages. Azerbaijani is the main one and lives at the root ("/", "/xidmetler"…),
 * Russian lives under "/ru" ("/ru", "/ru/xidmetler"…). src/middleware.ts rewrites the
 * un-prefixed URLs to /az internally, so the app tree is app/[lang]/….
 */
export const LANGS = ["az", "ru"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "az";

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

/** A bilingual string. */
export type T = { az: string; ru: string };
export const tr = (v: T, lang: Lang) => v[lang];

/** Localised href: "/xidmetler" → "/xidmetler" (az) or "/ru/xidmetler" (ru). */
export function href(lang: Lang, path = "/") {
  if (lang === DEFAULT_LANG) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** Visible pathname → the same page without a language prefix. */
export function basePath(pathname: string) {
  const m = pathname.match(/^\/(az|ru)(?=\/|$)/);
  const rest = m ? pathname.slice(m[0].length) : pathname;
  return rest || "/";
}

export const nav: { path: string; label: T }[] = [
  { path: "/xidmetler", label: { az: "Xidmətlər", ru: "Услуги" } },
  { path: "/isler", label: { az: "İşlər", ru: "Работы" } },
  { path: "/hekim", label: { az: "Həkim", ru: "Врач" } },
  { path: "/elaqe", label: { az: "Əlaqə", ru: "Контакты" } },
];

/** UI strings shared by components. */
export const ui = {
  az: {
    skip: "Məzmuna keç",
    home: "Ana səhifə",
    book: "Qəbula yazıl",
    bookLong: "Qəbula yazılın",
    call: "Zəng edin",
    whatsapp: "WhatsApp-a yazın",
    menuOpen: "Menyunu aç",
    menuClose: "Menyunu bağla",
    close: "Bağla",
    prev: "Əvvəlki",
    next: "Növbəti",
    before: "Əvvəl",
    after: "Sonra",
    compare: "əvvəl və sonra müqayisəsi",
    allServices: "Bütün xidmətlər",
    allCases: "Bütün işlər",
    more: "Ətraflı",
    quick: "Sürətli qeydiyyat",
    langName: "AZ",
    otherLang: "RU",
    otherLangLabel: "Русская версия",
    scroll: "Aşağı",
    madeBy: "Saytı Superio agentliyi hazırlayıb",
  },
  ru: {
    skip: "К содержанию",
    home: "Главная",
    book: "Записаться",
    bookLong: "Записаться на приём",
    call: "Позвонить",
    whatsapp: "Написать в WhatsApp",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    close: "Закрыть",
    prev: "Назад",
    next: "Вперёд",
    before: "До",
    after: "После",
    compare: "сравнение до и после",
    allServices: "Все услуги",
    allCases: "Все работы",
    more: "Подробнее",
    quick: "Быстрая запись",
    langName: "RU",
    otherLang: "AZ",
    otherLangLabel: "Azərbaycan dilində",
    scroll: "Вниз",
    madeBy: "Сайт создан агентством Superio",
  },
} satisfies Record<Lang, Record<string, string>>;

export type UI = (typeof ui)["az"];
