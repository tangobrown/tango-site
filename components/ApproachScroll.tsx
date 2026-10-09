"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { bodyText, btnPrimary, container, h2Section } from "./ui";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Approach. On large screens the photo starts centred; once it reaches the
// middle of the viewport the section pins, and scrolling on slides the photo
// to the left and brings the copy in on the right. Smaller screens and
// reduced motion get the plain stacked/side-by-side layout.
export default function ApproachScroll() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const section = root.current;
        const grid = section?.querySelector<HTMLElement>("[data-grid]");
        const photo = section?.querySelector<HTMLElement>("[data-photo]");
        const copy = section?.querySelector<HTMLElement>("[data-copy]");
        if (!section || !grid || !photo || !copy) return;

        // How far right the photo has to move to sit in the middle of the grid.
        const toCentre = () => grid.clientWidth / 2 - (photo.offsetLeft + photo.offsetWidth / 2);

        gsap
          .timeline({
            scrollTrigger: {
              trigger: grid,
              start: "center center",
              end: "+=90%",
              scrub: 0.6,
              pin: section,
              invalidateOnRefresh: true,
            },
          })
          .fromTo(photo, { x: toCentre }, { x: 0, ease: "power2.inOut", duration: 1 })
          .fromTo(
            copy,
            { autoAlpha: 0, x: 60 },
            { autoAlpha: 1, x: 0, ease: "power2.out", duration: 0.6 },
            0.45,
          );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="approach" className="pb-[clamp(28px,3.5vw,50px)] pt-[clamp(52px,6.5vw,88px)]">
      <div
        data-grid
        className={`${container} relative grid grid-cols-1 items-center gap-x-[clamp(40px,6vw,80px)] gap-y-10 lg:grid-cols-2`}
      >
        <div
          data-photo
          className="relative aspect-square w-full overflow-hidden rounded-md bg-surface-placeholder lg:max-w-[calc(100vh-170px)]"
        >
          <Image
            src="/about-1.jpg"
            alt="Portrait of Tim Brown"
            fill
            sizes="(min-width: 1024px) 620px, 100vw"
            className="object-cover"
          />
        </div>

        <div data-copy className="flex flex-col items-start gap-[18px]">
          <h2 className={`${h2Section} mb-3`}>
            Most small businesses don&apos;t need an agency. They need one person who takes real
            ownership.
          </h2>
          <p className={bodyText}>
            That&apos;s where I come in. I&apos;ll be your digital/website department who will take
            your success personally.
          </p>
          <p className={bodyText}>
            I&apos;ll work my a** off each month to ensure your website looks good, outperforms your
            competition and attracts new leads or sales for your business. You&apos;ll be dealing
            with me (not an account manager, or agency junior) and you won&apos;t pay agency fees
            that put off small businesses getting help with their marketing efforts.
          </p>
          <div className="mt-[14px]">
            <ContactButton className={btnPrimary}>
              Let&apos;s connect <ArrowIcon size={16} />
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
