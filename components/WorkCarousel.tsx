"use client";

import Image from "next/image";
import { useState } from "react";
import { work } from "@/data/work";

/**
 * Full-width one-slide-per-view carousel of the four selected
 * projects. Each slide has a placeholder tile (or real image if
 * imageSrc is set) with an overlay card bottom-left containing
 * a gold eyebrow, quote (in DM Sans), name in gold and role in
 * muted grey.
 *
 * Prev/next wrap around (from last back to first and vice versa).
 * A dot row below indicates the current slide; the active dot is
 * 40px wide and gold, others are 20px and muted sage.
 */
export default function WorkCarousel() {
  const [slide, setSlide] = useState(0);
  const max = work.length - 1;

  const prev = () => setSlide((s) => (s <= 0 ? max : s - 1));
  const next = () => setSlide((s) => (s >= max ? 0 : s + 1));

  return (
    <section id="work" style={{ scrollMarginTop: "0px" }}>
      <div className="container-tb pt-28 pb-10 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-faint mb-5">
            Selected work
          </div>
          <h2
            className="font-heading font-normal leading-[1.06] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px,3.4vw,46px)", maxWidth: "18ch" }}
          >
            A few projects I&apos;m proud of.
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="w-[52px] h-[52px] rounded-full border border-rule-carousel inline-flex items-center justify-center text-[#3a4a34] hover:border-forest transition-colors"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="w-[52px] h-[52px] rounded-full border border-rule-carousel inline-flex items-center justify-center text-[#3a4a34] hover:border-forest transition-colors"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="container-tb pt-12 pb-[120px]">
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${slide * 100}%)`,
              transition: "transform .6s cubic-bezier(.4,0,.2,1)",
            }}
          >
            {work.map((proj) => (
              <div
                key={proj.name}
                className="relative box-border shrink-0 grow-0 basis-full"
              >
                <div
                  className="relative w-full bg-placeholderTile overflow-hidden"
                  style={{ height: "min(62vh, 600px)" }}
                >
                  {proj.imageSrc && (
                    <Image
                      src={proj.imageSrc}
                      alt={proj.name}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div
                  className="absolute left-0 bottom-0 max-w-[640px] px-12 py-11 text-[#eef0e6]"
                  style={{ background: "rgba(30,32,29,.82)" }}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-[18px]">
                    {proj.tag}
                  </div>
                  <p
                    className="font-heading font-normal text-white leading-[1.28] tracking-[-0.01em]"
                    style={{ fontSize: "clamp(24px,2.4vw,32px)" }}
                  >
                    &ldquo;{proj.quote}&rdquo;
                  </p>
                  <div className="mt-[26px] text-gold text-base font-semibold">
                    {proj.name}
                  </div>
                  <div className="text-heroMuted2 text-sm font-light">
                    {proj.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2.5 mt-[26px] justify-center">
          {work.map((proj, i) => {
            const active = slide === i;
            return (
              <button
                key={proj.name}
                type="button"
                onClick={() => setSlide(i)}
                aria-label={`Go to project ${i + 1}`}
                className="h-1 cursor-pointer transition-all duration-300"
                style={{
                  width: active ? "40px" : "20px",
                  background: active ? "#e0a94a" : "rgba(90,107,77,.4)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
