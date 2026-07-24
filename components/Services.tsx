"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";

// Card + gap widths mirror the previous 2-col grid so cards render at
// the same visual size as before. Track advances by (card + gap) per
// arrow click.
const CARD_WIDTH = 576;
const GAP = 32;

/**
 * Services carousel. The first card is aligned to the left edge of the
 * container (1280px). Following cards line up to the right and bleed
 * past the right edge of the viewport — clicking next slides the track
 * left by exactly one card width so the next card lands at the left
 * edge, and so on. Wraps around at both ends.
 *
 * The track's padding-left uses max(48px, calc((100vw - 1280px)/2 +
 * 48px)) so on viewports wider than 1280 the first card still anchors
 * to the container's inner content edge, not the screen edge.
 */
export default function Services() {
  const [index, setIndex] = useState(0);
  const max = services.length - 1;

  const prev = () => setIndex((i) => (i <= 0 ? max : i - 1));
  const next = () => setIndex((i) => (i >= max ? 0 : i + 1));

  const offset = index * (CARD_WIDTH + GAP);

  return (
    <section
      id="services"
      className="border-t border-rule pt-24 pb-[104px]"
      style={{ scrollMarginTop: "20px" }}
    >
      {/* Header row inside the container: eyebrow + H2 left, arrows right */}
      <div className="container-tb mb-16 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-faint mb-5">
            What I do
          </div>
          <h2
            className="font-heading font-normal leading-[1.06] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px,3.4vw,46px)", maxWidth: "16ch" }}
          >
            Four ways I help your business grow.
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous service"
            className="w-[52px] h-[52px] rounded-full border border-rule-carousel inline-flex items-center justify-center text-[#3a4a34] hover:border-forest transition-colors"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next service"
            className="w-[52px] h-[52px] rounded-full border border-rule-carousel inline-flex items-center justify-center text-[#3a4a34] hover:border-forest transition-colors"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* Full-width carousel viewport — track bleeds off the right edge */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8"
          style={{
            paddingLeft:
              "max(48px, calc((100vw - 1280px) / 2 + 48px))",
            transform: `translateX(-${offset}px)`,
            transition: "transform .6s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {services.map((svc) => {
            const bg =
              svc.palette === "green" ? "bg-card-green" : "bg-card-olive";
            const bodyColor =
              svc.palette === "green"
                ? "text-card-greenText"
                : "text-card-oliveText";
            return (
              <article
                key={svc.num}
                className="shrink-0 grow-0 flex flex-col"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                {/* Image slot */}
                <div className="relative w-full h-[260px] overflow-hidden bg-placeholderTile">
                  {svc.imageSrc && (
                    <Image
                      src={svc.imageSrc}
                      alt={svc.title}
                      fill
                      sizes="576px"
                      className="object-cover"
                    />
                  )}
                </div>
                {/* Panel */}
                <div
                  className={`${bg} flex-1 px-11 pt-11 pb-10 text-[#eef0e6] flex flex-col`}
                >
                  <div className="font-heading font-light text-xl text-[#a7ab98] mb-3.5">
                    {svc.num}
                  </div>
                  <h3 className="font-heading font-normal text-[32px] tracking-[-0.01em] text-white">
                    {svc.title}
                  </h3>
                  <p
                    className={`mt-[18px] text-[17px] leading-[1.68] font-light ${bodyColor}`}
                  >
                    {svc.description}
                  </p>
                  <div className="mt-7 flex flex-col">
                    {svc.points.map((pt) => (
                      <div
                        key={pt}
                        className={`text-[16px] leading-[1.5] font-light py-[9px] ${bodyColor}`}
                        style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}
                      >
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
