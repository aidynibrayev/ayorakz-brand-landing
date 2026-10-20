"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import type { Product } from "@/data/types";
import { trackKaspiClick } from "@/lib/analytics";
import { getDictionary } from "@/lib/i18n";

const REDIRECT_DELAY_MS = 150;
const UNLOCK_AFTER_MS = 3000;

type Props = {
  product: Product;
  id?: string;
  className?: string;
  tabIndex?: number;
  children?: ReactNode;
};

/**
 * Real <a href> to the Kaspi product card, so it still works without JS and on
 * long-press. On tap: send pixel events, wait 150 ms, then navigate.
 *
 * kaspi.kz/shop/p/... is a universal link (iOS) / app link (Android): a
 * same-tab navigation from a user tap opens the Kaspi app if installed,
 * otherwise the Kaspi website.
 */
export function KaspiButton({ product, id, className = "", tabIndex, children }: Props) {
  const t = getDictionary();
  const locked = useRef(false);
  const [pending, setPending] = useState(false);

  // Coming back with the browser "Back" button restores the page from bfcache
  // with the lock still on — release it.
  useEffect(() => {
    const unlock = () => {
      locked.current = false;
      setPending(false);
    };
    window.addEventListener("pageshow", unlock);
    return () => window.removeEventListener("pageshow", unlock);
  }, []);

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    // Ctrl/Cmd-click etc.: let the browser open a new tab, just track it.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      trackKaspiClick(product);
      return;
    }
    e.preventDefault();
    if (locked.current) return;
    locked.current = true;
    setPending(true);

    trackKaspiClick(product);
    window.setTimeout(() => {
      window.location.href = product.kaspiUrl;
    }, REDIRECT_DELAY_MS);
    // If navigation was blocked or cancelled, make the button usable again.
    window.setTimeout(() => {
      locked.current = false;
      setPending(false);
    }, UNLOCK_AFTER_MS);
  }

  return (
    <a
      id={id}
      href={product.kaspiUrl}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-busy={pending}
      className={`group inline-flex min-h-14 select-none items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 text-[17px] font-bold text-white transition active:scale-[0.98] aria-busy:opacity-80 ${className}`}
    >
      <span>{children ?? t.buyOnKaspi}</span>
      {pending ? (
        <span className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden />
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className="transition group-hover:translate-x-0.5">
          <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  );
}
