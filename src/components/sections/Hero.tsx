"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/data/content";
import { RevealLines } from "@/components/ui/RevealLines";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-40 md:items-center md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-editorial grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-9 lg:col-span-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-[0.7rem] uppercase tracking-roman text-ink-soft"
          >
            <span className="h-px w-10 bg-gold" />
            {HERO_CONTENT.kicker}
          </motion.span>
          <h1 className="mt-8 font-display text-[14vw] leading-[0.88] tracking-tight text-ink md:text-[10vw] lg:text-[8.6vw]">
            <RevealLines lines={[HERO_CONTENT.headline[0]]} delay={0.3} />
            <br />
            <em className="not-italic text-gold">
              <RevealLines lines={[HERO_CONTENT.headline[1]]} delay={0.5} />
            </em>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {HERO_CONTENT.lede}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#philosophy"
              className="group inline-flex items-center gap-3 border border-ink/30 bg-ivory/60 px-6 py-3 text-[0.75rem] uppercase tracking-roman text-ink transition-all duration-500 ease-salon hover:border-gold hover:bg-warm-white hover:text-gold"
            >
              <span className="h-px w-5 bg-gold transition-all duration-500 ease-salon group-hover:w-8" />
              {HERO_CONTENT.ctaLabel}
            </a>
            <span className="text-[0.65rem] uppercase tracking-roman text-ink-soft">
              {HERO_CONTENT.scrollHint}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Soft vignette frame */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ivory to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-roman text-ink-soft/70 md:bottom-10">
        <span className="block animate-slow-drift">— scroll —</span>
      </div>
    </section>
  );
}
