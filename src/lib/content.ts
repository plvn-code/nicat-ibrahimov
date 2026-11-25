import type { T } from "./i18n";

export const announce: T[] = [
  { az: "Ağrısız müalicə", ru: "Безболезненное лечение" },
  { az: "Vinirlərin hazırlanması", ru: "Изготовление виниров" },
  { az: "İtirilmiş dişlərin implantlarla bərpası", ru: "Восстановление зубов на имплантах" },
  { az: "All-on-6 — bir gündə yeni gülüş", ru: "All-on-6 — новая улыбка за один день" },
  { az: "Qəbula yazılış: +994 55 573 71 62", ru: "Запись: +994 55 573 71 62" },
];

export const tickerWords: T[] = [
  { az: "İmplant", ru: "Импланты" },
  { az: "Vinir", ru: "Виниры" },
  { az: "Zirkonium", ru: "Цирконий" },
  { az: "All-on-6", ru: "All-on-6" },
  { az: "Ağrısız", ru: "Без боли" },
  { az: "Gülüş dizaynı", ru: "Дизайн улыбки" },
];

export const heroImages = [
  { src: "/photos/doc-standing.jpg", alt: { az: "Stomatoloq Nicat İbrahimov kabinetdə", ru: "Стоматолог Ниджат Ибрагимов в кабинете" }, pos: "50% 30%" },
  { src: "/photos/smile-zirconia.jpg", alt: { az: "Zirkonium dişlərlə yeni gülüş", ru: "Новая улыбка с циркониевыми коронками" }, pos: "50% 50%" },
  { src: "/photos/surgery.jpg", alt: { az: "İmplantasiya əməliyyatı", ru: "Операция имплантации" }, pos: "50% 35%" },
];

export const manifesto = {
  title: { az: "Ən gözəl mənzərə — sağlam gülüşdür.", ru: "Самый красивый вид — здоровая улыбка." } as T,
  lines: [
    { az: "Hər pasiyent üçün fərdi plan — rentgendən son tac yoxlamasına qədər.", ru: "Индивидуальный план для каждого — от снимка до последней примерки коронки." },
    { az: "Ağrısız müalicə. Dəqiq planlama. Nəticəyə görə məsuliyyət.", ru: "Лечение без боли. Точное планирование. Ответственность за результат." },
  ] as T[],
};

export const chapters = [
  {
    label: { az: "Konsultasiya", ru: "Консультация" },
    title: { az: "Əvvəlcə — diaqnoz.", ru: "Сначала — диагноз." },
    lead: { az: "Şikayətinizi dinləyir, 3D rentgen və müayinə ilə tam mənzərəni görürük.", ru: "Выслушиваем жалобы и видим полную картину по 3D-снимку и осмотру." },
    text: { az: "Pasiyentin ən çox verdiyi suallara burada cavab tapırıq: implant, yoxsa körpü? Plomba, yoxsa kanal müalicəsi? Bütün variantları açıq danışırıq.", ru: "Здесь отвечаем на самые частые вопросы: имплант или мост? Пломба или лечение каналов? Честно обсуждаем все варианты." },
    accent: { az: "Fərdi plan", ru: "Индивидуальный план" },
    image: "/photos/doc-explain.jpg",
  },
  {
    label: { az: "Planlama", ru: "Планирование" },
    title: { az: "Rəqəmsal plan.", ru: "Цифровой план." },
    lead: { az: "İmplantların yeri, bucağı və gələcək dişlərin forması kompüterdə planlanır.", ru: "Положение и угол имплантов, форма будущих зубов планируются на компьютере." },
    text: { az: "DSD ilə gülüşün dizaynı, mock-up ilə sınaq, cərrahi şablonlar (M-Guide, R2Gate) ilə dəqiq yerləşdirmə.", ru: "Дизайн улыбки по DSD, примерка mock-up, точная установка по хирургическим шаблонам (M-Guide, R2Gate)." },
    accent: { az: "3D · DSD", ru: "3D · DSD" },
    image: "/photos/xray-monitor.jpg",
  },
  {
    label: { az: "Müalicə", ru: "Лечение" },
    title: { az: "Ağrısız və steril.", ru: "Без боли и стерильно." },
    lead: { az: "Cərrahi mərhələ ayrıca, steril şəraitdə, müasir anesteziya ilə aparılır.", ru: "Хирургический этап проходит в стерильных условиях, с современной анестезией." },
    text: { az: "Yararsız dişlərin atravmatik çəkimi, lazım olduqda elə həmin gün implantların yerləşdirilməsi.", ru: "Атравматичное удаление непригодных зубов, при показаниях — установка имплантов в тот же день." },
    accent: { az: "Bir gündə", ru: "За один день" },
    image: "/photos/surgery-2.jpg",
  },
  {
    label: { az: "Laboratoriya", ru: "Лаборатория" },
    title: { az: "Detallarda incəlik.", ru: "Тонкость в деталях." },
    lead: { az: "Vinirlər və zirkonium dişlər CAD/CAM texnologiyası ilə hazırlanır.", ru: "Виниры и циркониевые коронки изготавливаются по технологии CAD/CAM." },
    text: { az: "İmplantasiyada kiçik detallar böyük nəticələrə aparır — forma, rəng və şəffaflıq hər pasiyent üçün ayrıca seçilir.", ru: "В имплантации мелкие детали ведут к большим результатам — форма, цвет и прозрачность подбираются индивидуально." },
    accent: { az: "CAD/CAM", ru: "CAD/CAM" },
    image: "/photos/lab-veneers.jpg",
  },
  {
    label: { az: "Nəticə", ru: "Результат" },
    title: { az: "Yeni gülüş.", ru: "Новая улыбка." },
    lead: { az: "Sınaq, korreksiya və təhvil — siz güzgüdə nəticəni görənə qədər.", ru: "Примерка, коррекция и сдача работы — пока вы не увидите результат в зеркале." },
    text: { az: "Yeni təbəssüm, yeni özünəinam. Təhvildən sonra da qulluq və profilaktik müayinələrlə yanınızdayıq.", ru: "Новая улыбка — новая уверенность. И после сдачи работы мы рядом: уход и профилактические осмотры." },
    accent: { az: "Nəzarət", ru: "Контроль" },
    image: "/photos/smile-veneers.jpg",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: { az: "il praktika", ru: "лет практики" } },
  { value: 11, suffix: "K+", label: { az: "Instagram-da izləyici", ru: "подписчиков в Instagram" } },
  { value: 10, suffix: "+", label: { az: "beynəlxalq konfrans və kurs", ru: "международных конференций и курсов" } },
  { value: 1, suffix: { az: "gün", ru: "день" } as T, label: { az: "All-on-6 ilə yeni gülüş", ru: "— новая улыбка с All-on-6" } },
];

/** Education & conferences — from Instagram posts (2018–2025). */
export const conferences = [
  { year: "2025", place: { az: "Mərakeş", ru: "Марокко" }, title: { az: "Biotech Dental konfransı", ru: "Конференция Biotech Dental" }, photo: "/photos/conf-marrakech.jpg" },
  { year: "2023", place: { az: "İtaliya", ru: "Италия" }, title: { az: "Cowell International Conference (CIC 2023)", ru: "Cowell International Conference (CIC 2023)" }, photo: "/photos/conf-italy.jpg" },
  { year: "2023", place: { az: "Azərbaycan", ru: "Азербайджан" }, title: { az: "II stomatoloji xeyriyyə konfransı", ru: "II стоматологическая благотворительная конференция" }, photo: "/photos/conf-charity.jpg" },
  { year: "2022", place: { az: "Antalya", ru: "Анталья" }, title: { az: "İmplantoloji konfrans", ru: "Имплантологическая конференция" }, photo: "/photos/conf-antalya.jpg" },
  { year: "2022", place: { az: "Gəncə", ru: "Гянджа" }, title: { az: "AZİİB Regional Gəncə konfransı", ru: "Региональная конференция AZİİB в Гяндже" }, photo: "/photos/conf-ganja.jpg" },
  { year: "2021", place: { az: "Misir", ru: "Египет" }, title: { az: "Odontos konfransı", ru: "Конференция Odontos" }, photo: "/photos/conf-egypt.jpg" },
  { year: "2019", place: { az: "Bakı", ru: "Баку" }, title: { az: "İmplantoloqların 8-ci beynəlxalq Xəzər konfransı", ru: "8-я международная Каспийская конференция имплантологов" }, photo: "/photos/conf-caspian.jpg" },
  { year: "2019", place: { az: "İsrail", ru: "Израиль" }, title: { az: "M-Guide — cərrahi şablonlar kursu", ru: "M-Guide — курс по хирургическим шаблонам" }, photo: "/photos/conf-israel.jpg" },
  { year: "2018", place: { az: "Kurs", ru: "Курс" }, title: { az: "MegaGen R2Gate — cərrahi şablonların hazırlanması", ru: "MegaGen R2Gate — изготовление хирургических шаблонов" }, photo: "/photos/conf-megagen.jpg" },
  { year: "2018", place: { az: "Seminar", ru: "Семинар" }, title: { az: "ITI (Straumann) seminarı", ru: "Семинар ITI (Straumann)" }, photo: "/photos/conf-iti.jpg" },
];

export const principles = [
  { title: { az: "Ağrısız", ru: "Без боли" }, text: { az: "Müasir anesteziya və diqqətli iş — müalicədən qorxmağa ehtiyac yoxdur.", ru: "Современная анестезия и бережная работа — лечения можно не бояться." } },
  { title: { az: "Dəqiq", ru: "Точно" }, text: { az: "3D rentgen, rəqəmsal planlama və cərrahi şablonlar.", ru: "3D-снимки, цифровое планирование и хирургические шаблоны." } },
  { title: { az: "Estetik", ru: "Эстетично" }, text: { az: "Forma və rəng üz cizgilərinə uyğun — təbii, harmonik gülüş.", ru: "Форма и цвет под черты лица — естественная, гармоничная улыбка." } },
  { title: { az: "Səmimi", ru: "Искренне" }, text: { az: "Səbirli, gülərüz həkim — böyüklər də, uşaqlar da özünü evdəki kimi hiss edir.", ru: "Терпеливый, улыбчивый врач — и взрослые, и дети чувствуют себя как дома." } },
];

export const backstage = [
  { src: "/photos/doc-turquoise.jpg", alt: { az: "Həkim pasiyentlə", ru: "Врач с пациенткой" } },
  { src: "/photos/lab-zirconia-model.jpg", alt: { az: "Zirkonium dişlər modeldə", ru: "Циркониевые зубы на модели" } },
  { src: "/photos/xray-plan.jpg", alt: { az: "İmplantasiyanın rentgen planı", ru: "Рентген-план имплантации" } },
  { src: "/photos/instruments.jpg", alt: { az: "Steril alətlər", ru: "Стерильные инструменты" } },
  { src: "/photos/clinic-window.jpg", alt: { az: "Kabinetdə qəbul", ru: "Приём в кабинете" } },
];

export const faq: { q: T; a: T }[] = [
  {
    q: { az: "İmplantlar uzunömürlüdürmü?", ru: "Долговечны ли импланты?" },
    a: {
      az: "Bəli. İmplantın ömrü təcrübəli həkimdən, steril cərrahi şəraitdən, keyfiyyətli implant markasından və pasiyentin gigiyenasından asılıdır. Bu şərtlər ödəndikdə implantlar uzun illər, çox vaxt ömürlük xidmət edir.",
      ru: "Да. Срок службы импланта зависит от опыта врача, стерильности операции, качества системы имплантов и гигиены пациента. При соблюдении этих условий импланты служат долгие годы, часто — всю жизнь.",
    },
  },
  {
    q: { az: "İmplant hansı hallarda istifadə olunur?", ru: "В каких случаях ставят имплант?" },
    a: {
      az: "Bir və ya bir neçə diş itirildikdə, körpü üçün sağlam dişləri yonmaq istəmədikdə, çıxan protezdən imtina etmək istədikdə və tam dişsizlikdə (All-on-4 / All-on-6).",
      ru: "Когда утрачен один или несколько зубов, когда не хочется обтачивать здоровые зубы под мост, когда хочется отказаться от съёмного протеза, а также при полном отсутствии зубов (All-on-4 / All-on-6).",
    },
  },
  {
    q: { az: "Vinirlər nədir və kimlərə uyğundur?", ru: "Что такое виниры и кому они подходят?" },
    a: {
      az: "Vinir — dişin ön səthinə yapışdırılan nazik keramik lövhədir. Dişlərin formasından, rəngindən, aralarındakı məsafədən və ya kiçik əyriliklərdən narazı olanlar üçün uyğundur. Dəqiq qərarı müayinədən sonra veririk.",
      ru: "Винир — тонкая керамическая пластинка на передней поверхности зуба. Подходит тем, кого не устраивает форма, цвет зубов, щели между ними или небольшая кривизна. Окончательное решение — после осмотра.",
    },
  },
  {
    q: { az: "Nə zaman plomba, nə zaman kanal müalicəsi?", ru: "Когда пломба, а когда лечение каналов?" },
    a: {
      az: "Çürük sinirə çatmayıbsa — plomba kifayətdir. Gecikdikdə çürük böyüyür, pulpit (sinirin iltihabı) yaranır və kanal müalicəsi tələb olunur. Ona görə vaxt ən önəmli faktordur.",
      ru: "Если кариес не дошёл до нерва — достаточно пломбы. Если затянуть, кариес растёт, развивается пульпит (воспаление нерва) — и нужно лечить каналы. Поэтому время — главный фактор.",
    },
  },
  {
    q: { az: "Ağartma dişlərə ziyan verirmi?", ru: "Вредит ли отбеливание зубам?" },
    a: {
      az: "Keyfiyyətli gel və həkim nəzarəti ilə — xeyr. Bəzən bir gün həssaslıq ola bilər, sonra keçir. Ağardıcı məcunlar isə dişləri ağartmır və uzun müddət istifadədə minanı aşındıra bilər.",
      ru: "При качественном геле и под контролем врача — нет. Иногда сутки может ощущаться чувствительность, затем проходит. А «отбеливающие» пасты зубы не отбеливают и при долгом использовании могут стирать эмаль.",
    },
  },
  {
    q: { az: "Müalicə ağrılı olacaqmı?", ru: "Будет ли больно?" },
    a: {
      az: "Xeyr. Müasir yerli anesteziya ilə həm terapevtik, həm də cərrahi prosedurlar ağrısız keçir. Narahatlığınız varsa, əvvəlcədən danışırıq.",
      ru: "Нет. С современной местной анестезией и терапевтические, и хирургические процедуры проходят без боли. Если есть страх — обсудим заранее.",
    },
  },
];
