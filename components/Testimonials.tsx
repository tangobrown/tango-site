import { testimonialsRow1, testimonialsRow2, type Testimonial } from "@/lib/testimonials";

function Card({ t, hidden }: { t: Testimonial; hidden?: boolean }) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="m-0 flex min-h-[220px] w-[300px] flex-none flex-col justify-between gap-[26px] border border-rule-card bg-white p-[26px_24px] lg:min-h-[260px] lg:w-[400px] lg:p-[34px_34px_30px]"
    >
      <blockquote className="m-0 text-[16px] leading-[1.6] text-ink lg:text-[17px]">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
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
      <div className="mx-auto mb-14 max-w-content px-5 lg:px-8">
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
