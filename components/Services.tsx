import { services, servicesFootnote } from "@/content/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-[rgba(14,17,18,.1)] px-6 py-[110px] md:px-10"
    >
      <div className="mx-auto flex max-w-content flex-col gap-16">
        {/* Header */}
        <Reveal className="flex flex-wrap items-end justify-between gap-10">
          <div className="flex flex-col gap-[18px]">
            <span className="font-mono text-[11px] uppercase tracking-[.2em] text-forest">
              01 / Services
            </span>
            <h2 className="m-0 max-w-[760px] text-[clamp(34px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-.035em]">
              Three things, done properly.
            </h2>
          </div>
          <p className="m-0 max-w-[360px] text-[16px] leading-[1.55] text-ink-3">
            Take one or all three. They compound: a fast site feeds the lead engine, automation
            handles what the leads trigger.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {services.map((service) => (
            <Reveal
              key={service.code}
              className="flex min-h-[420px] flex-col gap-[26px] border border-[rgba(14,17,18,.12)] bg-white px-[34px] pb-[34px] pt-[38px] transition-colors hover:bg-bone-hover"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[.16em] text-ink-4">
                  {service.code}
                </span>
                <span className="font-mono text-[11px] tracking-[.1em] text-forest">
                  {service.price}
                </span>
              </div>
              <h3 className="m-0 text-[30px] font-semibold leading-[1.05] tracking-[-.03em]">
                {service.title}
              </h3>
              <p className="m-0 flex-1 text-[17px] leading-[1.6] text-ink-3">{service.body}</p>
              <div className="flex flex-col gap-[10px] border-t border-[rgba(14,17,18,.12)] pt-[22px]">
                {service.bullets.map((bullet) => (
                  <span key={bullet} className="font-mono text-[12px] text-ink-2">
                    → {bullet}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="m-0 font-mono text-[11px] uppercase tracking-[.12em] text-ink-4"
        >
          {servicesFootnote}
        </Reveal>
      </div>
    </section>
  );
}
