import ArrowIcon from "./ArrowIcon";
import HeroOrbit from "./HeroOrbit";
import { btnPrimary } from "./ui";

// Dark hero: headline and intro on the left, the rotating "what I do" orbit
// on the right. On mobile the orbit sits above the copy.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      {/* Soft green glow behind the orbit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[30%] h-[min(110vw,900px)] w-[min(110vw,900px)] -translate-y-1/2 rounded-full lg:right-[-8%] lg:top-1/2"
        style={{ background: "radial-gradient(closest-side, rgba(11,138,71,0.2), rgba(11,138,71,0))" }}
      />

      <div className="relative grid grid-cols-1 items-end gap-10 px-[clamp(20px,3vw,40px)] pb-[clamp(36px,4vw,48px)] pt-[104px] lg:h-[92vh] lg:max-h-[860px] lg:min-h-[640px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:pt-[120px]">
        <div className="flex flex-col items-start gap-[30px]">
          <h1 className="m-0 max-w-[11ch] text-[clamp(46px,6.2vw,100px)] font-semibold leading-[0.96] tracking-[-0.045em]">
            Websites{" "}
            <span className="inline-block align-[-0.06em] text-brand-bright" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[0.85em] w-[0.85em]">
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
              </svg>
            </span>{" "}
            that work as hard as you do
          </h1>
          <p className="m-0 max-w-[44ch] text-[19px] leading-[1.37] tracking-[-0.015em] text-footer-link">
            I build, host and optimise blazing fast websites that look good and attract your ideal
            customers.
          </p>
          <a href="#work" className={btnPrimary}>
            See the work <ArrowIcon size={18} />
          </a>
        </div>

        <HeroOrbit className="order-first mx-auto w-full max-w-[340px] self-center lg:order-none lg:max-w-[min(580px,64vh)]" />
      </div>
    </section>
  );
}
