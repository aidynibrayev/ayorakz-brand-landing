"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { getUtm, trackPageView } from "@/lib/analytics";

/**
 * Sends PageView on client-side navigations. The first PageView is sent by the
 * pixel snippets in app/layout.tsx.
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    getUtm(); // saves UTM tags from the landing URL
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);

  return null;
}
