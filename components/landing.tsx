// Shared building blocks for the service sub-pages (/ecommerce-websites,
// /service-websites). Styled to match the home page.
import type { ReactNode } from "react";
import ArrowIcon from "./ArrowIcon";

export type Item = { title: string; body: string };

export const h2Class =
  "m-0 text-pretty font-bebas text-[clamp(32px,3.3vw,50px)] font-normal leading-[1.08]";
export const bodyClass = "m-0 text-[17px] leading-[1.75] text-ink-soft";
export const primaryBtnClass =
  "inline-flex items-center gap-[10px] bg-rust px-[26px] py-[14px] text-[14px] font-medium uppercase tracking-[0.04em] text-white transition-colors hover:bg-rust-dark";

const pad = (i: number) => String(i + 1).padStart(2, "0");

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-rust">{children}</span>
  );
}

export function LandingHero({
  eyebrow,
  title,
  intro,
  primaryLabel,
  secondaryLabel,
  trust,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  primaryLabel: string;
  secondaryLabel: string;
  trust: string;
}) {
  return (
    <section className="bg-ink-dark text-cream-text">
      <div className="mx-auto max-w-content px-5 pb-20 pt-16 lg:px-8 lg:pb-[120px] lg:pt-[190px]">
        <div className="flex max-w-[860px] flex-col gap-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="m-0 text-pretty font-bebas text-[clamp(42px,5.4vw,80px)] font-normal leading-[0.98] tracking-[0.005em]">
            {title}
          </h1>
          <p className="m-0 max-w-[62ch] text-[17px] leading-[1.65] text-muted-dark lg:text-[18px]">
            {intro}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a href="#contact" className={primaryBtnClass}>
              {primaryLabel} <ArrowIcon size={17} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-[10px] border border-[#6E675E] px-[26px] py-[14px] text-[14px] uppercase tracking-[0.04em] text-cream-text transition-colors hover:border-rust hover:bg-rust hover:text-white"
            >
              {secondaryLabel}
            </a>
          </div>
          <p className="m-0 text-[14px] text-muted">{trust}</p>
        </div>
      </div>
    </section>
  );
}

// "What I do": heading + intro, then a row of numbered cards.
export function CardsSection({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
}) {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div data-reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-[8vw]">
          <div className="flex flex-col gap-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className={h2Class}>{title}</h2>
          </div>
          <p className={`${bodyClass} lg:pt-9`}>{intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 border-l border-t border-rule bg-white sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex flex-col gap-4 border-b border-r border-rule p-7 lg:p-9"
            >
              <span className="font-bebas text-[30px] leading-none text-rust">{pad(i)}</span>
              <h3 className="m-0 font-bebas text-[28px] font-normal leading-[1.05]">{item.title}</h3>
              <p className="m-0 text-[16px] leading-[1.7] text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Two-column grid of titled points, each with a hairline above.
export function PointsGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-2 border-t border-rule pt-6">
          <h4 className="m-0 font-bebas text-[23px] font-normal leading-[1.1]">{item.title}</h4>
          <p className="m-0 text-[16px] leading-[1.7] text-ink-soft">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function NumberedList({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`grid grid-cols-[40px_1fr] gap-4 border-t py-6 last:pb-0 ${
            dark ? "border-hairdark" : "border-rule"
          }`}
        >
          <span className="font-bebas text-[24px] leading-none text-rust">{pad(i)}</span>
          <div className="flex flex-col gap-2">
            <h3
              className={`m-0 font-bebas text-[24px] font-normal leading-[1.1] ${
                dark ? "text-cream-text" : "text-ink"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`m-0 text-[16px] leading-[1.7] ${dark ? "text-muted-dark" : "text-ink-soft"}`}
            >
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// Heading + intro on the left (sticky on desktop), content on the right.
export function SplitSection({
  eyebrow,
  title,
  intro,
  aside,
  dark = false,
  className = "",
  children,
  after,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  aside?: ReactNode;
  dark?: boolean;
  className?: string;
  children: ReactNode;
  after?: ReactNode;
}) {
  return (
    <section
      className={`py-20 lg:py-[120px] ${dark ? "bg-ink-dark text-cream-text" : ""} ${className}`}
    >
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-[8vw]">
          <div data-reveal className="flex flex-col gap-4 lg:sticky lg:top-[120px] lg:self-start">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className={h2Class}>{title}</h2>
            <p
              className={`m-0 text-[17px] leading-[1.75] ${dark ? "text-muted-dark" : "text-ink-soft"}`}
            >
              {intro}
            </p>
            {aside}
          </div>
          <div data-reveal>{children}</div>
        </div>
        {after}
      </div>
    </section>
  );
}

// Small rust-ruled callout used for closing lines.
export function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 mt-2 border-l-2 border-rust pl-4 text-[16px] leading-[1.7] text-ink">
      {children}
    </p>
  );
}

export function StepsSection({
  eyebrow,
  title,
  items,
  className = "",
}: {
  eyebrow: string;
  title: string;
  items: Item[];
  className?: string;
}) {
  return (
    <section id="how-it-works" className={`py-20 lg:py-[120px] ${className}`}>
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div data-reveal className="flex max-w-[760px] flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={h2Class}>{title}</h2>
        </div>
        <ol className="m-0 mt-12 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-8">
          {items.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex flex-col gap-4 border-t border-rule pt-6"
            >
              <span className="font-bebas text-[34px] leading-none text-rust">{pad(i)}</span>
              <h3 className="m-0 font-bebas text-[24px] font-normal leading-[1.1]">{step.title}</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export type PriceRow = { service: string; price: string; was?: string };

export function PricingSection({
  title,
  intro,
  rows,
  note,
  ctaTitle,
  ctaText,
  ctaLabel,
  className = "",
}: {
  title: string;
  intro: string;
  rows: PriceRow[];
  note?: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  className?: string;
}) {
  return (
    <section className={`py-20 lg:py-[120px] ${className}`}>
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-[8vw]">
          <div data-reveal className="flex flex-col gap-4">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className={h2Class}>{title}</h2>
            <p className={bodyClass}>{intro}</p>
          </div>
          <div data-reveal>
            <div className="border border-rule bg-white">
              {rows.map((row, i) => (
                <div
                  key={row.service}
                  className={`flex items-baseline justify-between gap-6 px-6 py-5 lg:px-8 ${
                    i ? "border-t border-rule" : ""
                  }`}
                >
                  <span className="text-[16px] text-ink">{row.service}</span>
                  <span className="flex-none text-right">
                    <span className="font-bebas text-[24px] leading-none text-ink">{row.price}</span>
                    {row.was ? (
                      <span className="ml-2 text-[13px] text-muted line-through">{row.was}</span>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
            {note ? <p className="m-0 mt-4 text-[14px] leading-[1.6] text-muted">{note}</p> : null}
          </div>
        </div>

        <div
          data-reveal
          className="mt-16 flex flex-col gap-8 bg-ink-dark p-8 text-cream-text lg:mt-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-14"
        >
          <div className="flex max-w-[640px] flex-col gap-4">
            <h2 className={h2Class}>{ctaTitle}</h2>
            <p className="m-0 text-[17px] leading-[1.75] text-muted-dark">{ctaText}</p>
          </div>
          <a href="#contact" className={`${primaryBtnClass} flex-none self-start lg:self-auto`}>
            {ctaLabel} <ArrowIcon size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
