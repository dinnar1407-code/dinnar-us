// @ts-nocheck
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Device() {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current) return;
    g.current.rotation.y = clock.elapsedTime * 0.25;
  });
  return (
    <group ref={g}>
      {/* body */}
      <mesh>
        <boxGeometry args={[2.4, 1.4, 0.6]} />
        <meshStandardMaterial color="#0c1224" metalness={0.9} roughness={0.18} />
      </mesh>
      {/* screen */}
      <mesh position={[0, 0, 0.31]}>
        <boxGeometry args={[2.05, 1.05, 0.02]} />
        <meshStandardMaterial color="#000000" emissive="#06bff0" emissiveIntensity={0.7} />
      </mesh>
      {/* lens */}
      <Float speed={1.6} floatIntensity={0.4} rotationIntensity={0.2}>
        <mesh position={[1.45, 0, 0.4]}>
          <torusGeometry args={[0.3, 0.07, 18, 60]} />
          <meshStandardMaterial color="#39d6ff" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[1.45, 0, 0.4]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.6}
            chromaticAberration={0.05}
            transmission={1}
            roughness={0.05}
            ior={1.45}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function ProductScene() {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0.5, 4.6], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 5, 3]} intensity={1.4} color="#7ee7ff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#7c4dff" />
      <Float speed={1.1} floatIntensity={0.7} rotationIntensity={0.3}>
        <Device />
      </Float>
      <Environment preset="warehouse" />
    </Canvas>
  );
}
