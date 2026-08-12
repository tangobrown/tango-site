import { processSteps } from "@/content/process";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

// Process lives inside the frosted-glass-over-photo treatment (formerly the
// "Difference" section). Heading sits across the top of the frosted card;
// the four week-steps run beneath as a timeline row, restyled for the dark
// background (white titles, mint/light labels, hairline top borders).
export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-b border-[rgba(14,17,18,.1)] px-6 py-[120px] md:px-10"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Placeholder label="Wide landscape / workspace photo" tone="dark" />
      </div>
      {/* Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(8,12,12,.55), rgba(8,12,12,.72))",
        }}
      />

      {/* Frosted card */}
      <div className="relative mx-auto max-w-content">
        <div className="rounded-panel border border-[rgba(255,255,255,.16)] bg-glass p-[clamp(28px,4vw,64px)] backdrop-blur-[18px]">
          <Reveal className="flex flex-col gap-[18px]">
            <span className="font-mono text-[11px] uppercase tracking-[.2em] text-mint">
              02 / Process
            </span>
            <h2 className="m-0 max-w-[680px] text-[clamp(34px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-.035em] text-white">
              Four weeks, not four months.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.week}
                className={`flex flex-col gap-4 border-t-2 pt-6 ${
                  i === 0 ? "border-mint" : "border-[rgba(255,255,255,.22)]"
                }`}
              >
                <span
                  className={`font-mono text-[12px] tracking-[.16em] ${
                    i === 0 ? "text-mint" : "text-[rgba(245,244,240,.55)]"
                  }`}
                >
                  {step.week}
                </span>
                <h3 className="m-0 text-[22px] font-semibold tracking-[-.02em] text-white">
                  {step.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] text-[rgba(255,255,255,.72)]">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
