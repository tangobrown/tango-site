import {
  testimonialsRowBottom,
  testimonialsRowTop,
  type Testimonial,
} from "@/content/testimonials";
import Reveal from "./Reveal";

function Card({ t, hidden }: { t: Testimonial; hidden?: boolean }) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="m-0 flex w-[400px] flex-none flex-col justify-between gap-6 border border-[rgba(14,17,18,.12)] bg-white p-8"
    >
      <blockquote className="m-0 text-pretty text-[17px] leading-[1.55] tracking-[-.01em] text-ink">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col gap-1">
        <span className="text-[14px] font-semibold text-ink">{t.name}</span>
        <span className="font-mono text-[11px] uppercase tracking-[.12em] text-ink-4">
          {t.company}
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  const anim = direction === "right" ? "animate-marquee-right" : "animate-marquee-left";
  return (
    <div className="marquee-row overflow-hidden">
      {/* Card set duplicated once so the -50% loop is seamless. */}
      <div className={`marquee-track flex w-max gap-5 ${anim}`}>
        {items.map((t) => (
          <Card key={`a-${t.name}`} t={t} />
        ))}
        {items.map((t) => (
          <Card key={`b-${t.name}`} t={t} hidden />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden border-t border-[rgba(14,17,18,.1)] bg-bone py-[110px]"
    >
      <div className="mx-auto mb-14 flex max-w-content flex-col gap-[18px] px-6 md:px-10">
        <Reveal
          as="span"
          className="font-mono text-[11px] uppercase tracking-[.2em] text-forest"
        >
          07 / Testimonials
        </Reveal>
        <Reveal
          as="h2"
          className="m-0 text-[clamp(34px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-.035em]"
        >
          Owners, not marketers.
        </Reveal>
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={testimonialsRowTop} direction="right" />
        <MarqueeRow items={testimonialsRowBottom} direction="left" />
      </div>
    </section>
  );
}
