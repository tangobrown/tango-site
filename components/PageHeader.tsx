import type { ReactNode } from "react";
import { container } from "./ui";

// Dark green intro band at the top of the inner pages (the nav pill floats
// over it), with the same soft green glow as the home hero. An optional
// `visual` sits to the right of the copy on desktop and below it on mobile.
export default function PageHeader({
  eyebrow,
  title,
  intro,
  children,
  visual,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  visual?: ReactNode;
}) {
  const copy = (
    <div className="flex flex-col items-start gap-5">
      <p className="m-0 font-sans text-[15px] font-semibold uppercase tracking-[0.08em] text-brand-bright">
        {eyebrow}
      </p>
      <h1 className="m-0 max-w-[18ch] text-balance text-[clamp(38px,4.6vw,66px)] font-semibold leading-[1] tracking-[-0.025em]">
        {title}
      </h1>
      {intro ? <p className="m-0 max-w-[56ch] text-[17px] leading-[1.5] text-footer-link">{intro}</p> : null}
      {children}
    </div>
  );

  return (
    <section id="top" className="relative overflow-hidden bg-pine text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20%] top-1/2 h-[min(120vw,900px)] w-[min(120vw,900px)] -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(20,168,90,0.2), rgba(20,168,90,0))" }}
      />
      {visual ? (
        <div
          className={`${container} relative grid grid-cols-1 items-center gap-10 pb-[clamp(40px,5vw,72px)] pt-[clamp(124px,11vw,150px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8`}
        >
          {copy}
          {visual}
        </div>
      ) : (
        <div className={`${container} relative pb-[clamp(48px,6vw,88px)] pt-[clamp(132px,13vw,184px)]`}>{copy}</div>
      )}
    </section>
  );
}
