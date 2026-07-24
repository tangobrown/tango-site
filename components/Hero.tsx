import Image from "next/image";
import ContactTrigger from "./ContactTrigger";

/**
 * Dark hero band (#252523) that houses the H1, hero photo, and
 * the intro two-column block. Nav sits absolutely over the top,
 * so the section itself has enough top padding to clear it.
 *
 * The photo container uses the wider 1400px column while the H1
 * and intro use the standard 1280px column — that slight bleed
 * is intentional per the handoff.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="bg-hero text-heroText pt-[118px] relative"
    >
      {/* H1 */}
      <div className="container-tb pt-11">
        <h1
          className="font-heading font-normal text-gold leading-[1.06] tracking-[-0.01em]"
          style={{ fontSize: "clamp(34px,4.8vw,66px)", maxWidth: "18ch" }}
        >
          I&apos;ve got your marketing &amp; technology covered.
        </h1>
      </div>

      {/* Photo band — 1400px column */}
      <div className="container-hero pt-11">
        <div className="relative overflow-hidden">
          <div
            className="relative w-full"
            style={{ height: "min(64vh, 620px)" }}
          >
            <Image
              src="/hero.jpg"
              alt="Tim Brown, sitting on a step in front of a graffiti wall"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
              className="object-cover object-right-top"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-start justify-end text-left p-12">
            <p
              className="font-heading font-normal text-white leading-[1.32] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(22px,2.6vw,34px)",
                maxWidth: "22ch",
              }}
            >
              Your website should be quietly working for you — bringing in the
              right people, day and night.
            </p>
            <ContactTrigger
              ariaLabel="Start a project"
              className="mt-[34px] inline-flex items-center gap-2.5 text-white text-[15px] font-medium px-[30px] py-[13px] cursor-pointer hover:bg-white/10 transition-colors"
              style={{ border: "1.5px solid rgba(245,241,232,.85)" }}
            >
              Start a project
            </ContactTrigger>
          </div>
          <div
            className="absolute right-4 bottom-3.5 text-xs italic"
            style={{ color: "rgba(255,255,255,.85)" }}
          >
            Exeter, Devon
          </div>
        </div>
      </div>

      {/* Intro two-column */}
      <div className="container-tb pt-[88px] pb-[108px] grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <div className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold mb-[26px]">
            Tango Brown
          </div>
          <h2
            className="font-heading font-normal text-heroText leading-[1.12] tracking-[-0.01em]"
            style={{ fontSize: "clamp(26px,3vw,42px)", maxWidth: "16ch" }}
          >
            Helping UK businesses grow online, with the craft that delivers it.
          </h2>
        </div>
        <div className="pt-1.5">
          <p className="text-[17px] leading-[1.7] font-light text-heroMuted mb-[26px]">
            I build and look after websites for businesses across the South
            West — thoughtfully designed, honestly optimised and made to last,
            for years to come.
          </p>
          <div className="text-base font-semibold text-heroText mb-2">
            One point of contact:
          </div>
          <p className="text-base leading-[1.7] font-light text-heroMuted2 mb-[26px]">
            The person you first speak to is the person who does the work. No
            agency layers, no handoffs — just clear thinking and craft from
            first sketch to launch and beyond.
          </p>
          <p className="text-base leading-[1.7] font-light italic text-heroMuted3">
            Tango Brown is the studio of Tim Brown, a freelance digital growth
            consultant based in Exeter, Devon.
          </p>
        </div>
      </div>
    </section>
  );
}
