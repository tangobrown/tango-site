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
          <div className="flex items-center gap-[clamp(18px,2vw,28px)]">
            <Image
              src="/tim-avatar.jpg"
              alt="Tim Brown"
              width={340}
              height={340}
              priority
              className="h-[clamp(96px,10vw,148px)] w-[clamp(96px,10vw,148px)] shrink-0 rounded-[3px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <h1 className="m-0 text-[clamp(32px,3.4vw,50px)] font-semibold leading-[1.02] tracking-[-0.025em]">
                Tim Brown
              </h1>
              <p className="m-0 font-sans text-[clamp(17px,1.5vw,21px)] font-medium leading-[1.3] text-brand-bright">
                Digital Growth Consultant
              </p>
              <p className="m-0 font-sans text-[clamp(16px,1.3vw,18px)] font-medium leading-[1.3] text-footer-link">
                Based in Exeter, Devon
              </p>
            </div>
          </div>
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
