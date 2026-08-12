import { processSteps } from "@/content/process";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section
      id="process"
      className="border-b border-[rgba(14,17,18,.1)] bg-white px-6 py-[110px] md:px-10"
    >
      <div className="mx-auto flex max-w-content flex-col gap-16">
        <Reveal className="flex flex-col gap-[18px]">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-forest">
            02 / Process
          </span>
          <h2 className="m-0 text-[clamp(34px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-.035em]">
            Four weeks, not four months.
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.week}
              className="flex flex-col gap-4 border-t-2 border-forest pt-6"
            >
              <span
                className={`font-mono text-[12px] tracking-[.16em] ${
                  i === 0 ? "text-forest" : "text-ink-4"
                }`}
              >
                {step.week}
              </span>
              <h3 className="m-0 text-[22px] font-semibold tracking-[-.02em]">{step.title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-3">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
