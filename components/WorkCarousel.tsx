"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { work } from "@/data/work";

/**
 * Full-viewport-width carousel with three projects visible at a time,
 * scrolling by one card per arrow click. The track is a doubled list
 * of the four projects so the loop feels continuous — once the index
 * reaches projects.length we snap back to 0 without animation after
 * the transition settles, mirroring the wrap-around behaviour used
 * on other carousels in the codebase.
 *
 * Header row (eyebrow + H2 + arrows) stays inside the 1280px content
 * column; the carousel itself hugs 100% of the viewport and has no
 * bottom padding so the CTA band underneath sits flush against it.
 */
export default function WorkCarousel() {
  const n = work.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track holds two copies of the project list so the user can advance
  // past the last real project into a seamless duplicate before we
  // snap back to the equivalent index in the first copy.
  const loop = [...work, ...work];
  const step = 100 / 3; // percentage a single slide advances (3-visible)

  const clearSnap = () => {
    if (snapTimer.current) {
      clearTimeout(snapTimer.current);
      snapTimer.current = null;
    }
  };

  const next = () => {
    clearSnap();
    setAnimate(true);
    setIndex((cur) => {
      const nxt = cur + 1;
      snapTimer.current = setTimeout(() => {
        setIndex((i) => (i >= n ? i - n : i));
        setAnimate(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => setAnimate(true))
        );
      }, 650);
      return nxt;
    });
  };

  const prev = () => {
    clearSnap();
    setIndex((cur) => {
      if (cur <= 0) {
        // Jump forward invisibly to the equivalent index in the duplicate copy…
        setAnimate(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimate(true);
            // …then animate back a step.
            setIndex(n - 1);
          })
        );
        return n;
      }
      setAnimate(true);
      return cur - 1;
    });
  };

  return (
    <section id="work" style={{ scrollMarginTop: "0px" }}>
      {/* Header row inside the 1280 content column */}
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

      {/* Full-viewport-width carousel; no side or bottom padding */}
      <div className="mt-4 overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${index * step}%)`,
            transition: animate
              ? "transform .65s cubic-bezier(.4,0,.2,1)"
              : "none",
          }}
        >
          {loop.map((proj, i) => (
            <div
              key={`${proj.name}-${i}`}
              className="relative shrink-0 grow-0"
              style={{ flexBasis: "33.3333%", maxWidth: "33.3333%" }}
            >
              <div
                className="relative w-full bg-placeholderTile overflow-hidden"
                style={{ height: "min(60vh, 520px)" }}
              >
                {proj.imageSrc && (
                  <Image
                    src={proj.imageSrc}
                    alt={proj.name}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                )}
                <div
                  className="absolute left-0 right-0 bottom-0 px-7 py-7 text-[#eef0e6]"
                  style={{ background: "rgba(30,32,29,.82)" }}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold mb-3.5">
                    {proj.tag}
                  </div>
                  <p
                    className="font-heading font-normal text-white leading-[1.32] tracking-[-0.01em]"
                    style={{ fontSize: "clamp(15px,1.3vw,20px)" }}
                  >
                    &ldquo;{proj.quote}&rdquo;
                  </p>
                  <div className="mt-4 text-gold text-[15px] font-semibold">
                    {proj.name}
                  </div>
                  <div className="text-heroMuted2 text-[13px] font-light">
                    {proj.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
