import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

export default function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <article className="glow group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.015]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <Image src={p.image} alt={`${p.title} home page`} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-3xl">{p.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{p.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
          {p.tags.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-1">{t}</li>)}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link href={`/projects/${p.slug}`} className="rounded-full border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-bg">View details</Link>
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent px-4 py-2 font-medium text-bg hover:opacity-90">Live site</a>
          <a href={p.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-4 py-2 hover:border-accent">Source code</a>
        </div>
      </div>
    </article>
  );
}
