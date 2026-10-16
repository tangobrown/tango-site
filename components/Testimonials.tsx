"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/testimonials";
import { container, h2Section } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

const roundBtn =
  "flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/60 text-white transition-colors hover:border-white hover:bg-white hover:text-brand";

// Five-star rating shown above every quote.
function Stars() {
  return (
    <div role="img" aria-label="Rated 5 out of 5" className="flex gap-1 text-[#FFC83D]">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

// Each client's photo, listed once.
const photos = [...new Set(testimonials.map((t) => t.logo).filter(Boolean))] as string[];

// One testimonial at a time: photo on the left, green quote card on the right.
// Every photo and quote stays mounted and stacked in place, so nothing
// reloads and the card height never jumps. The new photo fades in over the
// old one (which only disappears once it's covered); the old quote fades out
// quickly before the new one rises in, so they never overlap.
// Photos and quotes keep their own compositing layer (will-change) all the
// time, so the browser doesn't re-draw them when an animation ends; that
// re-draw is what made each change visibly "click" into place.
export default function Testimonials({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const n = testimonials.length;
  const t = testimonials[index];

  const go = (dir: number) => setIndex((i) => (i + dir + n) % n);

  const layer = (active: boolean) =>
    `col-start-1 row-start-1 transition-[opacity,transform] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] ${
      active
        ? "translate-y-0 opacity-100 delay-200 duration-[600ms]"
        : "pointer-events-none translate-y-[4px] opacity-0 delay-0 duration-200"
    }`;

  return (
    <section className={`${container} pb-[clamp(52px,6.5vw,88px)] ${className}`}>
      <h2 data-reveal className={`${h2Section} mb-[52px]`}>
        See what people say about me
      </h2>

      <div data-reveal className="flex flex-wrap gap-3">
        <div className="relative h-[260px] flex-[1_1_300px] overflow-hidden rounded-[3px] bg-surface-placeholder md:h-[clamp(300px,30vw,400px)]">
          {photos.map((src) => (
            <Image
              key={src}
              src={src}
              alt={src === t.logo ? `${t.name}, ${t.company}` : ""}
              aria-hidden={src === t.logo ? undefined : true}
              fill
              // The box is up to ~480×400 and the 4:3 photo covers it, so it's
              // drawn ~540px wide. Higher quality keeps logo edges crisp.
              sizes="(min-width: 768px) 540px, 100vw"
              quality={90}
              className={`object-cover transition-[opacity,transform] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[opacity,transform] [backface-visibility:hidden] ${
                src === t.logo
                  ? "z-10 scale-100 opacity-100 duration-[900ms]"
                  : "z-0 scale-[1.025] opacity-0 delay-[950ms] duration-0"
              }`}
            />
          ))}
        </div>

        <figure
          aria-live="polite"
          className="m-0 flex min-h-[320px] flex-[2_1_460px] flex-col justify-between gap-8 rounded-[3px] bg-brand p-[clamp(26px,3.4vw,44px)] text-white md:h-[clamp(300px,30vw,400px)] md:min-h-0"
        >
          <div className="flex flex-col gap-4">
            <Stars />
            {/* All quotes share one grid cell, so the card fits the longest */}
            <div className="grid">
              {testimonials.map((q, i) => (
                <blockquote
                  key={i}
                  aria-hidden={i !== index}
                  className={`m-0 max-w-[30ch] text-[clamp(20px,1.8vw,26px)] font-medium leading-[1.22] tracking-[-0.01em] ${layer(
                    i === index,
                  )}`}
                >
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
              ))}
            </div>
          </div>

          <figcaption className="flex flex-wrap items-end justify-between gap-5">
            <div className="grid">
              {testimonials.map((q, i) => (
                <div key={i} aria-hidden={i !== index} className={`flex flex-col gap-1 ${layer(i === index)}`}>
                  <span className="text-[18px] font-semibold">{q.name}</span>
                  <span className="text-[15px] font-medium opacity-[0.85]">{q.company}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[14px] font-semibold tabular-nums tracking-normal">
                {pad(index + 1)} / {pad(n)}
              </span>
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className={roundBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
                </svg>
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={roundBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
