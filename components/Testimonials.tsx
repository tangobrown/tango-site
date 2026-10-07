"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { testimonials } from "@/lib/testimonials";
import { container, h2Section } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

const roundBtn =
  "flex h-12 w-12 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:border-white hover:bg-white hover:text-brand";

// One testimonial at a time: photo on the left, green quote card on the right.
// Changing slides fades out (180ms), swaps, then fades back in (220ms).
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const n = testimonials.length;
  const t = testimonials[index];

  const go = (dir: number) => {
    if (timer.current) clearTimeout(timer.current);
    setPhase("out");
    timer.current = setTimeout(() => {
      setIndex((i) => (i + dir + n) % n);
      setPhase("in");
    }, 180);
  };

  const fade =
    phase === "in"
      ? "translate-y-0 opacity-100 duration-[220ms]"
      : "translate-y-[6px] opacity-0 duration-[180ms]";

  return (
    <section className={`${container} pb-[clamp(52px,6.5vw,88px)]`}>
      <h2 data-reveal className={`${h2Section} mb-[26px]`}>
        See what people say about me
      </h2>

      <div data-reveal className="flex flex-wrap gap-3">
        <div className="relative h-[260px] flex-[1_1_300px] overflow-hidden rounded-md bg-surface-placeholder md:h-[clamp(300px,30vw,400px)]">
          {t.logo ? (
            <Image
              src={t.logo}
              alt={`${t.name}, ${t.company}`}
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className={`object-cover transition-[opacity,transform] ${fade}`}
            />
          ) : null}
        </div>

        <figure
          aria-live="polite"
          className="m-0 flex min-h-[320px] flex-[2_1_460px] flex-col justify-between gap-8 rounded-md bg-brand p-[clamp(26px,3.4vw,44px)] text-white md:h-[clamp(300px,30vw,400px)] md:min-h-0"
        >
          <blockquote
            className={`m-0 max-w-[30ch] text-[clamp(24px,2.4vw,34px)] font-medium leading-[1.22] tracking-[-0.01em] transition-[opacity,transform] ${fade}`}
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex flex-wrap items-end justify-between gap-5">
            <figcaption className={`flex flex-col gap-1 transition-[opacity,transform] ${fade}`}>
              <span className="text-[18px] font-semibold">{t.name}</span>
              <span className="text-[15px] font-medium opacity-[0.85]">{t.company}</span>
            </figcaption>
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
          </div>
        </figure>
      </div>
    </section>
  );
}
