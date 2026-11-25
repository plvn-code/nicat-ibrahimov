# Nicat İbrahimov — сайт стоматолога (клиент)

Стоматолог-ортопед / имплантолог **Nicat İbrahimov** (Ниджат Ибрагимов), Баку. Instagram @stomatoloq.nicat.ibrahimov (11K), тел./WhatsApp +994 55 573 71 62.
Бриф (25.11.2026): «дорогой классный сайт с анимациями, бело-бирюзовый, в стиле calmrage.vercel.app; основной язык азербайджанский + русская версия».
Бирюзовый #33AFA4 — цвет обложек его хайлайтов в Instagram. Логотип — монограмма N с имплантом (перерисована в SVG по водяному знаку, `src/components/Logo.tsx`).

**С пользователем говорим по-русски.** Тексты сайта — AZ (основной) и RU.

Сначала читай `docs/STATUS.md` (там вопросы к клиенту).

## Команды

```bash
npm run build && npm start          # production на :3033
npm run lint && npx tsc --noEmit    # должны быть чистыми
kill $(lsof -ti tcp:3033 -sTCP:LISTEN)   # перезапуск — убивать только свой порт
open -a "Google Chrome" http://localhost:3033
~/Desktop/website/aliot/research/.venv/bin/python scripts/build_media.py [--video]   # пересобрать фото/видео из originals/
```

`node_modules` — симлинк на `~/Desktop/website/aliot/node_modules` (тот же package.json). Если aliot удалят — `rm node_modules && npm install`.

## Стек

Next.js 15 App Router · React 19 · TypeScript strict · plain CSS (`src/app/globals.css`, токены в `:root`) · next/font (Montserrat 800 uppercase + Inter, latin-ext + cyrillic). Без БД и бэкенда.

## Языки

- AZ без префикса (`/`, `/xidmetler`), RU под `/ru` (`/ru/xidmetler`). `src/middleware.ts` переписывает `/…` → `/az/…`, `/az/…` редиректит 308 на адрес без префикса.
- Дерево страниц — `src/app/[lang]/…` (root layout = `[lang]/layout.tsx`, `<html lang>` по языку).
- Двуязычные строки — тип `T = { az, ru }` (`src/lib/i18n.ts`, `tr()`), общие UI-строки — `ui`. Клиентские компоненты берут язык из `useLang()`.
- Ссылки только через `href(lang, path)`. Бренд в логотипе — литерал «NICAT IBRAHIMOV» (uppercase в az превращает i → İ).

## Структура

```
src/app/[lang]/     / · /xidmetler · /xidmetler/[slug] (7 услуг) · /isler (11 до/после + лаборатория + рентген) · /hekim · /elaqe · 404
src/lib/            i18n.ts · site.ts (контакты) · services.ts · cases.ts · content.ts (бегущие строки, история, цифры, конференции, FAQ…)
src/components/     Header (AZ/RU, мобильное меню), Announce, Logo (SVG-монограмма), Sections (PageHero, Ticker, Faq, CtaBand, ContactCards, Footer),
                    BeforeAfter, CasesShowcase, Effects ([data-reveal], [data-reveal="img"] — шторка, [data-count]), booking/ (панель + форма → WhatsApp)
  home/             Intro (монограмма рисуется, раз за сессию), ServiceRail, Story (sticky)
public/photos/      собраны scripts/build_media.py из originals/ (посты, кадры рилсов, коллажи до/после разрезаны пополам)
public/video/       surgery.mp4 (видео-блок на главной), work.mp4
originals/, research/  — только локально (ig.json — все посты, hl.json — хайлайты)
```

Запись: любая кнопка «Qəbula yazıl» открывает панель; форма собирает готовое сообщение и открывает WhatsApp на +994555737162 (сервера нет — работает на любом хостинге).
