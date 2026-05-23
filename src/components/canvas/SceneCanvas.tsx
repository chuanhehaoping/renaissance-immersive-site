"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useIsMobile } from "@/lib/useIsMobile";

const DynamicScene = dynamic(() => import("./SceneRoot").then((m) => m.SceneRoot), {
  ssr: false,
  loading: () => null,
});

export function SceneCanvas() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduced) {
    return <StaticFallback />;
  }

  return (
    <div className="webgl-layer" aria-hidden="true">
      <DynamicScene quality={isMobile ? "low" : "high"} />
    </div>
  );
}

function StaticFallback() {
  return (
    <div className="webgl-layer bg-parchment-marble" aria-hidden="true">
      <div className="absolute inset-x-0 top-1/4 mx-auto h-[36vh] w-[40vw] max-w-[520px] rounded-[40%] bg-gradient-to-br from-warm-white via-ivory to-parchment opacity-70 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ivory" />
    </div>
  );
}
