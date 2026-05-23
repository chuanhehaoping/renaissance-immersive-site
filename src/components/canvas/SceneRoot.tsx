"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, AdaptiveDpr } from "@react-three/drei";
import { SceneContent } from "./SceneContent";

type Props = {
  quality: "low" | "high";
};

export function SceneRoot({ quality }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas
      dpr={quality === "low" ? [1, 1.25] : [1, 1.75]}
      gl={{
        antialias: quality === "high",
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      camera={{ position: [0, 0.2, 4.6], fov: 38, near: 0.1, far: 60 }}
      frameloop="always"
      flat
    >
      <color attach="background" args={["#F6F1E7"]} />
      <fog attach="fog" args={["#F6F1E7", 9, 22]} />
      <AdaptiveDpr pixelated />
      <Suspense fallback={null}>
        <Environment preset="apartment" environmentIntensity={0.55} />
        <SceneContent quality={quality} />
      </Suspense>
    </Canvas>
  );
}
