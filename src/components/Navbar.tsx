"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const order = ["system", "light", "dark"] as const;
const label = { system: "Auto", light: "Light", dark: "Dark" };

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const cur = (mounted && theme ? theme : "system") as (typeof order)[number];
  const next = order[(order.indexOf(cur) + 1) % order.length];

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
        <Link href="/" className="font-serif text-xl">Md Rakib</Link>
        <div className="flex items-center gap-6">
          <Link href="/#skills" className="text-muted transition-colors hover:text-fg">Skills</Link>
          <Link href="/projects" className="text-muted transition-colors hover:text-fg">Projects</Link>
          <Link href="/#contact" className="text-muted transition-colors hover:text-fg">Contact</Link>
          <button
            onClick={() => setTheme(next)}
            aria-label={`Theme: ${label[cur]}. Switch to ${label[next]}`}
            className="min-w-16 rounded-full border border-line px-3 py-1 text-muted transition-colors hover:text-fg"
          >
            {label[cur]}
          </button>
        </div>
      </nav>
    </header>
  );
}
