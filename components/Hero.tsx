import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import HeroAnimation from "./HeroAnimation";
import { btnPrimary, container } from "./ui";

// Hero: dark green with a soft light-green glow on the right. Copy on the
// left, the design → conversion animation on the right (below on mobile).
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pine text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-30%] top-[-10%] h-[min(130vw,1000px)] w-[min(130vw,1000px)] rounded-full lg:right-[-8%] lg:top-1/2 lg:-translate-y-1/2"
        style={{ background: "radial-gradient(closest-side, rgba(20,168,90,0.22), rgba(20,168,90,0))" }}
      />

      <div
        className={`${container} relative grid grid-cols-1 items-center gap-10 pb-10 pt-[124px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-8 lg:h-[80vh] lg:max-h-[760px] lg:min-h-[580px] lg:pb-4 lg:pt-[96px]`}
      >
        <div className="flex max-w-[560px] flex-col items-start gap-[30px] lg:max-w-[580px]">
          <div className="flex items-center gap-4">
            <Image
              src="/tim-avatar.jpg"
              alt=""
              width={340}
              height={340}
              priority
              className="h-[clamp(60px,5.4vw,78px)] w-[clamp(60px,5.4vw,78px)] shrink-0 rounded-full object-cover"
            />
            <p className="m-0 flex flex-col gap-0.5 font-sans leading-[1.25]">
              <span className="text-[17px] font-semibold text-white sm:text-[19px]">Tim Brown</span>
              <span className="text-[15px] font-medium text-footer-link sm:text-[17px]">
                Website Growth Expert
              </span>
            </p>
          </div>
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
          <p className="m-0 max-w-[46ch] text-[17px] leading-[1.45] tracking-normal text-footer-link">
            I build, host and optimise blazing fast websites for companies in the UK that want to
            look good and grow online.
          </p>
          <ContactButton className={`${btnPrimary} mt-2`}>
            Get started <ArrowIcon size={16} />
          </ContactButton>
        </div>

        <HeroAnimation
          accent="#14A85A"
          className="mx-auto -mb-[16%] -mt-[12%] max-w-[560px] lg:-my-[5%] lg:mr-0 lg:max-w-[min(700px,calc(80vh-40px))]"
        />
      </div>
    </section>
  );
}
