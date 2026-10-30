import Image from "next/image";
import { site } from "@/lib/site";
import Arrow from "./Arrow";
import { ContactButton } from "./ContactPanel";
import { container } from "./styles";

const meta = "font-display text-[11px] tracking-[0.16em]";

export default function Footer() {
  return (
    <footer className={`${container} flex flex-col gap-12 pb-8`}>
      <div className="grid items-end gap-12 [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]">
        <div className="relative aspect-[3/2] w-full max-w-[440px] overflow-hidden">
          <Image
            src="/work/projects/ipj-london-laptop-mockup.jpg"
            alt="A laptop on a desk showing a website Tim built"
            fill
            sizes="440px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-col gap-2.5 font-display text-[15px] tracking-[0.12em] text-ash">
            <a href={`mailto:${site.email}`} className="text-bone">
              {site.email.toUpperCase()}
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
            <span>DEVON, UK</span>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-col items-end font-display text-[clamp(44px,5vw,72px)] font-light leading-[0.95]"
          >
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <ContactButton className="transition-colors hover:text-ember">CONTACT</ContactButton>
          </nav>
        </div>
      </div>
      <div className={`${meta} flex flex-wrap justify-between gap-4 border-t border-line pt-5 text-smoke`}>
        <span>© {new Date().getFullYear()} TIM BROWN</span>
        <a href="#top" className="inline-flex items-center gap-1">
          BACK TO TOP <Arrow direction="up" />
        </a>
      </div>
    </footer>
  );
}
