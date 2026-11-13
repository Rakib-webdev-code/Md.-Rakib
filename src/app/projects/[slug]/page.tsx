import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { details, projects } from "../../../lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  const d = details[slug];
  if (!p || !d) notFound();
  const h = "font-serif text-3xl";
  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="text-sm text-muted hover:text-fg">Back to projects</Link>
      <h1 className="mt-6 font-serif text-5xl md:text-7xl">{p.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{p.blurb}</p>
      <div className="mt-6 flex gap-3 text-sm">
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent px-5 py-2.5 font-medium text-bg hover:opacity-90">Live site</a>
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-5 py-2.5 hover:border-accent">Source code</a>
      </div>
      <Image src={p.image} alt={`${p.title} home page`} width={1482} height={938} priority className="mt-10 rounded-2xl border border-line" />
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <section><h2 className={h}>The problem</h2><p className="mt-3 leading-relaxed text-muted">{d.problem}</p></section>
        <section><h2 className={h}>The solution</h2><p className="mt-3 leading-relaxed text-muted">{d.solution}</p></section>
      </div>
      <section className="mt-14">
        <h2 className={h}>Features</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">{d.features.map((f) => <li key={f} className="rounded-xl border border-line bg-card px-4 py-3 text-sm">{f}</li>)}</ul>
      </section>
      <section className="mt-14">
        <h2 className={h}>Built with</h2>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm text-muted">{p.tags.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1">{t}</li>)}</ul>
      </section>
      {d.gallery.length > 1 && (
        <section className="mt-14">
          <h2 className={h}>Screenshots</h2>
          <div className="mt-4 grid gap-4">{d.gallery.map((g) => <Image key={g} src={g} alt={`${p.title} screenshot`} width={1871} height={933} className="rounded-2xl border border-line" />)}</div>
        </section>
      )}
    </article>
  );
}
