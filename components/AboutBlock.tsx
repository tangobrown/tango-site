import ArrowIcon from "./ArrowIcon";
import Placeholder from "./Placeholder";

type Props = {
  id?: string;
  heading: string;
  paragraphs: string[];
  linkLabel: string;
  imageLabel: string;
  imageSide: "left" | "right";
  sectionClassName?: string;
  imageSrc?: string;
  imageAlt?: string;
};

// Shared by the About and "How working together goes" sections; the image
// side flips via prop. On mobile both stack image-first.
export default function AboutBlock({
  id,
  heading,
  paragraphs,
  linkLabel,
  imageLabel,
  imageSide,
  sectionClassName = "",
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <section id={id} className={`py-16 ${sectionClassName}`}>
      <div className="mx-auto grid max-w-content grid-cols-1 gap-6 px-5 lg:grid-cols-2 lg:items-center lg:gap-[7vw] lg:px-8">
        <div
          className={`relative order-1 h-[280px] bg-stone lg:h-[470px] ${
            imageSide === "right" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt ?? "Tim Brown"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Placeholder label={imageLabel} />
          )}
        </div>

        <div
          className={`order-2 flex flex-col gap-5 ${
            imageSide === "right" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <h2 className="m-0 font-bebas text-[clamp(32px,3.3vw,50px)] font-normal leading-[1.15]">
            {heading}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="m-0 text-[16px] leading-[1.75] text-ink-soft">
              {p}
            </p>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-[9px] self-start border-b border-underline-accent pb-1 text-[14px] font-medium uppercase tracking-[0.03em] text-ink transition-colors hover:border-rust"
          >
            {linkLabel} <ArrowIcon size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
