"use client";

import { useRef, useState } from "react";
import { projects } from "@/lib/projects";
import Placeholder from "./Placeholder";
import ProjectPanel from "./ProjectPanel";


export default function WorkCarousel() {
  const [active, setActive] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<(HTMLElement | null)[]>([]);

  const scroll = (dir: number) =>
    railRef.current?.scrollBy({ left: dir * 1000, behavior: "smooth" });

  const close = () => {
    const i = active;
    setActive(null);
    if (i != null) triggerRefs.current[i]?.focus();
  };

  return (
    <section id="work" className="pb-[90px] pt-20 lg:pt-[120px]">
      <h2 className="mx-auto mb-[60px] max-w-[20ch] px-5 text-pretty text-center font-bebas text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.04] lg:px-8">
        A few of the people I&apos;ve built things for.
      </h2>

      <div
        ref={railRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-[14px] overflow-x-auto scroll-smooth px-5 pb-2 lg:snap-none lg:gap-[22px] lg:px-[max(32px,calc((100%-1160px)/2))]"
      >
        {projects.map((p, i) => (
          <article
            key={p.id}
            ref={(el) => {
              triggerRefs.current[i] = el;
            }}
            role="button"
            tabIndex={0}
            aria-label={`${p.title} — ${p.meta}. Open project details.`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(i);
              }
            }}
            className="flex h-[400px] flex-none basis-[82vw] cursor-pointer snap-start flex-col overflow-hidden transition-opacity hover:opacity-[0.94] lg:h-[500px] lg:basis-[480px]"
          >
            <div className="relative flex-1 overflow-hidden bg-stone">
              {p.images?.[0] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Placeholder />
              )}
            </div>
            <div className="flex flex-col gap-[7px] bg-white p-[24px_28px_26px]">
              <span className="text-[11px] uppercase tracking-[0.12em] text-muted">{p.meta}</span>
              <h3 className="m-0 font-bebas text-[27px] font-normal leading-[1.15] text-ink">
                {p.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden justify-center gap-[14px] pt-[46px] lg:flex">
        <button
          type="button"
          aria-label="Previous projects"
          onClick={() => scroll(-1)}
          className="flex h-[46px] w-[46px] items-center justify-center border border-rule-btn text-[17px] text-ink transition-colors hover:border-ink-dark hover:bg-ink-dark hover:text-cream"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next projects"
          onClick={() => scroll(1)}
          className="flex h-[46px] w-[46px] items-center justify-center border border-rule-btn text-[17px] text-ink transition-colors hover:border-ink-dark hover:bg-ink-dark hover:text-cream"
        >
          →
        </button>
      </div>

      <ProjectPanel project={active == null ? null : projects[active]} onClose={close} />
    </section>
  );
}
