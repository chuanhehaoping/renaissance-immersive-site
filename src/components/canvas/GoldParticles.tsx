"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function makeHaloTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255, 232, 178, 1)");
  grad.addColorStop(0.25, "rgba(217, 184, 115, 0.85)");
  grad.addColorStop(0.6, "rgba(182, 138, 61, 0.18)");
  grad.addColorStop(1, "rgba(182, 138, 61, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function GoldParticles({ count = 520 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const halo = useMemo(() => makeHaloTexture(), []);

  const { positions, speeds, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 11;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
      speeds[i] = 0.04 + Math.random() * 0.18;
      sizes[i] = 0.5 + Math.pow(Math.random(), 2.4) * 2.2;
    }
    return { positions, speeds, sizes };
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const geom = ref.current.geometry as THREE.BufferGeometry;
    const arr = geom.attributes.position.array as Float32Array;
    const t = performance.now() / 4500;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * delta * 0.42;
      arr[i * 3 + 0] += Math.sin(t + i * 0.31) * delta * 0.05;
      if (arr[i * 3 + 1] > 4) {
        arr[i * 3 + 1] = -4;
        arr[i * 3 + 0] = (Math.random() - 0.5) * 11;
      }
    }
    geom.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={sizes.length}
          itemSize={1}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        sizeAttenuation
        map={halo ?? undefined}
        alphaTest={0.02}
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
