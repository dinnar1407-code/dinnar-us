// @ts-nocheck
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles({ count = 1800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.04 + pointer.x * 0.4;
    ref.current.rotation.x = pointer.y * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#39d6ff"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RobotArm() {
  // Stylised industrial arm — built from primitives, no external GLTF dep.
  const baseRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!baseRef.current) return;
    baseRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.4) * 0.55;
  });
  return (
    <group ref={baseRef} position={[0, -1.3, 0]}>
      {/* base */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.55, 0.7, 0.35, 32]} />
        <meshStandardMaterial color="#0c1224" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* lower arm */}
      <group position={[0, 0.35, 0]} rotation={[0, 0, 0.25]}>
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[0.35, 1.4, 0.35]} />
          <meshStandardMaterial color="#121a30" metalness={0.7} roughness={0.25} />
        </mesh>
        {/* upper arm */}
        <group position={[0, 1.4, 0]} rotation={[0, 0, -0.6]}>
          <mesh position={[0, 0.55, 0]}>
            <boxGeometry args={[0.3, 1.1, 0.3]} />
            <meshStandardMaterial color="#1b2540" metalness={0.7} roughness={0.25} />
          </mesh>
          {/* tool head */}
          <group position={[0, 1.1, 0]}>
            <mesh>
              <sphereGeometry args={[0.18, 24, 24]} />
              <meshStandardMaterial color="#39d6ff" emissive="#06bff0" emissiveIntensity={1.6} />
            </mesh>
            <pointLight color="#39d6ff" intensity={2.2} distance={6} decay={2} />
          </group>
        </group>
      </group>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.4, 7.5], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 6]} intensity={1.2} color="#7ee7ff" />
      <directionalLight position={[-6, -2, -4]} intensity={0.5} color="#7c4dff" />
      <Float speed={0.8} floatIntensity={0.6} rotationIntensity={0.4}>
        <RobotArm />
      </Float>
      <Particles />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.4}
        enableDamping
      />
    </Canvas>
  );
}
