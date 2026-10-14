import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

// A project card: photo on top, title and short description underneath. The
// whole card links to the project page.
export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  // The photo box is 4:3, so a wider photo is scaled up to fill its height.
  // Ask for an image that wide (not just the box's width) so it isn't stretched.
  const { width, height } = project.imageSize;
  const scale = Math.max(1, (3 / 4) * (width / height));
  const sizes = [
    `(min-width: 640px) ${Math.round(650 * scale)}px`,
    `${Math.round(100 * scale)}vw`,
  ].join(", ");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-5 rounded-[3px] outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-surface-placeholder">
        <Image
          src={project.image}
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          quality={85}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-2 transition-opacity duration-300 group-hover:opacity-70 group-focus-visible:opacity-70">
        <h3 className="m-0 text-[clamp(24px,2.1vw,30px)] font-semibold leading-[1.1] tracking-[-0.015em]">
          {project.title}
        </h3>
        <p className="m-0 max-w-[52ch] text-[15px] font-normal leading-[1.5] text-ink-body">{project.summary}</p>
      </div>
    </Link>
  );
}
