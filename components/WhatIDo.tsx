import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import type { ReactNode } from "react";
import { container } from "./ui";

const iconClass = "mb-6 h-16 w-16 rounded-[14px]";

// Service bell on a dark green tile.
function ServiceIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={iconClass}>
      <rect width="512" height="512" rx="56" fill="#0e2a1f" />
      <rect x="232" y="150" width="48" height="22" rx="11" fill="#14a85a" />
      <rect x="246" y="166" width="20" height="40" fill="#14a85a" />
      <path d="M136 330 A120 120 0 0 1 376 330 Z" fill="#14a85a" />
      <path d="M186 300 A76 76 0 0 1 226 248" fill="none" stroke="#0e2a1f" strokeWidth="18" strokeLinecap="round" />
      <rect x="104" y="346" width="304" height="34" rx="17" fill="#14a85a" />
    </svg>
  );
}

// Shopping bag on a dark green tile.
function EcommerceIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={iconClass}>
      <rect width="512" height="512" rx="56" fill="#0e2a1f" />
      <path d="M206 236 V180 A50 50 0 0 1 306 180 V236" fill="none" stroke="#14a85a" strokeWidth="28" strokeLinecap="round" />
      <path
        d="M146 206 H366 Q380 206 382 220 L398 380 Q400 404 376 404 H136 Q112 404 114 380 L130 220 Q132 206 146 206 Z"
        fill="#14a85a"
      />
      <circle cx="206" cy="246" r="14" fill="#0e2a1f" />
      <circle cx="306" cy="246" r="14" fill="#0e2a1f" />
    </svg>
  );
}

const columns: { title: string; icon: ReactNode; intro: string; points: string[]; cta: string }[] = [
  {
    title: "Service businesses",
    icon: <ServiceIcon />,
    intro:
      "Builders, plumbers, electricians, cleaners, consultants, clinics and other local service businesses.",
    points: [
      "Bespoke websites that look stunning on all devices",
      "Search engine optimisation for better rankings in search & AI",
      "Built for converting browsers into leads in your inbox",
    ],
    cta: "Get a free website check",
  },
  {
    title: "E-commerce stores",
    icon: <EcommerceIcon />,
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
            key={c.title}
            data-reveal
            className="flex flex-col items-start py-10 lg:px-[clamp(32px,4vw,64px)] lg:py-[clamp(48px,5vw,72px)] lg:first:pl-0 lg:last:pr-0"
          >
            {c.icon}
            <h2 className="m-0 mb-4 text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.015em]">
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
