import type { T } from "./i18n";

export interface Service {
  slug: string;
  short: T;
  title: T;
  tagline: T;
  badge: T;
  photo: string;
  photo2: string;
  hero: string;
  intro: T;
  /** What the treatment includes / when it is indicated. */
  points: T[];
  steps: { title: T; text: T }[];
  facts: { value: string; label: T }[];
  /** Case ids from cases.ts to show on the page. */
  cases: string[];
}

export const services: Service[] = [
  {
    slug: "implantasiya",
    short: { az: "İmplantasiya", ru: "Имплантация" },
    title: { az: "Diş implantasiyası", ru: "Имплантация зубов" },
    tagline: { az: "İtirilmiş dişlərin implantlarla bərpası", ru: "Восстановление утраченных зубов на имплантах" },
    badge: { az: "Cərrahiyyə", ru: "Хирургия" },
    photo: "/photos/surgery.jpg",
    photo2: "/photos/xray-result.jpg",
    hero: "/photos/surgery-2.jpg",
    intro: {
      az: "İmplant — çəkilmiş dişin yerinə çənə sümüyünə yerləşdirilən süni diş köküdür. Qonşu sağlam dişləri yonmadan itirilmiş dişi funksiya və estetika baxımından tam bərpa edir. Doğru planlama, steril cərrahi şərait və keyfiyyətli implant sistemi uzun ömürlü nəticənin əsasıdır.",
      ru: "Имплант — искусственный корень зуба, который устанавливается в челюстную кость на место удалённого зуба. Он полностью восстанавливает функцию и эстетику, не затрагивая соседние здоровые зубы. Точное планирование, стерильные условия операции и надёжная система имплантов — основа долгого результата.",
    },
    points: [
      { az: "Bir və ya bir neçə dişin itirilməsi", ru: "Отсутствие одного или нескольких зубов" },
      { az: "Çəkimdən dərhal sonra implant (göstəriş olduqda)", ru: "Имплант сразу после удаления (по показаниям)" },
      { az: "3D rentgen və kompüter planlaması", ru: "3D-снимок и компьютерное планирование" },
      { az: "Cərrahi şablonlarla dəqiq yerləşdirmə", ru: "Точная установка по хирургическим шаблонам" },
      { az: "İmplant üzərində zirkonium və ya keramik tac", ru: "Циркониевая или керамическая коронка на импланте" },
    ],
    steps: [
      { title: { az: "Konsultasiya və 3D rentgen", ru: "Консультация и 3D-снимок" }, text: { az: "Sümük həcmini, sinirlərin və sinusların yerləşməsini dəqiq görürük.", ru: "Оцениваем объём кости, расположение нервов и пазух." } },
      { title: { az: "Rəqəmsal planlama", ru: "Цифровое планирование" }, text: { az: "İmplantın ölçüsü, bucağı və gələcək dişin forması əvvəlcədən planlanır.", ru: "Заранее планируем размер, угол импланта и форму будущего зуба." } },
      { title: { az: "Ağrısız cərrahi mərhələ", ru: "Безболезненный хирургический этап" }, text: { az: "Yerli anesteziya altında, steril əməliyyat şəraitində.", ru: "Под местной анестезией, в стерильных операционных условиях." } },
      { title: { az: "Yeni diş", ru: "Новый зуб" }, text: { az: "Sağalmadan sonra implant üzərinə daimi tac hazırlanır və yoxlanılır.", ru: "После приживления на имплант изготавливается и примеряется постоянная коронка." } },
    ],
    facts: [
      { value: "3D", label: { az: "planlama", ru: "планирование" } },
      { value: "8", label: { az: "implant bir çənəyə — real kliniki hal", ru: "имплантов на одну челюсть — реальный случай" } },
    ],
    cases: ["front-implants", "single-implant", "8-implants", "implant-bridge"],
  },
  {
    slug: "all-on-6",
    short: { az: "All-on-4 / All-on-6", ru: "All-on-4 / All-on-6" },
    title: { az: "All-on-4 və All-on-6", ru: "All-on-4 и All-on-6" },
    tagline: { az: "Bir gündə yeni başlanğıc — tam çənənin bərpası", ru: "Новое начало за один день — восстановление всей челюсти" },
    badge: { az: "Tam bərpa", ru: "Полное восстановление" },
    photo: "/photos/xray-allon6.jpg",
    photo2: "/photos/smile-implants.jpg",
    hero: "/photos/xray-allon6-2.jpg",
    intro: {
      az: "Dişləri tamamilə itmiş və ya yararsız olan pasiyentlər üçün konsepsiya: 4 və ya 6 implant üzərində bütöv diş sırası. Çeynəmə nahiyəsində sümük çatışmayanda belə, implantlar bucaq altında yerləşdirilir — sinus qaldırılması kimi ağır cərrahi əməliyyatlar olmadan normal dişlərə sahib olmaq mümkündür.",
      ru: "Концепция для пациентов, у которых зубы полностью утрачены или не подлежат лечению: целый зубной ряд на 4 или 6 имплантах. Даже при нехватке кости в жевательном отделе импланты устанавливаются под углом — можно получить нормальные зубы без тяжёлых операций вроде синус-лифтинга.",
    },
    points: [
      { az: "Yararsız dişlərin atravmatik çəkimi", ru: "Атравматичное удаление непригодных зубов" },
      { az: "Elə həmin gün implantların yerləşdirilməsi", ru: "Установка имплантов в тот же день" },
      { az: "Sümük artırmadan bucaq altında implantlar", ru: "Наклонные импланты без наращивания кости" },
      { az: "Müvəqqəti, sonra daimi zirkonium diş sırası", ru: "Временный, затем постоянный циркониевый зубной ряд" },
    ],
    steps: [
      { title: { az: "Diaqnostika", ru: "Диагностика" }, text: { az: "3D rentgen, ölçülər və gülüş planı.", ru: "3D-снимок, слепки и план улыбки." } },
      { title: { az: "Bir günlük əməliyyat", ru: "Операция за один день" }, text: { az: "Çəkim və 4–6 implantın yerləşdirilməsi bir seansda.", ru: "Удаление и установка 4–6 имплантов за один визит." } },
      { title: { az: "Müvəqqəti dişlər", ru: "Временные зубы" }, text: { az: "Pasiyent dişsiz qalmır — müvəqqəti diş sırası qoyulur.", ru: "Пациент не остаётся без зубов — фиксируется временный ряд." } },
      { title: { az: "Daimi konstruksiya", ru: "Постоянная конструкция" }, text: { az: "İmplantlar sümüklə birləşdikdən sonra zirkonium dişlər.", ru: "После приживления имплантов — циркониевые зубы." } },
    ],
    facts: [
      { value: "1", label: { az: "gündə implantlar və yeni gülüş", ru: "день — импланты и новая улыбка" } },
      { value: "6", label: { az: "implant hər çənəyə", ru: "имплантов на каждую челюсть" } },
    ],
    cases: ["allon6", "8-implants", "overdenture"],
  },
  {
    slug: "vinirler",
    short: { az: "Vinirlər", ru: "Виниры" },
    title: { az: "Vinirlərin hazırlanması", ru: "Изготовление виниров" },
    tagline: { az: "Forma, rəng və simmetriya — minimal müdaxilə ilə", ru: "Форма, цвет и симметрия — с минимальным вмешательством" },
    badge: { az: "Estetika", ru: "Эстетика" },
    photo: "/photos/lab-veneers.jpg",
    photo2: "/photos/smile-veneers.jpg",
    hero: "/photos/lab-veneers-2.jpg",
    intro: {
      az: "Vinirlər — dişin ön səthinə yapışdırılan nazik keramik lövhələrdir. Dişin forması pasiyentin xoşuna gəlmədikdə, kiçik əyriliklər, aralar (diastema) və rəng fərqləri olduqda ən ideal estetik seçimdir. Mock-up ilə nəticəni müalicədən əvvəl ağızda görürsünüz.",
      ru: "Виниры — тонкие керамические пластинки, которые фиксируются на переднюю поверхность зуба. Идеальное эстетическое решение, когда не нравится форма зубов, есть небольшая кривизна, щели (диастема) или неравномерный цвет. С mock-up вы видите результат во рту ещё до лечения.",
    },
    points: [
      { az: "Diastema və formaca normal olmayan dişlər", ru: "Диастема и зубы неправильной формы" },
      { az: "Rəngi dəyişmiş, ləkəli dişlər", ru: "Потемневшие зубы, пятна на эмали" },
      { az: "Mock-up — nəticəni əvvəlcədən sınamaq", ru: "Mock-up — примерка результата заранее" },
      { az: "Lamina və press-keramika vinirlər", ru: "Ламинаты и виниры из пресс-керамики" },
      { az: "Bəzən dişləri yonmadan", ru: "В ряде случаев — без препарирования" },
    ],
    steps: [
      { title: { az: "Gülüş analizi", ru: "Анализ улыбки" }, text: { az: "Foto, video və üz cizgilərinə uyğun dizayn.", ru: "Фото, видео и дизайн под черты лица." } },
      { title: { az: "Mock-up", ru: "Mock-up" }, text: { az: "Gələcək dişlərin forması ağızda sınaqdan keçirilir.", ru: "Форма будущих зубов примеряется прямо во рту." } },
      { title: { az: "Hazırlıq və ölçü", ru: "Подготовка и слепок" }, text: { az: "Minimal hazırlıq, rəqəmsal ölçü.", ru: "Минимальная подготовка, цифровой слепок." } },
      { title: { az: "Fiksasiya", ru: "Фиксация" }, text: { az: "Laboratoriyada hazırlanmış vinirlər yapışdırılır.", ru: "Изготовленные в лаборатории виниры фиксируются." } },
    ],
    facts: [
      { value: "0,5", label: { az: "mm — vinirin orta qalınlığı", ru: "мм — средняя толщина винира" } },
      { value: "DSD", label: { az: "rəqəmsal gülüş dizaynı", ru: "цифровой дизайн улыбки" } },
    ],
    cases: ["veneers", "diastema", "rehab"],
  },
  {
    slug: "zirkonium",
    short: { az: "Zirkonium tac", ru: "Циркониевые коронки" },
    title: { az: "Zirkonium və keramik taclar", ru: "Циркониевые и керамические коронки" },
    tagline: { az: "Möhkəm, təbii görünən və uzun ömürlü dişlər", ru: "Прочные, естественные и долговечные зубы" },
    badge: { az: "Ortopediya", ru: "Ортопедия" },
    photo: "/photos/lab-zirconia.jpg",
    photo2: "/photos/smile-zirconia.jpg",
    hero: "/photos/smile-zirconia-2.jpg",
    intro: {
      az: "Zirkonium — həm öz dişlərin, həm də implantların üzərinə qoyulan ən möhkəm və estetik materiallardan biridir. Dişlərin forması, rəngi və ümumi görünüşü üz cizgilərinə uyğun yenidən dizayn edilir: harmonik, təbii təbəssüm və yeni özünəinam.",
      ru: "Цирконий — один из самых прочных и эстетичных материалов для коронок на собственные зубы и на импланты. Форма, цвет и общий вид зубов заново проектируются под черты лица: гармоничная, естественная улыбка и новая уверенность в себе.",
    },
    points: [
      { az: "Köhnə qapaqların dəyişdirilməsi", ru: "Замена старых коронок" },
      { az: "Çox dağılmış və rəngi dəyişmiş dişlər", ru: "Сильно разрушенные и потемневшие зубы" },
      { az: "İmplant üzərində taclar və körpülər", ru: "Коронки и мосты на имплантах" },
      { az: "CAD/CAM — rəqəmsal ölçü və frezləmə", ru: "CAD/CAM — цифровой слепок и фрезеровка" },
      { az: "Metal-keramika və press-keramika", ru: "Металлокерамика и пресс-керамика" },
    ],
    steps: [
      { title: { az: "Plan", ru: "План" }, text: { az: "Dişlərin vəziyyəti və gələcək formanın dizaynı.", ru: "Оценка зубов и дизайн будущей формы." } },
      { title: { az: "Hazırlıq", ru: "Подготовка" }, text: { az: "Dişlərin hazırlanması, müvəqqəti taclar.", ru: "Подготовка зубов, временные коронки." } },
      { title: { az: "Rəqəmsal ölçü", ru: "Цифровой слепок" }, text: { az: "CAD/CAM ilə dəqiq hazırlanma.", ru: "Точное изготовление по технологии CAD/CAM." } },
      { title: { az: "Təhvil", ru: "Сдача работы" }, text: { az: "Sınaq, korreksiya və fiksasiya.", ru: "Примерка, коррекция и фиксация." } },
    ],
    facts: [
      { value: "CAD/CAM", label: { az: "rəqəmsal texnologiya", ru: "цифровая технология" } },
      { value: "100%", label: { az: "metalsız estetika", ru: "эстетика без металла" } },
    ],
    cases: ["zirconia", "metal-ceramic", "rehab"],
  },
  {
    slug: "gulus-dizayni",
    short: { az: "Gülüş dizaynı", ru: "Дизайн улыбки" },
    title: { az: "Rəqəmsal gülüş dizaynı (DSD)", ru: "Цифровой дизайн улыбки (DSD)" },
    tagline: { az: "Yeni gülüşü müalicədən əvvəl görün", ru: "Увидеть новую улыбку до начала лечения" },
    badge: { az: "DSD", ru: "DSD" },
    photo: "/photos/dsd-smile.jpg",
    photo2: "/photos/doc-standing.jpg",
    hero: "/photos/dsd-after.jpg",
    intro: {
      az: "Digital Smile Design — foto və videolar əsasında gülüşün rəqəmsal layihəsi. Dişlərin uzunluğu, eni, simmetriyası və diş əti xətti üzünüzə uyğun planlanır, sonra implantlar, zirkonium və vinirlərlə reallaşdırılır.",
      ru: "Digital Smile Design — цифровой проект улыбки по фото и видео. Длина, ширина и симметрия зубов, линия десны планируются под ваше лицо, а затем воплощаются с помощью имплантов, циркония и виниров.",
    },
    points: [
      { az: "Üz və dodaqlara uyğun proporsiyalar", ru: "Пропорции под лицо и губы" },
      { az: "Kompleks hallar: implant + zirkonium + vinir", ru: "Комплексные случаи: имплант + цирконий + виниры" },
      { az: "Gummy smile — diş əti xəttinin korreksiyası", ru: "Gummy smile — коррекция линии десны" },
      { az: "Mock-up ilə nəticənin sınağı", ru: "Примерка результата с mock-up" },
    ],
    steps: [
      { title: { az: "Foto və video", ru: "Фото и видео" }, text: { az: "Gülüşün və üz ifadələrinin analizi.", ru: "Анализ улыбки и мимики." } },
      { title: { az: "Rəqəmsal layihə", ru: "Цифровой проект" }, text: { az: "Kompüterdə yeni gülüşün modeli.", ru: "Модель новой улыбки на компьютере." } },
      { title: { az: "Sınaq", ru: "Примерка" }, text: { az: "Mock-up ilə ağızda yoxlama.", ru: "Проверка во рту с помощью mock-up." } },
      { title: { az: "Reallaşdırma", ru: "Воплощение" }, text: { az: "Planlanmış konstruksiyaların hazırlanması.", ru: "Изготовление запланированных конструкций." } },
    ],
    facts: [
      { value: "1:1", label: { az: "plan və nəticə", ru: "план и результат" } },
      { value: "DSD", label: { az: "Digital Smile Design", ru: "Digital Smile Design" } },
    ],
    cases: ["zirconia", "veneers", "8-implants"],
  },
  {
    slug: "agrisiz-mualice",
    short: { az: "Ağrısız müalicə", ru: "Безболезненное лечение" },
    title: { az: "Ağrısız müalicə və bərpa", ru: "Безболезненное лечение и реставрация" },
    tagline: { az: "Karies, kanal müalicəsi və estetik plombalar", ru: "Кариес, лечение каналов и эстетические пломбы" },
    badge: { az: "Terapiya", ru: "Терапия" },
    photo: "/photos/work-light.jpg",
    photo2: "/photos/filling-front.jpg",
    hero: "/photos/doc-shield.jpg",
    intro: {
      az: "Dişlərin müalicəsində vaxt ən önəmli faktorlardan biridir: bu gün kiçik çürük sadə plomba ilə həll olunur, gecikdikdə isə kanal müalicəsi tələb edə bilər. Tam ağrısız və keyfiyyətli müalicə ilə dişiniz yenidən sağlam görünüş qazanır.",
      ru: "Время — один из главных факторов в лечении зубов: сегодня небольшой кариес решается простой пломбой, а если затянуть — может понадобиться лечение каналов. Полностью безболезненное и качественное лечение возвращает зубу здоровый вид.",
    },
    points: [
      { az: "Karies və pulpitin müalicəsi", ru: "Лечение кариеса и пульпита" },
      { az: "Kanal müalicəsi", ru: "Лечение каналов" },
      { az: "Ön dişlərin estetik plombalarla bərpası", ru: "Восстановление передних зубов эстетическими пломбами" },
      { az: "Qırılmış dişlərin ştiftlərlə bərpası", ru: "Восстановление сломанных зубов на штифтах" },
      { az: "Ağıl dişlərinin çəkimi", ru: "Удаление зубов мудрости" },
    ],
    steps: [
      { title: { az: "Müayinə", ru: "Осмотр" }, text: { az: "Rentgen və diaqnoz — plomba, yoxsa kanal?", ru: "Снимок и диагноз — пломба или каналы?" } },
      { title: { az: "Anesteziya", ru: "Анестезия" }, text: { az: "Müasir yerli anesteziya — prosedur ağrısızdır.", ru: "Современная местная анестезия — процедура без боли." } },
      { title: { az: "Müalicə", ru: "Лечение" }, text: { az: "Çürüyün təmizlənməsi, lazım olduqda kanallar.", ru: "Очистка кариеса, при необходимости — каналы." } },
      { title: { az: "Bərpa", ru: "Реставрация" }, text: { az: "Dişin forması və rəngi estetik materialla bərpa olunur.", ru: "Форма и цвет зуба восстанавливаются эстетичным материалом." } },
    ],
    facts: [
      { value: "0", label: { az: "ağrı — müasir anesteziya", ru: "боли — современная анестезия" } },
      { value: "6", label: { az: "ayda bir profilaktik müayinə", ru: "месяцев — интервал профосмотра" } },
    ],
    cases: ["single-implant", "front-implants"],
  },
  {
    slug: "agartma",
    short: { az: "Ağartma və gigiyena", ru: "Отбеливание и гигиена" },
    title: { az: "Peşəkar ağartma və gigiyena", ru: "Профессиональное отбеливание и гигиена" },
    tagline: { az: "Air Flow, diş daşlarının təmizlənməsi və ağartma", ru: "Air Flow, снятие зубного камня и отбеливание" },
    badge: { az: "Gigiyena", ru: "Гигиена" },
    photo: "/photos/smile-zirconia-3.jpg",
    photo2: "/photos/work-patient.jpg",
    hero: "/photos/smile-veneers-2.jpg",
    intro: {
      az: "Ağız gigiyenası qeyri-kafi olduqda bakteriya ərpi təxminən 14 gün ərzində diş daşına çevrilir. Skaler və Air Flow ilə peşəkar təmizlik diş əti problemlərinin, ağız qoxusunun qarşısını alır. Ağartma isə yalnız həkim nəzarəti ilə — keyfiyyətli gel minaya ziyan vermir.",
      ru: "При недостаточной гигиене бактериальный налёт примерно за 14 дней превращается в зубной камень. Профессиональная чистка скейлером и Air Flow предупреждает проблемы с дёснами и неприятный запах. Отбеливание — только под контролем врача: качественный гель не вредит эмали.",
    },
    points: [
      { az: "Diş daşlarının skalerlə təmizlənməsi", ru: "Снятие зубного камня скейлером" },
      { az: "Air Flow — ərp və piqmentlərin təmizlənməsi", ru: "Air Flow — удаление налёта и пигмента" },
      { az: "Kabinetdə peşəkar ağartma", ru: "Профессиональное отбеливание в кабинете" },
      { az: "Ev qulluğu üzrə tövsiyələr", ru: "Рекомендации по домашнему уходу" },
    ],
    steps: [
      { title: { az: "Müayinə", ru: "Осмотр" }, text: { az: "Diş əti və minanın vəziyyəti.", ru: "Состояние дёсен и эмали." } },
      { title: { az: "Təmizlik", ru: "Чистка" }, text: { az: "Skaler + Air Flow + cilalama.", ru: "Скейлер + Air Flow + полировка." } },
      { title: { az: "Ağartma", ru: "Отбеливание" }, text: { az: "İstəyə görə — peşəkar sistem ilə.", ru: "По желанию — профессиональной системой." } },
      { title: { az: "Qulluq", ru: "Уход" }, text: { az: "Fərdi tövsiyələr və növbəti vizit.", ru: "Индивидуальные рекомендации и следующий визит." } },
    ],
    facts: [
      { value: "14", label: { az: "gün — ərp diş daşına çevrilir", ru: "дней — налёт превращается в камень" } },
      { value: "2×", label: { az: "ildə peşəkar gigiyena", ru: "в год — профгигиена" } },
    ],
    cases: ["veneers", "zirconia"],
  },
];

export const serviceBySlug = new Map(services.map((s) => [s.slug, s]));
