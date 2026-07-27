import Image from "next/image";
import ContactTrigger from "./ContactTrigger";
import ArrowRight from "./ArrowRight";

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
      className="bg-hero text-heroText pt-[88px] md:pt-[118px] relative"
    >
      {/* H1 with the Start-a-project button aligned to its baseline on the right */}
      <div className="container-tb pt-10 md:pt-20 flex items-end justify-between gap-6 md:gap-8 flex-wrap">
        <h1
          className="font-heading font-normal text-gold leading-[1.06] tracking-[-0.01em]"
          style={{ fontSize: "clamp(34px,4.8vw,66px)", maxWidth: "18ch" }}
        >
          I&apos;ve got your marketing &amp; technology covered.
        </h1>
        <ContactTrigger
          ariaLabel="Start a project"
          className="inline-flex items-center gap-2.5 text-white text-[15px] font-medium px-[30px] py-[13px] cursor-pointer hover:bg-white/10 transition-colors shrink-0"
          style={{ border: "1.5px solid rgba(245,241,232,.85)" }}
        >
          Start a project
          <ArrowRight />
        </ContactTrigger>
      </div>

      {/* Photo band — 1400px column; full-bleed on mobile */}
      <div className="container-hero pt-8 md:pt-11">
        <div className="relative overflow-hidden">
          <div
            className="relative w-full"
            style={{ height: "min(64vh, 620px)", minHeight: "320px" }}
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
          <div className="absolute inset-0 flex flex-col items-start justify-end text-left p-6 md:p-12">
            <p
              className="text-[15px] md:text-[16px] font-light"
              style={{ color: "rgba(255,255,255,.9)" }}
            >
              Tim Brown (based in Exeter, Devon)
            </p>
          </div>
        </div>
      </div>

      {/* Intro two-column */}
      <div className="container-tb pt-16 md:pt-[88px] pb-16 md:pb-[108px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
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
            I&apos;ve been doing this for over a decade, almost all of it for
            businesses across Devon and the South West. Usually it&apos;s the
            same story — a good business with a steady trade, and a website
            that isn&apos;t pulling its weight. Too slow, too old, or built by
            someone who stopped answering emails a long time ago.
          </p>
          <p className="text-[17px] leading-[1.7] font-light text-heroMuted mb-[26px]">
            The person you speak to first is the person who does the work.
            No account manager, no handover, nobody learning your business on
            your budget. Just me, from first sketch to launch… for as long
            afterwards as you want me.
          </p>
          <p className="text-[17px] leading-[1.7] font-light text-heroMuted">
            Think of me as your marketing and tech guy. An extension of your
            business, treating your success as my own.
          </p>
        </div>
      </div>
    </section>
  );
}
