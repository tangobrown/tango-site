import { container } from "./ui";

const services = [
  {
    title: "Website Builds",
    text: "Beautiful, blazing fast websites and online shops, built to turn visitors into enquiries and sales.",
    icon: "M14 18V20L16 21V22H8L7.99639 21.0036L10 20V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H14ZM4 14V16H20V14H4Z",
  },
  {
    title: "Optimisation",
    text: "Optimising your site for search and conversions, so more of the right people find you and get in touch.",
    icon: "M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z",
  },
  {
    title: "AI & Automation",
    text: "Integrating AI to take care of those boring tasks, from answering enquiries to the day-to-day admin.",
    icon: "M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM5.79993 16H7.95399L8.55399 14.5H11.4459L12.0459 16H14.1999L10.9999 8H8.99993L5.79993 16ZM9.99993 10.8852L10.6459 12.5H9.35399L9.99993 10.8852ZM15 16V8H17V16H15ZM3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V11H20V19H4V5H14V3H3Z",
  },
];

// "What I do": three columns straight under the hero, divided by hairlines on
// desktop, with a full-width rule along the bottom.
export default function WhatIDo() {
  return (
    <section id="services" aria-label="What I do" className="border-b border-ink/15">
      <div className={`${container} grid grid-cols-1 divide-y divide-ink/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0`}>
        {services.map((s) => (
          <div
            key={s.title}
            data-reveal
            className="flex flex-col items-start gap-3 py-9 lg:px-[clamp(28px,3vw,48px)] lg:py-[clamp(44px,4.4vw,64px)] lg:first:pl-0 lg:last:pr-0"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mb-2 h-9 w-9 text-brand">
              <path d={s.icon} />
            </svg>
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
