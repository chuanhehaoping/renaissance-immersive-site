"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function MarbleSculpture({ quality }: { quality: "low" | "high" }) {
  const ref = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.04;
      inner.current.rotation.x = Math.sin(performance.now() / 6000) * 0.06;
    }
  });

  const segments = quality === "low" ? 48 : 96;

  return (
    <group ref={ref} position={[0, -0.1, 0]}>
      {/* Outer abstract sculpture — torus knot as a stand-in for an original draped form */}
      <mesh castShadow receiveShadow scale={1.05}>
        <torusKnotGeometry args={[0.75, 0.22, segments * 2, Math.max(16, segments / 4), 3, 5]} />
        <meshStandardMaterial
          color="#F0EEEA"
          roughness={0.42}
          metalness={0.08}
          emissive="#FBF8F1"
          emissiveIntensity={0.05}
        />
      </mesh>
      {/* Inner pale-gold core */}
      <mesh ref={inner} position={[0, 0, 0]} scale={0.55}>
        <icosahedronGeometry args={[0.6, quality === "low" ? 1 : 2]} />
        <meshStandardMaterial
          color="#D9B873"
          roughness={0.35}
          metalness={0.55}
          emissive="#B68A3D"
          emissiveIntensity={0.18}
        />
      </mesh>
      {/* Quiet plinth shadow disc */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.95, 0]}>
        <circleGeometry args={[1.6, 64]} />
        <meshBasicMaterial color="#1F1A14" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}
