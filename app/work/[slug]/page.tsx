import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowIcon from "@/components/ArrowIcon";
import { ContactButton } from "@/components/ContactPanel";
import { Eyebrow } from "@/components/landing";
import ProjectCard from "@/components/ProjectCard";
import { btnPrimary, container, h2Section } from "@/components/ui";
import { getProject, projects, type Project } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

const ghostBtn =
  "inline-flex h-[48px] items-center gap-[10px] rounded-[3px] border border-white/30 px-[22px] text-[16px] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-pine";

// The hero image hangs 30% of the content width below the dark band.
const contentWidth = "min(100vw - 40px, 1300px)";
const overlap = `calc(${contentWidth} * 0.3)`;

// Square image beside the challenge / result text. A plain mint
// placeholder until the project's images are supplied.
function StoryImage({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) {
  return (
    <div
      data-reveal
      className={`relative aspect-square overflow-hidden rounded-[3px] bg-[#effff7] ${className}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 650px, 100vw" quality={85} className="object-cover" />
      ) : null}
    </div>
  );
}

function StoryText({ label, text }: { label: string; text: string }) {
  return (
    <div data-reveal className="flex flex-col gap-4">
      <Eyebrow>{label}</Eyebrow>
      <p className="m-0 text-[clamp(19px,1.7vw,24px)] leading-[1.5] text-ink-body">{text}</p>
    </div>
  );
}

function Hero({ project }: { project: Project }) {
  const src = project.gallery?.[0];
  return (
    <div className={`${container} relative`} style={{ marginTop: `calc(${overlap} * -1)` }}>
      <div className="relative aspect-[3/2] overflow-hidden rounded-[3px] bg-[#effff7] md:aspect-[2/1]">
        {src ? (
          <Image
            src={src}
            alt={`The ${project.title} website`}
            fill
            priority
            sizes="(min-width: 1340px) 1300px, 100vw"
            quality={85}
            className="object-cover"
          />
        ) : (
          <Image
            src={project.cover}
            alt={`The ${project.title} website shown on a tablet`}
            fill
            priority
            sizes="(min-width: 1340px) 1300px, 100vw"
            className="object-contain p-[4%]"
          />
        )}
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const more = [1, 2].map((n) => projects[(index + n) % projects.length]);
  const [, second, third] = project.gallery ?? [];

  const facts = [
    { label: "Client", value: project.title },
    { label: "Sector", value: project.category },
    { label: "What I did", value: project.services },
  ];

  return (
    <>
      {/* Dark band: title and intro on the left, project facts on the right */}
      <section
        id="top"
        className="relative overflow-hidden bg-pine text-white"
        style={{ paddingBottom: `calc(${overlap} + clamp(40px, 4.5vw, 56px))` }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-20%] top-0 h-[min(120vw,900px)] w-[min(120vw,900px)] -translate-y-1/4 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(20,168,90,0.2), rgba(20,168,90,0))" }}
        />
        <div
          className={`${container} relative grid grid-cols-1 gap-10 pt-[clamp(132px,13vw,184px)] lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center lg:gap-16`}
        >
          <div className="flex flex-col items-start gap-5">
            <p className="m-0 font-sans text-[15px] font-semibold uppercase tracking-[0.08em] text-brand-bright">
              {project.category}
            </p>
            <h1 className="m-0 max-w-[18ch] text-balance text-[clamp(38px,4.6vw,66px)] font-semibold leading-[1] tracking-[-0.025em]">
              {project.title}
            </h1>
            <p className="m-0 max-w-[52ch] text-[17px] leading-[1.5] text-footer-link">{project.summary}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className={btnPrimary}>
                  Visit the live site <ArrowIcon size={18} />
                </a>
              ) : null}
              <Link href="/work" className={ghostBtn}>
                All work
              </Link>
            </div>
          </div>

          <dl className="m-0 flex flex-col gap-5 border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:py-1 lg:pl-8 lg:pt-1">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1">
                <dt className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-white/60">
                  {f.label}
                </dt>
                <dd className="m-0 font-sans text-[18px] font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Hero project={project} />

      {/* Challenge (text | image), then result (image | text). On mobile each
          image sits above its text. */}
      <section className={`${container} flex flex-col gap-[clamp(56px,7vw,104px)] pt-[clamp(56px,7vw,104px)]`}>
        <div className="grid grid-cols-1 items-center gap-x-[clamp(40px,6vw,96px)] gap-y-8 md:grid-cols-2">
          <StoryText label="The challenge" text={project.challenge} />
          <StoryImage src={second} alt={`${project.title} project detail`} className="order-first md:order-none" />
        </div>
        <div className="grid grid-cols-1 items-center gap-x-[clamp(40px,6vw,96px)] gap-y-8 md:grid-cols-2">
          <StoryImage src={third} alt={`${project.title} project detail`} />
          <StoryText label="The result" text={project.result} />
        </div>
      </section>

      <section className={`${container} py-[clamp(72px,9vw,128px)]`}>
        <div className="mb-[clamp(28px,3vw,40px)] flex flex-wrap items-end justify-between gap-4">
          <h2 className={h2Section}>More work</h2>
          <ContactButton className={btnPrimary}>
            Start a project <ArrowIcon size={18} />
          </ContactButton>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
          {more.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
