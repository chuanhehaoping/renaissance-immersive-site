"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { SceneContent } from "./SceneContent";
import { Postprocessing } from "./Postprocessing";

type Props = {
  quality: "low" | "high";
};

export function SceneRoot({ quality }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const useHQ = quality === "high";

  return (
    <Canvas
      // Pin DPR — no AdaptiveDpr resizing that can read as flicker.
      dpr={useHQ ? 1.5 : 1.0}
      // Real-time shadow maps OFF — ContactShadows handles ground contact, baked once.
      shadows={false}
      gl={{
        antialias: false,
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
      <Suspense fallback={null}>
        <Environment preset="studio" environmentIntensity={0.45} />
        <SceneContent quality={useHQ ? "high" : "low"} />
        {/* frames={1} bakes the shadow once and reuses it — no per-frame redraw */}
        <ContactShadows
          position={[0, -1.18, 0]}
          opacity={0.34}
          scale={8}
          blur={2.8}
          far={4}
          resolution={useHQ ? 1024 : 512}
          color="#1F1A14"
          frames={1}
        />
        {useHQ && <Postprocessing />}
      </Suspense>
    </Canvas>
  );
}
