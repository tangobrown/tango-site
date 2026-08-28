import ArrowIcon from "./ArrowIcon";
import { navLinks } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative grid grid-cols-1 lg:h-[92vh] lg:min-h-[700px] lg:grid-cols-[38%_minmax(0,1fr)]"
    >
      {/* Left — dark block (copy) */}
      <div className="order-2 flex flex-col justify-between gap-14 bg-ink-dark p-[32px_20px_40px] text-cream-text lg:order-1 lg:gap-0 lg:p-[44px_48px_56px]">
        <a
          href="#top"
          aria-label="Tim Brown — home"
          className="hidden items-center gap-3 lg:inline-flex"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="h-14 w-auto" />
          <span className="flex flex-col font-bebas text-[22px] leading-[0.88] tracking-[0.02em] text-rust">
            <span>Tim</span>
            <span>Brown</span>
          </span>
        </a>

        <div className="flex flex-col gap-7">
          <h1 className="m-0 text-pretty font-bebas text-[clamp(38px,4.1vw,62px)] font-normal leading-[0.98] tracking-[0.005em]">
            Hey, I&apos;m Tim Brown - a digital growth expert for small businesses in the UK.
          </h1>
          <p className="m-0 max-w-[52ch] text-[16px] leading-[1.6] text-muted-dark">
            I&apos;ll build, host and optimise your website, so you can get more leads from your
            ideal customers and then automate repetitive tasks so that you can spend more time on
            what makes you money.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-[10px] self-start border border-[#6E675E] px-[26px] py-[14px] text-[14px] uppercase tracking-[0.04em] text-cream-text transition-colors hover:border-rust hover:bg-rust hover:text-white"
          >
            Let&apos;s connect <ArrowIcon size={18} />
          </a>
        </div>
      </div>

      {/* Right — image + top scrim + desktop nav */}
      <div className="relative order-1 h-[48vh] bg-stone lg:order-2 lg:h-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="Tim Brown"
          className="absolute inset-0 h-full w-full object-cover object-right-top"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[130px]"
          style={{ background: "linear-gradient(to bottom, rgba(20,18,15,0.42), rgba(20,18,15,0))" }}
        />
        <nav className="absolute right-11 top-[34px] hidden gap-[30px] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] uppercase tracking-[0.06em] text-cream transition-colors hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
