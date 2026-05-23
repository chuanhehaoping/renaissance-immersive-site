"use client";

import { useMemo } from "react";
import * as THREE from "three";

function ArchSilhouette({
  z,
  scale = 1,
  opacity = 0.18,
}: {
  z: number;
  scale?: number;
  opacity?: number;
}) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const w = 1.8;
    const h = 2.4;
    s.moveTo(-w / 2, -h / 2);
    s.lineTo(-w / 2, h / 2 - w / 2);
    s.absarc(0, h / 2 - w / 2, w / 2, Math.PI, 0, true);
    s.lineTo(w / 2, -h / 2);
    s.lineTo(-w / 2, -h / 2);

    const hole = new THREE.Path();
    const iw = 1.45;
    const ih = 2.1;
    hole.moveTo(-iw / 2, -h / 2 + 0.05);
    hole.lineTo(-iw / 2, h / 2 - iw / 2 - 0.05);
    hole.absarc(0, h / 2 - iw / 2 - 0.05, iw / 2, Math.PI, 0, true);
    hole.lineTo(iw / 2, -h / 2 + 0.05);
    hole.lineTo(-iw / 2, -h / 2 + 0.05);
    s.holes.push(hole);
    return s;
  }, []);

  return (
    <mesh position={[0, 0.2, z]} scale={scale}>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial
        color="#D9B873"
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export function Archway({ quality }: { quality: "low" | "high" }) {
  const layers = quality === "low" ? 2 : 4;
  return (
    <group>
      {Array.from({ length: layers }).map((_, i) => (
        <ArchSilhouette
          key={i}
          z={-2 - i * 1.6}
          scale={1 + i * 0.5}
          opacity={0.22 - i * 0.04}
        />
      ))}
      {/* Distant glow plane */}
      <mesh position={[0, 0.4, -9]}>
        <planeGeometry args={[8, 6]} />
        <meshBasicMaterial color="#FBF8F1" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}
