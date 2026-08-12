"use client";

import { useRef, useState } from "react";
import { cases, casesFootnote } from "@/content/cases";
import CaseDetailPanel from "./CaseDetailPanel";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const SCRIM = "linear-gradient(180deg, rgba(8,12,12,0) 35%, rgba(8,12,12,.82) 100%)";

export default function CaseCarousel() {
  const [slide, setSlide] = useState<0 | 1>(0);
  const [detail, setDetail] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const touchX = useRef<number | null>(null);

  const prev = () => setSlide((s) => (Math.max(0, s - 1) as 0 | 1));
  const next = () => setSlide((s) => (Math.min(1, s + 1) as 0 | 1));

  const openDetail = (i: number, el: HTMLButtonElement) => {
    triggerRef.current = el;
    setDetail(i);
  };
  const closeDetail = () => {
    setDetail(null);
    triggerRef.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -40) next();
    else if (dx > 40) prev();
    touchX.current = null;
  };

  return (
    <section
      id="work"
      className="overflow-hidden border-b border-[rgba(14,17,18,.1)] bg-white py-[110px]"
    >
      {/* Header */}
      <div className="mx-auto flex max-w-content flex-wrap items-end justify-between gap-10 px-6 md:px-10">
        <Reveal className="flex flex-col gap-[18px]">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-forest">
            03 / Case studies
          </span>
          <h2 className="m-0 text-[clamp(34px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-.035em]">
            Work, and what it did.
          </h2>
        </Reveal>
        <Reveal className="flex gap-[10px]">
          <button
            type="button"
            aria-label="Previous case study"
            onClick={prev}
            disabled={slide === 0}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(14,17,18,.24)] font-mono text-[16px] text-ink transition-colors hover:border-forest hover:text-forest disabled:opacity-30 disabled:hover:border-[rgba(14,17,18,.24)] disabled:hover:text-ink"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next case study"
            onClick={next}
            disabled={slide === 1}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[rgba(14,17,18,.24)] font-mono text-[16px] text-ink transition-colors hover:border-forest hover:text-forest disabled:opacity-30 disabled:hover:border-[rgba(14,17,18,.24)] disabled:hover:text-ink"
          >
            →
          </button>
        </Reveal>
      </div>

      {/* Track */}
      <div className="mt-14 overflow-hidden">
        <div
          role="group"
          aria-label="Case studies carousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="flex gap-[2%] transition-transform duration-700 ease-fluid will-change-transform focus:outline-none"
          style={{ transform: `translateX(calc(${-slide * 38}% - 19%))` }}
        >
          {cases.map((c, i) => (
            <button
              key={c.slotId}
              type="button"
              onClick={(e) => openDetail(i, e.currentTarget)}
              className="relative aspect-[4/3] flex-[0_0_36%] overflow-hidden border border-[rgba(14,17,18,.12)] bg-white p-0 text-left transition-colors hover:border-forest"
            >
              <Placeholder label={`Case — ${c.title}`} />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ background: SCRIM }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-[10px] p-7">
                <span className="font-mono text-[11px] uppercase tracking-[.16em] text-mint">
                  {c.tags}
                </span>
                <span className="text-[24px] font-semibold leading-[1.15] tracking-[-.025em] text-white">
                  {c.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-content px-6 font-mono text-[11px] uppercase tracking-[.12em] text-ink-4 md:px-10">
        {casesFootnote}
      </p>

      {detail !== null && <CaseDetailPanel caseStudy={cases[detail]} onClose={closeDetail} />}
    </section>
  );
}
