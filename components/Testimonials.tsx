import { testimonials, type Testimonial } from "@/data/testimonials";

/**
 * Two-row testimonial marquee under the Selected work section.
 *
 * - Row 1 scrolls right-to-left (`marquee-left`).
 * - Row 2 scrolls left-to-right (`marquee-right`) and uses the same
 *   testimonials in reverse order, so the two rows show different
 *   quotes side-by-side at any moment.
 *
 * Each row's track duplicates the testimonial array so translating
 * exactly -50% (or 0% for the reverse direction) yields a seamless
 * loop with no visible jump.
 *
 * The masking gradient on `.marquee-mask` fades content in and out
 * at the left/right edges of the container-tb column so cards enter
 * and leave without hard clipping.
 */

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="shrink-0 w-[300px] md:w-[380px] bg-white border border-rule rounded-br-[25px] p-7 md:p-8 flex flex-col justify-between">
      <p className="text-[15px] md:text-[16px] leading-[1.65] font-light text-ink">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6">
        <div className="text-[14px] font-semibold text-ink">{t.author}</div>
        {t.role && (
          <div className="text-[13px] font-light text-muted-faint mt-1">
            {t.role}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Testimonials() {
  // Duplicate for a seamless loop.
  const rowA = [...testimonials, ...testimonials];
  const rowBSource = [...testimonials].reverse();
  const rowB = [...rowBSource, ...rowBSource];

  return (
    <section className="border-t border-rule py-16 md:py-24">
      <div className="container-tb mb-10 md:mb-14">
        <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-faint mb-5">
          Testimonials
        </div>
        <h2
          className="font-heading font-normal leading-[1.06] tracking-[-0.01em]"
          style={{ fontSize: "clamp(28px,7vw,46px)", maxWidth: "18ch" }}
        >
          What do customers say about me?
        </h2>
      </div>

      <div className="container-hero">
        <div className="overflow-hidden marquee-mask">
          <div className="marquee-track marquee-left flex gap-5">
            {rowA.map((t, i) => (
              <Card key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden marquee-mask mt-5">
          <div className="marquee-track marquee-right flex gap-5">
            {rowB.map((t, i) => (
              <Card key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
