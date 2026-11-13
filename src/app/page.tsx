import Link from "next/link";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Reveal from "../components/Reveal";
import Socials from "../components/Socials";
import ContactForm from "../components/ContactForm";
import ProjectCard from "../components/ProjectCard";
import { profile, projects } from "../lib/data";

const h2 = "font-serif text-4xl md:text-5xl";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <h2 className={h2}>About</h2>
          <p className="text-lg leading-relaxed text-muted">{profile.bio}</p>
        </div>
      </Reveal>
      <Reveal id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <h2 className={`${h2} mb-8`}>Skills</h2>
        <Skills />
      </Reveal>
      <Reveal className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className={h2}>Projects</h2>
          <Link href="/projects" className="text-sm text-muted hover:text-fg">All projects</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Reveal>
      <Reveal id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="grid gap-12 rounded-3xl border border-line bg-card p-8 md:grid-cols-[1fr_1.3fr] md:p-12">
          <div>
            <h2 className={h2}>Get in touch</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">I'm open to full-stack roles. Send a message and I'll reply by email.</p>
            <a href={profile.gmail} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-accent hover:underline">{profile.email}</a>
            <div className="mt-8"><Socials /></div>
          </div>
          <ContactForm />
        </div>
      </Reveal>
    </>
  );
}
