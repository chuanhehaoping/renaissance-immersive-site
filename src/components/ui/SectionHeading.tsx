"use client";

import { motion } from "framer-motion";

type Props = {
  index: string;
  label: string;
  title: string;
  align?: "left" | "center";
  accent?: string;
};

export function SectionHeading({ index, label, title, align = "left", accent }: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-5 ${alignment}`}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 text-[0.68rem] uppercase tracking-roman text-ink-soft"
      >
        <span className="h-px w-8 bg-gold/60" />
        <span style={accent ? { color: accent } : undefined}>{index}</span>
        <span>·</span>
        <span>{label}</span>
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="font-display text-4xl leading-[1.05] text-ink md:text-6xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
