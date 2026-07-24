"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(54,217,130,0.9)]" />
      {children}
    </span>
  );
}
