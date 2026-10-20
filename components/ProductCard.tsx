import Image from "next/image";
import Link from "next/link";
import { installment, type Product } from "@/data/products";
import { formatPrice, getDictionary } from "@/lib/i18n";
import { KaspiButton } from "./KaspiButton";
import { Accent } from "./ui";

/** `eager`: load the image immediately (first card, visible on load) without a
 * high-priority preload that would compete with first paint. */
export function ProductCard({ product, eager = false }: { product: Product; eager?: boolean }) {
  const t = getDictionary();
  const href = `/p/${product.slug}/`;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white">
      <Link href={href} className="group block">
        <div className="relative aspect-square overflow-hidden bg-sand">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="px-5 pt-5">
          <h3 className="text-[19px] font-bold leading-snug">
            <Accent text={product.name} />
          </h3>
          <p className="mt-3 text-[24px] font-extrabold text-accent">{formatPrice(product.price)}</p>
          <p className="mt-1 text-[15px] text-ink/70">
            {t.installmentPrefix} {formatPrice(installment(product.price))}
            {t.perMonth} · 0-0-12
          </p>
        </div>
      </Link>
      <div className="mt-auto flex flex-col gap-2 p-5">
        <KaspiButton product={product} className="w-full" />
        <Link
          href={href}
          className="flex min-h-12 items-center justify-center rounded-2xl text-[16px] font-semibold text-ink/70 transition hover:text-ink"
        >
          {t.more}
        </Link>
      </div>
    </article>
  );
}
