import Link from "next/link";
import { projects } from "@/lib/projects";
import ArrowIcon from "./ArrowIcon";
import ProjectCard from "./ProjectCard";
import { btnPrimary, container, h2Section } from "./ui";

// Home page: the first three projects and a link through to /work.
export default function WorkPreview() {
  return (
    <section id="work" className={`${container} pb-[clamp(52px,6.5vw,88px)]`}>
      <h2 data-reveal className={`${h2Section} mb-[clamp(36px,4vw,56px)] text-center`}>
        Selected work
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((p, i) => (
          <div key={p.slug} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
      <div className="mt-[clamp(32px,3.6vw,48px)] flex justify-center">
        <Link href="/work" className={btnPrimary}>
          Show more <ArrowIcon size={16} />
        </Link>
      </div>
    </section>
  );
}
