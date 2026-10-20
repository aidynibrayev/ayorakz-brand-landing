import type { Product } from "./types";

export type { Product } from "./types";

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
    slug: "heater-2in1",
    sku: "AYORA-HEATER-2IN1", // TODO: real SKU (must match the Kaspi catalog / pixel catalog)
    name: "Обогреватель 2в1 с увлажнением AYORA",
    hook: "Отопление есть, а дома холодно?",
    // TODO: check copy
    shortDescription:
      "Греет комнату и увлажняет воздух одновременно. Живое пламя камина — без дров и дыма.",
    price: 26990,
    // TODO: paste the product link from Kaspi (https://kaspi.kz/shop/p/...)
    kaspiUrl: "https://kaspi.kz/shop/search/?text=AYORA",
    rating: 0, // TODO: copy from Kaspi
    reviewsCount: 0, // TODO: copy from Kaspi
    // TODO: replace placeholder images with real product photos
    images: [
      { src: "/products/heater-2in1/1.webp", alt: "Обогреватель AYORA 2в1 с эффектом камина", width: 1080, height: 1350 },
      { src: "/products/heater-2in1/2.webp", alt: "Обогреватель AYORA в интерьере", width: 1080, height: 1350 },
      { src: "/products/heater-2in1/3.webp", alt: "Пульт дистанционного управления", width: 1080, height: 1350 },
      { src: "/products/heater-2in1/4.webp", alt: "Резервуар для воды увлажнителя", width: 1080, height: 1350 },
    ],
    // video: { src: "/products/heater-2in1/video.mp4", poster: "/products/heater-2in1/1.webp" },
    // TODO: check copy
    benefits: [
      { icon: "power", title: "2000 Вт", text: "Быстро прогревает комнату даже в сильные морозы" },
      { icon: "humidity", title: "Увлажняет воздух", text: "Не сушит воздух, как обычные обогреватели" },
      { icon: "flame", title: "Эффект камина", text: "Мягкий свет живого пламени создаёт уют" },
      { icon: "remote", title: "Пульт ДУ", text: "Управляйте, не вставая с дивана" },
    ],
    // TODO: add the rest from the spec sheet (size, weight, tank volume, area, warranty...)
    specs: [
      { label: "Мощность", value: "2000 Вт" },
      { label: "Функции", value: "Обогрев, увлажнение воздуха, эффект камина" },
      { label: "Управление", value: "Пульт ДУ" },
    ],
    // TODO: check copy, add product questions (safety, noise, water refill)
    faq: [
      {
        q: "Как купить в рассрочку?",
        a: "Нажмите «Купить на Kaspi» — откроется карточка товара в Kaspi. Выберите «Рассрочка 0-0-12» при оформлении заказа.",
      },
      {
        q: "Можно ли использовать только эффект камина, без обогрева?",
        a: "TODO: уточнить по инструкции.",
      },
      {
        q: "Как работает доставка?",
        a: "Заказ оформляется и доставляется через Kaspi — условия и сроки доставки видны в карточке товара.",
      },
    ],
  },

  // TODO: placeholder product for testing the grid — replace or delete
  {
    slug: "humidifier",
    sku: "AYORA-HUMIDIFIER",
    name: "Увлажнитель воздуха AYORA",
    hook: "Сухо дышать во время отопительного сезона?",
    shortDescription: "TODO: заглушка — описание товара.",
    price: 14990,
    kaspiUrl: "https://kaspi.kz/shop/search/?text=AYORA",
    rating: 0,
    reviewsCount: 0,
    images: [
      { src: "/products/humidifier/1.webp", alt: "Увлажнитель воздуха AYORA", width: 1080, height: 1350 },
      { src: "/products/humidifier/2.webp", alt: "Увлажнитель воздуха AYORA в интерьере", width: 1080, height: 1350 },
    ],
    benefits: [],
    specs: [],
    faq: [],
  },

  // TODO: placeholder product for testing the grid — replace or delete
  {
    slug: "kettle",
    sku: "AYORA-KETTLE",
    name: "Электрочайник AYORA",
    hook: "Устали ждать, пока закипит?",
    shortDescription: "TODO: заглушка — описание товара.",
    price: 9990,
    kaspiUrl: "https://kaspi.kz/shop/search/?text=AYORA",
    rating: 0,
    reviewsCount: 0,
    images: [
      { src: "/products/kettle/1.webp", alt: "Электрочайник AYORA", width: 1080, height: 1350 },
      { src: "/products/kettle/2.webp", alt: "Электрочайник AYORA на кухне", width: 1080, height: 1350 },
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
