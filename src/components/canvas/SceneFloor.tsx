"use client";

import { MeshReflectorMaterial } from "@react-three/drei";

type Props = { quality: "low" | "high" };

export function SceneFloor({ quality }: Props) {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1.18, 0]} receiveShadow>
      <planeGeometry args={[24, 24]} />
      {quality === "high" ? (
        <MeshReflectorMaterial
          blur={[420, 100]}
          resolution={512}
          mixBlur={1.3}
          mixStrength={1.1}
          roughness={0.85}
          depthScale={0.4}
          minDepthThreshold={0.6}
          maxDepthThreshold={1.4}
          color="#EEE7D6"
          metalness={0.1}
          mirror={0.55}
        />
      ) : (
        <meshStandardMaterial color="#EEE7D6" roughness={0.85} metalness={0.05} />
      )}
    </mesh>
  );
}
