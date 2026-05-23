"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { subscribeScrollProgress } from "@/lib/scrollProgress";
import { GoldParticles } from "./GoldParticles";
import { MarbleSculpture } from "./MarbleSculpture";
import { Archway } from "./Archway";
import { SceneFloor } from "./SceneFloor";

type Props = { quality: "low" | "high" };

// Camera path threaded through the 8 sections. Looks at the sculpture group,
// varying angle / height / distance per section.
const TARGETS: Array<{ pos: [number, number, number]; look: [number, number, number] }> = [
  // I  hero — front, slightly above
  { pos: [0.0, 0.35, 4.4], look: [0, 0.3, 0] },
  // II philosophy — gentle drift left
  { pos: [-1.4, 0.5, 3.6], look: [0.1, 0.3, 0] },
  // III collection — drift right & lower
  { pos: [1.6, 0.1, 3.3], look: [0, 0.1, 0] },
  // IV craft — close in, low
  { pos: [0.2, -0.25, 2.6], look: [0, 0.0, 0] },
  // V experience — left, slight curtain framing
  { pos: [-0.9, 0.4, 2.4], look: [0, 0.4, -0.3] },
  // VI technology — right, lift, focus on orb
  { pos: [1.1, 0.9, 2.6], look: [0, 0.8, 0] },
  // VII gallery — pull back & up
  { pos: [0.0, 1.0, 3.9], look: [0, 0.5, 0] },
  // VIII final cta — tilt upward
  { pos: [0.0, 1.6, 4.2], look: [0, 1.4, 0] },
];

export function SceneContent({ quality }: Props) {
  const { camera } = useThree();
  const progressRef = useRef(0);
  const smoothRef = useRef(0);
  const groupRef = useRef<THREE.Group>(null);

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
    smoothRef.current += (progressRef.current - smoothRef.current) * Math.min(1, delta * 3);
    const p = smoothRef.current;

    const segCount = targets.length - 1;
    const scaled = Math.min(0.9999, Math.max(0, p)) * segCount;
    const idx = Math.floor(scaled);
    const t = scaled - idx;
    const a = targets[idx];
    const b = targets[Math.min(idx + 1, targets.length - 1)];

    const e = 1 - Math.pow(1 - t, 3);
    camera.position.x = a.pos[0] + (b.pos[0] - a.pos[0]) * e;
    camera.position.y = a.pos[1] + (b.pos[1] - a.pos[1]) * e;
    camera.position.z = a.pos[2] + (b.pos[2] - a.pos[2]) * e;
    const lx = a.look[0] + (b.look[0] - a.look[0]) * e;
    const ly = a.look[1] + (b.look[1] - a.look[1]) * e;
    const lz = a.look[2] + (b.look[2] - a.look[2]) * e;
    camera.lookAt(lx, ly, lz);

    // No per-frame group motion. No per-frame light color shifts. The scene
    // is visually static; only the scroll-driven camera moves through it.
  });

  return (
    <group ref={groupRef}>
      {/* Three-point lighting */}
      <ambientLight intensity={0.28} color="#FBF8F1" />
      <directionalLight
        position={[3.2, 4.6, 2.4]}
        intensity={1.05}
        color="#F3DDB0"
      />
      <directionalLight
        position={[-3.5, 2.2, -2.6]}
        intensity={0.3}
        color="#CFDAF0"
      />
      <hemisphereLight args={["#FBF8F1", "#C9C3B8", 0.18]} />

      <Archway quality={quality} />
      <SceneFloor quality={quality} />
      <MarbleSculpture quality={quality} />
      <GoldParticles count={quality === "low" ? 80 : 240} />
    </group>
  );
}
