"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/testimonials";
import Arrow from "./Arrow";

const pad = (n: number) => String(n).padStart(2, "0");

// One testimonial at a time in a dark card over a full-bleed photo. Every
// quote stays mounted in the same grid cell, so the card is sized to the
// longest one and never jumps; prev/next crossfade and wrap around.
export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const n = testimonials.length;
  const go = (dir: number) => setIndex((i) => (i + dir + n) % n);

  const layer = (active: boolean) =>
    `col-start-1 row-start-1 transition-opacity duration-300 ${
      active ? "opacity-100 delay-100" : "pointer-events-none opacity-0"
    }`;

  return (
    <section aria-label="Kind words" className="relative mx-auto max-w-wide px-8">
      <div className="relative aspect-[16/8] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/work/projects/vowles-carpentry-kitchen-wide.jpg"
          alt=""
          fill
          sizes="(min-width: 1440px) 1376px, 100vw"
          quality={85}
          className="object-cover"
        />
        <div className="absolute left-1/2 top-1/2 flex w-[min(420px,calc(100%-48px))] -translate-x-1/2 -translate-y-1/2 flex-col gap-7 bg-ink px-9 py-10">
          <div className="flex items-center justify-between border-b border-line pb-4 font-display text-[11px] tracking-[0.16em] text-ash">
            <span>KIND WORDS</span>
            <span className="tabular-nums">
              {pad(index + 1)} / {pad(n)}
            </span>
          </div>

          <div aria-live="polite" className="flex flex-col gap-7">
            <div className="grid">
              {testimonials.map((t, i) => (
                <p
                  key={i}
                  aria-hidden={i !== index}
                  className={`m-0 text-[22px] leading-[1.35] ${layer(i === index)}`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              ))}
            </div>

            <div className="flex items-end justify-between gap-4">
              <div className="grid">
                {testimonials.map((t, i) => (
                  <div key={i} aria-hidden={i !== index} className={`flex flex-col gap-1 ${layer(i === index)}`}>
                    <span className="font-display text-[13px] uppercase tracking-[0.12em]">{t.name}</span>
                    <em className="text-[16px] text-ash">{t.company}</em>
                  </div>
                ))}
              </div>
              <div className="flex flex-none gap-1.5">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center border border-line2 bg-transparent text-[14px] text-bone transition-colors hover:border-bone"
                >
                  <Arrow direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center border-0 bg-bone text-[14px] text-ink transition-colors hover:text-ember"
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
