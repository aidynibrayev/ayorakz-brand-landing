"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/data/types";
import { formatPrice, getDictionary } from "@/lib/i18n";
import { KaspiButton } from "./KaspiButton";

/** Mobile-only bottom bar. Appears once the hero buy button has scrolled out of view. */
export function StickyBuyBar({ product, watchId }: { product: Product; watchId: string }) {
  const t = getDictionary();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      // Show only when the hero button is above the viewport, not below it.
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [watchId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cream via-cream/90 to-cream/0" />
      <KaspiButton product={product} className="w-full shadow-[0_8px_24px_-8px_rgba(28,28,28,0.5)]" tabIndex={visible ? 0 : -1}>
        {t.buyOnKaspi} · {formatPrice(product.price)}
      </KaspiButton>
    </div>
  );
}
