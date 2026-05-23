"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
};

/**
 * Editorial per-character reveal. Each glyph is clipped to its own column and
 * slides up from below the baseline with a strong ease-out, staggered.
 */
export function RevealChars({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  duration = 1.4,
  once = true,
}: Props) {
  const chars = Array.from(text);
  return (
    <span className={cn("inline-flex flex-wrap whitespace-pre", className)} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={`${c}-${i}`}
          aria-hidden="true"
          className="relative inline-block overflow-hidden"
          style={{ lineHeight: 0.86 }}
        >
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once, margin: "-10% 0px" }}
            transition={{
              duration,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
              opacity: { duration: duration * 0.4, ease: "linear" },
            }}
            className="inline-block will-change-transform"
          >
            {c === " " ? " " : c}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
