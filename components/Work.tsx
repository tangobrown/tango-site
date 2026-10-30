import Image from "next/image";
import { projects, type Project } from "@/lib/projects";
import { container, displayWord, leadIn } from "./styles";

function Card({ project }: { project: Project }) {
  const body = (
    <>
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#1c1916]">
        <Image
          src={project.image}
          alt={`The ${project.title} website`}
          fill
          sizes="(min-width: 1280px) 860px, (min-width: 760px) 68vw, 100vw"
          quality={85}
          className="object-cover"
        />
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <em className="text-[20px]">{project.title}</em>
        <span className="whitespace-nowrap font-display text-[11px] tracking-[0.16em] text-ash">
          {project.tag}
        </span>
      </div>
      <p className="m-0 max-w-[560px] text-[17px] leading-[1.45] text-ash">{project.summary}</p>
    </>
  );

  // Cards open the client's live site; projects without one aren't links.
  return project.url ? (
    <a href={project.url} target="_blank" rel="noreferrer" className="flex flex-col gap-3.5">
      {body}
      <span className="sr-only">(opens the live site in a new tab)</span>
    </a>
  ) : (
    <div className="flex flex-col gap-3.5">{body}</div>
  );
}

// Selected work: sticky title on the left (from 760px), stacked case
// studies on the right.
export default function Work() {
  return (
    <section id="work" className={`${container} flex flex-wrap items-start gap-16 pb-[140px] pt-20`}>
      <div className="flex-[1_1_200px] self-start min-[760px]:sticky min-[760px]:top-24">
        <h2 className="m-0 flex flex-col leading-[0.9]">
          <em className={leadIn}>Selected</em>
          <span className={`${displayWord} pl-[0.4em]`}>WORK</span>
        </h2>
      </div>
      <div className="flex min-w-0 flex-[3_1_420px] flex-col gap-[72px]">
        {projects
          .filter((p) => !p.hidden)
          .map((p) => (
            <Card key={p.slug} project={p} />
          ))}
      </div>
    </section>
  );
}
