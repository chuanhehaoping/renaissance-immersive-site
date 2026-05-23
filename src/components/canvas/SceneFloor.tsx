"use client";

type Props = { quality: "low" | "high" };

export function SceneFloor({ quality: _quality }: Props) {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1.18, 0]} receiveShadow>
      <planeGeometry args={[24, 24]} />
      <meshStandardMaterial color="#E5DDC8" roughness={1.0} metalness={0.0} />
    </mesh>
  );
}
