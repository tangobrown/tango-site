import { testimonialsRow1, testimonialsRow2, type Testimonial } from "@/lib/testimonials";

function Stars() {
  return (
    <div className="flex gap-[3px] text-rust" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.9 5.87 6.48.94-4.69 4.57 1.11 6.45L12 17.77l-5.8 3.05 1.1-6.45L2.62 9.8l6.48-.94L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t, hidden }: { t: Testimonial; hidden?: boolean }) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="m-0 flex min-h-[220px] w-[300px] flex-none flex-col justify-between gap-[26px] border border-rule-card bg-white p-[26px_24px] lg:min-h-[260px] lg:w-[400px] lg:p-[34px_34px_30px]"
    >
      <div className="flex flex-col gap-[16px]">
        <Stars />
        <blockquote className="m-0 text-[16px] leading-[1.6] text-ink lg:text-[17px]">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="flex items-center gap-3">
        <span className="flex h-[52px] w-[52px] flex-none items-center justify-center overflow-hidden rounded-full border border-rule-card bg-stone">
          {t.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={t.logo} alt="" className="h-full w-full object-cover" />
          ) : null}
        </span>
        <span className="flex flex-col gap-[3px]">
          <span className="text-[14px] font-medium">{t.name}</span>
          <span className="text-[13px] text-muted">{t.company}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Row({ items, direction }: { items: Testimonial[]; direction: "left" | "right" }) {
  const anim = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  return (
    <div className="overflow-hidden">
      {/* Card list duplicated back-to-back for a seamless loop. */}
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
    <section className="overflow-hidden pb-[130px] pt-[10px]">
      <div data-reveal className="mx-auto mb-14 max-w-content px-5 lg:px-8">
        <h2 className="mx-auto max-w-[24ch] text-pretty text-center font-bebas text-[clamp(32px,3.4vw,50px)] font-normal leading-[1.04]">
          See what people say about me.
        </h2>
      </div>
      <div className="marquee-group flex flex-col gap-5">
        <Row items={testimonialsRow1} direction="left" />
        <Row items={testimonialsRow2} direction="right" />
      </div>
    </section>
  );
}
