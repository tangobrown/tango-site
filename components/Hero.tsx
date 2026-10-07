import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import HeroOrbit from "./HeroOrbit";
import { btnPrimary, container } from "./ui";

// Dark hero: headline and intro on the left, the rotating "what I do" orbit
// on the right, both inside the main content column and centred vertically.
// On mobile the orbit sits above the copy.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pine text-white">
      <div
        className={`${container} relative grid grid-cols-1 items-center gap-10 pb-12 pt-[104px] lg:h-[92vh] lg:max-h-[860px] lg:min-h-[640px] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:pb-6`}
      >
        {/* Soft green glow, centred on the orbit */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[274px] h-[min(110vw,900px)] w-[min(110vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full lg:left-auto lg:right-[calc(42px+min(540px,62vh)/2)] lg:top-[calc(50%+40px)] lg:translate-x-1/2"
          style={{ background: "radial-gradient(closest-side, rgba(20,168,90,0.22), rgba(20,168,90,0))" }}
        />

        <div className="relative flex flex-col items-start gap-[30px]">
          <h1 className="m-0 text-[clamp(38px,4.9vw,72px)] font-semibold leading-[0.96] tracking-[-0.025em]">
            Get your{" "}
            <span className="whitespace-nowrap">
              website{" "}
              <span className="inline-block align-[-0.06em] text-brand-bright" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[0.85em] w-[0.85em]">
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                </svg>
              </span>
            </span>{" "}
            working as hard <span className="whitespace-nowrap">as you do</span>
          </h1>
          <div className="flex max-w-[560px] items-start gap-4 sm:items-center sm:gap-5">
            <Image
              src="/tim-avatar.jpg"
              alt="Tim Brown"
              width={240}
              height={240}
              priority
              className="h-[clamp(60px,6vw,88px)] w-[clamp(60px,6vw,88px)] shrink-0 rounded-full object-cover"
            />
            <p className="m-0 text-[19px] leading-[1.37] tracking-normal text-footer-link">
              Hey, I&apos;m Tim - a digital growth consultant based in Exeter. I build, host and
              optimise blazing fast websites that look good and attract your ideal customers.
            </p>
          </div>
          <a href="#work" className={btnPrimary}>
            See the work <ArrowIcon size={18} />
          </a>
        </div>

        <HeroOrbit className="order-first mx-auto w-full max-w-[310px] lg:order-none lg:mr-[22px] lg:w-[calc(100%-22px)] lg:max-w-[min(540px,62vh)] lg:justify-self-end" />
      </div>
    </section>
  );
}
