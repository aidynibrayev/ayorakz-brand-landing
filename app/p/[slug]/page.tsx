import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BenefitIcon } from '@/components/BenefitIcon';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { KaspiButton } from '@/components/KaspiButton';
import { StickyBuyBar } from '@/components/StickyBuyBar';
import { Accent, Logo, SectionTitle, Stars } from '@/components/ui';
import { ViewContent } from '@/components/ViewContent';
import { getProduct, installment, products } from '@/data/products';
import { site } from '@/data/site';
import { formatPrice, getDictionary } from '@/lib/i18n';

const HERO_CTA_ID = 'hero-cta';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/p/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const t = getDictionary();
  const title = `${product.name} — ${formatPrice(product.price)}`;
  const description = `${product.hook} ${product.shortDescription} ${t.buyOnKaspi}: ${t.installmentPrefix} ${formatPrice(installment(product.price))}${t.installmentSuffix}.`;
  const image = product.images[0];
  return {
    title,
    description,
    alternates: { canonical: `/p/${product.slug}/` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `/p/${product.slug}/`,
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.src] },
  };
}

export default async function ProductPage({ params }: PageProps<'/p/[slug]'>) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const t = getDictionary();
  const hero = product.hero;
  const hasRating = product.rating > 0 && product.reviewsCount > 0;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.sku,
    description: product.shortDescription,
    brand: { '@type': 'Brand', name: 'AYORA' },
    image: product.images.map((i) => `${site.url}${i.src}`),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'KZT',
      availability: 'https://schema.org/InStock',
      url: product.kaspiUrl,
    },
    ...(hasRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewsCount,
      },
    }),
  };

  const isFanHeater = product.slug === 'fan-heater';

  return (
    <>
      <ViewContent product={product} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* 1. Hero */}
        <section className="relative flex min-h-[100vh] flex-col md:mx-auto md:grid md:min-h-0 md:max-w-5xl md:grid-cols-2 md:items-center md:gap-12 md:px-5 md:py-16">
          <Link href="/" aria-label="AYORA — главная">
            <div className="absolute inset-0">
              <Image
                src={hero.src}
                alt={hero.alt}
                width={1000}
                height={1000}
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(245,239,231,0)_35%,rgba(245,239,231,0.92)_62%,#F5EFE7_75%)] md:hidden"
              />
            </div>
          </Link>

          {!isFanHeater && (
            <Link
              href="/"
              aria-label="AYORA — главная"
              className="absolute left-5 top-5 z-10 md:hidden"
            >
              <Logo className="h-5 w-auto text-ink" />
            </Link>
          )}

          <div className="relative z-10 mt-auto px-5 pb-8 md:mt-0 md:px-0 md:pb-0">
            <Link href="/" aria-label="AYORA — главная" className="mb-10 hidden md:inline-block">
              <Logo className="h-6 w-auto" />
            </Link>
            <p className="text-[34px] font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              {product.hook}
            </p>
            <h1 className="mt-3 text-[17px] font-semibold leading-snug text-ink/75 md:text-xl">
              <Accent text={product.name} />
            </h1>
            <p className="mt-5 text-[34px] font-extrabold leading-none text-accent">
              {formatPrice(product.price)}
            </p>
            <p className="mt-2 text-[16px] text-ink/70">
              {t.installmentPrefix}{' '}
              <b className="font-bold text-ink">{formatPrice(installment(product.price))}</b>
              {t.installmentSuffix}
            </p>
            <KaspiButton
              id={HERO_CTA_ID}
              product={product}
              className="mt-6 w-full md:w-auto md:min-w-80"
            />
            <Link
              href="/"
              className="mt-4 w-full inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-ink px-7 text-[17px] font-bold text-white"
            >
              {t.homeHeroCta}
            </Link>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-5">
          {/* 2. Trust badge */}
          <section className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl bg-white px-5 py-4 md:mt-0">
            <span className="flex items-center gap-2 text-[15px] font-bold">
              <svg viewBox="0 0 20 20" className="size-5 text-accent" fill="none" aria-hidden>
                <circle cx="10" cy="10" r="9" fill="currentColor" />
                <path
                  d="m6 10.2 2.7 2.6L14 7.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.officialSeller}
            </span>
            {hasRating && (
              <span className="flex items-center gap-2 text-[15px]">
                <Stars rating={product.rating} />
                <b className="font-bold">{product.rating.toFixed(1)}</b>
                <span className="text-ink/70">· {t.reviews(product.reviewsCount)}</span>
              </span>
            )}
          </section>

          {/* 3. Benefits */}
          {product.benefits.length > 0 && (
            <section className="mt-16" aria-labelledby="benefits-title">
              <SectionTitle id="benefits-title">{t.benefitsTitle}</SectionTitle>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.benefits.map((b) => (
                  <li key={b.title} className="flex gap-4 rounded-2xl bg-white p-5">
                    <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-sand">
                      <BenefitIcon icon={b.icon} className="size-8" />
                    </span>
                    <span>
                      <span className="block text-[19px] font-bold leading-snug">{b.title}</span>
                      <span className="mt-1 block text-[15px] leading-snug text-ink/65">
                        {b.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 4. Gallery */}
          {product.images.length > 1 && (
            <section className="mt-16" aria-labelledby="gallery-title">
              <SectionTitle id="gallery-title">{t.galleryTitle}</SectionTitle>
              <Gallery images={product.images} video={product.video} name={product.name} />
            </section>
          )}

          {/* 5. Specs */}
          {product.specs.length > 0 && (
            <section className="mt-16" aria-labelledby="specs-title">
              <SectionTitle id="specs-title">{t.specsTitle}</SectionTitle>
              <dl className="divide-y divide-ink/10 rounded-2xl bg-white px-5">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 py-4 text-[16px]"
                  >
                    <dt className="text-ink/65">{s.label}</dt>
                    <dd className="font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* 6. How to buy */}
          <section className="mt-16" aria-labelledby="howto-title">
            <SectionTitle id="howto-title">{t.howToBuyTitle}</SectionTitle>
            <ol className="grid gap-3 md:grid-cols-3">
              {t.howToBuySteps.map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-2xl bg-sand p-5 md:flex-col">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-[19px] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-[18px] font-bold leading-snug">{step.title}</span>
                    <span className="mt-1 block text-[15px] text-ink/65">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <KaspiButton product={product} className="mt-5 w-full md:w-auto md:min-w-80">
              {t.buyOnKaspi} · {formatPrice(product.price)}
            </KaspiButton>
          </section>

          {/* 7. FAQ */}
          {product.faq.length > 0 && (
            <section className="mt-16" aria-labelledby="faq-title">
              <SectionTitle id="faq-title">{t.faqTitle}</SectionTitle>
              <Faq items={product.faq} />
            </section>
          )}
        </div>
      </main>

      {/* 8. Footer */}
      {/* bottom padding keeps the footer clear of the sticky bar on mobile */}
      <div className="mt-20 bg-ink pb-24 md:pb-0">
        <Footer />
      </div>

      <StickyBuyBar product={product} watchId={HERO_CTA_ID} />
    </>
  );
}
