import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { bodyText, btnPrimary, container, h2Section } from "./ui";

// Two-column text + square image block, used for Approach and About.
// On mobile it stacks with the image first in both blocks.
export default function SplitBlock({
  id,
  title,
  paragraphs,
  buttonLabel,
  imageSrc,
  imageAlt,
  imageSide,
  className = "",
}: {
  id: string;
  title: string;
  paragraphs: string[];
  buttonLabel: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${container} grid grid-cols-1 items-center gap-x-[clamp(40px,6vw,80px)] gap-y-10 md:grid-cols-2 ${className}`}
    >
      <div
        data-reveal
        className={`flex flex-col items-start gap-[18px] ${imageSide === "left" ? "md:order-2" : ""}`}
      >
        <h2 className={`${h2Section} mb-3`}>{title}</h2>
        {paragraphs.map((p) => (
          <p key={p} className={bodyText}>
            {p}
          </p>
        ))}
        <div className="mt-[14px]">
          <ContactButton className={btnPrimary}>
            {buttonLabel} <ArrowIcon size={16} />
          </ContactButton>
        </div>
      </div>

      <div
        data-reveal
        className={`relative order-first aspect-square overflow-hidden rounded-md bg-surface-placeholder ${
          imageSide === "left" ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 600px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
