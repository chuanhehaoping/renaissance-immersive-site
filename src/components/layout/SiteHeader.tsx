"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV = [
  { label: "Philosophy", id: "philosophy" },
  { label: "Collection", id: "collection" },
  { label: "Craft", id: "craft" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "final-cta" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ease-salon ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(31,26,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-editorial items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="flex items-baseline gap-3 font-display text-ink">
          <span className="text-xl tracking-[0.18em]">ATELIER</span>
          <span className="font-display text-xl italic text-gold">Lunes</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative text-[0.72rem] uppercase tracking-roman text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-salon group-hover:w-full" />
            </a>
          ))}
        </nav>
        <motion.a
          href="#final-cta"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden items-center gap-3 border border-ink/20 px-4 py-2 text-[0.7rem] uppercase tracking-roman text-ink transition-colors hover:border-gold hover:text-gold md:flex"
        >
          <span className="h-px w-3 bg-gold" />
          Correspondence
        </motion.a>
      </div>
    </header>
  );
}
