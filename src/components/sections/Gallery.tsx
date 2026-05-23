"use client";

import { motion } from "framer-motion";
import { GALLERY_ITEMS } from "@/data/content";
import { SECTION_BY_KEY } from "@/data/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function Gallery() {
  const meta = SECTION_BY_KEY.gallery;
  return (
    <section id="gallery" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <SectionHeading index={meta.index} label={meta.label} title={meta.title} />
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              A small exhibition of plates from this season. Hung in the order they were made,
              spaced as the wall asked them to be.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 md:gap-10">
          {GALLERY_ITEMS.map((item, i) => {
            const span =
              i === 0
                ? "col-span-12 md:col-span-8"
                : i === 1
                  ? "col-span-12 md:col-span-4"
                  : i === 2
                    ? "col-span-12 md:col-span-5 md:translate-y-12"
                    : "col-span-12 md:col-span-7";
            return (
              <motion.div
                key={item.image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={span}
              >
                <ImageFrame image={item.image} caption={item.caption} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="hairline mx-auto mt-32 max-w-editorial" />
    </section>
  );
}
