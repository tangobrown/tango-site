"use client";

import { useRef, useState } from "react";
import { projects } from "@/lib/projects";
import Placeholder from "./Placeholder";
import ProjectPanel from "./ProjectPanel";

// 3×3 grid — all nine projects.
const items = projects.slice(0, 9);

export default function WorkGrid() {
  const [active, setActive] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLElement | null)[]>([]);

  const close = () => {
    const i = active;
    setActive(null);
    if (i != null) triggerRefs.current[i]?.focus();
  };

  return (
    <section id="work" className="px-5 py-20 lg:px-8 lg:py-[120px]">
      <h2 className="mx-auto mb-[60px] max-w-[20ch] text-pretty text-center font-bebas text-[clamp(34px,3.7vw,54px)] font-normal leading-[1.04]">
        A few of the people I&apos;ve built things for.
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
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
              className="flex cursor-pointer flex-col overflow-hidden transition-opacity hover:opacity-[0.94]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                {p.images?.[0] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover object-left-top"
                  />
                ) : (
                  <Placeholder />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-[7px] bg-white p-5 lg:p-6">
                <span className="text-[11px] uppercase tracking-[0.12em] text-muted">{p.meta}</span>
                <h3 className="m-0 font-bebas text-[24px] font-normal leading-[1.1] text-ink">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      <ProjectPanel project={active == null ? null : items[active]} onClose={close} />
    </section>
  );
}
