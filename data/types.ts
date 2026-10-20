/** Icon keys for benefits. Each one maps to a hand-drawn SVG in components/BenefitIcon.tsx. */
export type BenefitIcon =
  | "power"
  | "humidity"
  | "flame"
  | "remote"
  | "timer"
  | "quiet"
  | "leaf"
  | "shield";

export type Benefit = { icon: BenefitIcon; title: string; text: string };
export type Spec = { label: string; value: string };
export type Faq = { q: string; a: string };

export type ProductImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProductVideo = {
  src: string;
  poster: string;
};

export type Product = {
  slug: string;
  sku: string;
  name: string;
  hero: ProductImage;
  /** Pain-point headline shown above the name in the hero. */
  hook: string;
  shortDescription: string;
  /** Price in KZT. */
  price: number;
  /** Product card on Kaspi: https://kaspi.kz/shop/p/... */
  kaspiUrl: string;
  /** Kaspi rating, 0–5. 0 hides the rating block. */
  rating: number;
  /** Kaspi review count. 0 hides the rating block. */
  reviewsCount: number;
  /** First image is the hero (LCP) image. */
  images: ProductImage[];
  video?: ProductVideo;
  benefits: Benefit[];
  specs: Spec[];
  faq: Faq[];
};
