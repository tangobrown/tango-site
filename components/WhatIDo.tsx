import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { container } from "./ui";

const columns = [
  {
    label: "For service businesses",
    title: "Service based companies wanting to get more leads",
    intro:
      "For builders, plumbers, electricians, cleaners, consultants, clinics and other local service businesses.",
    points: [
      "Bespoke websites that look stunning on all devices",
      "Search engine optimisation for better rankings in search & AI",
      "Built for converting browsers into leads in your inbox",
    ],
    cta: "Get a free website check",
  },
  {
    label: "For e-commerce stores",
    title: "Online stores looking to modernise & level-up sales",
    intro:
      "Custom online stores for ambitious UK brands who want a super-fast site, built on modern technology.",
    points: [
      "Stunning online shops, built to convert users into buyers",
      "Bespoke functionality to suit your business needs",
      "Optimised to get more users to your website",
    ],
    cta: "Get a free store review",
  },
];

function Tick() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14A85A"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[4px] flex-none"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

// Straight under the hero: who I work with, as two columns (service
// businesses / online stores) divided by a hairline on desktop, with a
// full-width rule along the bottom.
export default function WhatIDo() {
  return (
    <section id="services" aria-label="Who I work with" className="border-b border-ink/15 bg-white">
      <div className={`${container} grid grid-cols-1 divide-y divide-ink/15 lg:grid-cols-2 lg:divide-x lg:divide-y-0`}>
        {columns.map((c) => (
          <div
            key={c.label}
            data-reveal
            className="flex flex-col items-start py-10 lg:px-[clamp(32px,4vw,64px)] lg:py-[clamp(48px,5vw,72px)] lg:first:pl-0 lg:last:pr-0"
          >
            <p className="m-0 text-[15px] font-semibold uppercase tracking-[0.08em] text-brand">
              {c.label}
            </p>
            <h2 className="m-0 mb-4 mt-3 text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.015em]">
              {c.title}
            </h2>
            <p className="m-0 max-w-[46ch] text-[19px] leading-[1.47] text-ink-soft">{c.intro}</p>
            <ul className="m-0 mt-6 flex w-full list-none flex-col gap-3 border-t border-ink/15 p-0 pt-6">
              {c.points.map((point) => (
                <li key={point} className="flex gap-3 text-[17px] font-medium leading-[1.4]">
                  <Tick />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <ContactButton
              preset="Website review for my business"
              className="mt-7 inline-flex items-center gap-2 text-[16px] font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              {c.cta} <ArrowIcon size={16} />
            </ContactButton>
          </div>
        ))}
      </div>
    </section>
  );
}
