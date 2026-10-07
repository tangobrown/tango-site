"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/projects";
import ArrowIcon from "./ArrowIcon";
import { h2Section } from "./ui";

// Every tablet mock is 1196×872 with the device inset 4.01% left/right and
// 5.5% top/bottom (transparent margin around it), with ~2.9%/4.1% corner
// radii. The green hover layer uses the same box so it fills exactly the
// tablet's shape rather than the whole tile.
const DEVICE = { insetX: "4.01%", insetY: "5.5%", radius: "2.9% / 4.1%" };

// Selected work: a full-width 3-column grid of tablet mocks with the title
// below. Hovering (or focusing) a tablet turns it green with a short summary
// and a link to the live site. Touch screens have no hover, so the first
// tap does the same.
export default function WorkGrid() {
  const [active, setActive] = useState<number | null>(null);

  const onTileClick = (i: number) => {
    if (window.matchMedia("(hover: hover)").matches) return;
    setActive((a) => (a === i ? null : i));
  };

  return (
    <section id="work" className="px-5 pb-[clamp(52px,6.5vw,88px)] lg:px-11">
      {/* Indent matches the tablet's 4.01% inset within a grid column. */}
      <h2
        data-reveal
        className={`${h2Section} mb-[26px] pl-[4.01%] sm:pl-[calc((100%-16px)/2*0.0401)] lg:pl-[calc((100%-32px)/3*0.0401)]`}
      >
        Selected work
      </h2>

      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const isActive = active === i;
          return (
            <article key={p.id} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <div
                tabIndex={0}
                onClick={() => onTileClick(i)}
                aria-label={`${p.title} — ${p.category}`}
                className="group relative aspect-[1196/872] outline-none"
              >
                <Image
                  src={p.cover}
                  alt={`${p.title} website shown on a tablet`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />

                {/* Green layer shaped like the tablet */}
                <div
                  style={{
                    left: DEVICE.insetX,
                    right: DEVICE.insetX,
                    top: DEVICE.insetY,
                    bottom: DEVICE.insetY,
                    borderRadius: DEVICE.radius,
                  }}
                  className={`absolute flex flex-col justify-between bg-brand p-[clamp(18px,2.2vw,32px)] text-white transition-[opacity,transform] duration-[280ms,320ms] ease-[ease,cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                  }`}
                >
                  <p className="m-0 max-w-[30ch] text-[clamp(17px,1.5vw,21px)] font-medium leading-[1.38] tracking-[-0.015em]">
                    {p.summary}
                  </p>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex h-[50px] items-center gap-3 self-start rounded-full bg-white pl-[24px] pr-[20px] text-[17px] font-semibold tracking-normal text-ink transition-colors hover:bg-pine hover:text-white"
                    >
                      Visit the live site <ArrowIcon size={18} />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Caption, indented to line up with the tablet's edge */}
              <div className="px-[4.01%]">
                <h3 className="m-0 mt-1 text-[clamp(22px,1.9vw,26px)] font-semibold leading-[1.1] tracking-[-0.03em]">
                  {p.title}
                </h3>
                <p className="m-0 mt-1 text-[15px] text-ink-muted">{p.category}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
