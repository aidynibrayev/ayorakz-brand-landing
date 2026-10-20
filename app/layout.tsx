import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { PageViewTracker } from '@/components/PageViewTracker';
import { site } from '@/data/site';
import { META_PIXEL_ID, TIKTOK_PIXEL_ID } from '@/lib/analytics';
import { getDictionary } from '@/lib/i18n';
import { metaPixelSnippet, tiktokPixelSnippet } from '@/lib/pixels';
import { Analytics } from '@vercel/analytics/next';

import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  // Only the Cyrillic file is preloaded; latin and cyrillic-ext (Kazakh letters)
  // are still declared and load on demand when the page uses those glyphs.
  subsets: ['cyrillic'],
  display: 'swap',
});

const t = getDictionary();

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `AYORA — ${t.brandTagline}`,
    template: '%s | AYORA',
  },
  description: t.brandDescription,
  openGraph: {
    type: 'website',
    siteName: 'AYORA',
    locale: t.ogLocale,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#F5EFE7',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={t.htmlLang} className={`${manrope.variable} antialiased`}>
      <body className="min-h-dvh">
        <Analytics />
        {children}
        <PageViewTracker />
        {/* Pixels load only when their env ID is set. beforeInteractive makes the
            fbq / ttq queues exist before hydration, so ViewContent fired on mount
            is never lost; the pixel libraries themselves still load async. */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="beforeInteractive">
            {metaPixelSnippet(META_PIXEL_ID)}
          </Script>
        )}
        {TIKTOK_PIXEL_ID && (
          <Script id="tiktok-pixel" strategy="beforeInteractive">
            {tiktokPixelSnippet(TIKTOK_PIXEL_ID)}
          </Script>
        )}
      </body>
    </html>
  );
}
