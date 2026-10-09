import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { btnPrimary, container } from "./ui";

// Hero: dark green with a soft light-green glow on the right, copy on the left.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pine text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-30%] top-[-10%] h-[min(130vw,1000px)] w-[min(130vw,1000px)] rounded-full lg:right-[-8%] lg:top-1/2 lg:-translate-y-1/2"
        style={{ background: "radial-gradient(closest-side, rgba(20,168,90,0.22), rgba(20,168,90,0))" }}
      />

      <div
        className={`${container} relative grid grid-cols-1 items-center pb-14 pt-[140px] lg:h-[92vh] lg:max-h-[860px] lg:min-h-[640px] lg:pb-6 lg:pt-[104px]`}
      >
        <div className="flex max-w-[560px] flex-col items-start gap-[30px] lg:max-w-[min(580px,45%)]">
          <h1 className="m-0 text-[clamp(36px,4.4vw,64px)] font-semibold leading-[0.96] tracking-[-0.025em]">
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
          <p className="m-0 max-w-[46ch] text-[19px] leading-[1.37] tracking-normal text-footer-link">
            I&apos;m Tim, a Website Growth Consultant based in Exeter. I build, host and optimise
            blazing fast websites that look good and attract your ideal customers.
          </p>
          <ContactButton className={`${btnPrimary} mt-3`}>
            Get started <ArrowIcon size={18} />
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
