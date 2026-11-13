"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Tilt from "./Tilt";
import { profile } from "../lib/data";

export default function Hero() {
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };
  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-28">
      <div aria-hidden className="pointer-events-none absolute -top-10 right-0 -z-10 size-72 rounded-full bg-accent/10 blur-3xl" />
      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
        <motion.p variants={item} className="text-muted">{profile.title}</motion.p>
        <motion.h1 variants={item} className="mt-3 font-serif text-7xl leading-[0.95] tracking-tight md:text-9xl">
          {profile.name}
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-muted">{profile.tagline}</motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">
            View projects
          </Link>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent">
            Download resume
          </a>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative mx-auto w-full max-w-sm">
        <Tilt><Image src="/profile.jpg" alt="Portrait of Md Rakib" width={1122} height={1402} priority className="relative rounded-2xl ring-1 ring-line" /></Tilt>
      </motion.div>
    </section>
  );
}
