import Reveal from "./Reveal";

const chips = ["Direct line, always", "Month to month", "You own everything"];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[rgba(14,17,18,.1)] px-6 py-[110px] md:px-10"
    >
      <div className="mx-auto grid max-w-content grid-cols-1 items-start gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Portrait — fills its column on desktop; capped on mobile */}
        <Reveal className="flex w-full max-w-[460px] flex-col gap-4 md:max-w-none">
          <div className="relative aspect-square w-full overflow-hidden border border-[rgba(14,17,18,.12)] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-tim.jpg"
              alt="Tim Brown, founder and operator of Tango Digital"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[.14em] text-ink-4">
            Founder & operator — Tango Digital
          </span>
        </Reveal>

        {/* Copy */}
        <Reveal className="flex flex-col gap-[26px] pt-[6px]">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-forest">
            05 / Operator
          </span>
          <h2 className="m-0 text-[clamp(34px,4vw,54px)] font-semibold leading-[1.03] tracking-[-.035em]">
            One person. That&apos;s the point.
          </h2>
          <p className="m-0 text-pretty text-[19px] leading-[1.55] text-ink-2">
            Agencies sell you a team and give you a junior. I sell you me — the person who plans it,
            builds it, and answers when you call. Fewer people means less cost, faster decisions, and
            nobody to hide behind when something isn&apos;t working.
          </p>
          <p className="m-0 text-[16px] leading-[1.6] text-ink-3">
            I use modern tooling and AI where it removes hours of grunt work, and judgement where it
            doesn&apos;t. That&apos;s how a solo operator delivers what used to need six people — and
            why the invoice looks nothing like an agency&apos;s.
          </p>
          <div className="flex flex-wrap gap-[10px] pt-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="border border-[rgba(14,17,18,.18)] px-[14px] py-[9px] font-mono text-[11px] uppercase tracking-[.1em] text-ink-2"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
