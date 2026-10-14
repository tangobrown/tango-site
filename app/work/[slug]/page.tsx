import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowIcon from "@/components/ArrowIcon";
import { ContactButton } from "@/components/ContactPanel";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { btnPrimary, container, h2Section } from "@/components/ui";
import { getProject, projects } from "@/lib/projects";

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

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const more = [1, 2].map((n) => projects[(index + n) % projects.length]);

  return (
    <>
      <PageHeader eyebrow={project.category} title={project.title} intro={project.summary}>
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
      </PageHeader>

      <section className={`${container} pt-[clamp(40px,5vw,72px)]`}>
        <div data-reveal className="relative aspect-[1196/872] overflow-hidden rounded-[3px] bg-[#effff7] lg:aspect-[16/9]">
          <Image
            src={project.cover}
            alt={`${project.title} website shown on a tablet`}
            fill
            priority
            sizes="(min-width: 1340px) 1300px, 100vw"
            className="object-contain p-[4%]"
          />
        </div>

        <dl className="m-0 mt-[clamp(32px,4vw,56px)] grid grid-cols-1 border-t border-ink/15 sm:grid-cols-3">
          {[
            { label: "Client", value: project.title },
            { label: "Sector", value: project.category },
            { label: "What I did", value: project.services },
          ].map((row) => (
            <div key={row.label} className="flex flex-col gap-1 border-b border-ink/15 py-5 sm:pr-6">
              <dt className="text-[14px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                {row.label}
              </dt>
              <dd className="m-0 text-[19px] font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${container} py-[clamp(52px,6.5vw,88px)]`}>
        <div className="mb-[clamp(28px,3vw,40px)] flex flex-wrap items-end justify-between gap-4">
          <h2 className={`${h2Section}`}>More work</h2>
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
