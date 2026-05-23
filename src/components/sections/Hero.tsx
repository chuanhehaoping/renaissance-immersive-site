"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/data/content";
import { RevealChars } from "@/components/ui/RevealChars";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden pb-16 pt-32 md:pb-20 md:pt-28"
    >
      {/* TOP — kicker */}
      <div className="mx-auto w-full max-w-editorial px-6 md:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-[0.72rem] uppercase tracking-roman text-ink-soft"
        >
          <motion.span
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="block h-px w-10 origin-left bg-gold"
          />
          {HERO_CONTENT.kicker}
        </motion.span>
      </div>

      {/* MIDDLE — oversized brand title flanking the sculpture */}
      <div className="pointer-events-none mt-10 flex flex-1 items-center md:mt-0">
        <div className="mx-auto w-full px-4 md:px-10">
          <h1 className="font-display text-ink">
            <div className="flex flex-col items-stretch gap-1 md:flex-row md:items-baseline md:justify-between md:gap-0">
              <span className="block text-left text-[20vw] leading-[0.86] tracking-[-0.02em] md:text-[10.5vw] lg:text-[9.5vw]">
                <RevealChars text="Atelier" delay={0.55} stagger={0.075} duration={1.5} />
              </span>
              <em className="block not-italic text-right text-[20vw] leading-[0.86] tracking-[-0.02em] text-gold md:text-[10.5vw] lg:text-[9.5vw]">
                <RevealChars text="Lunes" delay={1.05} stagger={0.085} duration={1.6} />
              </em>
            </div>
          </h1>
        </div>
      </div>

      {/* BOTTOM — subtitle, lede, CTA */}
      <div className="mx-auto w-full max-w-editorial px-6 md:px-10">
        <div className="md:max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl italic leading-tight text-ink md:text-3xl"
          >
            Of marble &amp; quiet light.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 1.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {HERO_CONTENT.lede}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, delay: 2.6, ease: "linear" }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-roman text-ink-soft/70 md:bottom-10"
      >
        <span className="block animate-slow-drift">— scroll —</span>
      </motion.div>
    </section>
  );
}
