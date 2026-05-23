"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  lines: string[];
  className?: string;
  delay?: number;
};

export function RevealLines({ lines, className, delay = 0 }: Props) {
  return (
    <span className={cn("inline-block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-line mr-2 last:mr-0">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.08,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
