"use client";

let progress = 0;
const listeners = new Set<(p: number) => void>();

export function setScrollProgress(p: number) {
  progress = p;
  listeners.forEach((fn) => fn(p));
}

export function getScrollProgress() {
  return progress;
}

export function subscribeScrollProgress(fn: (p: number) => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
