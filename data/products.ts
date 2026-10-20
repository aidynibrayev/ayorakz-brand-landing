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
    benefits: [
      {
        icon: 'shield',
        title: 'HEPA H13',
        text: 'Удаляет до 99,95% пыли, пыльцы, шерсти и частиц PM2.5',
      },
      {
        icon: 'leaf',
        title: 'До 50 м²',
        text: '468 м³/ч — справится с гостиной, большой спальней или студией',
      },
      {
        icon: 'quiet',
        title: 'Всего 28 дБ',
        text: 'Работает тихо — можно оставить на ночь в спальне или детской',
      },
      {
        icon: 'remote',
        title: 'Управление со смартфона',
        text: 'Автоматически подстраивает очистку под уровень загрязнения',
      },
    ],
    specs: [
      { label: 'Площадь', value: 'До 50 м²' },
      { label: 'Воздухообмен', value: '468 м³/ч' },
      { label: 'Фильтры', value: 'Предварительный, угольный, HEPA H13' },
      { label: 'Эффективность', value: 'До 99,95% загрязнений' },
      { label: 'Уровень шума', value: '28 дБ' },
      { label: 'Мощность', value: '48 Вт' },
      { label: 'Режимы', value: 'Авто, ионизация, ароматизация' },
      { label: 'Управление', value: 'Сенсорное, со смартфона' },
      { label: 'Функции', value: 'Дисплей, таймер, датчик качества воздуха, подсветка' },
      { label: 'Индикация', value: 'Качество воздуха, загрязнение фильтра, режимы' },
      { label: 'Размеры (Ш×В×Г)', value: '250 × 450 × 250 мм' },
      { label: 'Вес', value: '3,5 кг' },
    ],
    faq: [
      {
        q: 'Поможет при аллергии и с шерстью животных?',
        a: 'Да. HEPA-фильтр H13 задерживает до 99,95% пыли, пыльцы, шерсти и мельчайших частиц PM2.5, а угольный фильтр убирает запахи.',
      },
      {
        q: 'Можно оставить на ночь?',
        a: 'Да, уровень шума — всего 28 дБ. Есть таймер, чтобы прибор отключился сам.',
      },
      {
        q: 'Нужно ли его настраивать?',
        a: 'Нет. Встроенный датчик сам определяет уровень загрязнения и подстраивает интенсивность очистки. При желании управляйте со смартфона.',
      },
      {
        q: 'Как понять, что пора менять фильтр?',
        a: 'На приборе есть индикатор загрязнения фильтра — он подскажет, когда пора заменить.',
      },
      {
        q: 'Как купить в рассрочку?',
        a: 'Нажмите «Купить на Kaspi» — откроется карточка товара в Kaspi. Выберите «Рассрочка 0-0-12» при оформлении заказа.',
      },
      {
        q: 'Как работает доставка?',
        a: 'Заказ оформляется и доставляется через Kaspi — условия и сроки доставки видны в карточке товара.',
      },
    ],
  },

  {
    slug: 'meat-grinder',
    sku: 'mjasorubka-ayora-ay-m1-seryi-chernyi-177134807',
    name: 'Электрическая мясорубка AYORA AY-M1 с овощерезкой',
    hook: 'Домашний фарш без химии — за минуты',
    shortDescription:
      'Мясорубка и овощерезка в одном корпусе. 2500 Вт перекручивают до 2,5 кг мяса в минуту, реверс выручает, если шнек забился.',
    price: 37990,
    kaspiUrl: 'https://l.kaspi.kz/shop/5UbBqnh8HyEer8E',
    rating: 5,
    reviewsCount: 42,
    hero: { src: '/products/meat-grinder/1.jpg', alt: 'Электрическая мясорубка AYORA AY-M1' },
    images: [
      { src: '/products/meat-grinder/1.jpg', alt: 'Электрическая мясорубка AYORA AY-M1' },
      { src: '/products/meat-grinder/2.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 2' },
      { src: '/products/meat-grinder/3.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 3' },
      { src: '/products/meat-grinder/4.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 4' },
      { src: '/products/meat-grinder/5.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 5' },
      { src: '/products/meat-grinder/6.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 6' },
      { src: '/products/meat-grinder/7.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 7' },
      { src: '/products/meat-grinder/8.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 8' },
      { src: '/products/meat-grinder/9.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 9' },
      { src: '/products/meat-grinder/10.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 10' },
      { src: '/products/meat-grinder/11.jpg', alt: 'Мясорубка AYORA AY-M1 — фото 11' },
    ],
    benefits: [
      {
        icon: 'power',
        title: '2500 Вт',
        text: 'Справляется даже с жилистым мясом — до 2,5 кг фарша в минуту',
      },
      {
        icon: 'leaf',
        title: '2 в 1: + овощерезка',
        text: '5 барабанов: тёрки, соломка, слайсер и «волна» — салаты за минуты',
      },
      {
        icon: 'timer',
        title: '11 насадок',
        text: '3 решётки (3, 5, 7 мм), насадки для колбас и кеббе',
      },
      {
        icon: 'shield',
        title: 'Реверс и защита',
        text: 'Реверс против заклинивания, защита мотора от перегрева и перегрузки',
      },
    ],
    specs: [
      { label: 'Мощность', value: '2500 Вт' },
      { label: 'Производ-сть', value: '2,5 кг/мин' },
      { label: 'Скорости', value: '2 + реверс' },
      { label: 'Решётки для фарша', value: '3 шт: 3, 5 и 7 мм' },
      { label: 'Овощерезка', value: '5 барабанов' },
      { label: 'Доп. насадки', value: 'Для колбас, для кеббе' },
      { label: 'Непрерывная работа', value: 'До 20 мин' },
      { label: 'Материал', value: 'Нержавеющая сталь / пластик, стальной лоток' },
      { label: 'Размеры', value: '235 × 140 × 196 мм' },
      { label: 'Вес', value: '3 кг' },
      { label: 'Гарантия', value: '1 год' },
    ],
    faq: [
      {
        q: 'Справится с жилистым мясом?',
        a: 'Да. Мотор 2500 Вт, а если шнек забьётся жилами — включите реверс, разбирать ничего не нужно.',
      },
      {
        q: 'Какие насадки в комплекте?',
        a: '3 решётки для фарша (3, 5, 7 мм), насадка для колбас, насадка для кеббе и 5 барабанов овощерезки.',
      },
      {
        q: 'Как купить в рассрочку?',
        a: 'Нажмите «Купить на Kaspi» — откроется карточка товара в Kaspi. Выберите «Рассрочка 0-0-12» при оформлении заказа.',
      },
      {
        q: 'Как работает доставка?',
        a: 'Заказ оформляется и доставляется через Kaspi — условия и сроки доставки видны в карточке товара.',
      },
    ],
  },

  {
    slug: 'blender-gray',
    sku: 'blender-statsionarnyi-ayora-ay-09-seryi-178239057',
    name: 'Стационарный блендер AYORA AY-09, серый',
    hook: 'Смузи, соусы и коктейли — за секунды',
    shortDescription:
      'Блендер 3 в 1: стеклянная чаша 1,5 л, кофемолка и дорожная бутылочка в комплекте. 1200 Вт и 20 000 об/мин.',
    price: 29990,
    kaspiUrl:
      'https://kaspi.kz/shop/p/blender-statsionarnyi-ayora-ay-09-seryi-178239057/?c=750000000&m=30248238&ms=true',
    rating: 5,
    reviewsCount: 19,
    hero: { src: '/products/blender-gray/1.jpg', alt: 'Стационарный блендер AYORA AY-09 серый' },
    images: [
      { src: '/products/blender-gray/1.jpg', alt: 'Стационарный блендер AYORA AY-09 серый' },
      { src: '/products/blender-gray/2.jpg', alt: 'Блендер AYORA AY-09 серый — фото 2' },
      { src: '/products/blender-gray/3.jpg', alt: 'Блендер AYORA AY-09 серый — фото 3' },
      { src: '/products/blender-gray/4.jpg', alt: 'Блендер AYORA AY-09 серый — фото 4' },
      { src: '/products/blender-gray/5.jpg', alt: 'Блендер AYORA AY-09 серый — фото 5' },
      { src: '/products/blender-gray/6.jpg', alt: 'Блендер AYORA AY-09 серый — фото 6' },
      { src: '/products/blender-gray/7.jpg', alt: 'Блендер AYORA AY-09 серый — фото 7' },
      { src: '/products/blender-gray/8.jpg', alt: 'Блендер AYORA AY-09 серый — фото 8' },
      { src: '/products/blender-gray/9.jpg', alt: 'Блендер AYORA AY-09 серый — фото 9' },
      { src: '/products/blender-gray/10.jpg', alt: 'Блендер AYORA AY-09 серый — фото 10' },
      { src: '/products/blender-gray/11.jpg', alt: 'Блендер AYORA AY-09 серый — фото 11' },
      { src: '/products/blender-gray/12.jpg', alt: 'Блендер AYORA AY-09 серый — фото 12' },
      { src: '/products/blender-gray/13.jpg', alt: 'Блендер AYORA AY-09 серый — фото 13' },
    ],
    benefits: [
      { icon: 'power', title: '1200 Вт', text: '20 000 об/мин — смузи, соусы и коктейли за секунды' },
      { icon: 'leaf', title: 'Стеклянная чаша 1,5 л', text: 'Прочное стекло, объёма хватит на всю семью' },
      { icon: 'timer', title: '3 в 1', text: 'Кофемолка и дорожная бутылочка уже в комплекте' },
      { icon: 'shield', title: 'Гарантия 1 год', text: 'Ножи из нержавеющей стали, корпус металл + пластик' },
    ],
    specs: [
      { label: 'Мощность', value: '1200 Вт' },
      { label: 'Скорость вращения', value: 'До 20 000 об/мин' },
      { label: 'Режимы', value: '2 скорости + импульсный' },
      { label: 'Чаша', value: 'Стекло, 1,5 л' },
      { label: 'В комплекте', value: 'Кофемолка, дорожная бутылочка, мерный стакан' },
      { label: 'Ножи', value: 'Нержавеющая сталь' },
      { label: 'Корпус', value: 'Металл, пластик' },
      { label: 'Вес', value: '3 кг' },
      { label: 'Гарантия', value: '1 год' },
    ],
    faq: [
      {
        q: 'Можно молоть кофе?',
        a: 'Да, кофемолка идёт в комплекте — вместе с дорожной бутылочкой.',
      },
      {
        q: 'Какие режимы работы?',
        a: '2 скорости и импульсный режим. Мощность 1200 Вт, до 20 000 об/мин.',
      },
      {
        q: 'Как купить в рассрочку?',
        a: 'Нажмите «Купить на Kaspi» — откроется карточка товара в Kaspi. Выберите «Рассрочка 0-0-12» при оформлении заказа.',
      },
      {
        q: 'Как работает доставка?',
        a: 'Заказ оформляется и доставляется через Kaspi — условия и сроки доставки видны в карточке товара.',
      },
    ],
  },

  {
    slug: 'blender-black',
    sku: 'blender-statsionarnyi-ayora-ay-09-chernyi-178239081',
    name: 'Стационарный блендер AYORA AY-09, чёрный',
    hook: 'Смузи, соусы и коктейли — за секунды',
    shortDescription:
      'Блендер 3 в 1: стеклянная чаша 1,5 л, кофемолка и дорожная бутылочка в комплекте. 1200 Вт и 20 000 об/мин.',
    price: 29990,
    kaspiUrl:
      'https://kaspi.kz/shop/p/blender-statsionarnyi-ayora-ay-09-chernyi-178239081/?c=750000000&m=30248238&ms=true',
    rating: 5,
    reviewsCount: 19,
    hero: { src: '/products/blender-black/1.jpg', alt: 'Стационарный блендер AYORA AY-09 чёрный' },
    images: [
      { src: '/products/blender-black/1.jpg', alt: 'Стационарный блендер AYORA AY-09 чёрный' },
      { src: '/products/blender-black/2.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 2' },
      { src: '/products/blender-black/3.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 3' },
      { src: '/products/blender-black/4.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 4' },
      { src: '/products/blender-black/5.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 5' },
      { src: '/products/blender-black/6.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 6' },
      { src: '/products/blender-black/7.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 7' },
      { src: '/products/blender-black/8.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 8' },
      { src: '/products/blender-black/9.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 9' },
      { src: '/products/blender-black/10.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 10' },
      { src: '/products/blender-black/11.jpg', alt: 'Блендер AYORA AY-09 чёрный — фото 11' },
    ],
    benefits: [
      { icon: 'power', title: '1200 Вт', text: '20 000 об/мин — смузи, соусы и коктейли за секунды' },
      { icon: 'leaf', title: 'Стеклянная чаша 1,5 л', text: 'Прочное стекло, объёма хватит на всю семью' },
      { icon: 'timer', title: '3 в 1', text: 'Кофемолка и дорожная бутылочка уже в комплекте' },
      { icon: 'shield', title: 'Гарантия 1 год', text: 'Ножи из нержавеющей стали, корпус металл + пластик' },
    ],
    specs: [
      { label: 'Мощность', value: '1200 Вт' },
      { label: 'Скорость вращения', value: 'До 20 000 об/мин' },
      { label: 'Режимы', value: '2 скорости + импульсный' },
      { label: 'Чаша', value: 'Стекло, 1,5 л' },
      { label: 'В комплекте', value: 'Кофемолка, дорожная бутылочка, мерный стакан' },
      { label: 'Ножи', value: 'Нержавеющая сталь' },
      { label: 'Корпус', value: 'Металл, пластик' },
      { label: 'Размеры (Ш×В×Г)', value: '33,3 × 21,3 × 35 см' },
      { label: 'Вес', value: '3 кг' },
      { label: 'Гарантия', value: '1 год' },
    ],
    faq: [
      {
        q: 'Можно молоть кофе?',
        a: 'Да, кофемолка идёт в комплекте — вместе с дорожной бутылочкой.',
      },
      {
        q: 'Какие режимы работы?',
        a: '2 скорости и импульсный режим. Мощность 1200 Вт, до 20 000 об/мин.',
      },
      {
        q: 'Как купить в рассрочку?',
        a: 'Нажмите «Купить на Kaspi» — откроется карточка товара в Kaspi. Выберите «Рассрочка 0-0-12» при оформлении заказа.',
      },
      {
        q: 'Как работает доставка?',
        a: 'Заказ оформляется и доставляется через Kaspi — условия и сроки доставки видны в карточке товара.',
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Monthly payment for Kaspi 0-0-12. */
export function installment(price: number): number {
  return Math.ceil(price / 12);
}
