"use client";

import { useMemo } from "react";
import * as THREE from "three";

function archShape(width: number, height: number, innerWidth: number, innerHeight: number) {
  const s = new THREE.Shape();
  s.moveTo(-width / 2, -height / 2);
  s.lineTo(-width / 2, height / 2 - width / 2);
  s.absarc(0, height / 2 - width / 2, width / 2, Math.PI, 0, true);
  s.lineTo(width / 2, -height / 2);
  s.lineTo(-width / 2, -height / 2);

  const hole = new THREE.Path();
  hole.moveTo(-innerWidth / 2, -height / 2 + 0.05);
  hole.lineTo(-innerWidth / 2, height / 2 - innerWidth / 2 - 0.05);
  hole.absarc(0, height / 2 - innerWidth / 2 - 0.05, innerWidth / 2, Math.PI, 0, true);
  hole.lineTo(innerWidth / 2, -height / 2 + 0.05);
  hole.lineTo(-innerWidth / 2, -height / 2 + 0.05);
  s.holes.push(hole);
  return s;
}

function ArchLayer({ z, scale, opacity }: { z: number; scale: number; opacity: number }) {
  const shape = useMemo(() => archShape(2.0, 2.6, 1.55, 2.25), []);
  return (
    <mesh position={[0, 0.25, z]} scale={scale} receiveShadow>
      <extrudeGeometry
        args={[shape, { depth: 0.08, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.02, bevelThickness: 0.02 }]}
      />
      <meshStandardMaterial
        color="#EFE6D2"
        roughness={0.62}
        metalness={0.02}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Archway({ quality }: { quality: "low" | "high" }) {
  const layers = quality === "low" ? 2 : 4;
  return (
    <group>
      {Array.from({ length: layers }).map((_, i) => (
        <ArchLayer
          key={i}
          z={-2.4 - i * 1.7}
          scale={1.1 + i * 0.45}
          opacity={Math.max(0.18, 0.55 - i * 0.1)}
        />
      ))}
      {/* Soft distant glow */}
      <mesh position={[0, 0.4, -9.5]}>
        <planeGeometry args={[10, 7]} />
        <meshBasicMaterial color="#FBF8F1" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}
