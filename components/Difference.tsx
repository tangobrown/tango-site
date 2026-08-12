import { differenceFeatures } from "@/content/difference";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

export default function Difference() {
  return (
    <section
      id="difference"
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
        <div className="flex flex-wrap items-start gap-[clamp(36px,4vw,64px)] rounded-panel border border-[rgba(255,255,255,.16)] bg-glass p-[clamp(28px,4vw,64px)] backdrop-blur-[18px]">
          {/* Left — capped width pushes the features right */}
          <Reveal className="flex max-w-[400px] flex-[1_1_300px] flex-col gap-[26px]">
            <span className="font-mono text-[11px] uppercase tracking-[.2em] text-mint">
              03 / Difference
            </span>
            <h2 className="m-0 text-[clamp(38px,4.4vw,62px)] font-semibold leading-[1.02] tracking-[-.035em] text-white">
              The Tango
              <br />
              difference
            </h2>
            <p className="m-0 max-w-[420px] text-pretty text-[16px] leading-[1.6] text-[rgba(255,255,255,.78)]">
              Marketing built the way software is built — measured, automated, and shipped fast. You
              get the tooling big brands pay agencies to operate, run by the person who set it up.
            </p>
            <a
              href="#about"
              className="mt-[6px] inline-flex items-center self-start rounded-full bg-white px-[26px] py-[13px] text-[14px] font-semibold text-ink transition-colors hover:bg-mint"
            >
              About me
            </a>
          </Reveal>

          {/* Right — feature columns */}
          <div className="grid flex-[3_1_560px] grid-cols-[repeat(auto-fit,minmax(190px,1fr))] content-start gap-[34px]">
            {differenceFeatures.map((feature, i) => (
              <Reveal
                key={feature.slotId}
                className={
                  i === 0
                    ? "flex flex-col gap-[22px]"
                    : "flex flex-col gap-[22px] border-t border-[rgba(255,255,255,.22)] pt-[22px] md:border-l md:border-t-0 md:pl-[34px] md:pt-0"
                }
              >
                <div className="h-[88px] w-[112px]">
                  <Placeholder label="Icon" tone="dark" />
                </div>
                <h3 className="m-0 text-[15px] font-semibold uppercase leading-[1.35] tracking-[.1em] text-white">
                  {feature.title}
                </h3>
                <p className="m-0 max-w-[280px] text-[14px] leading-[1.55] text-[rgba(255,255,255,.72)]">
                  {feature.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
