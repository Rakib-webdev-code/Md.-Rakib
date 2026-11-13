"use client";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export default function Tilt({ children, className, max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 150, damping: 18 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), spring);
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}
