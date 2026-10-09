"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { container, h2Section } from "./ui";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Card = {
  label: string;
  title: string;
  intro: string;
  cta: string;
  tone: "dark" | "light";
};

const cards: Card[] = [
  {
    label: "For service businesses",
    title: "Service based companies wanting to get more leads",
    intro:
      "For builders, plumbers, electricians, cleaners, consultants, clinics and other local service businesses.",
    cta: "Get a free website check",
    tone: "dark",
  },
  {
    label: "For e-commerce stores",
    title: "Online stores looking to modernise & level-up sales",
    intro:
      "Custom online stores for ambitious UK brands who want a super-fast site, built on modern technology.",
    cta: "Get a free store review",
    tone: "light",
  },
];

const tones = {
  dark: {
    card: "bg-pine text-white",
    label: "text-brand-bright",
    intro: "text-white/75",
    arrow:
      "border-white/30 group-hover:border-brand-bright group-hover:bg-brand-bright group-hover:text-pine group-focus-within:border-brand-bright group-focus-within:bg-brand-bright group-focus-within:text-pine",
  },
  light: {
    card: "bg-brand text-pine",
    label: "text-pine/80",
    intro: "text-pine/85",
    arrow:
      "border-pine/30 group-hover:border-pine group-hover:bg-pine group-hover:text-white group-focus-within:border-pine group-focus-within:bg-pine group-focus-within:text-white",
  },
} as const;

// "Who do I work with?" On large screens the two cards start stacked like a
// small deck in the middle; when they reach the centre of the viewport the
// section pins and scrolling deals them out, service businesses to the left
// and e-commerce to the right. Smaller screens and reduced motion get the
// plain layout. Each card opens the contact panel for now.
export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const section = root.current;
        const grid = section?.querySelector<HTMLElement>("[data-cards]");
        const [left, right] = gsap.utils.toArray<HTMLElement>("[data-card]");
        if (!section || !grid || !left || !right) return;

        // Distance from each card's column to the middle of the grid.
        const toMiddle = () => (left.offsetWidth + parseFloat(getComputedStyle(grid).columnGap)) / 2;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: grid,
              start: "center center",
              end: "+=70%",
              scrub: 0.6,
              pin: section,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(left, { x: toMiddle, rotation: -3 }, { x: 0, rotation: 0, ease: "power2.inOut" }, 0)
          .fromTo(
            right,
            { x: () => -toMiddle(), y: 18, rotation: 4 },
            { x: 0, y: 0, rotation: 0, ease: "power2.inOut" },
            0,
          );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="who-i-work-with"
      className={`${container} pb-[clamp(72px,8.5vw,116px)] pt-[clamp(52px,6.5vw,88px)]`}
    >
      <h2 data-reveal className={`${h2Section} mb-[44px] text-center`}>
        Who do I work with?
      </h2>

      <div data-cards className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {cards.map((card, i) => {
          const t = tones[card.tone];
          return (
            <div
              key={card.label}
              data-card
              className={`group relative flex flex-col rounded-[24px] p-[clamp(28px,3.4vw,48px)] lg:min-h-[340px] ${
                i === 0 ? "z-20" : "z-10"
              } ${t.card}`}
            >
              <p className={`m-0 text-[15px] font-semibold uppercase tracking-[0.08em] ${t.label}`}>
                {card.label}
              </p>
              <h3 className="m-0 mb-4 mt-3 text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.015em]">
                {card.title}
              </h3>
              <p className={`m-0 max-w-[46ch] text-[19px] leading-[1.47] ${t.intro}`}>{card.intro}</p>
              <span
                aria-hidden="true"
                className={`mt-8 flex h-12 w-12 items-center justify-center self-end rounded-full border transition-colors duration-300 lg:mt-auto ${t.arrow}`}
              >
                <ArrowIcon size={18} />
              </span>

              {/* Whole-card hit area */}
              <ContactButton
                preset="Website review for my business"
                className="absolute inset-0 rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-brand-bright focus-visible:ring-offset-2"
              >
                <span className="sr-only">
                  {card.cta}: {card.label.toLowerCase()}
                </span>
              </ContactButton>
            </div>
          );
        })}
      </div>
    </section>
  );
}
