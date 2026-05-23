"use client";

import { MeshReflectorMaterial } from "@react-three/drei";

type Props = { quality: "low" | "high" };

export function SceneFloor({ quality }: Props) {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1.18, 0]} receiveShadow>
      <planeGeometry args={[24, 24]} />
      {quality === "high" ? (
        <MeshReflectorMaterial
          blur={[600, 180]}
          resolution={256}
          mixBlur={2.6}
          mixStrength={0.22}
          roughness={0.96}
          depthScale={0.12}
          minDepthThreshold={0.85}
          maxDepthThreshold={1.4}
          color="#E8E1CE"
          metalness={0.02}
          mirror={0.12}
        />
      ) : (
        <meshStandardMaterial color="#E8E1CE" roughness={0.92} metalness={0.02} />
      )}
    </mesh>
  );
}
