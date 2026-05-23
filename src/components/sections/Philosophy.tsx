"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY_CONTENT } from "@/data/content";
import { SECTION_BY_KEY } from "@/data/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function Philosophy() {
  const meta = SECTION_BY_KEY.philosophy;
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44"
    >
      <div className="mx-auto grid max-w-editorial grid-cols-12 gap-8 px-6 md:px-10">
        <div className="col-span-12 md:col-span-5">
          <SectionHeading
            index={meta.index}
            label={meta.label}
            title={meta.title}
            accent="var(--gold)"
          />
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="drop-cap mt-10 text-base leading-relaxed text-ink-soft md:text-[1.05rem]"
          >
            {PHILOSOPHY_CONTENT.intro}
          </motion.p>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
            {PHILOSOPHY_CONTENT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <div className="md:sticky md:top-32">
            <ImageFrame image={PHILOSOPHY_CONTENT.image} caption="Figura I — the atelier table, mid-morning." />
            <blockquote className="mt-10 border-l border-gold/40 pl-6">
              <p className="font-display text-2xl italic leading-tight text-ink md:text-3xl">
                “{PHILOSOPHY_CONTENT.pullQuote}”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-roman text-ink-soft">
                {PHILOSOPHY_CONTENT.pullQuoteAttribution}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="hairline mx-auto mt-24 max-w-editorial" />
    </section>
  );
}
