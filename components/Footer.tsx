import Link from "next/link";
import { site } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { Logo } from "./ui";

export function Footer() {
  const t = getDictionary();
  return (
    <footer className="bg-ink px-5 pb-12 pt-12 text-cream">
      <div className="mx-auto max-w-5xl">
        <Link href="/" aria-label="AYORA — главная" className="inline-block">
          <Logo className="h-6 w-auto" />
        </Link>
        <p className="mt-4 max-w-sm text-[15px] text-cream/60">{t.footerNote}</p>
        <a
          href={site.kaspiShopUrl}
          className="mt-8 flex min-h-14 items-center justify-between rounded-2xl border border-cream/20 px-5 text-[17px] font-bold transition hover:bg-cream/5"
        >
          {t.footerShop}
          <span aria-hidden>→</span>
        </a>
        <p className="mt-10 text-[13px] text-cream/60">© {new Date().getFullYear()} AYORA</p>
      </div>
    </footer>
  );
}
