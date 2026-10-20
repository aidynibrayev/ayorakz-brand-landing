import type { Metadata } from 'next';
import Link from 'next/link';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Logo, SectionTitle } from '@/components/ui';
import { products } from '@/data/products';
import { site } from '@/data/site';
import { getDictionary } from '@/lib/i18n';

const t = getDictionary();

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: `AYORA — ${t.brandTagline}`,
    description: t.brandDescription,
    url: '/',
    images: [{ url: products[0].images[0].src, width: 1080, height: 1350 }],
  },
};

export default function Home() {
  return (
    <>
      <main>
        {/* Brand hero */}
        <section className="relative overflow-hidden px-5 pb-14 pt-6 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(215,38,46,0.14),rgba(215,38,46,0)_70%)]"
          />
          <div className="relative mx-auto max-w-5xl flex flex-col items-center">
            <Logo className="h-6 w-auto" />
            <h1 className="mt-16 max-w-2xl text-[44px] text-center font-extrabold leading-[1.02] tracking-tight md:mt-24 md:text-7xl">
              {t.homeHeroTitle}
            </h1>
            <p className="mt-6 max-w-md text-[18px] text-center leading-relaxed text-ink/70">
              {t.homeHeroText}
            </p>
            <a
              href={site.kaspiShopUrl}
              className="mt-5 w-3/4 flex min-h-14 items-center justify-between rounded-2xl bg-red-600 text-white px-5 text-[17px] font-bold transition"
            >
              {t.footerShop}
              <span aria-hidden className='ml-4'>→</span>
            </a>
            <Link
              href="#catalog"
              className="mt-4 w-3/4 inline-flex min-h-14 items-center justify-between gap-3 rounded-2xl bg-ink px-7 text-[17px] font-bold text-white"
            >
              {t.homeHeroCta}
              <span aria-hidden>↓</span>
            </Link>
          </div>
        </section>

        {/* Catalog */}
        <section id="catalog" className="scroll-mt-4 px-5 pb-20" aria-labelledby="catalog-title">
          <div className="mx-auto max-w-5xl">
            <SectionTitle id="catalog-title">{t.catalogTitle}</SectionTitle>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p, i) => (
                <ProductCard key={p.slug} product={p} eager={i === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="px-5 pb-20" aria-labelledby="trust-title">
          <div className="mx-auto max-w-5xl">
            <SectionTitle id="trust-title">{t.trustTitle}</SectionTitle>
            <ol className="grid gap-3 md:grid-cols-3">
              {t.trustItems.map((item, i) => (
                <li key={item.title} className="rounded-2xl bg-sand p-6">
                  <span className="text-[15px] font-bold text-ink/65">0{i + 1}</span>
                  <p className="mt-3 text-[20px] font-bold leading-snug">{item.title}</p>
                  <p className="mt-1 text-[16px] text-ink/65">{item.text}</p>
                </li>
              ))}
            </ol>
            <a
              href={site.kaspiShopUrl}
              className="mt-5 flex min-h-14 items-center justify-between rounded-2xl border border-ink/15 px-5 text-[17px] font-bold transition hover:bg-ink/5"
            >
              {t.footerShop}
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 pb-20" aria-labelledby="faq-title">
          <div className="mx-auto max-w-3xl">
            <SectionTitle id="faq-title">{t.faqTitle}</SectionTitle>
            <Faq items={t.homeFaq} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
