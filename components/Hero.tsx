import Image from "next/image";
import Header from "./Header";

// Full-viewport hero: full-bleed photo, dark gradient, floating nav pill,
// centred headline and a meta row along the bottom.
export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] overflow-hidden">
      <Image
        // Enlarged from the 1400px original so high-density screens aren't
        // stretching it; replace with a larger original when there is one.
        src="/tim-brown-hero.jpg"
        alt="Tim Brown sitting on steps in front of a painted mural"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-right-top"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,15,13,0.35) 0%, rgba(17,15,13,0.2) 50%, #110f0d 100%)",
        }}
      />

      <Header />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-7 px-6 text-center">
        <h1 className="m-0 flex flex-col items-center font-display text-[clamp(48px,8vw,112px)] font-light leading-[0.95] tracking-[-0.01em]">
          <span>LOOK GOOD &amp;</span>
          <span>
            <em className="font-serif font-normal normal-case tracking-normal">dominate</em> ONLINE
          </span>
        </h1>
        <p className="m-0 max-w-[460px] text-balance text-[20px] leading-[1.35] text-sand">
          Blazing fast websites, built, hosted and optimised for UK companies that want to grow.
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-8 right-8 flex justify-between gap-4 font-display text-[11px] tracking-[0.16em] text-ash">
        <span>WEBSITE GROWTH EXPERT</span>
        <span>DEVON, UK</span>
      </div>
    </section>
  );
}
