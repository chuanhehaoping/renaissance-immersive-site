"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  AdaptiveDpr,
  PerformanceMonitor,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { SceneContent } from "./SceneContent";
import { Postprocessing } from "./Postprocessing";

type Props = {
  quality: "low" | "high";
};

export function SceneRoot({ quality }: Props) {
  const [mounted, setMounted] = useState(false);
  const [degraded, setDegraded] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const useHQ = quality === "high" && !degraded;

  return (
    <Canvas
      dpr={useHQ ? [1, 1.75] : [1, 1.25]}
      shadows={useHQ ? "soft" : false}
      gl={{
        antialias: false, // SMAA via post handles this on HQ
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      camera={{ position: [0, 0.2, 4.6], fov: 38, near: 0.1, far: 60 }}
      onCreated={({ gl, scene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 0.92;
        scene.background = new THREE.Color("#F6F1E7");
      }}
    >
      <fog attach="fog" args={["#F6F1E7", 9, 22]} />
      <PerformanceMonitor
        onDecline={() => setDegraded(true)}
        onIncline={() => setDegraded(false)}
        bounds={() => [30, 60]}
      />
      <AdaptiveDpr pixelated={false} />
      <Suspense fallback={null}>
        <Environment preset="studio" environmentIntensity={0.45} />
        <SceneContent quality={useHQ ? "high" : "low"} />
        <ContactShadows
          position={[0, -1.18, 0]}
          opacity={0.42}
          scale={8}
          blur={2.6}
          far={4}
          resolution={useHQ ? 1024 : 512}
          color="#1F1A14"
        />
        {useHQ && <Postprocessing />}
      </Suspense>
    </Canvas>
  );
}
