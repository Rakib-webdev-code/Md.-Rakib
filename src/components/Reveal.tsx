"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.section id={id} className={className} initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
      {children}
    </motion.section>
  );
}
