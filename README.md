# AYORA — лендинг-каталог

Мобильный лендинг-каталог бытовой техники AYORA. Продажи только через Kaspi.kz:
кнопка «Купить на Kaspi» шлёт событие в пиксели и открывает карточку товара в Kaspi.

Next.js (App Router) + TypeScript + Tailwind v4, статический экспорт (`out/`), без бэкенда.

## Запуск

```bash
npm install
cp .env.example .env.local   # ID пикселей и адрес сайта
npm run dev                  # http://localhost:3000
npm run build                # статический сайт в out/
```

## Где что менять

| Что | Где |
|---|---|
| Товары, цены, ссылки на Kaspi, характеристики, FAQ | `data/products.ts` |
| Ссылка на магазин AYORA на Kaspi, адрес сайта | `data/site.ts` |
| Все тексты интерфейса (главная, «Как купить», доверие) | `lib/i18n.ts` |
| Фото товаров | `public/products/<slug>/1.webp, 2.webp…` (1-е фото = хиро) |
| Цвета, шрифт | `app/globals.css` (`@theme`) |

Добавить товар: новый объект в `products`, фото в `public/products/<slug>/`.
Страница `/p/<slug>/`, sitemap и OpenGraph создадутся сами.

**Правило:** только факты из карточки Kaspi или паспорта товара. `rating` и
`reviewsCount` копировать с Kaspi; если `0` — рейтинг не показывается.

## Перед запуском рекламы (TODO)

Найти все: `grep -rn TODO data lib`

- [ ] `kaspiUrl` каждого товара — ссылка вида `https://kaspi.kz/shop/p/...` (сейчас стоит поиск по AYORA)
- [ ] `sku` — такой же, как в каталоге товаров Meta/TikTok, иначе не сматчится динамический ретаргетинг
- [ ] `rating`, `reviewsCount` — с Kaspi
- [ ] Характеристики обогревателя — дополнить из паспорта (размер, вес, объём бака, площадь, гарантия)
- [ ] Реальные фото вместо заглушек: webp, 1080×1350, до ~150 КБ. Товар — в верхней половине кадра (низ хиро закрыт текстом)
- [ ] Тексты с пометкой TODO (`lib/i18n.ts`, `data/products.ts`)
- [ ] Удалить или заменить товары-заглушки `humidifier`, `kettle`
- [ ] `kaspiShopUrl` в `data/site.ts`
- [ ] `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID` в Vercel → Settings → Environment Variables

Заглушки фото генерирует `node scripts/placeholders.mjs` (существующие файлы не перезаписывает).

## Аналитика

- Пиксели грузятся из `app/layout.tsx`, только если задан ID.
- **PageView** — на каждой странице (первый — сниппет пикселя, дальше — `components/PageViewTracker.tsx`).
- **ViewContent** — на странице товара.
- **InitiateCheckout** (Meta) + **ClickButton** (TikTok) — клик «Купить на Kaspi», затем через 150 мс переход.
- UTM-метки (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) сохраняются
  в sessionStorage и добавляются ко всем событиям.

Kaspi-ссылка — обычный `https://kaspi.kz/shop/p/...`: на телефоне с приложением Kaspi она
открывает приложение (universal link / app link). Во встроенных браузерах Instagram и TikTok
приложение может не открыться автоматически — тогда откроется сайт Kaspi с кнопкой «Открыть в приложении».

## Деплой на Vercel

Импортировать репозиторий — Vercel сам определит Next.js и `output: "export"`.
Добавить переменные окружения и пересобрать.

## Казахский язык (kk)

Все строки интерфейса уже вынесены в `lib/i18n.ts`. Чтобы добавить kk:
1. добавить `"kk"` в `locales` и словарь `kk: Dictionary`;
2. перенести страницы в `app/[lang]/…` и передавать `lang` в `getDictionary()`;
3. текстовые поля `Product` сделать `Record<Locale, string>`.

Шрифт уже подключает `cyrillic-ext` (ә, ғ, қ, ң, ө, ұ, ү, һ, і).
