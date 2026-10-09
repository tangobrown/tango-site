import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { btnPrimary, container } from "./ui";

// Hero: photo of Tim as the background (anchored top right), with a dark
// green fade on the left so the copy stays readable over it.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pine text-white">
      <Image
        src="/images/tim-brown-hero.jpg"
        alt="Tim Brown sitting in front of a street-art mural"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[70%_top] lg:object-right-top"
      />
      {/* Legibility fades: from the bottom on small screens, from the left on large */}
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,42,31,0.35) 0%, rgba(14,42,31,0.7) 38%, rgba(14,42,31,0.94) 62%, rgba(14,42,31,0.97) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,42,31,0.96) 0%, rgba(14,42,31,0.9) 36%, rgba(14,42,31,0.5) 54%, rgba(14,42,31,0) 72%)",
        }}
      />

      <div
        className={`${container} relative grid grid-cols-1 items-center pb-12 pt-[min(62vw,380px)] lg:h-[92vh] lg:max-h-[860px] lg:min-h-[640px] lg:pb-6 lg:pt-[104px]`}
      >
        <div className="flex max-w-[640px] flex-col items-start gap-[30px] lg:max-w-[min(680px,50%)]">
          <div className="flex items-center gap-3">
            <Image
              src="/tim-avatar.jpg"
              alt=""
              width={240}
              height={240}
              priority
              className="h-[clamp(44px,4vw,60px)] w-[clamp(44px,4vw,60px)] shrink-0 rounded-full object-cover"
            />
            <p className="m-0 text-[15px] font-medium leading-[1.3] text-footer-link sm:text-[17px]">
              <span className="font-semibold text-white">Tim Brown</span> - Website Growth Consultant
            </p>
          </div>
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
          <p className="m-0 max-w-[46ch] text-[19px] leading-[1.37] tracking-normal text-footer-link">
            I build, host and optimise blazing fast websites that look good and attract your ideal
            customers. Based in Exeter, working with clients all over the UK.
          </p>
          <ContactButton className={`${btnPrimary} mt-3`}>
            Get started <ArrowIcon size={18} />
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
