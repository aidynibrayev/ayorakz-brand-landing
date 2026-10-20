import type { BenefitIcon as IconKey } from "@/data/types";

/** Hand-drawn line icons in one style: 32px grid, 1.8 stroke, round caps. */
const paths: Record<IconKey, React.ReactNode> = {
  // rising heat waves over a base line
  power: (
    <>
      <path d="M10 22c-2-2.5 2-4.5 0-7s2-4.5 0-7" />
      <path d="M16 22c-2-2.5 2-4.5 0-7s2-4.5 0-7" />
      <path d="M22 22c-2-2.5 2-4.5 0-7s2-4.5 0-7" />
      <path d="M6 26.5h20" />
    </>
  ),
  // drop with a ripple inside
  humidity: (
    <>
      <path d="M16 4.5s-8 8.6-8 14a8 8 0 0 0 16 0c0-5.4-8-14-8-14Z" />
      <path d="M12 19.5c1.4 1 2.6 1 4 0s2.6-1 4 0" />
    </>
  ),
  // flame on a log
  flame: (
    <>
      <path d="M16 23c-4 0-6.5-2.7-6.5-6 0-4.5 4.5-6 4.5-11 3.6 2.2 9 6.4 9 11 0 3.3-3 6-7 6Z" />
      <path d="M16 23c-1.6 0-2.8-1.2-2.8-2.8 0-2 2.8-3.6 2.8-3.6s2.8 1.6 2.8 3.6c0 1.6-1.2 2.8-2.8 2.8Z" />
      <path d="M7 27.5h18" />
    </>
  ),
  // remote with a signal arc
  remote: (
    <>
      <rect x="11" y="10" width="10" height="18" rx="3" />
      <circle cx="16" cy="15" r="1.6" />
      <path d="M14 21h4M14 24h4" />
      <path d="M11.5 6a6.5 6.5 0 0 1 9 0" />
    </>
  ),
  timer: (
    <>
      <circle cx="16" cy="17.5" r="9" />
      <path d="M16 12.5v5l3 2M13 4.5h6" />
    </>
  ),
  quiet: (
    <>
      <path d="M5 16h3l3-6 4 12 4-9 2.5 3H27" />
    </>
  ),
  leaf: (
    <>
      <path d="M7 25C7 13 14 7 26 6c-.5 12-6.5 19-19 19Z" />
      <path d="M7 25 18 14" />
    </>
  ),
  shield: (
    <>
      <path d="M16 4.5 7 8v7c0 6 3.8 10.4 9 12.5 5.2-2.1 9-6.5 9-12.5V8l-9-3.5Z" />
      <path d="m12 16 3 3 5.5-6" />
    </>
  ),
};

export function BenefitIcon({ icon, className = "" }: { icon: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[icon]}
    </svg>
  );
}
