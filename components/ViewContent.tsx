"use client";

import { useEffect, useRef } from "react";
import type { Product } from "@/data/types";
import { trackViewContent } from "@/lib/analytics";

export function ViewContent({ product }: { product: Product }) {
  const sent = useRef<string | null>(null);
  useEffect(() => {
    if (sent.current === product.sku) return; // dev StrictMode runs effects twice
    sent.current = product.sku;
    trackViewContent(product);
  }, [product]);
  return null;
}
