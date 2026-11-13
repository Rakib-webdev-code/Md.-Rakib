import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/data";

export const metadata = { title: "Projects | Md Rakib" };

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-serif text-5xl md:text-6xl">Projects</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">Two full-stack applications, each deployed and open source.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </section>
  );
}
