import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="text-center mb-14">
      {kicker && <div className="font-mono text-teal-400 text-sm mb-2">{kicker}</div>}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient inline-block">{children}</h2>
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
