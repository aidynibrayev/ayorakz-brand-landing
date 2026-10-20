import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { Logo } from "@/components/ui";

export default function NotFound() {
  const t = getDictionary();
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 px-5 text-center">
      <Logo className="h-6 w-auto" />
      <h1 className="text-3xl font-extrabold">{t.notFound}</h1>
      <Link href="/" className="flex min-h-14 items-center rounded-2xl bg-ink px-8 text-[17px] font-bold text-white">
        {t.backHome}
      </Link>
    </main>
  );
}
