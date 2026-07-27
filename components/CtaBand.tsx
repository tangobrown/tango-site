import ContactTrigger from "./ContactTrigger";
import ArrowRight from "./ArrowRight";

/**
 * Full-width green band with a centered eyebrow, big heading and
 * a light "Start a project →" button that opens the contact
 * slide-out. Uses a slightly narrower inner column (1080px) than
 * the main content width so the headline reads tightly.
 */
export default function CtaBand() {
  return (
    <section className="bg-forest text-heroText">
      <div
        className="mx-auto text-center px-6 md:px-12 py-20 md:py-[136px]"
        style={{ maxWidth: "1080px" }}
      >
        <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-forestLabel mb-7">
          Let&apos;s begin
        </div>
        <h2
          className="font-heading font-normal leading-[1.05] tracking-[-0.01em] mx-auto"
          style={{ fontSize: "clamp(32px,4.2vw,58px)", maxWidth: "18ch" }}
        >
          Let&apos;s grow your business online.
        </h2>
        <div className="mt-11">
          <ContactTrigger
            ariaLabel="Start a project"
            className="inline-flex items-center gap-2.5 bg-cream text-forest px-[34px] py-4 text-[15px] font-semibold cursor-pointer hover:bg-white transition-colors"
          >
            Start a project
            <ArrowRight />
          </ContactTrigger>
        </div>
      </div>
    </section>
  );
}
