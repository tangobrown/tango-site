import { site } from "@/lib/site";
import { container } from "./ui";

const colLink = "text-[15px] text-footer-link transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-pine text-white">
      <div className={`${container} pb-[26px] pt-[clamp(56px,7vw,80px)]`}>
        <div className="flex flex-col gap-x-8 gap-y-10 md:flex-row md:flex-wrap">
          <div className="flex flex-col md:flex-[2_1_260px] items-start gap-[10px]">
            <p className="m-0 font-sans text-[20px] font-medium">Prefer to talk?</p>
            <a
              href={`mailto:${site.email}`}
              className="text-[17px] text-white transition-colors hover:text-brand-bright"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[17px] text-white transition-colors hover:text-brand-bright"
            >
              Connect on LinkedIn
            </a>
            <p className="m-0 text-[15px] text-footer-muted">{site.location}</p>
          </div>

          <div className="flex flex-col md:flex-[1_1_140px] items-start gap-[9px]">
            <p className="m-0 mb-1 font-sans text-[17px] font-semibold">Services</p>
            <a href="#services" className={colLink}>
              Web design
            </a>
            <a href="#services" className={colLink}>
              SEO
            </a>
            <a href="#services" className={colLink}>
              AI &amp; automation
            </a>
          </div>

          <div className="flex flex-col md:flex-[1_1_140px] items-start gap-[9px]">
            <p className="m-0 mb-1 font-sans text-[17px] font-semibold">More</p>
            <a href="#work" className={colLink}>
              Work
            </a>
            <a href="#about" className={colLink}>
              About
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className={colLink}>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-[clamp(60px,8vw,110px)] flex flex-col gap-3 text-[12px] tracking-normal text-footer-legal md:flex-row md:justify-between">
          <span>{site.copyright} | All rights reserved</span>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
