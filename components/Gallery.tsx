"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProductImage, ProductVideo } from "@/data/types";
import { getDictionary } from "@/lib/i18n";

type Slide = { kind: "image"; image: ProductImage } | { kind: "video"; video: ProductVideo; alt: string };

/** Swipe carousel on native CSS scroll-snap. No library. */
export function Gallery({ images, video, name }: { images: ProductImage[]; video?: ProductVideo; name: string }) {
  const t = getDictionary();
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const slides: Slide[] = images.map((image) => ({ kind: "image", image }));
  if (video) slides.splice(1, 0, { kind: "video", video, alt: name });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { root: el, threshold: 0.6 },
    );
    el.querySelectorAll("[data-index]").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [slides.length]);

  function go(index: number) {
    const el = track.current;
    const target = el?.querySelector<HTMLElement>(`[data-index="${index}"]`);
    if (el && target) el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={track}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 md:mx-0 md:scroll-px-0 md:px-0"
        aria-roledescription="carousel"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            data-index={i}
            className="relative aspect-square w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-sand md:w-[calc(50%-6px)]"
            aria-label={t.gallerySlide(i + 1, slides.length)}
            role="group"
          >
            {slide.kind === "image" ? (
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                sizes="(min-width: 768px) 480px, 85vw"
                className="object-cover"
              />
            ) : (
              <video
                src={slide.video.src}
                poster={slide.video.poster}
                controls
                playsInline
                preload="none"
                className="size-full object-cover"
                aria-label={slide.alt}
              />
            )}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-1.5" aria-hidden>
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-ink" : "w-1.5 bg-ink/20"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label={t.galleryPrev}
              className="grid size-12 place-items-center rounded-full bg-white text-xl transition disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(Math.min(slides.length - 1, active + 1))}
              disabled={active === slides.length - 1}
              aria-label={t.galleryNext}
              className="grid size-12 place-items-center rounded-full bg-white text-xl transition disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
