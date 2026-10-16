"use client";

import Image from "next/image";
import { useId, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { bodyText, btnPrimary, container, h2Section } from "./ui";

const points = [
  {
    title: "Partners, not just clients",
    body: "I don’t really do the “build it, invoice it, disappear” thing. When we work together, I see myself as part of your team. I take your success personally, so when things go well I’m genuinely chuffed for you, and when something isn’t working, I’m right there helping to fix it rather than blaming the algorithm.",
  },
  {
    title: "Ask me anything. Seriously.",
    body: "There’s no such thing as a silly question here. Whether it’s “what actually is SEO?” or “why is my website doing that weird thing on my phone?”, I’m happy to explain it in plain English. No jargon, no eye-rolling, and no billing you for a quick phone call.",
  },
  {
    title: "Honest feedback, always",
    body: "I’ll always tell you what I really think, even when it’s not what you were hoping to hear. If your idea is brilliant, I’ll say so. If I think something will cost you money without bringing much back, I’ll tell you that too (kindly, of course). A bit of honesty now saves a lot of headaches and budget later.",
  },
  {
    title: "Smart tech, sensible prices",
    body: "I use the latest tools, including AI, to do the heavy lifting behind the scenes. That means you get the quality you’d expect from a big agency without the big agency invoice.",
  },
  {
    title: "In it for the long run",
    body: "Growing a small business doesn’t happen overnight, and I’m not going anywhere. I’m here for the launch, and for everything that comes after it.",
  },
];

// About page: "How do I work?" as an accordion beside the laptop photo.
// One point is open at a time (the first to start); opening another closes
// it. Panels animate their height with a grid-rows transition.
export default function HowIWork({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section
      id="approach"
      className={`${container} grid grid-cols-1 items-start gap-x-[clamp(40px,6vw,80px)] gap-y-10 md:grid-cols-2 ${className}`}
    >
      <div data-reveal className="flex flex-col items-start">
        <h2 className={`${h2Section} mb-6`}>How do I work?</h2>

        <div className="w-full border-t border-ink/15">
          {points.map((p, i) => {
            const isOpen = open === i;
            const btnId = `${uid}-btn-${i}`;
            const panelId = `${uid}-panel-${i}`;
            return (
              <div key={p.title} className="border-b border-ink/15">
                <h3 className="m-0">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left text-[clamp(19px,1.6vw,22px)] font-semibold leading-[1.25] tracking-[-0.01em] text-ink transition-colors hover:text-brand"
                  >
                    {p.title}
                    <span
                      aria-hidden="true"
                      className={`relative h-4 w-4 flex-none text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-current" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className={`${bodyText} pb-6 pr-10`}>{p.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <ContactButton className={btnPrimary}>
            Let&apos;s connect <ArrowIcon size={18} />
          </ContactButton>
        </div>
      </div>

      <div
        data-reveal
        className="relative order-first aspect-square overflow-hidden rounded-[3px] bg-surface-placeholder md:sticky md:top-[110px] md:order-none"
      >
        <Image
          src="/about-2.jpg"
          alt="Tim Brown working with clients at a laptop"
          fill
          sizes="(min-width: 768px) 600px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
