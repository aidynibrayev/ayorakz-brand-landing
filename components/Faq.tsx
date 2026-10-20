import type { Faq as FaqItem } from "@/data/types";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink/10 overflow-hidden rounded-2xl bg-white">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[17px] font-bold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              className="relative size-5 shrink-0 before:absolute before:left-0 before:top-[9px] before:h-0.5 before:w-5 before:rounded before:bg-ink after:absolute after:left-[9px] after:top-0 after:h-5 after:w-0.5 after:rounded after:bg-ink after:transition group-open:after:rotate-90 group-open:after:opacity-0"
              aria-hidden
            />
          </summary>
          <p className="px-5 pb-5 text-[16px] leading-relaxed text-ink/75">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
