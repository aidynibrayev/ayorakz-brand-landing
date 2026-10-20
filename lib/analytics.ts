import type { Product } from "@/data/types";

type Fbq = (...args: unknown[]) => void;
type Ttq = {
  page: () => void;
  track: (event: string, params?: Record<string, unknown>) => void;
};

declare global {
  interface Window {
    fbq?: Fbq;
    ttq?: Ttq;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
export const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const UTM_STORAGE_KEY = "ayora_utm";

/**
 * Returns UTM tags for this session. UTM tags in the current URL are saved
 * first (a new campaign overwrites the old one), so the first event on a
 * landing page already carries them.
 */
export function getUtm(): Record<string, string> {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) fromUrl[key] = value;
    }
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || "{}");
  } catch {
    // sessionStorage may be blocked (private mode, some in-app browsers)
    return {};
  }
}

function safe(fn: () => void) {
  try {
    fn();
  } catch {
    // analytics must never break the page
  }
}

export function trackPageView(): void {
  const utm = getUtm();
  safe(() => window.fbq?.("track", "PageView", utm));
  safe(() => window.ttq?.page());
}

function metaParams(product: Product) {
  return {
    value: product.price,
    currency: "KZT",
    content_ids: [product.sku],
    content_name: product.name,
    content_type: "product",
  };
}

function tiktokParams(product: Product) {
  return {
    value: product.price,
    currency: "KZT",
    contents: [
      {
        content_id: product.sku,
        content_name: product.name,
        content_type: "product",
        price: product.price,
        quantity: 1,
      },
    ],
  };
}

export function trackViewContent(product: Product): void {
  const utm = getUtm();
  safe(() => window.fbq?.("track", "ViewContent", { ...metaParams(product), ...utm }));
  safe(() => window.ttq?.track("ViewContent", { ...tiktokParams(product), ...utm }));
}

export function trackKaspiClick(product: Product): void {
  const utm = getUtm();
  safe(() => window.fbq?.("track", "InitiateCheckout", { ...metaParams(product), num_items: 1, ...utm }));
  safe(() => window.ttq?.track("ClickButton", { ...tiktokParams(product), ...utm }));
}
