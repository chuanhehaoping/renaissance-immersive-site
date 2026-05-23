"use client";

import { motion } from "framer-motion";
import { FINAL_CTA_CONTENT } from "@/data/content";
import { RevealLines } from "@/components/ui/RevealLines";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { GENERATED_IMAGES } from "@/data/generatedImages";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden pb-40 pt-32 md:pb-56 md:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <div className="absolute inset-x-0 top-0 h-full">
          <ImageFrame
            image={GENERATED_IMAGES.finalCeiling}
            framed={false}
            className="opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/30 to-ivory" />
      </div>

      <div className="relative mx-auto max-w-editorial px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-[0.7rem] uppercase tracking-roman text-ink-soft"
        >
          <span className="h-px w-10 bg-gold" />
          {FINAL_CTA_CONTENT.smallTitle}
        </motion.p>

        <h2 className="mt-8 font-display text-[14vw] leading-[0.9] text-ink md:text-[8.4vw]">
          <RevealLines lines={[FINAL_CTA_CONTENT.headline[0]]} />
          <br />
          <em className="not-italic text-gold">
            <RevealLines lines={[FINAL_CTA_CONTENT.headline[1]]} delay={0.15} />
          </em>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg"
        >
          {FINAL_CTA_CONTENT.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="mailto:atelier@lunes.example"
            className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-[0.72rem] uppercase tracking-roman text-warm-white transition-all duration-500 ease-salon hover:bg-burgundy"
          >
            <span className="h-px w-6 bg-pale-gold transition-all duration-500 ease-salon group-hover:w-10" />
            {FINAL_CTA_CONTENT.primaryLabel}
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-3 border border-ink/30 px-7 py-4 text-[0.72rem] uppercase tracking-roman text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <span className="h-px w-6 bg-gold" />
            {FINAL_CTA_CONTENT.secondaryLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
