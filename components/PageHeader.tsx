import type { ReactNode } from "react";
import { container } from "./ui";

// Dark green intro band at the top of the inner pages (the nav pill floats
// over it), with the same soft green glow as the home hero.
export default function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section id="top" className="relative overflow-hidden bg-pine text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20%] top-1/2 h-[min(120vw,900px)] w-[min(120vw,900px)] -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(20,168,90,0.2), rgba(20,168,90,0))" }}
      />
      <div
        className={`${container} relative flex flex-col items-start gap-5 pb-[clamp(48px,6vw,88px)] pt-[clamp(132px,13vw,184px)]`}
      >
        <p className="m-0 text-[15px] font-semibold uppercase tracking-[0.08em] text-brand-bright">
          {eyebrow}
        </p>
        <h1 className="m-0 max-w-[18ch] text-[clamp(38px,4.6vw,66px)] font-semibold leading-[1] tracking-[-0.025em]">
          {title}
        </h1>
        {intro ? (
          <p className="m-0 max-w-[56ch] text-[19px] leading-[1.45] text-footer-link">{intro}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
