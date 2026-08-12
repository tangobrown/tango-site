import { site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-[rgba(14,17,18,.1)] px-6 py-8 md:px-10">
      <span className="text-[15px] font-semibold tracking-[-.02em]">{site.name}</span>
      <span className="font-mono text-[11px] uppercase tracking-[.12em] text-ink-4">
        {site.footerTagline}
      </span>
      <span className="font-mono text-[11px] tracking-[.12em] text-ink-4">{site.copyright}</span>
    </footer>
  );
}
