"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { EXPERIENCE_STAGES } from "@/data/content";
import { SECTION_BY_KEY } from "@/data/sections";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { GENERATED_IMAGES } from "@/data/generatedImages";
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Experience() {
  const meta = SECTION_BY_KEY.experience;
  const sectionRef = useRef<HTMLElement>(null);
  const curtainLeft = useRef<HTMLDivElement>(null);
  const curtainRight = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    registerGSAP();
    const ctx = gsap.context(() => {
      if (!curtainLeft.current || !curtainRight.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.2,
        },
      });
      tl.to(curtainLeft.current, { xPercent: -85, ease: "power3.inOut" }, 0);
      tl.to(curtainRight.current, { xPercent: 85, ease: "power3.inOut" }, 0);
    }, sectionRef);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [reduced]);

  return (
    <section ref={sectionRef} id="experience" className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <SectionHeading index={meta.index} label={meta.label} title={meta.title} />
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              Each room is a stage. The curtain only ever parts halfway — it is part of the
              composition. Walk slowly. You are the visitor here, but also, in a quiet way, the
              performer.
            </p>

            <ol className="mt-12 space-y-10">
              {EXPERIENCE_STAGES.map((stage, i) => (
                <motion.li
                  key={stage.no}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[0.7rem] uppercase tracking-roman text-gold/80">{stage.no}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{stage.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="relative overflow-hidden">
              <ImageFrame
                image={GENERATED_IMAGES.experienceCurtain}
                framed={false}
                caption="Sala dei Velluti — the curtains hold the room together."
              />
              {!reduced && (
                <>
                  <div
                    ref={curtainLeft}
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 bg-gradient-to-r from-warm-white via-ivory to-transparent opacity-90 mix-blend-screen"
                  />
                  <div
                    ref={curtainRight}
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/2 bg-gradient-to-l from-warm-white via-ivory to-transparent opacity-90 mix-blend-screen"
                  />
                </>
              )}
            </div>
            <div className="mt-10">
              <ImageFrame
                image={GENERATED_IMAGES.experienceArch}
                caption="The corridor of arches — note how the light leans westward."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hairline mx-auto mt-24 max-w-editorial" />
    </section>
  );
}
