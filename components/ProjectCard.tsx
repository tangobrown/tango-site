import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

// A project box: background photo with the title and short description along
// the bottom. The whole box links to the project page.
export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  // The box is 4:5, so a wider photo is scaled up to fill its height. Ask for
  // an image that wide (not just the box's width) so it isn't stretched.
  const { width, height } = project.imageSize;
  const scale = Math.max(1, (5 / 4) * (width / height));
  const sizes = [
    `(min-width: 1024px) ${Math.round(440 * scale)}px`,
    `(min-width: 640px) ${Math.round(50 * scale)}vw`,
    `${Math.round(100 * scale)}vw`,
  ].join(", ");

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[3px] bg-black text-white outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <Image
        src={project.image}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        quality={85}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <div className="relative flex flex-col gap-2 p-[clamp(22px,2.4vw,32px)]">
        <h3 className="m-0 text-[clamp(24px,2.1vw,30px)] font-semibold leading-[1.1] tracking-[-0.015em]">
          {project.title}
        </h3>
        <p className="m-0 text-[15px] font-normal leading-[1.45] text-white">{project.summary}</p>
      </div>
    </Link>
  );
}
