"use client";

import { useRef, useState } from "react";
import { projects } from "@/lib/projects";
import ProjectPanel from "./ProjectPanel";

// Coverflow — the projects that have a device-frame cover.
const items = projects.filter((p) => p.cover);

export default function WorkCarousel() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchX = useRef<number | null>(null);
  const n = items.length;

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  const closePanel = () => {
    setOpen(false);
    cardRefs.current[active]?.focus();
  };

  // Signed distance from the active slide, wrapped to the shortest way round.
  const rel = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const activeProject = items[active];

  return (
    <section id="work" className="overflow-hidden px-5 py-20 lg:py-[120px]">
      <h2 className="mx-auto mb-[54px] max-w-[20ch] text-pretty text-center font-bebas text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.04]">
        A few of the people I&apos;ve built things for.
      </h2>

      {/* Coverflow stage */}
      <div
        className="relative mx-auto h-[66vw] max-h-[700px] select-none"
        role="group"
        aria-roledescription="carousel"
        aria-label="Selected work"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(-1);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            go(1);
          }
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((p, i) => {
          const d = rel(i);
          const abs = Math.abs(d);
          const isActive = d === 0;
          const visible = abs <= 1;
          return (
            <button
              key={p.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              type="button"
              aria-hidden={!visible || undefined}
              aria-label={
                isActive
                  ? `${p.title} — ${p.meta}. Open project details.`
                  : `Show ${p.title}`
              }
              tabIndex={visible ? 0 : -1}
              onClick={() => (isActive ? setOpen(true) : setActive(i))}
              className="absolute left-1/2 top-1/2 aspect-[1196/872] w-[86vw] max-w-[950px] transition-[transform,opacity] duration-[550ms] ease-out will-change-transform"
              style={{
                transform: `translate(-50%, -50%) translateX(${d * 62}%) scale(${
                  isActive ? 1 : 0.78
                })`,
                zIndex: 20 - abs,
                opacity: visible ? (isActive ? 1 : 0.5) : 0,
                pointerEvents: visible ? "auto" : "none",
                cursor: isActive ? "pointer" : "pointer",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.cover}
                alt={p.title}
                className="h-full w-full object-contain drop-shadow-[0_16px_26px_rgba(31,29,26,0.12)]"
                draggable={false}
              />
            </button>
          );
        })}
      </div>

      {/* Caption for the active project */}
      <div className="mx-auto mt-8 flex flex-col items-center gap-1 text-center lg:mt-10">
        <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
          {activeProject.meta}
        </span>
        <h3 className="m-0 font-bebas text-[clamp(26px,2.6vw,36px)] font-normal leading-[1.05] text-ink">
          {activeProject.title}
        </h3>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-2 border-b border-underline-accent pb-1 text-[13px] font-medium uppercase tracking-[0.04em] text-ink transition-colors hover:border-rust"
        >
          View project
        </button>
      </div>

      {/* Controls */}
      <div className="mt-9 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-rule-btn text-[16px] text-ink transition-colors hover:border-rust hover:text-rust"
        >
          ←
        </button>

        <div className="flex items-center gap-[10px]">
          {items.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to ${p.title}`}
              aria-current={i === active || undefined}
              className={`h-[7px] rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-rust" : "w-[7px] bg-rule-btn hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-rule-btn text-[16px] text-ink transition-colors hover:border-rust hover:text-rust"
        >
          →
        </button>
      </div>

      <ProjectPanel project={open ? activeProject : null} onClose={closePanel} />
    </section>
  );
}
