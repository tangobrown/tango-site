import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import { btnPrimary } from "./ui";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[88svh] max-h-[860px] min-h-[620px] overflow-hidden bg-surface-hero text-white md:h-[92vh]"
    >
      <Image
        src="/images/hero-tim.webp"
        alt="Tim Brown sitting in front of a street-art mural"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[right_top]"
      />
      {/* Legibility scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,14,12,0.62) 0%, rgba(10,14,12,0.28) 50%, rgba(10,14,12,0.05) 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-[30px] px-[clamp(20px,3vw,40px)] pb-[clamp(28px,4vw,44px)]">
        <h1 className="m-0 max-w-[11ch] text-[clamp(46px,6.6vw,104px)] font-semibold leading-[0.96] tracking-[-0.045em]">
          Websites{" "}
          <span className="inline-block align-[-0.06em] text-brand-bright" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-[0.85em] w-[0.85em]">
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
            </svg>
          </span>{" "}
          that work as hard as you do
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-end md:justify-between">
          <p className="m-0 max-w-[44ch] text-[19px] leading-[1.37] tracking-[-0.015em]">
            I build, host and optimise blazing fast websites that look good and attract your ideal
            customers.
          </p>
          <a href="#work" className={`${btnPrimary} self-start md:self-auto`}>
            See the work <ArrowIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
