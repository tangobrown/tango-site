import Image from "next/image";
import ContactTrigger from "./ContactTrigger";
import ArrowRight from "./ArrowRight";

/**
 * Sand-coloured band with a two-column layout: portrait placeholder
 * on the left, eyebrow + heading + two paragraphs + "Work with me →"
 * underlined link on the right. The link opens the contact slide-out.
 *
 * Drop a real portrait into /public and reference it as the src on
 * an Image element inside the left column when it arrives.
 */
export default function About() {
  return (
    <section id="about" className="bg-sand">
      <div className="container-tb py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div
          className="relative w-full bg-placeholderTile h-[420px] md:h-[600px]"
        >
          <Image
            src="/about-portrait.jpg"
            alt="Tim Brown"
            fill
            sizes="(max-width: 768px) 100vw, 620px"
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-playfair italic font-medium text-[18px] tracking-[-0.045em] text-muted-faint mb-[22px]">
            About me
          </div>
          <h2
            className="font-heading font-normal leading-[1.08] tracking-[-0.01em] mb-[26px]"
            style={{ fontSize: "clamp(28px,3.1vw,40px)" }}
          >
            Hi, I&apos;m Tim Brown.
          </h2>
          <p className="text-[18px] leading-[1.7] font-light text-muted mb-5">
            For over a decade I&apos;ve helped businesses across the South West
            find their footing online. No agency layers, no jargon — just
            clear thinking and craft, delivered by the same person you first
            speak to.
          </p>
          <p className="text-[18px] leading-[1.7] font-light text-muted mb-[34px]">
            I care about work that lasts: sites that stay fast, rank well and
            keep earning their keep long after launch.
          </p>
          <ContactTrigger
            as="span"
            ariaLabel="Open contact form"
            className="inline-flex items-center gap-2.5 text-forest text-[15px] font-semibold pb-[3px] cursor-pointer"
            style={{ borderBottom: "1.5px solid #26332a" }}
          >
            Work with me
            <ArrowRight />
          </ContactTrigger>
        </div>
      </div>
    </section>
  );
}
