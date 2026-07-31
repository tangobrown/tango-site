import ContactTrigger from "./ContactTrigger";

/**
 * Deep green footer with a three-column grid: contact block
 * (name + email + phone + location) + Site links (About/Work
 * anchors + Contact trigger) + Services links (all anchor to
 * #services). Bottom row is a top-bordered copyright + role line.
 */
export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text">
      <div className="container-tb pt-14 md:pt-[72px] pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-12">
        <div>
          <div className="font-heading text-[22px] text-cream mb-[18px]">
            Tim Brown
          </div>
          <div className="text-[16px] leading-[1.9] font-light">
            <a href="mailto:tim@tangobrown.com">tim@tangobrown.com</a>
            <br />
            07594 404 388
            <br />
            Exeter, Devon
          </div>
        </div>
        <div className="text-[16px] leading-[2.1] font-light">
          <div className="font-instrument font-normal text-[22px] tracking-[-0.045em] text-footer-faint mb-3">
            Site
          </div>
          <a href="#about">About</a>
          <br />
          <a href="#work">Work</a>
          <br />
          <ContactTrigger as="span" className="cursor-pointer" ariaLabel="Open contact form">
            Contact
          </ContactTrigger>
        </div>
        <div className="text-[16px] leading-[2.1] font-light">
          <div className="font-instrument font-normal text-[22px] tracking-[-0.045em] text-footer-faint mb-3">
            Services
          </div>
          <a href="#services">Website Builds</a>
          <br />
          <a href="#services">Hosting & Support</a>
          <br />
          <a href="#services">Lead Generation</a>
          <br />
          <a href="#services">AI &amp; Automation</a>
        </div>
      </div>
      <div
        className="container-tb pb-10 flex justify-between text-[13px] text-footer-faint pt-6"
        style={{ borderTop: "1px solid #33402f" }}
      >
        <span>© 2026 Tango Brown — Tim Brown</span>
        <span>Digital Growth Consultant</span>
      </div>
    </footer>
  );
}
