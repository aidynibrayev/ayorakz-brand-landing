/**
 * All UI strings live here. To add Kazakh:
 * 1. add "kk" to `locales` and a `kk` dictionary typed as `Dictionary`;
 * 2. move pages under app/[lang]/ and pass `lang` to getDictionary();
 * 3. make Product text fields `Record<Locale, string>` in data/types.ts.
 */
export const locales = ['ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

const ru = {
  htmlLang: 'ru',
  ogLocale: 'ru_KZ',
  currency: '₸',
  brandTagline: 'Бытовая техника для дома',
  brandDescription: 'AYORA бытовая техника для вашего дома. Покупайте на Kaspi в рассрочку 0-0-12.',
  homeHeroTitle: 'Тепло и уют в каждом доме',
  homeHeroText: 'Техника для дома AYORA с рассрочкой Kaspi.',
  homeHeroCta: 'Смотреть товары',
  catalogTitle: 'Товары',
  buyOnKaspi: 'Купить на Kaspi',
  installmentPrefix: 'или',
  installmentSuffix: '/мес в рассрочку 0-0-12',
  perMonth: '/мес',
  more: 'Подробнее',
  officialSeller: 'Официальный продавец на Kaspi',
  reviews: (n: number) => `${n} ${plural(n, 'отзыв', 'отзыва', 'отзывов')}`,
  benefitsTitle: 'Почему AYORA',
  galleryTitle: 'Фото',
  galleryPrev: 'Предыдущее фото',
  galleryNext: 'Следующее фото',
  gallerySlide: (i: number, n: number) => `Фото ${i} из ${n}`,
  specsTitle: 'Характеристики',
  howToBuyTitle: 'Как купить',
  howToBuySteps: [
    { title: 'Нажмите «Купить на Kaspi»', text: 'Кнопка на этой странице' },
    { title: 'Откроется Kaspi', text: 'Карточка товара в приложении или на сайте' },
    { title: 'Оформите в рассрочку', text: '0-0-12 без переплат, оплата частями' },
  ],
  faqTitle: 'Вопросы',
  trustTitle: 'Покупать у нас просто',
  trustItems: [
    { title: 'Официальный продавец', text: 'Магазин AYORA на Kaspi' },
    { title: 'Рассрочка 0-0-12', text: 'Оформление в приложении Kaspi за пару минут' },
    { title: 'Без предоплаты на сайте', text: 'Оплата и доставка через Kaspi' },
  ],

  homeFaq: [
    {
      q: 'Где купить технику AYORA?',
      a: 'Вы можете приобрести товары бренда AYORA на Kaspi.kz.',
    },
    {
      q: 'Можно ли купить в рассрочку?',
      a: 'Да, при оформлении на Kaspi выберите рассрочку 0-0-12.',
    },
    {
      q: 'Как узнать сроки доставки?',
      a: 'Сроки и стоимость доставки в ваш город показаны в карточке товара на Kaspi.',
    },
  ],
  footerShop: 'Магазин AYORA на Kaspi',
  footerNote: 'Все покупки оформляются на Kaspi.kz',
  notFound: 'Страница не найдена',
  backHome: 'На главную',
};

export type Dictionary = typeof ru;

const dictionaries: Record<Locale, Dictionary> = { ru };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

function plural(n: number, one: string, few: string, many: string) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

/** 26990 -> "26 990 ₸" with a non-breaking space. */
export function formatPrice(value: number, locale: Locale = defaultLocale): string {
  return `${new Intl.NumberFormat('ru-RU').format(value).replace(/\s/g, ' ')} ${getDictionary(locale).currency}`;
}
