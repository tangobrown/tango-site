import Image from "next/image";
import { work } from "@/data/work";
import ArrowRight from "./ArrowRight";

/**
 * Stacking selected-work cards. As the user scrolls, each card sticks
 * near the top of the viewport and the next card scrolls up over it,
 * so cards land layered one on top of the other. Pure CSS via
 * position: sticky with staggered `top` values so the previous card's
 * edge stays visible peeking above the current one.
 *
 * Each card is a two-column grid: image on the left, name + quote +
 * (optional) "Visit website" link on the right. The link pins to the
 * bottom of its column via mt-auto.
 */
export default function WorkCarousel() {
  return (
    <section id="work" style={{ scrollMarginTop: "0px" }}>
      {/* Header row inside the 1280 content column */}
      <div className="container-tb pt-16 md:pt-28 pb-8 md:pb-12">
        <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-faint mb-5">
          Selected work
        </div>
        <h2
          className="font-heading font-normal leading-[1.06] tracking-[-0.01em]"
          style={{ fontSize: "clamp(28px,7vw,46px)", maxWidth: "18ch" }}
        >
          A few projects I&apos;m proud of.
        </h2>
      </div>

      {/* Sticky stack */}
      <div className="container-tb pb-16 md:pb-[120px]">
        <div className="relative">
          {work.map((proj, i) => {
            // Small offset per card so the previous card's top edge peeks
            // above the next as they stack. On mobile the sticky pin has
            // less breathing room, so we start slightly lower.
            const top = 16 + i * 12;
            return (
              <div
                key={proj.name}
                className="sticky pb-6"
                style={{ top: `${top}px` }}
              >
                <article className="grid grid-cols-1 md:grid-cols-2 md:min-h-[440px] overflow-hidden border border-rule bg-white">
                  {/* Image edge-to-edge on the left half */}
                  <div
                    className="relative w-full bg-card-olive overflow-hidden h-[240px] md:h-auto"
                    style={{ minHeight: "240px" }}
                  >
                    {proj.imageSrc && (
                      <Image
                        src={proj.imageSrc}
                        alt={proj.name}
                        fill
                        // Ask Next to serve a larger variant than the raw
                        // display size so retina renders stay crisp; the
                        // 3200x2000 source can back it easily.
                        sizes="(max-width: 768px) 100vw, 1200px"
                        quality={90}
                        // Cover the card column edge-to-edge; anchor the
                        // crop to top-left so browser chrome + heading
                        // stay in view when the sides get cut off.
                        className="object-cover object-left-top"
                      />
                    )}
                  </div>
                  {/* Text on a white background */}
                  <div className="flex flex-col p-6 md:p-10 bg-white text-ink">
                    <div className="text-[13px] font-semibold uppercase tracking-[0.18em] text-muted-faint mb-4">
                      {proj.role}
                    </div>
                    <h3
                      className="font-heading font-normal text-ink leading-[1.08] tracking-[-0.01em] mb-5"
                      style={{ fontSize: "clamp(24px,2.4vw,34px)" }}
                    >
                      {proj.name}
                    </h3>
                    <p className="text-[17px] leading-[1.68] font-light text-muted max-w-[46ch]">
                      &ldquo;{proj.quote}&rdquo;
                    </p>
                    <div className="mt-auto pt-8">
                      {proj.url ? (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-forest text-[15px] font-semibold pb-[3px] hover:text-linkHover transition-colors"
                          style={{ borderBottom: "1.5px solid #26332a" }}
                        >
                          Visit website
                          <ArrowRight />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-muted-faint text-[15px] font-semibold pb-[3px]">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
