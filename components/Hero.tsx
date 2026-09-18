import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grid grid-cols-1 lg:h-[92vh] lg:min-h-[700px] lg:grid-cols-[38%_minmax(0,1fr)]"
    >
      {/* Left — dark block (copy) */}
      <div className="order-2 flex flex-col justify-end gap-14 bg-ink-dark p-[32px_20px_40px] text-cream-text lg:order-1 lg:gap-0 lg:p-[44px_48px_56px]">
        <div className="flex flex-col gap-7">
          <h1 className="m-0 text-pretty font-bebas text-[clamp(38px,4.1vw,62px)] font-normal leading-[0.98] tracking-[0.005em]">
            Hey, I&apos;m Tim Brown - a digital growth expert for small businesses in the UK.
          </h1>
          <p className="m-0 max-w-[46ch] text-[17px] leading-[1.6] text-muted-dark">
            I build, host and optimise blazing fast websites that look good and attract your ideal
            customers.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-[10px] self-start border border-[#6E675E] px-[26px] py-[14px] text-[14px] uppercase tracking-[0.04em] text-cream-text transition-colors hover:border-rust hover:bg-rust hover:text-white"
          >
            Let&apos;s connect <ArrowIcon size={18} />
          </a>
        </div>
      </div>

      {/* Right — image */}
      <div className="relative order-1 h-[48vh] bg-stone lg:order-2 lg:h-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="Tim Brown"
          className="absolute inset-0 h-full w-full object-cover object-right-top"
        />
      </div>
    </section>
  );
}
