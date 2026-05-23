"use client";

import { motion } from "framer-motion";
import { COLLECTION_ITEMS } from "@/data/content";
import { SECTION_BY_KEY } from "@/data/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { GENERATED_IMAGES } from "@/data/generatedImages";

export function Collection() {
  const meta = SECTION_BY_KEY.collection;
  return (
    <section id="collection" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <SectionHeading index={meta.index} label={meta.label} title={meta.title} />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
              Twelve quiet studies — six on display this season — arranged like exhibits in a long
              ivory hall. Each piece is named, dated, and otherwise asked to be left in peace.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <ImageFrame
              image={GENERATED_IMAGES.collectionObject}
              caption="Object IV — Aurum, on a marble plinth."
            />
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {COLLECTION_ITEMS.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05 * (i % 3),
              }}
              className="group relative pl-6"
            >
              <span className="absolute left-0 top-1 font-display text-base text-gold/80">
                {item.roman}
              </span>
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-1 text-[0.7rem] uppercase tracking-roman text-ink-soft">
                {item.medium}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.note}</p>
              <span className="mt-6 inline-flex h-px w-10 bg-gold/50 transition-all duration-500 ease-salon group-hover:w-16" />
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="hairline mx-auto mt-24 max-w-editorial" />
    </section>
  );
}
