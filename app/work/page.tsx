import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { container } from "@/components/ui";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected website, branding and SEO projects by Tim Brown.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected work"
        intro="Websites for trades, retailers, hospitality and the public sector, each built to look good and bring in the right enquiries."
      />
      <section className={`${container} py-[clamp(52px,6.5vw,88px)]`}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.slug} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <ProjectCard project={p} priority={i < 3} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
