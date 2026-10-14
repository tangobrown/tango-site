// Building blocks for the expertise pages (/expertise/service-businesses,
// /expertise/ecommerce), in the site's current style.
import type { ReactNode } from "react";
import { enquiryTypes } from "@/lib/site";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { bodyText, btnPrimary, container, h2Section, sectionY } from "./ui";

export type Item = { title: string; body: string };
export type PriceRow = { service: string; price: string; was?: string };
type Enquiry = (typeof enquiryTypes)[number];

const pad = (i: number) => String(i + 1).padStart(2, "0");

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`m-0 text-[15px] font-semibold uppercase tracking-[0.08em] ${
        dark ? "text-brand-bright" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

// Heading + intro on the left, numbered cards across underneath.
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
    <section className={`${container} ${sectionY}`}>
      <div data-reveal className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.1fr] lg:gap-[clamp(40px,6vw,96px)]">
        <div className="flex flex-col gap-3">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={h2Section}>{title}</h2>
        </div>
        <p className={`${bodyText} lg:pt-10`}>{intro}</p>
      </div>
      <div className="mt-[clamp(36px,4vw,56px)] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="flex flex-col gap-3 rounded-[20px] bg-[#effff7] p-[clamp(24px,2.4vw,32px)]"
          >
            <span className="font-mono text-[15px] font-semibold text-brand">{pad(i)}</span>
            <h3 className="m-0 text-[24px] font-semibold leading-[1.1] tracking-[-0.01em]">{item.title}</h3>
            <p className="m-0 text-[17px] leading-[1.5] text-ink-soft">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Two-column grid of titled points, each with a hairline above.
export function PointsGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-2 border-t border-ink/15 pt-6">
          <h4 className="m-0 text-[22px] font-semibold leading-[1.15] tracking-[-0.01em]">{item.title}</h4>
          <p className="m-0 text-[17px] leading-[1.5] text-ink-soft">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

// Full-width intro then whatever content (points, comparison table…).
export function FeatureSection({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="border-y border-ink/15 bg-[#effff7]">
      <div className={`${container} ${sectionY}`}>
        <div data-reveal className="flex max-w-[760px] flex-col gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={h2Section}>{title}</h2>
          <p className={bodyText}>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function NumberedList({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`grid grid-cols-[44px_1fr] gap-4 border-t py-6 last:pb-0 ${
            dark ? "border-white/15" : "border-ink/15"
          }`}
        >
          <span className={`pt-1 font-mono text-[15px] font-semibold ${dark ? "text-brand-bright" : "text-brand"}`}>
            {pad(i)}
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="m-0 text-[22px] font-semibold leading-[1.15] tracking-[-0.01em]">{item.title}</h3>
            <p className={`m-0 text-[17px] leading-[1.5] ${dark ? "text-white/75" : "text-ink-soft"}`}>
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
  children,
  after,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  aside?: ReactNode;
  dark?: boolean;
  children: ReactNode;
  after?: ReactNode;
}) {
  return (
    <section className={dark ? "bg-pine text-white" : ""}>
      <div className={`${container} ${sectionY}`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-[clamp(40px,6vw,96px)]">
          <div data-reveal className="flex flex-col gap-4 lg:sticky lg:top-[120px] lg:self-start">
            <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
            <h2 className={h2Section}>{title}</h2>
            <p className={`m-0 text-[19px] leading-[1.47] ${dark ? "text-white/75" : "text-ink-soft"}`}>{intro}</p>
            {aside}
          </div>
          <div data-reveal>{children}</div>
        </div>
        {after}
      </div>
    </section>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 mt-2 rounded-[14px] border-l-4 border-brand bg-[#effff7] py-4 pl-5 pr-4 text-[17px] leading-[1.5] text-ink">
      {children}
    </p>
  );
}

// Ticked list in a white card.
export function TickList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col overflow-hidden rounded-[20px] border border-ink/15 bg-white p-0">
      {items.map((line, i) => (
        <li key={line} className={`flex items-start gap-4 px-6 py-5 lg:px-8 ${i ? "border-t border-ink/15" : ""}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#14A85A"
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-[3px] flex-none"
            aria-hidden="true"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
          <span className="text-[17px] leading-[1.5]">{line}</span>
        </li>
      ))}
    </ul>
  );
}

export function StepsSection({ title, items }: { title: string; items: Item[] }) {
  return (
    <section id="how-it-works" className={`${container} ${sectionY} scroll-mt-[100px]`}>
      <div data-reveal className="flex max-w-[760px] flex-col gap-3">
        <Eyebrow>How it works</Eyebrow>
        <h2 className={h2Section}>{title}</h2>
      </div>
      <ol className="m-0 mt-[clamp(36px,4vw,56px)] grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {items.map((step, i) => (
          <li
            key={step.title}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="flex flex-col gap-3 border-t-2 border-brand pt-6"
          >
            <span className="font-mono text-[15px] font-semibold text-brand">{pad(i)}</span>
            <h3 className="m-0 text-[22px] font-semibold leading-[1.15] tracking-[-0.01em]">{step.title}</h3>
            <p className="m-0 text-[16px] leading-[1.5] text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function PricingSection({
  title,
  intro,
  rows,
  note,
  ctaTitle,
  ctaText,
  ctaLabel,
  preset,
}: {
  title: string;
  intro: string;
  rows: PriceRow[];
  note?: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  preset: Enquiry;
}) {
  return (
    <section className={`${container} pb-[clamp(52px,6.5vw,88px)]`}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-[clamp(40px,6vw,96px)]">
        <div data-reveal className="flex flex-col gap-4">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className={h2Section}>{title}</h2>
          <p className={bodyText}>{intro}</p>
        </div>
        <div data-reveal>
          <div className="overflow-hidden rounded-[20px] border border-ink/15">
            {rows.map((row, i) => (
              <div
                key={row.service}
                className={`flex items-baseline justify-between gap-6 px-6 py-5 lg:px-8 ${i ? "border-t border-ink/15" : ""}`}
              >
                <span className="text-[17px]">{row.service}</span>
                <span className="flex-none text-right">
                  <span className="text-[20px] font-semibold">{row.price}</span>
                  {row.was ? <span className="ml-2 text-[14px] text-ink-muted line-through">{row.was}</span> : null}
                </span>
              </div>
            ))}
          </div>
          {note ? <p className="m-0 mt-4 text-[15px] leading-[1.5] text-ink-muted">{note}</p> : null}
        </div>
      </div>

      <div
        data-reveal
        className="mt-[clamp(52px,6vw,88px)] flex flex-col gap-8 rounded-[24px] bg-pine p-[clamp(28px,4vw,56px)] text-white lg:flex-row lg:items-end lg:justify-between lg:gap-16"
      >
        <div className="flex max-w-[640px] flex-col gap-4">
          <h2 className={h2Section}>{ctaTitle}</h2>
          <p className="m-0 text-[19px] leading-[1.47] text-white/75">{ctaText}</p>
        </div>
        <ContactButton preset={preset} className={`${btnPrimary} self-start lg:self-auto`}>
          {ctaLabel} <ArrowIcon size={16} />
        </ContactButton>
      </div>
    </section>
  );
}

// Buttons for the page header.
export function HeaderActions({ label, preset }: { label: string; preset: Enquiry }) {
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      <ContactButton preset={preset} className={btnPrimary}>
        {label} <ArrowIcon size={16} />
      </ContactButton>
      <a
        href="#how-it-works"
        className="inline-flex h-[48px] items-center rounded-full border border-white/30 px-[22px] text-[16px] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-pine"
      >
        See how it works
      </a>
    </div>
  );
}
