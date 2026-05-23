"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { GeneratedImage } from "@/data/generatedImages";
import { cn } from "@/lib/cn";

type Props = {
  image: GeneratedImage;
  caption?: string;
  className?: string;
  framed?: boolean;
  rounded?: boolean;
  priority?: boolean;
};

const FALLBACK_EXTS = [".webp", ".avif", ".png", ".jpg", ".jpeg"];

function candidateSrcs(src: string): string[] {
  const dotIdx = src.lastIndexOf(".");
  if (dotIdx < 0) return [src];
  const base = src.slice(0, dotIdx);
  const original = src.slice(dotIdx);
  const others = FALLBACK_EXTS.filter((e) => e !== original);
  return [src, ...others.map((e) => `${base}${e}`)];
}

export function ImageFrame({ image, caption, className, framed = true, rounded, priority }: Props) {
  const [resolved, setResolved] = useState<string | null>(null);
  const [tried, setTried] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const candidates = candidateSrcs(image.src);
    let i = 0;
    const tryNext = () => {
      if (cancelled) return;
      if (i >= candidates.length) {
        setTried(true);
        return;
      }
      const url = candidates[i++];
      const img = new window.Image();
      img.onload = () => {
        if (!cancelled) {
          setResolved(url);
          setTried(true);
        }
      };
      img.onerror = tryNext;
      img.src = url;
    };
    tryNext();
    return () => {
      cancelled = true;
    };
  }, [image.src]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          framed && "p-3 shadow-frame ring-1 ring-gold/40 bg-warm-white",
          rounded && "rounded-sm",
        )}
        style={{ aspectRatio: image.aspect.replace(" / ", "/") }}
      >
        {resolved ? (
          <Image
            src={resolved}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="placeholder-frame absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl tracking-[0.18em] text-gold/70">
              {image.id.replace(/-/g, " ").toUpperCase()}
            </span>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs uppercase tracking-roman text-ink-soft">
          {caption}
        </figcaption>
      ) : null}
      {tried && !resolved ? null : null}
    </motion.figure>
  );
}
