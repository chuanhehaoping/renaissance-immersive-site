"use client";

import { motion } from "framer-motion";
import { CRAFT_PHASES } from "@/data/content";
import { SECTION_BY_KEY } from "@/data/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { GENERATED_IMAGES } from "@/data/generatedImages";

export function Craft() {
  const meta = SECTION_BY_KEY.craft;
  return (
    <section id="craft" className="relative py-32 md:py-44">
      <div className="mx-auto grid max-w-editorial grid-cols-12 gap-8 px-6 md:px-10">
        <div className="col-span-12 md:col-span-6">
          <ImageFrame image={GENERATED_IMAGES.craftGold} caption="Gold leaf, applied at dawn." />
          <div className="mt-8 md:mt-12">
            <ImageFrame
              image={GENERATED_IMAGES.craftCanvas}
              caption="Canvas study — warm Renaissance harmonies."
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:pl-8">
          <SectionHeading index={meta.index} label={meta.label} title={meta.title} />
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
            Four movements describe how each object arrives in the world. We do not always like the
            tempo, but we keep it.
          </p>

          <ol className="mt-12 space-y-10">
            {CRAFT_PHASES.map((phase, i) => (
              <motion.li
                key={phase.no}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="grid grid-cols-[auto_1fr] gap-6"
              >
                <span className="font-display text-3xl text-gold/80">{phase.no}</span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{phase.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <div className="hairline mx-auto mt-24 max-w-editorial" />
    </section>
  );
}
