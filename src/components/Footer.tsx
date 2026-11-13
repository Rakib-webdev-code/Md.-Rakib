import Socials from "./Socials";
import Link from "next/link";
import { profile } from "../lib/data";

const col = "text-muted transition-colors hover:text-fg";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-serif text-4xl">Md Rakib</p>
          <p className="mt-3 max-w-xs text-muted">Full-stack developer building reliable web applications with Next.js, TypeScript and MongoDB.</p>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <span className="size-2 rounded-full bg-accent" /> Open to full-stack roles
          </p>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="text-fg">Pages</li>
          <li><Link href="/" className={col}>Home</Link></li>
          <li><Link href="/projects" className={col}>Projects</Link></li>
          <li><Link href="/#contact" className={col}>Contact</Link></li>
          <li><a href={profile.resume} target="_blank" rel="noopener noreferrer" className={col}>Resume</a></li>
        </ul>
        <div>
          <p className="mb-4 text-sm text-fg">Elsewhere</p>
          <Socials />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm text-muted">
          <span>© {new Date().getFullYear()} Md Rakib. Built with Next.js and Tailwind CSS.</span>
          <a href="#top" className="hover:text-fg">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
