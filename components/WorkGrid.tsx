import Image from "next/image";
import { projects } from "@/lib/projects";
import ArrowIcon from "./ArrowIcon";
import { btnPrimary, container, h2Section } from "./ui";

// Selected work as a stack of cards. Each card sticks near the top of the
// screen and the next one slides up over it as you scroll, so you move
// through the projects one at a time. Tablet image on the left; title at the
// top right, with the summary and live-site link along the bottom. Cards
// only stick when the screen is tall enough to show a whole one.
export default function WorkGrid() {
  return (
    <section id="work" className={`${container} pb-[clamp(52px,6.5vw,88px)]`}>
      <h2 data-reveal className={`${h2Section} mb-[clamp(36px,4vw,56px)] text-center`}>
        Selected work
      </h2>

      <div className="flex flex-col gap-[8vh]">
        {projects.map((p, i) => (
          <article
            key={p.id}
            style={{ top: `calc(var(--stack-top) + ${i * 6}px)` }}
            className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-ink/10 bg-white [--stack-top:84px] md:h-[min(500px,calc(100svh-150px))] md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:h-[min(560px,calc(100vh-200px))] lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:rounded-[24px] lg:[--stack-top:100px] [@media(min-height:560px)]:sticky"
          >
            <div className="relative h-[clamp(170px,30svh,260px)] bg-[#effff7] md:h-full">
              <Image
                src={p.cover}
                alt={`${p.title} website shown on a tablet`}
                fill
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-contain p-[4%]"
              />
            </div>

            <div className="flex flex-col justify-between gap-5 p-[clamp(20px,3.4vw,48px)] md:gap-8">
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex items-center justify-between gap-4">
                  <p className="m-0 text-[15px] font-semibold uppercase tracking-[0.08em] text-brand">
                    {p.category}
                  </p>
                  <p className="m-0 font-mono text-[14px] text-ink-muted">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="m-0 text-[clamp(28px,3vw,44px)] font-semibold leading-[1.05] tracking-[-0.015em]">
                  {p.title}
                </h3>
                <p className="m-0 hidden text-[16px] text-ink-muted md:block">{p.services}</p>
              </div>

              <div className="flex flex-col items-start gap-4 md:gap-6">
                <p className="m-0 text-[17px] leading-[1.45] text-ink-soft md:text-[19px]">{p.summary}</p>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer" className={btnPrimary}>
                    Visit the live site <ArrowIcon size={16} />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
