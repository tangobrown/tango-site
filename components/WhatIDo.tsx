import type { ReactNode } from "react";
import { AiAutomationIcon, SeoIcon, WebsiteBuildsIcon } from "./ServiceIcons";
import { container } from "./ui";

const services: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Website Builds",
    text: "Beautiful, blazing fast websites and online shops, built to turn visitors into enquiries and sales.",
    icon: <WebsiteBuildsIcon />,
  },
  {
    title: "Optimisation",
    text: "Optimising your site for search and conversions, so more of the right people find you and get in touch.",
    icon: <SeoIcon />,
  },
  {
    title: "AI & Automation",
    text: "Integrating AI to take care of those boring tasks, from answering enquiries to the day-to-day admin.",
    icon: <AiAutomationIcon />,
  },
];

// "What I do": three columns straight under the hero, divided by hairlines on
// desktop, with a full-width rule along the bottom.
export default function WhatIDo() {
  return (
    <section id="services" aria-label="What I do" className="border-b border-ink/15 bg-[#effff7]">
      <div className={`${container} grid grid-cols-1 divide-y divide-ink/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0`}>
        {services.map((s) => (
          <div
            key={s.title}
            data-reveal
            className="flex flex-col items-start gap-3 py-9 lg:px-[clamp(28px,3vw,48px)] lg:py-[clamp(44px,4.4vw,64px)] lg:first:pl-0 lg:last:pr-0"
          >
            <div className="mb-4">{s.icon}</div>
            <h2 className="m-0 text-[clamp(24px,2.1vw,30px)] font-semibold leading-[1.1] tracking-[-0.015em]">
              {s.title}
            </h2>
            <p className="m-0 max-w-[40ch] text-[18px] leading-[1.47] text-ink-soft">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
