"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/testimonials";
import { container, h2Section } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

const roundBtn =
  "flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/60 text-white transition-colors hover:border-white hover:bg-white hover:text-brand";

// Each client's photo, listed once.
const photos = [...new Set(testimonials.map((t) => t.logo).filter(Boolean))] as string[];

// One testimonial at a time: photo on the left, green quote card on the right.
// Every photo and quote stays mounted and stacked in place, so nothing
// reloads and the card height never jumps. The new photo fades in over the
// old one (which only disappears once it's covered); the old quote fades out
// quickly before the new one rises in, so they never overlap.
export default function Testimonials({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const n = testimonials.length;
  const t = testimonials[index];

  const go = (dir: number) => setIndex((i) => (i + dir + n) % n);

  const layer = (active: boolean) =>
    `col-start-1 row-start-1 transition-[opacity,transform] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
      active
        ? "translate-y-0 opacity-100 delay-150 duration-[450ms]"
        : "pointer-events-none translate-y-[6px] opacity-0 delay-0 duration-200"
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
              sizes="(min-width: 768px) 420px, 100vw"
              className={`object-cover transition-[opacity,transform] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                src === t.logo
                  ? "z-10 scale-100 opacity-100 duration-700"
                  : "z-0 scale-[1.04] opacity-0 delay-700 duration-0"
              }`}
            />
          ))}
        </div>

        <figure
          aria-live="polite"
          className="m-0 flex min-h-[320px] flex-[2_1_460px] flex-col justify-between gap-8 rounded-[3px] bg-brand p-[clamp(26px,3.4vw,44px)] text-white md:h-[clamp(300px,30vw,400px)] md:min-h-0"
        >
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
