import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-overlay-dark relative border-b border-[rgba(245,244,240,.12)] bg-night px-6 pb-[90px] pt-[120px] md:px-10"
    >
      <div className="mx-auto flex max-w-content flex-col gap-14">
        {/* Byline */}
        <Reveal className="flex items-center gap-[14px]">
          <span className="relative h-[52px] w-[52px] flex-none overflow-hidden rounded-full border border-[rgba(245,244,240,.25)]">
            <Placeholder label="Tim" tone="dark" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-[rgba(245,244,240,.72)]">
            Tim Brown — Digital Growth Consultant in Exeter
          </span>
        </Reveal>

        {/* Headline */}
        <Reveal
          as="h1"
          className="m-0 max-w-[1150px] text-balance text-[clamp(40px,6.2vw,96px)] font-semibold leading-[.96] tracking-[-.045em] text-bone"
        >
          Beat the competition.
          <br />
          <span className="text-[rgba(245,244,240,.5)]">Skip the agency</span> price tag.
        </Reveal>

        {/* Lede + actions */}
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-16">
          <Reveal
            as="p"
            className="m-0 max-w-[620px] text-pretty text-[20px] leading-[1.5] text-[rgba(245,244,240,.82)]"
          >
            Websites, lead generation, and AI automation — built by one operator who actually does
            the work. No account managers, no retainer theatre, no 40-slide reports about nothing.
          </Reveal>

          <Reveal className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-[10px] rounded-[2px] bg-mint px-6 py-4 text-[15px] font-semibold text-night transition-colors hover:bg-bone"
              >
                Book a free 20-min call <span className="font-mono">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-[2px] border border-[rgba(245,244,240,.28)] px-6 py-4 text-[15px] font-medium text-bone transition-colors hover:border-bone"
              >
                See what I do
              </a>
            </div>
            <p className="m-0 font-mono text-[11px] uppercase tracking-[.1em] text-[rgba(245,244,240,.55)]">
              No pitch deck. No pressure. Straight answers.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
