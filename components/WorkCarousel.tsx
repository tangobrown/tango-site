"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import ArrowIcon from "./ArrowIcon";
import { container, h2Section } from "./ui";

const GAP = 12;

function ArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  );
}

export default function WorkCarousel() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  const cardStep = () => {
    const card = railRef.current?.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + GAP : 452;
  };

  const scrollByCards = useCallback((n: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    if (n > 0 && atEnd) rail.scrollTo({ left: 0, behavior: "smooth" });
    else rail.scrollBy({ left: n * cardStep(), behavior: "smooth" });
  }, []);

  // Any manual interaction stops the auto-advance for good.
  const stop = () => setStopped(true);

  // Auto-advance one card every 3s until the visitor interacts; pause on
  // hover; skip entirely under reduced motion.
  useEffect(() => {
    if (stopped || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => scrollByCards(1), 3000);
    return () => clearInterval(id);
  }, [stopped, paused, scrollByCards]);

  // Touch devices have no hover: the first tap reveals a card's overlay.
  const onCardClick = (i: number) => {
    stop();
    if (window.matchMedia("(hover: hover)").matches) return;
    setActive((a) => (a === i ? null : i));
  };

  return (
    <section id="work" className="pb-[clamp(52px,6.5vw,88px)]">
      <div className={`${container} mb-[26px] flex items-center justify-between gap-4`}>
        <h2 data-reveal className={h2Section}>
          Selected work
        </h2>
        <div className="flex flex-none gap-[6px]">
          <button
            type="button"
            onClick={() => {
              stop();
              scrollByCards(-2);
            }}
            aria-label="Previous projects"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink bg-white text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => {
              stop();
              scrollByCards(2);
            }}
            aria-label="Next projects"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="no-scrollbar flex snap-x snap-proximity gap-3 overflow-x-auto scroll-px-[max(20px,calc((100%-1240px)/2))] px-[max(20px,calc((100%-1240px)/2))]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={stop}
        onWheel={stop}
        onTouchStart={stop}
        onKeyDown={stop}
      >
        {projects.map((p, i) => {
          const isActive = active === i;
          return (
            <article
              key={p.id}
              data-card
              tabIndex={0}
              onClick={() => onCardClick(i)}
              aria-label={`${p.title} — ${p.category}`}
              className="group relative aspect-[4/5] flex-[0_0_min(84vw,440px)] snap-start overflow-hidden rounded-md bg-surface-card outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {/* Device mock */}
              <div className="absolute inset-x-5 bottom-[38%] top-[58px]">
                <Image
                  src={p.cover}
                  alt=""
                  fill
                  sizes="440px"
                  className="object-contain object-top"
                />
              </div>

              <span className="absolute left-[14px] top-[14px] rounded-full bg-white px-2.5 py-[5px] text-[12px] font-semibold tracking-normal text-ink">
                {p.category}
              </span>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.72))" }}
              />
              <h3 className="absolute inset-x-[22px] bottom-[22px] m-0 text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                {p.title}
              </h3>

              {/* Hover / focus / tapped overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-between bg-brand px-[22px] pb-[22px] pt-6 text-white transition-[opacity,transform] duration-[280ms,320ms] ease-[ease,cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <div className="flex flex-col items-start gap-4">
                  <span className="rounded-full border border-white/70 px-2.5 py-[5px] text-[12px] font-semibold tracking-normal">
                    {p.services}
                  </span>
                  <p className="m-0 max-w-[30ch] text-[20px] font-medium leading-[1.38] tracking-[-0.015em]">
                    {p.summary}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <h3 className="m-0 text-[30px] font-semibold leading-[1.05] tracking-[-0.03em]">
                    {p.title}
                  </h3>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex h-11 items-center gap-3 rounded-full bg-white pl-[20px] pr-[16px] text-[15px] font-semibold tracking-normal text-ink transition-colors hover:bg-ink hover:text-white"
                    >
                      Visit the live site <ArrowIcon size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
