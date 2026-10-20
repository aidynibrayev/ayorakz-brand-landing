import type { ReactNode } from "react";

/** Wordmark from /AYORA logo/AYORA_logo.svg, recoloured via currentColor. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 3955 1000" className={className} role="img" aria-label="AYORA">
      <g fill="currentColor" transform="translate(150,850) scale(1,-1)">
        <path d="M494 142H203L153 0H34L283 696H415L664 0H544ZM462 235 349 558 235 235Z" />
        <path transform="translate(757,0)" d="M590 695 360 252V0H246V252L15 695H142L303 354L464 695Z" />
        <path
          transform="translate(1422,0)"
          d="M37 349Q37 451 84.5 532.0Q132 613 213.5 658.5Q295 704 392 704Q490 704 571.5 658.5Q653 613 700.0 532.0Q747 451 747 349Q747 247 700.0 165.5Q653 84 571.5 38.5Q490 -7 392 -7Q295 -7 213.5 38.5Q132 84 84.5 165.5Q37 247 37 349ZM630 349Q630 426 599.5 484.0Q569 542 515.0 573.0Q461 604 392 604Q323 604 269.0 573.0Q215 542 184.5 484.0Q154 426 154 349Q154 272 184.5 213.5Q215 155 269.0 123.5Q323 92 392 92Q461 92 515.0 123.5Q569 155 599.5 213.5Q630 272 630 349Z"
        />
        <path
          transform="translate(2266,0)"
          d="M436 0 276 278H189V0H75V695H315Q395 695 450.5 667.0Q506 639 533.5 592.0Q561 545 561 487Q561 419 521.5 363.5Q482 308 400 288L572 0ZM189 369H315Q379 369 411.5 401.0Q444 433 444 487Q444 541 412.0 571.5Q380 602 315 602H189Z"
        />
        <path transform="translate(2958,0)" d="M494 142H203L153 0H34L283 696H415L664 0H544ZM462 235 349 558 235 235Z" />
      </g>
    </svg>
  );
}

/** Highlights "2в1"-style markers in the accent colour. */
export function Accent({ text }: { text: string }) {
  const parts = text.split(/(\d+\s?в\s?\d+)/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-accent">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="mb-6 text-[28px] font-extrabold leading-[1.1] tracking-tight md:text-4xl">
      {children}
    </h2>
  );
}

export function Stars({ rating }: { rating: number }) {
  const pct = Math.max(0, Math.min(5, rating)) * 20;
  return (
    <span className="relative inline-block text-[18px] leading-none tracking-[2px]" aria-hidden>
      <span className="text-ink/15">★★★★★</span>
      <span className="absolute inset-0 overflow-hidden text-ink" style={{ width: `${pct}%` }}>
        ★★★★★
      </span>
    </span>
  );
}
