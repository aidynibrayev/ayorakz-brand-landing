import type { Product } from './types';

export type { Product } from './types';

/**
 * All catalog products. The site has no backend: edit this file and redeploy.
 *
 * Rules:
 * - Only facts confirmed by the product's Kaspi card or the factory spec sheet.
 * - rating / reviewsCount must be copied from Kaspi. Leave 0 to hide the block.
 * - Images live in /public/products/<slug>/, webp, hero ~1080x1350.
 */
export const products: Product[] = [
  {
    slug: 'fan-heater',
    sku: 'teploventiljator-ayora-ay-900-chernyi-171878025',
    name: 'Тепловентилятор / Обогреватель 2в1 с увлажнением AYORA',
    hook: 'Отопление есть, а дома холодно?',
    shortDescription:
      'Греет комнату и увлажняет воздух одновременно. Живое пламя камина — без дров и дыма.',
    price: 25990,
    kaspiUrl: 'https://l.kaspi.kz/shop/HwN9hYUgxrh4xHV',
    rating: 5,
    reviewsCount: 67,
    hero: { src: '/products/fan-heater/hero.png', alt: 'Обогреватель AYORA 2в1 с эффектом камина' },
    images: [
      { src: '/products/fan-heater/1.png', alt: 'Обогреватель AYORA 2в1 с эффектом камина' },
      {
        src: '/products/fan-heater/2.jpg',
        alt: 'Обогреватель AYORA в интерьере',
      },
      {
        src: '/products/fan-heater/3.jpg',
        alt: 'Пульт дистанционного управления',
      },
      {
        src: '/products/fan-heater/4.jpg',
        alt: 'Резервуар для воды увлажнителя',
      },
      {
        src: '/products/fan-heater/5.jpg',
        alt: 'Резервуар для воды увлажнителя',
      },
      {
        src: '/products/fan-heater/6.jpg',
        alt: 'Резервуар для воды увлажнителя',
      },
      {
        src: '/products/fan-heater/7.jpg',
        alt: 'Резервуар для воды увлажнителя',
      },
    ],
    benefits: [
      { icon: 'power', title: '2000 Вт', text: 'Быстро прогревает комнату даже в сильные морозы' },
      {
        icon: 'humidity',
        title: 'Увлажняет воздух',
        text: 'Не сушит воздух, как обычные обогреватели',
      },
      { icon: 'flame', title: 'Эффект камина', text: 'Мягкий свет живого пламени создаёт уют' },
      { icon: 'remote', title: 'Пульт ДУ', text: 'Управляйте, не вставая с дивана' },
    ],
    specs: [
      { label: 'Мощность', value: '2000 Вт' },
      { label: 'Функции', value: 'Обогрев, увлажнение воздуха, эффект камина' },
      { label: 'Управление', value: 'Пульт ДУ' },
    ],
    faq: [
      {
        q: 'Как купить в рассрочку?',
        a: 'Нажмите «Купить на Kaspi» откроется карточка товара в Kaspi. Выберите «Рассрочка 0-0-12» при оформлении заказа.',
      },
      {
        q: 'Как работает доставка?',
        a: 'Заказ оформляется и доставляется через Kaspi условия и сроки доставки видны в карточке товара.',
      },
    ],
  },

  {
    slug: 'air-purifier',
    sku: 'ochistitel-vozduha-ayora-ay-700-belyi-172465349',
    name: 'Очиститель воздуха AYORA',
    hook: 'Пыль, запахи, смог - очиститель уберёт',
    shortDescription: 'Очищает воздух от пыли, смога и запахов. Управление с телефона через Wi-Fi, работает тихо можно оставить на ночь.',
    price: 69990,
    kaspiUrl: 'https://l.kaspi.kz/shop/BwD43frT5HVpwdV',
    rating: 5,
    reviewsCount: 77,
    hero: { src: '/products/air-purifier/hero.png', alt: 'Очиститель воздуха' },
    images: [
      {
        src: '/products/air-purifier/1.jpeg',
        alt: 'Очиститель воздуха AYORA',
      },
      {
        src: '/products/air-purifier/2.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/2.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/3.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/4.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/5.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/6.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/7.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/8.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
      {
        src: '/products/air-purifier/9.jpg',
        alt: 'Очиститель воздуха AYORA в интерьере',
      },
    ],
    benefits: [],
    specs: [],
    faq: [],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Monthly payment for Kaspi 0-0-12. */
export function installment(price: number): number {
  return Math.ceil(price / 12);
}
