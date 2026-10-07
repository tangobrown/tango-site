"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/projects";
import ArrowIcon from "./ArrowIcon";
import { container, h2Section } from "./ui";

// Selected work: a 3-column grid of tablet mocks with the title below.
// Hovering (or focusing) a tile reveals a green overlay with a short summary
// and a link to the live site. Touch screens have no hover, so the first tap
// toggles the overlay instead.
export default function WorkGrid() {
  const [active, setActive] = useState<number | null>(null);

  const onTileClick = (i: number) => {
    if (window.matchMedia("(hover: hover)").matches) return;
    setActive((a) => (a === i ? null : i));
  };

  return (
    <section id="work" className={`${container} pb-[clamp(52px,6.5vw,88px)]`}>
      <h2 data-reveal className={`${h2Section} mb-[26px]`}>
        Selected work
      </h2>

      <div className="grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const isActive = active === i;
          return (
            <article key={p.id} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <div
                tabIndex={0}
                onClick={() => onTileClick(i)}
                aria-label={`${p.title} — ${p.category}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-md bg-surface-panel outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <div className="absolute inset-[clamp(16px,2vw,26px)]">
                  <Image
                    src={p.cover}
                    alt={`${p.title} website shown on a tablet`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>

                {/* Hover / focus / tapped overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between bg-brand p-[clamp(20px,2.2vw,28px)] text-white transition-[opacity,transform] duration-[280ms,320ms] ease-[ease,cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  <p className="m-0 max-w-[30ch] text-[clamp(18px,1.6vw,21px)] font-medium leading-[1.38] tracking-[-0.015em]">
                    {p.summary}
                  </p>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex h-11 items-center gap-3 self-start rounded-full bg-white pl-[20px] pr-[16px] text-[15px] font-semibold tracking-normal text-ink transition-colors hover:bg-ink hover:text-white"
                    >
                      Visit the live site <ArrowIcon size={16} />
                    </a>
                  ) : null}
                </div>
              </div>

              <h3 className="m-0 mt-4 text-[clamp(22px,1.9vw,26px)] font-semibold leading-[1.1] tracking-[-0.03em]">
                {p.title}
              </h3>
              <p className="m-0 mt-1 text-[15px] text-ink-muted">{p.category}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
