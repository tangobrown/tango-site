import Reveal from "./Reveal";

// Left-to-right gradient: dark under the text on the left, clearing to reveal
// the photograph on the right. Uses the night base colour (14,19,20).
const overlay =
  "linear-gradient(90deg, rgba(14,19,20,.96) 0%, rgba(14,19,20,.9) 30%, rgba(14,19,20,.6) 56%, rgba(14,19,20,.18) 82%, rgba(14,19,20,0) 100%)";

export default function Hero() {
  return (
    <section
      id="top"
      // Padding on the section (not the inner box) so the content's left edge
      // lines up with every other section's content container.
      className="relative overflow-hidden border-b border-[rgba(245,244,240,.12)] bg-night px-6 md:px-10"
    >
      {/* Background photograph (graceful: falls back to bg-night if absent) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: "url(/hero-tim-brown.jpg)", backgroundPosition: "center top" }}
      />
      {/* Gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: overlay }} />

      {/* Content — constrained to the left half of the container */}
      <div className="relative mx-auto flex min-h-[520px] max-w-content items-center py-[104px] md:min-h-[680px] md:pb-[120px] md:pt-[176px]">
        <div className="flex max-w-[560px] flex-col gap-8 md:max-w-[52%]">
          <Reveal
            as="h1"
            // Mobile: title spans 80% of the container width. Desktop: fills the
            // left column.
            className="m-0 max-w-[80%] text-balance text-[clamp(40px,4.6vw,68px)] font-semibold leading-[.96] tracking-[-.045em] text-bone md:max-w-none"
          >
            Beat the competition.
            <br />
            <span className="text-[rgba(245,244,240,.5)]">Skip the agency</span> price tag.
          </Reveal>

          <Reveal
            as="p"
            className="m-0 max-w-[620px] text-pretty text-[20px] leading-[1.5] text-[rgba(245,244,240,.82)]"
          >
            Hello, Tim here. I offer Websites, SEO and AI automation, built by one operator who
            actually does the work. No account managers, no retainer theatre, no 40-slide reports
            about nothing.
          </Reveal>

          <Reveal className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-[10px] rounded-[2px] bg-mint px-6 py-4 text-[15px] font-semibold text-night transition-colors hover:bg-bone"
            >
              Talk to me <span className="font-mono">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-[2px] border border-[rgba(245,244,240,.28)] px-6 py-4 text-[15px] font-medium text-bone transition-colors hover:border-bone"
            >
              See what I do
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
