import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import ArrowIcon from "./ArrowIcon";

// A project box: background photo, title and short description along the
// bottom, and an arrow in the corner. The whole box links to the project page.
export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[20px] bg-pine text-white outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <Image
        src={project.image}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,42,31,0) 35%, rgba(14,42,31,0.6) 62%, rgba(14,42,31,0.94) 100%)",
        }}
      />

      <span
        aria-hidden="true"
        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-pine transition-colors duration-300 group-hover:bg-brand-bright"
      >
        <ArrowIcon size={18} />
      </span>

      <div className="relative flex flex-col gap-2 p-[clamp(22px,2.4vw,32px)]">
        <p className="m-0 text-[14px] font-semibold uppercase tracking-[0.08em] text-brand-bright">
          {project.category}
        </p>
        <h3 className="m-0 text-[clamp(24px,2.1vw,30px)] font-semibold leading-[1.1] tracking-[-0.015em]">
          {project.title}
        </h3>
        <p className="m-0 text-[17px] leading-[1.45] text-white/80">{project.summary}</p>
      </div>
    </Link>
  );
}
