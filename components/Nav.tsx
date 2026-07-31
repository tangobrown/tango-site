import Link from "next/link";
import ContactTrigger from "./ContactTrigger";

/**
 * Absolutely positioned over the dark hero band. Transparent
 * background, all-cream text. Left: "Tango." wordmark logo
 * (Playfair Display italic 500, gold full-stop per the handoff).
 * Right: three anchor links + a bordered 'Get in touch' trigger
 * that opens the contact slide-out.
 */
export default function Nav() {
  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="container-tb py-[22px] md:py-[30px] flex items-center justify-between text-heroText">
        <Link
          href="#top"
          aria-label="Tango home"
          className="font-instrument font-normal text-[34px] md:text-[42px] leading-none whitespace-nowrap text-white"
        >
          Tango<span aria-hidden="true" className="text-gold">.</span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-4 md:gap-10 text-[15px] font-medium"
        >
          {/* Middle links hidden on mobile — the anchors are all a scroll away */}
          <a href="#services" className="hidden md:inline opacity-90 hover:opacity-100 transition-opacity">
            Services
          </a>
          <a href="#work" className="hidden md:inline opacity-90 hover:opacity-100 transition-opacity">
            Work
          </a>
          <a href="#about" className="hidden md:inline opacity-90 hover:opacity-100 transition-opacity">
            About
          </a>
          <ContactTrigger
            ariaLabel="Open contact form"
            className="cursor-pointer px-[16px] md:px-[22px] py-2 md:py-2.5 text-[13px] md:text-sm hover:bg-white/5 transition-colors"
            style={{ border: "1.5px solid rgba(245,241,232,.55)" }}
          >
            Get in touch
          </ContactTrigger>
        </nav>
      </div>
    </div>
  );
}
