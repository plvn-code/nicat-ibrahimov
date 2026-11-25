import type { T } from "./i18n";

export interface Case {
  id: string;
  service: string;
  tag: T;
  title: T;
  text: T;
  before: string;
  after: string;
  /** aspect ratio of the halves (width / height) */
  ratio: string;
  /** Instagram post with the full carousel */
  post: string;
}

const ig = (code: string) => `https://www.instagram.com/p/${code}/`;
const ph = (id: string) => ({ before: `/photos/case-${id}-before.jpg`, after: `/photos/case-${id}-after.jpg` });

/** Real cases from the doctor's Instagram (captions translated / condensed). */
export const cases: Case[] = [
  {
    id: "allon6",
    service: "all-on-6",
    tag: { az: "All-on-6", ru: "All-on-6" },
    title: { az: "Hər çənəyə 6 implant", ru: "По 6 имплантов на каждую челюсть" },
    text: {
      az: "Pasiyentin hər çənəsinə 6 implant qoyaraq dişlərini tam bərpa etdik.",
      ru: "Установили по 6 имплантов на каждую челюсть и полностью восстановили зубы пациента.",
    },
    ...ph("allon6"),
    ratio: "2 / 1",
    post: ig("DgIvtcHiOoC"),
  },
  {
    id: "veneers",
    service: "vinirler",
    tag: { az: "Vinirlər", ru: "Виниры" },
    title: { az: "Yuxarı çənənin vinirlərlə dizaynı", ru: "Дизайн верхней челюсти винирами" },
    text: {
      az: "Yuxarı çənə dişlərini vinirlərlə estetik və funksional olaraq yenidən dizayn etdik.",
      ru: "Эстетически и функционально переделали верхний зубной ряд с помощью виниров.",
    },
    ...ph("veneers"),
    ratio: "2 / 1",
    post: ig("DgIvgK3iHiL"),
  },
  {
    id: "zirconia",
    service: "zirkonium",
    tag: { az: "Zirkonium", ru: "Цирконий" },
    title: { az: "Estetik dəyişim zirkoniumla", ru: "Эстетическое преображение цирконием" },
    text: {
      az: "Dişlərin forması, rəngi və görünüşü üz cizgilərinə uyğun zirkonium dişlərlə yenidən dizayn edildi.",
      ru: "Форма, цвет и вид зубов заново спроектированы под черты лица — циркониевые коронки.",
    },
    ...ph("zirconia"),
    ratio: "2 / 1",
    post: ig("DfPpOSFCFND"),
  },
  {
    id: "front-implants",
    service: "implantasiya",
    tag: { az: "İmplant + zirkonium", ru: "Импланты + цирконий" },
    title: { az: "Ön dişlər — 2 implant", ru: "Передние зубы — 2 импланта" },
    text: {
      az: "Ön dişlərini itirmiş pasiyentə iki implant qoyuldu və dişləri zirkoniumla bərpa olundu.",
      ru: "Пациенту, потерявшему передние зубы, установили два импланта и восстановили зубы цирконием.",
    },
    ...ph("front-implants"),
    ratio: "2 / 1",
    post: ig("DfPqzsbiHhY"),
  },
  {
    id: "8-implants",
    service: "all-on-6",
    tag: { az: "8 implant", ru: "8 имплантов" },
    title: { az: "Köhnə qapaqlardan yeni gülüşə", ru: "От старых коронок к новой улыбке" },
    text: {
      az: "Köhnə qapaqlar çıxarıldı, yararsız dişlər çəkildi, 8 implant qoyuldu; öz dişlərin və implantların üzərinə zirkonium dişlər hazırlandı.",
      ru: "Сняли старые коронки, удалили непригодные зубы, установили 8 имплантов; на свои зубы и импланты изготовили циркониевые коронки.",
    },
    ...ph("8-implants"),
    ratio: "2 / 1",
    post: ig("DfoXsphCDP9"),
  },
  {
    id: "diastema",
    service: "vinirler",
    tag: { az: "Diastema", ru: "Диастема" },
    title: { az: "Yan kəsici dişlər — vinirlər", ru: "Боковые резцы — виниры" },
    text: {
      az: "Anatomik forması normal olmayan və arasında məsafə olan yan kəsici dişlərin forması vinirlərlə estetik hala gətirildi.",
      ru: "Боковым резцам неправильной формы со щелью между зубами вернули эстетичную форму винирами.",
    },
    ...ph("diastema"),
    ratio: "2 / 1",
    post: ig("DfPqLtNCBp4"),
  },
  {
    id: "rehab",
    service: "zirkonium",
    tag: { az: "Tam reabilitasiya", ru: "Полная реабилитация" },
    title: { az: "62 yaş — vinir və qapaqlar", ru: "62 года — виниры и коронки" },
    text: {
      az: "Sürtünmə nəticəsində dişləri qısalmış, çürükləri olan 62 yaşlı pasiyentin vinir və qapaqlarla tam estetik və funksional reabilitasiyası.",
      ru: "Полная эстетическая и функциональная реабилитация пациента 62 лет со стёртыми, укороченными зубами и кариесом — виниры и коронки.",
    },
    ...ph("rehab"),
    ratio: "2 / 1",
    post: ig("DdRtG-yiMdJ"),
  },
  {
    id: "single-implant",
    service: "implantasiya",
    tag: { az: "İmplant", ru: "Имплант" },
    title: { az: "Bir dişin implantla bərpası", ru: "Один зуб на импланте" },
    text: {
      az: "Ön dişin yerinə implant və üzərində təbii görünüşlü tac — qonşu dişlərə toxunmadan.",
      ru: "Имплант на месте переднего зуба и естественная коронка — без вмешательства в соседние зубы.",
    },
    ...ph("single-implant"),
    ratio: "2 / 1",
    post: ig("DehUYQzIeyr"),
  },
  {
    id: "overdenture",
    service: "all-on-6",
    tag: { az: "İmplant üzərində protez", ru: "Протез на имплантах" },
    title: { az: "Alt çənə — 4 implant", ru: "Нижняя челюсть — 4 импланта" },
    text: {
      az: "Dişsiz alt çənədə implantlar üzərində sabit və rahat protez.",
      ru: "Устойчивый и удобный протез на имплантах на беззубой нижней челюсти.",
    },
    ...ph("overdenture"),
    ratio: "2 / 1",
    post: ig("DdoxeEgiPFf"),
  },
  {
    id: "implant-bridge",
    service: "implantasiya",
    tag: { az: "İmplant", ru: "Имплант" },
    title: { az: "İmplantüstü dişlər", ru: "Зубы на имплантах" },
    text: {
      az: "İtirilmiş ön dişlərin implantlar və keramik dişlərlə bərpası.",
      ru: "Восстановление утраченных передних зубов на имплантах с керамическими коронками.",
    },
    ...ph("implant-bridge"),
    ratio: "2 / 1",
    post: ig("DezJ0LWIdn3"),
  },
  {
    id: "metal-ceramic",
    service: "zirkonium",
    tag: { az: "İmplant + keramika", ru: "Импланты + керамика" },
    title: { az: "İmplantlar və metal-keramika", ru: "Импланты и металлокерамика" },
    text: {
      az: "Pasiyentin itirilmiş dişlərinin implantlar və metal-keramik dişlərlə bərpası.",
      ru: "Восстановление утраченных зубов пациента на имплантах с металлокерамикой.",
    },
    ...ph("metal-ceramic"),
    ratio: "2 / 1",
    post: ig("DAGJSdXgMuK"),
  },
];

export const caseById = new Map(cases.map((c) => [c.id, c]));
