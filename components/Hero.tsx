import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { btnPrimary, container } from "./ui";

// Hero: photo of Tim shown whole (not cropped), pinned to the top right. On
// large screens it's as tall as the hero with dark green on its left behind
// the copy; on small screens it sits full width at the top with the copy
// below. Its left and bottom edges feather into the background.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pine text-white">
      <div className="absolute inset-x-0 top-[84px] aspect-[2000/1333] lg:left-auto lg:top-0 lg:h-full lg:max-w-full">
        <Image
          src="/images/tim-brown-hero.jpg"
          alt="Tim Brown sitting in front of a street-art mural"
          fill
          priority
          quality={90}
          sizes="(min-width: 1024px) 90vw, 100vw"
          className="object-cover object-right-top"
        />
        {/* Feather the photo's edges into the background */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(14,42,31,1) 0%, rgba(14,42,31,0) 38%), linear-gradient(90deg, rgba(14,42,31,1) 0%, rgba(14,42,31,0) 22%)",
          }}
        />
      </div>
      {/* Legibility fade behind the copy on large screens */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,42,31,0.96) 0%, rgba(14,42,31,0.9) 36%, rgba(14,42,31,0.5) 54%, rgba(14,42,31,0) 72%)",
        }}
      />

      <div
        className={`${container} relative grid grid-cols-1 items-center pb-12 pt-[calc(84px+58vw)] lg:h-[92vh] lg:max-h-[860px] lg:min-h-[640px] lg:pb-6 lg:pt-[104px]`}
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
