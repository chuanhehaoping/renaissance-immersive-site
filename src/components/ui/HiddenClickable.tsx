"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function HiddenClickable() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Curator's annotation"
        onClick={() => setOpen(true)}
        className="group absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold/60 transition-all duration-700 ease-salon hover:border-gold hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <span className="font-display text-[1rem] italic">A</span>
        <span className="pointer-events-none absolute -inset-2 rounded-full border border-gold/0 transition-all duration-700 ease-salon group-hover:border-gold/30" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-6 max-w-lg overflow-hidden bg-warm-white p-10 shadow-frame ring-1 ring-gold/30"
            >
              <p className="text-[0.7rem] uppercase tracking-roman text-gold">
                Annotation · I of I
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-ink">
                A note left by the curator.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                You found the mark. Every exhibition keeps one quiet visitor. The atelier salutes
                yours, and lights a single grain of gold leaf in your name.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center gap-3 border border-ink/20 px-4 py-2 text-[0.7rem] uppercase tracking-roman text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <span className="h-px w-3 bg-gold" />
                Close the annotation
              </button>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pale-gold/30 blur-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
