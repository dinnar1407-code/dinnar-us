// @ts-nocheck
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = Math.random() * 4 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    // Subtle upward drift
    const pos = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 1] += 0.002;
      if (pos[i + 1] > 3.5) pos[i + 1] = -1.5;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
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
      <pointsMaterial size={0.025} color="#39d6ff" transparent opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function WireframeFloor() {
  const size = 12;
  const divisions = 20;
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const half = size / 2;
    const step = size / divisions;
    for (let i = 0; i <= divisions; i++) {
      const pos = -half + i * step;
      pts.push(new THREE.Vector3(pos, -2, -half), new THREE.Vector3(pos, -2, half));
      pts.push(new THREE.Vector3(-half, -2, pos), new THREE.Vector3(half, -2, pos));
    }
    return pts;
  }, []);
  return <Line points={points} color="#39d6ff" lineWidth={0.5} opacity={0.25} transparent />;
}

function StructuralBeams() {
  const beams = useMemo(() => {
    const b: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    // Vertical pillars
    for (let x = -4; x <= 4; x += 2) {
      for (let z = -3; z <= 3; z += 3) {
        b.push({ start: new THREE.Vector3(x, -2, z), end: new THREE.Vector3(x, 2.5, z) });
      }
    }
    // Horizontal roof beams
    for (let x = -4; x <= 4; x += 4) {
      b.push({ start: new THREE.Vector3(x, 2.5, -3), end: new THREE.Vector3(x, 2.5, 3) });
    }
    for (let z = -3; z <= 3; z += 3) {
      b.push({ start: new THREE.Vector3(-4, 2.5, z), end: new THREE.Vector3(4, 2.5, z) });
    }
    return b;
  }, []);

  const allPts = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    beams.forEach((b) => { pts.push(b.start, b.end); });
    return pts;
  }, [beams]);

  return <Line points={allPts} color="#7c8db5" lineWidth={0.5} opacity={0.3} transparent />;
}

function ConveyorBelt() {
  const rollers = useMemo(() => {
    const r: number[] = [];
    for (let i = 0; i < 10; i++) r.push(i);
    return r;
  }, []);

  return (
    <group position={[0, -1.2, 0]}>
      {/* Belt surface */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[6, 0.08, 0.6]} />
        <meshBasicMaterial color="#39d6ff" transparent opacity={0.3} wireframe />
      </mesh>
      {/* Edge lines */}
      <Line
        points={[new THREE.Vector3(-3, 0, -0.3), new THREE.Vector3(3, 0, -0.3), new THREE.Vector3(3, 0, 0.3), new THREE.Vector3(-3, 0, 0.3), new THREE.Vector3(-3, 0, -0.3)]}
        color="#39d6ff" lineWidth={0.5} opacity={0.6} transparent
      />
      {/* Rollers */}
      {rollers.map((i) => (
        <mesh key={i} position={[-2.5 + i * 0.55, -0.06, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.55, 8]} />
          <meshBasicMaterial color="#39d6ff" transparent opacity={0.4} />
        </mesh>
      ))}
      {/* Belt items */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={`item-${i}`} position={[-2 + i * 1.5, 0.15, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.3]} />
          <meshBasicMaterial color="#39d6ff" transparent opacity={0.5} wireframe />
        </mesh>
      ))}
    </group>
  );
}

function HumanoidRobot({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const armRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (armRef.current) {
      armRef.current.children[0].rotation.x = Math.sin(clock.elapsedTime * 1.2) * 0.3;
      armRef.current.children[1].rotation.x = Math.sin(clock.elapsedTime * 1.2 + Math.PI) * 0.3;
    }
  });

  const wireframe = { color: "#39d6ff", transparent: true, opacity: 0.7, wireframe: true } as const;
  const solid = { color: "#39d6ff", transparent: true, opacity: 0.2 } as const;

  return (
    <group position={position} scale={scale}>
      {/* Head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshBasicMaterial {...wireframe} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.15, 8]} />
        <meshBasicMaterial {...wireframe} />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[0.35, 0.6, 0.2]} />
        <meshBasicMaterial {...wireframe} />
      </mesh>
      {/* Arms with animation */}
      <group ref={armRef}>
        <group position={[0.28, 0.9, 0]}>
          <mesh position={[0, -0.25, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
            <meshBasicMaterial {...wireframe} />
          </mesh>
        </group>
        <group position={[-0.28, 0.9, 0]}>
          <mesh position={[0, -0.25, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
            <meshBasicMaterial {...wireframe} />
          </mesh>
        </group>
      </group>
      {/* Legs */}
      <group position={[0.1, 0.3, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.55, 8]} />
          <meshBasicMaterial {...wireframe} />
        </mesh>
      </group>
      <group position={[-0.1, 0.3, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.55, 8]} />
          <meshBasicMaterial {...wireframe} />
        </mesh>
      </group>
      {/* Eye glow */}
      <mesh position={[0, 1.3, 0.18]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function FactoryScene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.08;
  });

  return (
    <group ref={groupRef}>
      <WireframeFloor />
      <StructuralBeams />
      <ConveyorBelt />
      {/* Humanoid robots along the line */}
      <HumanoidRobot position={[-2.5, -1.2, -0.7]} scale={0.9} />
      <HumanoidRobot position={[0, -1.2, -0.7]} scale={1} />
      <HumanoidRobot position={[2.5, -1.2, -0.7]} scale={0.85} />
      {/* Robot on the other side */}
      <HumanoidRobot position={[-1, -1.2, 0.8]} scale={0.95} />
      <HumanoidRobot position={[1.5, -1.2, 0.8]} scale={0.9} />
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.2, 8], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 6]} intensity={1.0} color="#7ee7ff" />
      <directionalLight position={[-6, -2, -4]} intensity={0.4} color="#7c4dff" />
      <Float speed={0.4} floatIntensity={0.3} rotationIntensity={0.15}>
        <FactoryScene />
      </Float>
      <Particles />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.25}
        enableDamping
      />
    </Canvas>
  );
}
