"use client";

import { motion } from "framer-motion";
import { TECHNOLOGY_NOTES } from "@/data/content";
import { SECTION_BY_KEY } from "@/data/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { GENERATED_IMAGES } from "@/data/generatedImages";
import { HiddenClickable } from "@/components/ui/HiddenClickable";

export function Technology() {
  const meta = SECTION_BY_KEY.technology;
  return (
    <section id="technology" className="relative py-32 md:py-44">
      {/* Hidden annotation lives here — a quiet "A" in the upper right. */}
      <div className="relative mx-auto max-w-editorial px-6 md:px-10">
        <HiddenClickable />

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <SectionHeading index={meta.index} label={meta.label} title={meta.title} />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
              We treat the technology like leaf gold: as little as possible, applied in the right
              places, allowed to do its quiet work. The classical materials carry the brand; the
              modern systems carry the breath.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-1">
              {TECHNOLOGY_NOTES.map((note, i) => (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative border-l border-gold/30 pl-6"
                >
                  <h3 className="font-display text-2xl text-ink">{note.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {note.body}
                  </p>
                  <span className="absolute left-0 top-2 h-2 w-2 -translate-x-[5px] rotate-45 border border-gold/60 bg-warm-white transition-all duration-500 ease-salon group-hover:bg-gold/70" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="md:sticky md:top-32">
              <ImageFrame
                image={GENERATED_IMAGES.technologyFusion}
                caption="The sculpture, orbited by invisible code."
              />
              <div className="mt-8">
                <ImageFrame
                  image={GENERATED_IMAGES.technologyParticles}
                  caption="A motion study, frozen mid-flight."
                />
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/10 pt-6 text-xs uppercase tracking-roman text-ink-soft">
                <div>
                  <dt className="text-ink-soft/70">Engine</dt>
                  <dd className="mt-1 text-ink">Three.js · R3F</dd>
                </div>
                <div>
                  <dt className="text-ink-soft/70">Tempo</dt>
                  <dd className="mt-1 text-ink">GSAP · Lenis</dd>
                </div>
                <div>
                  <dt className="text-ink-soft/70">Motion</dt>
                  <dd className="mt-1 text-ink">Framer · Springs</dd>
                </div>
                <div>
                  <dt className="text-ink-soft/70">Etiquette</dt>
                  <dd className="mt-1 text-ink">Reduced-motion aware</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="hairline mx-auto mt-24 max-w-editorial" />
    </section>
  );
}
