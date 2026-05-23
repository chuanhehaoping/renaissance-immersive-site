"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { subscribeScrollProgress } from "@/lib/scrollProgress";
import { GoldParticles } from "./GoldParticles";
import { MarbleSculpture } from "./MarbleSculpture";
import { Archway } from "./Archway";

type Props = { quality: "low" | "high" };

const TARGETS: Array<{ pos: [number, number, number]; look: [number, number, number] }> = [
  // hero
  { pos: [0, 0.2, 4.6], look: [0, 0.0, 0] },
  // philosophy
  { pos: [-1.3, 0.4, 3.4], look: [0.2, 0.1, 0] },
  // collection
  { pos: [1.2, 0.0, 3.0], look: [0, -0.1, 0] },
  // craft
  { pos: [0.0, -0.4, 2.4], look: [0, 0.0, 0] },
  // experience
  { pos: [-0.6, 0.3, 2.0], look: [0, 0.2, -0.4] },
  // technology
  { pos: [0.8, 0.5, 2.2], look: [0, 0.0, 0] },
  // gallery
  { pos: [0.0, 0.7, 3.6], look: [0, 0.0, 0] },
  // final cta
  { pos: [0.0, 1.3, 4.4], look: [0, 1.0, 0] },
];

export function SceneContent({ quality }: Props) {
  const { camera } = useThree();
  const progressRef = useRef(0);
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  // Smoothed progress
  const smoothRef = useRef(0);

  useEffect(() => {
    const unsub = subscribeScrollProgress((p) => {
      progressRef.current = p;
    });
    return () => {
      unsub();
    };
  }, []);

  const targets = useMemo(() => TARGETS, []);

  useFrame((_, delta) => {
    // smooth scroll-driven progress
    smoothRef.current += (progressRef.current - smoothRef.current) * Math.min(1, delta * 3);
    const p = smoothRef.current;

    const segCount = targets.length - 1;
    const scaled = Math.min(0.9999, Math.max(0, p)) * segCount;
    const idx = Math.floor(scaled);
    const t = scaled - idx;
    const a = targets[idx];
    const b = targets[Math.min(idx + 1, targets.length - 1)];

    // ease the segment
    const e = 1 - Math.pow(1 - t, 3);
    camera.position.x = a.pos[0] + (b.pos[0] - a.pos[0]) * e;
    camera.position.y = a.pos[1] + (b.pos[1] - a.pos[1]) * e;
    camera.position.z = a.pos[2] + (b.pos[2] - a.pos[2]) * e;
    const lx = a.look[0] + (b.look[0] - a.look[0]) * e;
    const ly = a.look[1] + (b.look[1] - a.look[1]) * e;
    const lz = a.look[2] + (b.look[2] - a.look[2]) * e;
    camera.lookAt(lx, ly, lz);

    // gentle global drift
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(performance.now() / 12000) * 0.06 + p * 0.7;
    }

    // gold light shifts toward violet/blue around technology section
    if (lightRef.current) {
      const tech = Math.max(0, 1 - Math.abs(p - 0.6) * 8);
      const final = Math.max(0, 1 - Math.abs(p - 0.95) * 8);
      const r = THREE.MathUtils.lerp(1.0, 0.92, tech);
      const g = THREE.MathUtils.lerp(0.92, 0.86, tech);
      const bl = THREE.MathUtils.lerp(0.74, 0.92, tech) + final * 0.05;
      lightRef.current.color.setRGB(r, g, bl);
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.55} color="#FBF8F1" />
      <directionalLight
        ref={lightRef}
        position={[3.5, 4.5, 2]}
        intensity={1.05}
        color="#F2DDAF"
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#C8D2E8" />
      <hemisphereLight args={["#FBF8F1", "#C9C3B8", 0.3]} />

      <Archway quality={quality} />
      <MarbleSculpture quality={quality} />
      <GoldParticles count={quality === "low" ? 220 : 700} />
    </group>
  );
}
