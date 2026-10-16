// Building blocks for the expertise pages (/expertise/service-businesses,
// /expertise/ecommerce), in the site's current style.
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getProject } from "@/lib/projects";
import { enquiryTypes } from "@/lib/site";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { FeatureIcon, type FeatureIconName } from "./FeatureIcons";
import ProjectCard from "./ProjectCard";
import { bodyText, btnPrimary, container, h2Section, sectionY } from "./ui";

export type Item = { title: string; body: string };
export type Feature = Item & { icon: FeatureIconName };
type Enquiry = (typeof enquiryTypes)[number];

const pad = (i: number) => String(i + 1).padStart(2, "0");

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`m-0 font-sans text-[15px] font-semibold uppercase tracking-[0.08em] ${
        dark ? "text-brand-bright" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

function Tick() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14A85A"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[4px] flex-none"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

// Heading, then four icon cards with a one-line description each.
export function FeatureCards({ eyebrow, title, items }: { eyebrow: string; title: string; items: Feature[] }) {
  return (
    <section className={`${container} ${sectionY}`}>
      <div data-reveal className="flex max-w-[760px] flex-col gap-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={h2Section}>{title}</h2>
      </div>
      <div className="mt-[clamp(36px,4vw,56px)] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="flex flex-col gap-3 rounded-[3px] bg-pine p-[clamp(24px,2.4vw,32px)] text-white"
          >
            <FeatureIcon name={item.icon} onDark className="mb-3" />
            <h3 className="m-0 text-[24px] font-semibold leading-[1.1] tracking-[-0.01em]">{item.title}</h3>
            <p className="m-0 text-[16px] leading-[1.5] text-white/75">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Two project cards and a link through to the full portfolio.
export function WorkSection({ title, slugs }: { title: string; slugs: string[] }) {
  const items = slugs.map((slug) => getProject(slug)).filter((p) => p !== undefined);
  return (
    <section id="work" className="scroll-mt-[100px] border-y border-ink/15 bg-[#effff7]">
      <div className={`${container} ${sectionY}`}>
        <div data-reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
          <div className="flex flex-col gap-3">
            <Eyebrow>Recent work</Eyebrow>
            <h2 className={h2Section}>{title}</h2>
          </div>
          <Link href="/work" className={btnPrimary}>
            See all work <ArrowIcon size={18} />
          </Link>
        </div>
        <div className="mt-[clamp(36px,4vw,56px)] grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
          {items.map((p, i) => (
            <div key={p.slug} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Photo on one side; heading, a short intro and ticked points on the other.
// It and StepsSection follow another white section, so they only pad below.
export function PhotoSplit({
  eyebrow,
  title,
  intro,
  points,
  image,
  imageAlt,
  focus = "50% 50%",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  image: string;
  imageAlt: string;
  /** object-position for the photo, e.g. "65% 50%". */
  focus?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`${container} pb-[clamp(52px,6.5vw,88px)] grid grid-cols-1 items-center gap-x-[clamp(40px,6vw,80px)] gap-y-10 md:grid-cols-2`}
    >
      <div data-reveal className="relative aspect-square overflow-hidden rounded-[3px] bg-surface-placeholder">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 640px, 100vw"
          className="object-cover"
          style={{ objectPosition: focus }}
        />
      </div>
      <div data-reveal className="flex flex-col items-start gap-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={h2Section}>{title}</h2>
        <p className={bodyText}>{intro}</p>
        <ul className="m-0 mt-2 flex w-full list-none flex-col gap-3 border-t border-ink/15 p-0 pt-6">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-[16px] font-medium leading-[1.45]">
              <Tick />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
}

export function StepsSection({ title, items }: { title: string; items: Item[] }) {
  return (
    <section id="how-it-works" className={`${container} pb-[clamp(52px,6.5vw,88px)] scroll-mt-[100px]`}>
      <div data-reveal className="flex max-w-[760px] flex-col gap-3">
        <Eyebrow>How it works</Eyebrow>
        <h2 className={h2Section}>{title}</h2>
      </div>
      <ol className="m-0 mt-[clamp(36px,4vw,56px)] grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {items.map((step, i) => (
          <li
            key={step.title}
            data-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="flex flex-col gap-3 border-t-2 border-brand pt-6"
          >
            <span className="font-mono text-[15px] font-semibold text-brand">{pad(i)}</span>
            <h3 className="m-0 text-[22px] font-semibold leading-[1.15] tracking-[-0.01em]">{step.title}</h3>
            <p className="m-0 text-[15px] leading-[1.5] text-ink-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

// Closing call to action: dark green band with a button to the contact form.
export function CtaBand({
  title,
  text,
  label,
  preset,
}: {
  title: string;
  text: string;
  label: string;
  preset: Enquiry;
}) {
  return (
    <section className={`${container} pb-[clamp(52px,6.5vw,88px)]`}>
      <div
        data-reveal
        className="flex flex-col gap-8 rounded-[3px] bg-pine p-[clamp(28px,4vw,56px)] text-white lg:flex-row lg:items-end lg:justify-between lg:gap-16"
      >
        <div className="flex max-w-[640px] flex-col gap-4">
          <h2 className={h2Section}>{title}</h2>
          <p className="m-0 text-[17px] leading-[1.5] text-white/75">{text}</p>
        </div>
        <ContactButton preset={preset} className={`${btnPrimary} self-start lg:self-auto`}>
          {label} <ArrowIcon size={18} />
        </ContactButton>
      </div>
    </section>
  );
}

// Buttons for the page header.
export function HeaderActions({ label, preset }: { label: string; preset: Enquiry }) {
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      <ContactButton preset={preset} className={btnPrimary}>
        {label} <ArrowIcon size={18} />
      </ContactButton>
      <a
        href="#work"
        className="inline-flex h-[48px] items-center rounded-[3px] border border-white/30 px-[22px] text-[16px] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-pine"
      >
        See my work
      </a>
    </div>
  );
}
