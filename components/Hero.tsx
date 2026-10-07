import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { btnPrimary } from "./ui";

// Split hero: dark copy column on the left, photo on the right.
// On mobile the photo sits on top and the copy below.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative grid grid-cols-1 lg:h-[92vh] lg:min-h-[700px] lg:grid-cols-[38%_minmax(0,1fr)]"
    >
      {/* Left — dark block (copy) */}
      <div className="order-2 flex flex-col justify-end bg-ink p-[32px_20px_40px] text-white lg:order-1 lg:p-[44px_48px_56px]">
        <div className="flex flex-col items-start gap-7">
          <h1 className="m-0 text-pretty text-[clamp(36px,3.5vw,54px)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Hey, I&apos;m Tim Brown - a digital growth expert for small businesses in the UK.
          </h1>
          <p className="m-0 max-w-[44ch] text-[19px] leading-[1.42] tracking-[-0.015em] text-footer-link">
            I build, host and optimise blazing fast websites that look good and attract your ideal
            customers.
          </p>
          <ContactButton className={btnPrimary}>
            Let&apos;s connect <ArrowIcon size={16} />
          </ContactButton>
        </div>
      </div>

      {/* Right — image */}
      <div className="relative order-1 h-[48vh] bg-surface-hero lg:order-2 lg:h-auto">
        <Image
          src="/hero.jpg"
          alt="Tim Brown"
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-right-top"
        />
      </div>
    </section>
  );
}
