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
      className="bg-hero text-heroText pt-[70px] md:pt-[92px] relative"
    >
      {/* Rounded hero image (back to 1400px column) with H1 + button + caption overlaid */}
      <div className="container-hero">
        <div className="relative overflow-hidden rounded-br-[35px]">
          <div
            className="relative w-full"
            style={{ height: "min(78vh, 760px)", minHeight: "520px" }}
          >
            <Image
              src="/hero.jpg"
              alt="Tim Brown, sitting on a step in front of a graffiti wall"
              fill
              sizes="100vw"
              priority
              className="object-cover object-right-top"
            />
            {/* Bottom gradient scrim so the overlaid H1 + button stay legible over any image tones */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,.6) 0%, rgba(0,0,0,.3) 32%, rgba(0,0,0,0) 62%)",
              }}
            />
          </div>
          {/* Caption + H1 + Start-a-project button, stacked bottom-left */}
          <div className="absolute inset-0 flex flex-col items-start justify-end text-left p-6 md:p-12 gap-6 md:gap-8">
            <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[80%] md:max-w-[50%]">
              <p className="font-instrument font-normal text-[22px] text-gold">
                Tim Brown - Digital Growth Consultant
              </p>
              <h1
                className="font-heading font-normal text-white leading-[1.06] tracking-[-0.01em]"
                style={{ fontSize: "clamp(30px,4.6vw,62px)" }}
              >
                I&apos;ve got your marketing &amp; technology covered.
              </h1>
            </div>
            <ContactTrigger
              ariaLabel="Start a project"
              className="inline-flex items-center gap-2.5 text-white text-[15px] font-medium px-[30px] py-[13px] cursor-pointer hover:bg-white/10 transition-colors shrink-0"
              style={{ border: "1.5px solid rgba(245,241,232,.85)" }}
            >
              Start a project
              <ArrowRight />
            </ContactTrigger>
          </div>
        </div>
      </div>

      {/* Intro two-column */}
      <div className="container-tb pt-16 md:pt-[88px] pb-16 md:pb-[108px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div>
          <div className="font-instrument font-normal text-[22px] text-gold mb-[26px]">
            My mission
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
