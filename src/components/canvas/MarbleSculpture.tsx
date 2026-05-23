"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// Profile of a Greco-Roman / Renaissance vessel, swept around the Y axis by LatheGeometry.
// Coordinates are (radius, y) from base to lip. Hand-tuned for graceful taper.
const VESSEL_PROFILE: Array<[number, number]> = [
  [0.0, -1.05],
  [0.45, -1.05],
  [0.48, -0.98],
  [0.42, -0.92],
  [0.38, -0.84],
  [0.46, -0.72],
  [0.62, -0.55],
  [0.78, -0.32],
  [0.86, -0.08],
  [0.86, 0.18],
  [0.78, 0.4],
  [0.62, 0.58],
  [0.5, 0.72],
  [0.46, 0.84],
  [0.5, 0.94],
  [0.6, 1.02],
  [0.66, 1.08],
  [0.62, 1.12],
  [0.0, 1.12],
];

const FOOT_PROFILE: Array<[number, number]> = [
  [0.0, -1.18],
  [0.7, -1.18],
  [0.72, -1.14],
  [0.6, -1.08],
  [0.5, -1.06],
  [0.0, -1.06],
];

type Props = { quality: "low" | "high" };

export function MarbleSculpture({ quality }: Props) {
  const ref = useRef<THREE.Group>(null);
  const orbRef = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  const marbleTexture = useTexture("/images/generated/background-parchment-marble.webp");
  marbleTexture.wrapS = THREE.RepeatWrapping;
  marbleTexture.wrapT = THREE.RepeatWrapping;
  marbleTexture.colorSpace = THREE.SRGBColorSpace;
  marbleTexture.repeat.set(1.5, 2.5);
  marbleTexture.anisotropy = 8;

  const segments = quality === "low" ? 64 : 128;

  const vesselPoints = useMemo(
    () => VESSEL_PROFILE.map(([x, y]) => new THREE.Vector2(x, y)),
    [],
  );
  const footPoints = useMemo(
    () => FOOT_PROFILE.map(([x, y]) => new THREE.Vector2(x, y)),
    [],
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.02;
    }
    if (orbRef.current) {
      orbRef.current.rotation.y += delta * 0.06;
      orbRef.current.rotation.x = Math.sin(performance.now() / 6000) * 0.08;
    }
  });

  return (
    <group ref={ref} position={[0, -0.15, 0]}>
      {/* Classical urn — body */}
      <mesh ref={inner} castShadow receiveShadow>
        <latheGeometry args={[vesselPoints, segments]} />
        <meshPhysicalMaterial
          map={marbleTexture}
          color="#EBE4D2"
          roughness={0.34}
          metalness={0.02}
          clearcoat={0.42}
          clearcoatRoughness={0.22}
          sheen={0.28}
          sheenRoughness={0.7}
          sheenColor="#E8D6B0"
          envMapIntensity={0.65}
        />
      </mesh>

      {/* Plinth foot under the urn */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <latheGeometry args={[footPoints, segments]} />
        <meshPhysicalMaterial
          map={marbleTexture}
          color="#EFE6D2"
          roughness={0.42}
          metalness={0.0}
          clearcoat={0.25}
          clearcoatRoughness={0.4}
        />
      </mesh>

      {/* Gilt rim around the lip */}
      <mesh position={[0, 1.04, 0]}>
        <torusGeometry args={[0.62, 0.012, 16, 96]} />
        <meshStandardMaterial
          color="#C8A05E"
          metalness={1}
          roughness={0.32}
          emissive="#8C6A2E"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Floating crystal orb above the urn */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.04, 0.04]}>
        <mesh ref={orbRef} position={[0, 1.85, 0]}>
          <sphereGeometry args={[0.32, quality === "low" ? 32 : 64, quality === "low" ? 32 : 64]} />
          {quality === "high" ? (
            <MeshTransmissionMaterial
              backside
              backsideThickness={0.4}
              thickness={0.5}
              chromaticAberration={0.012}
              anisotropicBlur={0.04}
              roughness={0.08}
              ior={1.42}
              distortion={0.05}
              distortionScale={0.3}
              temporalDistortion={0}
              transmission={1}
              clearcoat={0.8}
              attenuationColor="#FBF6E8"
              attenuationDistance={2.5}
              color="#FBF8F1"
            />
          ) : (
            <meshPhysicalMaterial
              color="#FBF8F1"
              transmission={0.9}
              roughness={0.08}
              ior={1.45}
              thickness={0.5}
              transparent
              opacity={0.85}
            />
          )}
        </mesh>
      </Float>

      {/* Gold leaf ring around the orb */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.04, 0.04]}>
        <mesh position={[0, 1.85, 0]} rotation-x={Math.PI / 2 - 0.15}>
          <torusGeometry args={[0.46, 0.006, 12, 128]} />
          <meshStandardMaterial
            color="#C8A05E"
            metalness={1}
            roughness={0.3}
            emissive="#8C6A2E"
            emissiveIntensity={0.12}
          />
        </mesh>
      </Float>
    </group>
  );
}
