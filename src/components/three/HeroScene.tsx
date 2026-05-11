// @ts-nocheck
"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, OrbitControls, Line } from "@react-three/drei";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom, Vignette, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { MeshReflectorMaterial } from "@react-three/drei";

// 主色调：cyan wireframe color used everywhere
const C = "#39d6ff";
// 背景结构色：稍暗的青色，用于次要结构件（gantry、columns 等）
const CG = "#1d8fa8";

// meshStandardMaterial props — glowing cyan wireframe (triggers Bloom)
const W = {
  color: "#000011",
  emissive: "#39d6ff",
  emissiveIntensity: 0.7,
  wireframe: true,
} as const;

// meshStandardMaterial props — dim background structure
const WD = {
  color: "#000008",
  emissive: "#1d8fa8",
  emissiveIntensity: 0.28,
  wireframe: true,
} as const;

// Solid bright glow — sphere joints, tool tips, eyes → triggers strong Bloom
const GLOW = {
  color: "#39d6ff",
  emissive: "#39d6ff",
  emissiveIntensity: 3.5,
  metalness: 0.9,
  roughness: 0.05,
} as const;

// White super-glow — eye strips, arm tool tips (brightest elements)
const SGLOW = {
  color: "#ffffff",
  emissive: "#c8f0ff",
  emissiveIntensity: 2.5,
  metalness: 0.5,
  roughness: 0.1,
} as const;

/**
 * Particles
 * 漂浮的粒子尘埃效果，向上缓慢漂移，到顶后回到底部循环。
 * 用于营造工厂中飘浮的微尘 / 数据粒子的氛围感。
 */
function Particles({ count = 1500 }: { count?: number }) {
  const ref = useRef(null);
  // 用 useMemo 一次性生成所有粒子位置，避免每次渲染都重算
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 14; // x：水平铺开
      arr[i * 3 + 1] = Math.random() * 4 - 1;       // y：垂直分布
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;  // z：纵深分布
    }
    return arr;
  }, [count]);

  // 每帧让粒子向上漂移一点，超过 3.5 就重置到 -1.5（循环）
  useFrame(() => {
    if (!ref.current) return;
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
      <pointsMaterial
        size={0.025}
        color={C}
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * DataStream
 * 在两个世界坐标点之间画出"流动的数据粒子"。
 * 每个粒子沿直线 + 一个 sin 弧度移动，模拟数据传输流。
 */
function DataStream({
  from,
  to,
  count = 10,
  speed = 0.6,
  offset = 0,
}: {
  from: [number, number, number];
  to: [number, number, number];
  count?: number;
  speed?: number;
  offset?: number;
}) {
  const ref = useRef(null);
  // 初始化所有粒子位置数组
  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + offset;
    const pos = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      // 每个粒子有自己的相位偏移，让它们错开排成一条流
      const phase = (t + i / count) % 1;
      // 线性插值 from -> to
      const x = from[0] + (to[0] - from[0]) * phase;
      const y = from[1] + (to[1] - from[1]) * phase;
      const z = from[2] + (to[2] - from[2]) * phase;
      // 加一个抛物线弧度：在路径中段（phase=0.5）抬升最高
      const arc = Math.sin(phase * Math.PI) * 0.25;
      pos[i * 3 + 0] = x;
      pos[i * 3 + 1] = y + arc;
      pos[i * 3 + 2] = z;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#7ef5ff"
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * HoloDisplay
 * 悬浮的全息数据面板：矩形边框 + 数据条 + 扫描线 + 四角点。
 * 整体有轻微的浮动和旋转动画。
 */
function HoloDisplay({ position }: { position: [number, number, number] }) {
  const groupRef = useRef(null);
  const scanRef = useRef(null);

  // 面板尺寸
  const W = 0.9; // 宽
  const H = 0.55; // 高

  // 边框路径（顺时针一圈回到起点）
  const framePts = useMemo(
    () => [
      new THREE.Vector3(-W / 2, -H / 2, 0),
      new THREE.Vector3(W / 2, -H / 2, 0),
      new THREE.Vector3(W / 2, H / 2, 0),
      new THREE.Vector3(-W / 2, H / 2, 0),
      new THREE.Vector3(-W / 2, -H / 2, 0),
    ],
    []
  );

  // 6 条数据条，宽度做出错落
  const bars = useMemo(
    () => [
      { y: 0.2, w: 0.7 },
      { y: 0.1, w: 0.55 },
      { y: 0.0, w: 0.78 },
      { y: -0.1, w: 0.4 },
      { y: -0.2, w: 0.6 },
      { y: -0.3, w: 0.5 },
    ],
    []
  );

  // 整体浮动 + 微微旋转；扫描线上下振荡
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.05;
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.15;
    }
    if (scanRef.current) {
      // 扫描线在面板内上下来回
      scanRef.current.position.y = Math.sin(t * 1.5) * (H / 2 - 0.04);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* 边框 */}
      <Line points={framePts} color={C} lineWidth={1} transparent opacity={0.85} />

      {/* 数据条：用扁的 box 表示 */}
      {bars.map((b, i) => (
        <mesh key={i} position={[-W / 2 + b.w / 2 + 0.05, b.y, 0]}>
          <boxGeometry args={[b.w, 0.04, 0.005]} />
          <meshStandardMaterial color={C} transparent opacity={0.55} />
        </mesh>
      ))}

      {/* 扫描线 */}
      <mesh ref={scanRef}>
        <boxGeometry args={[W - 0.05, 0.012, 0.008]} />
        <meshStandardMaterial {...GLOW} />
      </mesh>

      {/* 四角点 */}
      {[
        [-W / 2, -H / 2],
        [W / 2, -H / 2],
        [W / 2, H / 2],
        [-W / 2, H / 2],
      ].map(([x, y], i) => (
        <mesh key={`c-${i}`} position={[x, y, 0]}>
          <sphereGeometry args={[0.018, 6, 6]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
      ))}
    </group>
  );
}

/**
 * FactoryFloor
 * 反射地面：用 MeshReflectorMaterial 营造电影感的镜面反射效果。
 */
function FactoryFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.01, 0]} receiveShadow>
      <planeGeometry args={[30, 10]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={512}
        mixBlur={0.8}
        mixStrength={15}
        depthScale={1}
        minDepthThreshold={0.85}
        maxDepthThreshold={1}
        color="#020b14"
        metalness={0.6}
        roughness={0.9}
        mirror={0.4}
      />
    </mesh>
  );
}

/**
 * OverheadGantry
 * 厂房上方的桁架结构：两条长轨 + 横梁 + 垂直立柱。
 * 用稍暗的青色（CG），低透明度，作为背景结构。
 */
function OverheadGantry() {
  const pts = useMemo(() => {
    const p: THREE.Vector3[] = [];
    const Y = 2.8; // 桁架顶部高度
    // 两条纵向长轨：z=-1.5 和 z=1.5
    p.push(new THREE.Vector3(-5, Y, -1.5), new THREE.Vector3(5, Y, -1.5));
    p.push(new THREE.Vector3(-5, Y, 1.5), new THREE.Vector3(5, Y, 1.5));
    // 横梁：每 2 单位放一根，连接两条轨
    for (let x = -5; x <= 5; x += 2) {
      p.push(new THREE.Vector3(x, Y, -1.5), new THREE.Vector3(x, Y, 1.5));
    }
    // 垂直立柱：x=-4,0,4 处从桁架顶部落到地面
    for (const x of [-4, 0, 4]) {
      p.push(new THREE.Vector3(x, Y, -1.5), new THREE.Vector3(x, -2, -1.5));
      p.push(new THREE.Vector3(x, Y, 1.5), new THREE.Vector3(x, -2, 1.5));
    }
    return p;
  }, []);
  return <Line points={pts} color={CG} lineWidth={0.5} opacity={0.3} transparent />;
}

/**
 * IndustrialArm
 * 6 轴工业机器人手臂：底座 + 转盘 + 上臂 + 前臂 + 腕部 + 工具头。
 * 每个关节有独立的正弦动画，末端有发光脉冲点。
 */
function IndustrialArm({ position }: { position: [number, number, number] }) {
  const turntableRef = useRef(null); // 转盘（绕 Y 转）
  const upperRef = useRef(null);     // 上臂（绕 Z 转）
  const forearmRef = useRef(null);   // 前臂（绕 Z 转）
  const wristRef = useRef(null);     // 腕部（绕 Z + X 转）
  const tipRef = useRef(null);       // 末端发光点

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // 各关节独立频率与相位的正弦运动
    if (turntableRef.current) turntableRef.current.rotation.y = Math.sin(t * 0.4) * 0.8;
    if (upperRef.current) upperRef.current.rotation.z = Math.sin(t * 0.6) * 0.35 - 0.2;
    if (forearmRef.current) forearmRef.current.rotation.z = Math.sin(t * 0.5 + 1.2) * 0.4 - 0.3;
    if (wristRef.current) {
      wristRef.current.rotation.z = Math.sin(t * 0.8) * 0.5;
      wristRef.current.rotation.x = Math.sin(t * 0.7) * 0.4;
    }
    // 末端脉冲缩放
    if (tipRef.current) {
      const s = 1 + Math.sin(t * 3) * 0.3;
      tipRef.current.scale.set(s, s, s);
    }
  });

  const wireMat = { color: C, transparent: true, opacity: 0.7, wireframe: true } as const;

  return (
    <group position={position}>
      {/* 圆柱形底座：固定，不随关节转 */}
      <mesh position={[0, -1.7, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.2, 16]} />
        <meshStandardMaterial {...wireMat} />
      </mesh>

      {/* 转盘：绕 Y 轴旋转，承载整条手臂 */}
      <group ref={turntableRef} position={[0, -1.55, 0]}>
        {/* 转盘本体 */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.15, 16]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
        {/* 肩部球关节 */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.18, 12, 12]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>

        {/* 上臂：绕 Z 旋转，挂在肩部 */}
        <group ref={upperRef} position={[0, 0.2, 0]}>
          {/* 上臂方箱：朝上延伸 0.6 单位 */}
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[0.18, 0.8, 0.18]} />
            <meshStandardMaterial {...wireMat} />
          </mesh>
          {/* 肘部球关节 */}
          <mesh position={[0, 0.8, 0]}>
            <sphereGeometry args={[0.14, 12, 12]} />
            <meshStandardMaterial {...wireMat} />
          </mesh>

          {/* 前臂：绕 Z 旋转，挂在肘部 */}
          <group ref={forearmRef} position={[0, 0.8, 0]}>
            <mesh position={[0, 0.35, 0]}>
              <boxGeometry args={[0.14, 0.7, 0.14]} />
              <meshStandardMaterial {...wireMat} />
            </mesh>
            {/* 腕部球关节 */}
            <mesh position={[0, 0.7, 0]}>
              <sphereGeometry args={[0.11, 12, 12]} />
              <meshStandardMaterial {...wireMat} />
            </mesh>

            {/* 腕部 + 工具头 */}
            <group ref={wristRef} position={[0, 0.7, 0]}>
              {/* 工具圆柱（焊枪/抓手） */}
              <mesh position={[0, 0.15, 0]}>
                <cylinderGeometry args={[0.06, 0.08, 0.25, 12]} />
                <meshStandardMaterial {...GLOW} />
              </mesh>
              {/* 末端发光白点：会脉冲 */}
              <mesh ref={tipRef} position={[0, 0.32, 0]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial {...SGLOW} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

/**
 * HumanoidRobot
 * 仿人机器人，包含头/颈/躯干/骨盆/手臂/腿。
 * variant 控制行为：
 *   - idle：手臂前后摆动（模拟走路的手臂律动）
 *   - scan：右臂前伸，从手部发出扫描光束
 *   - work：双臂垂向传送带高度，做小幅振荡
 */
function HumanoidRobot({
  position,
  scale = 1,
  phase = 0,
  variant = "idle",
}: {
  position: [number, number, number];
  scale?: number;
  phase?: number;
  variant?: "idle" | "scan" | "work";
}) {
  // ref 用于头部和各种动画部位
  const headRef = useRef(null);
  const eyeRef = useRef(null);
  const lShoulderRef = useRef(null);
  const rShoulderRef = useRef(null);
  const lElbowRef = useRef(null);
  const rElbowRef = useRef(null);
  const scanBeamRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime + phase;
    // 头部轻微左右转
    if (headRef.current) headRef.current.rotation.y = Math.sin(t * 0.6) * 0.25;
    // 眼睛透明度脉冲
    if (eyeRef.current) eyeRef.current.material.opacity = 0.6 + Math.sin(t * 2) * 0.35;

    if (variant === "idle") {
      // 走路式手臂前后摆动（左右反相）
      if (lShoulderRef.current) lShoulderRef.current.rotation.x = Math.sin(t * 1.4) * 0.45;
      if (rShoulderRef.current) rShoulderRef.current.rotation.x = Math.sin(t * 1.4 + Math.PI) * 0.45;
      if (lElbowRef.current) lElbowRef.current.rotation.x = Math.abs(Math.sin(t * 1.4)) * 0.3;
      if (rElbowRef.current) rElbowRef.current.rotation.x = Math.abs(Math.sin(t * 1.4 + Math.PI)) * 0.3;
    } else if (variant === "scan") {
      // 右臂前伸（rotation.x 负数让臂向前抬）
      if (rShoulderRef.current) rShoulderRef.current.rotation.x = -1.2 + Math.sin(t * 0.8) * 0.1;
      if (rElbowRef.current) rElbowRef.current.rotation.x = 0.3;
      // 左臂保持轻微摆动
      if (lShoulderRef.current) lShoulderRef.current.rotation.x = Math.sin(t * 0.8) * 0.15;
      if (lElbowRef.current) lElbowRef.current.rotation.x = 0.1;
      // 扫描光束透明度脉冲
      if (scanBeamRef.current) {
        scanBeamRef.current.material.opacity = 0.4 + Math.sin(t * 3) * 0.35;
      }
    } else if (variant === "work") {
      // 双臂向前下方伸出做工作（朝传送带方向）
      const w = Math.sin(t * 2) * 0.1;
      if (lShoulderRef.current) lShoulderRef.current.rotation.x = -0.9 + w;
      if (rShoulderRef.current) rShoulderRef.current.rotation.x = -0.9 - w;
      if (lElbowRef.current) lElbowRef.current.rotation.x = 0.6;
      if (rElbowRef.current) rElbowRef.current.rotation.x = 0.6;
    }
  });

  // 通用 wireframe 材质参数
  const wireMat = { color: C, transparent: true, opacity: 0.65, wireframe: true } as const;

  return (
    <group position={position} scale={scale}>
      {/* ============ 头部组：包含头/面罩/眼带/天线 ============ */}
      <group ref={headRef} position={[0, 1.55, 0]}>
        {/* 头部主体方盒 */}
        <mesh>
          <boxGeometry args={[0.23, 0.23, 0.23]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
        {/* 面罩：贴在头部前方，半透明青色 */}
        <mesh position={[0, 0, 0.117]}>
          <boxGeometry args={[0.18, 0.14, 0.01]} />
          <meshStandardMaterial color={C} transparent opacity={0.35} />
        </mesh>
        {/* 眼带：白色发光条 */}
        <mesh ref={eyeRef} position={[0, 0.02, 0.122]}>
          <boxGeometry args={[0.14, 0.025, 0.005]} />
          <meshStandardMaterial {...SGLOW} />
        </mesh>
        {/* 天线：圆柱 + 球头 */}
        <mesh position={[0, 0.18, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.1, 6]} />
          <meshStandardMaterial color={C} transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 0.24, 0]}>
          <sphereGeometry args={[0.022, 6, 6]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
      </group>

      {/* 颈部 */}
      <mesh position={[0, 1.38, 0]}>
        <cylinderGeometry args={[0.05, 0.07, 0.12, 8]} />
        <meshStandardMaterial {...wireMat} />
      </mesh>

      {/* ============ 躯干 ============ */}
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[0.4, 0.72, 0.24]} />
        <meshStandardMaterial {...wireMat} />
      </mesh>
      {/* 胸前面板（更暗的覆盖层） */}
      <mesh position={[0, 0.95, 0.125]}>
        <boxGeometry args={[0.28, 0.5, 0.01]} />
        <meshStandardMaterial color={C} transparent opacity={0.25} />
      </mesh>
      {/* 胸口发光圆 */}
      <mesh position={[0, 1.0, 0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.005, 12]} />
        <meshStandardMaterial {...GLOW} />
      </mesh>

      {/* 骨盆 */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.32, 0.16, 0.22]} />
        <meshStandardMaterial {...wireMat} />
      </mesh>

      {/* ============ 左臂（从观察者角度看是右边） ============ */}
      <group position={[0.24, 1.25, 0]}>
        {/* 肩部球 */}
        <mesh>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
        {/* 上臂组（绕肩部旋转） */}
        <group ref={lShoulderRef}>
          <mesh position={[0, -0.18, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.32, 8]} />
            <meshStandardMaterial {...wireMat} />
          </mesh>
          {/* 肘部 */}
          <group position={[0, -0.34, 0]}>
            <mesh>
              <sphereGeometry args={[0.055, 10, 10]} />
              <meshStandardMaterial {...GLOW} />
            </mesh>
            {/* 前臂组（绕肘部旋转） */}
            <group ref={lElbowRef}>
              <mesh position={[0, -0.17, 0]}>
                <cylinderGeometry args={[0.045, 0.045, 0.3, 8]} />
                <meshStandardMaterial {...wireMat} />
              </mesh>
              {/* 手部 */}
              <mesh position={[0, -0.36, 0]}>
                <boxGeometry args={[0.09, 0.1, 0.07]} />
                <meshStandardMaterial {...wireMat} />
              </mesh>
            </group>
          </group>
        </group>
      </group>

      {/* ============ 右臂（镜像） ============ */}
      <group position={[-0.24, 1.25, 0]}>
        <mesh>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
        <group ref={rShoulderRef}>
          <mesh position={[0, -0.18, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.32, 8]} />
            <meshStandardMaterial {...wireMat} />
          </mesh>
          <group position={[0, -0.34, 0]}>
            <mesh>
              <sphereGeometry args={[0.055, 10, 10]} />
              <meshStandardMaterial {...GLOW} />
            </mesh>
            <group ref={rElbowRef}>
              <mesh position={[0, -0.17, 0]}>
                <cylinderGeometry args={[0.045, 0.045, 0.3, 8]} />
                <meshStandardMaterial {...wireMat} />
              </mesh>
              <mesh position={[0, -0.36, 0]}>
                <boxGeometry args={[0.09, 0.1, 0.07]} />
                <meshStandardMaterial {...wireMat} />
              </mesh>
              {/* 扫描光束：仅 scan 模式时渲染，从手部向下延伸 */}
              {variant === "scan" && (
                <mesh ref={scanBeamRef} position={[0, -0.65, 0]}>
                  <boxGeometry args={[0.02, 0.5, 0.02]} />
                  <meshStandardMaterial color={C} transparent opacity={0.6} />
                </mesh>
              )}
            </group>
          </group>
        </group>
      </group>

      {/* ============ 左腿 ============ */}
      <group position={[0.1, 0.4, 0]}>
        {/* 髋关节球 */}
        <mesh>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
        {/* 大腿 */}
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.07, 0.06, 0.4, 8]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
        {/* 膝关节球 */}
        <mesh position={[0, -0.44, 0]}>
          <sphereGeometry args={[0.06, 10, 10]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
        {/* 小腿 */}
        <mesh position={[0, -0.65, 0]}>
          <cylinderGeometry args={[0.055, 0.05, 0.38, 8]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
        {/* 脚（比身体宽，比脚高扁） */}
        <mesh position={[0, -0.87, 0.03]}>
          <boxGeometry args={[0.13, 0.06, 0.2]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
      </group>

      {/* ============ 右腿（镜像） ============ */}
      <group position={[-0.1, 0.4, 0]}>
        <mesh>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.07, 0.06, 0.4, 8]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
        <mesh position={[0, -0.44, 0]}>
          <sphereGeometry args={[0.06, 10, 10]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
        <mesh position={[0, -0.65, 0]}>
          <cylinderGeometry args={[0.055, 0.05, 0.38, 8]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
        <mesh position={[0, -0.87, 0.03]}>
          <boxGeometry args={[0.13, 0.06, 0.2]} />
          <meshStandardMaterial {...wireMat} />
        </mesh>
      </group>
    </group>
  );
}

/**
 * ConveyorBelt
 * 传送带：表面 + 两条边轨 + 多个滚轮 + 5 个流动物品。
 * 物品组用 ref 控制，每帧让它们沿 x 方向移动并循环回去。
 */
function ConveyorBelt({
  position,
  length = 8,
}: {
  position: [number, number, number];
  length?: number;
}) {
  const itemsRef = useRef(null);

  // 滚轮数量：每 0.5 单位一个
  const rollerCount = Math.ceil(length / 0.5);
  const rollers = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < rollerCount; i++) arr.push(i);
    return arr;
  }, [rollerCount]);

  // 5 个物品的初始 x 偏移和尺寸（2-3 种大小）
  const items = useMemo(
    () => [
      { offset: 0.0, size: [0.32, 0.22, 0.32] as [number, number, number] },
      { offset: 0.2, size: [0.26, 0.18, 0.26] as [number, number, number] },
      { offset: 0.4, size: [0.38, 0.28, 0.32] as [number, number, number] },
      { offset: 0.6, size: [0.26, 0.18, 0.26] as [number, number, number] },
      { offset: 0.8, size: [0.32, 0.22, 0.32] as [number, number, number] },
    ],
    []
  );

  // 边轨路径：构成传送带左右两条边线
  const railPts = useMemo(
    () => [
      new THREE.Vector3(-length / 2, 0.04, -0.3),
      new THREE.Vector3(length / 2, 0.04, -0.3),
    ],
    [length]
  );
  const railPts2 = useMemo(
    () => [
      new THREE.Vector3(-length / 2, 0.04, 0.3),
      new THREE.Vector3(length / 2, 0.04, 0.3),
    ],
    [length]
  );

  useFrame(({ clock }) => {
    if (!itemsRef.current) return;
    const t = clock.elapsedTime;
    // 让物品沿 x 方向匀速移动并循环回去
    itemsRef.current.children.forEach((child, i) => {
      // phase 在 [0,1) 区间循环：基于时间 + 每个物品自己的偏移
      const phase = (t * 0.15 + items[i].offset) % 1;
      // 把 phase 映射到 [-length/2, length/2]
      child.position.x = -length / 2 + phase * length;
    });
  });

  return (
    <group position={position}>
      {/* 传送带表面 wireframe */}
      <mesh>
        <boxGeometry args={[length, 0.08, 0.6]} />
        <meshStandardMaterial color={C} transparent opacity={0.3} wireframe />
      </mesh>

      {/* 两条边轨 */}
      <Line points={railPts} color={C} lineWidth={1} transparent opacity={0.7} />
      <Line points={railPts2} color={C} lineWidth={1} transparent opacity={0.7} />

      {/* 滚轮：圆柱旋转放平在传送带下方 */}
      {rollers.map((i) => (
        <mesh
          key={i}
          position={[-length / 2 + 0.25 + i * 0.5, -0.06, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.04, 0.04, 0.55, 8]} />
          <meshStandardMaterial color={C} transparent opacity={0.45} />
        </mesh>
      ))}

      {/* 流动物品组：用 ref 控制 x 位置 */}
      <group ref={itemsRef}>
        {items.map((it, i) => (
          <mesh key={`item-${i}`} position={[0, 0.15, 0]}>
            <boxGeometry args={it.size} />
            <meshStandardMaterial color={C} transparent opacity={0.55} wireframe />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/**
 * ControlRack
 * 服务器机柜：高方盒 + 多层面板线 + 5 个异步闪烁的状态灯。
 */
function ControlRack({ position }: { position: [number, number, number] }) {
  // 5 个灯的 ref，分别异步闪烁
  const lightRefs = useRef<any[]>([]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    lightRefs.current.forEach((m, i) => {
      if (!m) return;
      // 每个灯有自己的相位与频率，避免同步
      m.material.opacity = 0.4 + Math.abs(Math.sin(t * (1.5 + i * 0.3) + i)) * 0.6;
    });
  });

  const wireMat = { color: C, transparent: true, opacity: 0.6, wireframe: true } as const;

  // 面板分隔线：5 层
  const panelRows = useMemo(() => [0.6, 0.3, 0.0, -0.3, -0.6], []);

  return (
    <group position={position}>
      {/* 机柜主体 */}
      <mesh>
        <boxGeometry args={[0.7, 1.7, 0.5]} />
        <meshStandardMaterial {...wireMat} />
      </mesh>

      {/* 面板分隔线：薄扁的 box 表示分层 */}
      {panelRows.map((y, i) => (
        <mesh key={`row-${i}`} position={[0, y, 0.251]}>
          <boxGeometry args={[0.55, 0.015, 0.005]} />
          <meshStandardMaterial color={C} transparent opacity={0.5} />
        </mesh>
      ))}

      {/* 5 个状态指示灯 */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={`led-${i}`}
          ref={(el) => {
            lightRefs.current[i] = el;
          }}
          position={[-0.22 + i * 0.11, 0.75, 0.26]}
        >
          <sphereGeometry args={[0.022, 8, 8]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
      ))}
    </group>
  );
}

// ── LinearGantry ─────────────────────────────────────────────────────────────
function LinearGantry() {
  const pts = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const len = 20;
    for (const z of [-2, 2]) {
      arr.push(new THREE.Vector3(-len / 2, 2.8, z), new THREE.Vector3(len / 2, 2.8, z));
    }
    for (let x = -9; x <= 9; x += 3) {
      arr.push(new THREE.Vector3(x, 2.8, -2), new THREE.Vector3(x, 2.8, 2));
    }
    for (const x of [-9, -6, -3, 0, 3, 6, 9]) {
      for (const z of [-2, 2]) {
        arr.push(new THREE.Vector3(x, 2.8, z), new THREE.Vector3(x, -2, z));
      }
    }
    return arr;
  }, []);
  return <Line points={pts} color={CG} lineWidth={0.4} opacity={0.3} transparent />;
}

// ── LongConveyor ─────────────────────────────────────────────────────────────
function LongConveyor() {
  const len = 18;
  const rollerCount = Math.ceil(len / 0.45);
  return (
    <group position={[0, -1.2, 0]}>
      <mesh>
        <boxGeometry args={[len, 0.06, 0.72]} />
        <meshStandardMaterial color="#000000" emissive={CG} emissiveIntensity={0.15} wireframe />
      </mesh>
      <Line points={[new THREE.Vector3(-len/2, 0, -0.36), new THREE.Vector3(len/2, 0, -0.36)]} color={C} lineWidth={1.2} opacity={0.7} transparent />
      <Line points={[new THREE.Vector3(-len/2, 0, 0.36), new THREE.Vector3(len/2, 0, 0.36)]} color={C} lineWidth={1.2} opacity={0.7} transparent />
      <Line points={[new THREE.Vector3(-len/2, 0, -0.36), new THREE.Vector3(-len/2, 0, 0.36)]} color={C} lineWidth={1.5} opacity={0.8} transparent />
      <Line points={[new THREE.Vector3(len/2, 0, -0.36), new THREE.Vector3(len/2, 0, 0.36)]} color={C} lineWidth={1.5} opacity={0.8} transparent />
      {Array.from({ length: rollerCount }, (_, i) => (
        <mesh key={i} position={[-len/2 + 0.22 + i * 0.45, -0.04, 0]} rotation={[Math.PI/2, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.64, 6]} />
          <meshStandardMaterial color="#000000" emissive={CG} emissiveIntensity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

// ── AssemblyPhone ─────────────────────────────────────────────────────────────
// iPhone lying flat on conveyor; stage drives visual assembly progression.
function AssemblyPhone({ position, stage = 0 }) {
  return (
    <group position={position}>
      {/* Carrier tray — always present */}
      <mesh>
        <boxGeometry args={[0.58, 0.010, 0.30]} />
        <meshStandardMaterial {...WD} />
      </mesh>
      {/* Stage 1+: PCB board */}
      {stage >= 1 && (
        <mesh position={[0, 0.008, 0]}>
          <boxGeometry args={[0.50, 0.004, 0.24]} />
          <meshStandardMaterial {...W} />
        </mesh>
      )}
      {/* Stage 2+: Component blocks */}
      {stage >= 2 && ([
        [0.12, 0.07], [-0.08, -0.08], [0.05, -0.09], [-0.15, 0.06], [0.18, -0.02],
      ] as [number, number][]).map(([x, z], i) => (
        <mesh key={i} position={[x, 0.013, z]}>
          <boxGeometry args={[0.04, 0.007, 0.05]} />
          <meshStandardMaterial {...GLOW} />
        </mesh>
      ))}
      {/* Stage 3+: Screen glass */}
      {stage >= 3 && (
        <mesh position={[0, 0.015, 0]}>
          <boxGeometry args={[0.48, 0.003, 0.23]} />
          <meshStandardMaterial color="#39d6ff" emissive="#39d6ff" emissiveIntensity={0.55} transparent opacity={0.45} />
        </mesh>
      )}
      {/* Stage 5: Complete iPhone body with camera module */}
      {stage >= 5 && (
        <>
          <mesh position={[0, 0.013, 0]}>
            <boxGeometry args={[0.52, 0.025, 0.26]} />
            <meshStandardMaterial {...W} />
          </mesh>
          {/* Camera module bump */}
          <mesh position={[0.17, 0.027, -0.06]}>
            <boxGeometry args={[0.13, 0.009, 0.12]} />
            <meshStandardMaterial {...GLOW} />
          </mesh>
          {/* Three camera lenses */}
          {([[-0.03, 0.032, -0.04], [0.03, 0.032, -0.04], [0, 0.032, -0.08]] as [number,number,number][]).map(([lx, ly, lz], i) => (
            <mesh key={i} position={[0.17 + lx, ly, -0.06 + lz]}>
              <cylinderGeometry args={[0.017, 0.017, 0.004, 8]} />
              <meshStandardMaterial {...SGLOW} />
            </mesh>
          ))}
          {/* Side power button */}
          <mesh position={[0.263, 0.015, 0.05]}>
            <boxGeometry args={[0.005, 0.02, 0.058]} />
            <meshStandardMaterial {...GLOW} />
          </mesh>
        </>
      )}
    </group>
  );
}

// ── AssemblyStation ───────────────────────────────────────────────────────────
function AssemblyStation({ position, stationIdx = 0 }) {
  return (
    <group position={position}>
      {/* Work platform */}
      <mesh position={[0, -0.48, 0]}>
        <boxGeometry args={[0.9, 0.06, 1.1]} />
        <meshStandardMaterial {...WD} />
      </mesh>
      {/* Support legs */}
      {([[-0.35, -0.4, -0.4], [0.35, -0.4, -0.4], [-0.35, -0.4, 0.4], [0.35, -0.4, 0.4]] as [number,number,number][]).map(([lx, ly, lz], i) => (
        <mesh key={i} position={[lx, ly - 0.48, lz]}>
          <cylinderGeometry args={[0.03, 0.03, 0.8, 6]} />
          <meshStandardMaterial {...WD} />
        </mesh>
      ))}
      {/* 6-axis arm */}
      <IndustrialArm position={[0, -0.45, 0]} />
      {/* Holographic display above */}
      <HoloDisplay position={[0, 2.05, 0]} />
      {/* Status LED */}
      <mesh position={[0.42, -0.15, 0.52]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshStandardMaterial {...GLOW} />
      </mesh>
    </group>
  );
}

// ── LinearFactoryScene ────────────────────────────────────────────────────────
function LinearFactoryScene() {
  return (
    <group>
      <FactoryFloor />
      <LinearGantry />
      <LongConveyor />

      {/* Assembly phones — staged progression left-to-right */}
      <AssemblyPhone position={[-6, -1.15, 0]} stage={0} />
      <AssemblyPhone position={[-3, -1.15, 0]} stage={1} />
      <AssemblyPhone position={[0, -1.15, 0]} stage={2} />
      <AssemblyPhone position={[3, -1.15, 0]} stage={3} />
      <AssemblyPhone position={[6, -1.15, 0]} stage={5} />

      {/* 5 assembly stations along back wall */}
      {([-6, -3, 0, 3, 6] as number[]).map((x, i) => (
        <AssemblyStation key={i} position={[x, 0, -1.4] as [number, number, number]} stationIdx={i} />
      ))}

      {/* Monitoring humanoid robots on front side */}
      <HumanoidRobot position={[-4, -1.2, 1.8]} variant="idle" phase={0} scale={0.82} />
      <HumanoidRobot position={[0.5, -1.2, 1.8]} variant="work" phase={1.5} scale={0.88} />
      <HumanoidRobot position={[5, -1.2, 1.8]} variant="scan" phase={3} scale={0.82} />

      {/* Entry control rack */}
      <ControlRack position={[-9, -0.5, 0]} />

      {/* Data streams between stations */}
      {([[-6,-3], [-3,0], [0,3], [3,6]] as [number,number][]).map(([from, to], i) => (
        <DataStream
          key={i}
          from={[from, 0.5, -1.4] as [number,number,number]}
          to={[to, 0.5, -1.4] as [number,number,number]}
          count={8}
          speed={0.75}
          offset={i * 0.35}
        />
      ))}
    </group>
  );
}

/**
 * CinematicCamera — auto-advances through 6 cinematic shots.
 * Each shot defines a camera position, look-at target, and duration.
 * Smooth lerp creates the gliding, floating camera feel.
 */
function CinematicCamera() {
  const { camera } = useThree();

  const shots = [
    // 1. Establishing — perspective along full production line, right to left
    { pos: [11, 4, 7] as [number, number, number], target: [-4, -1, 0] as [number, number, number], dur: 5 },
    // 2. Station 1 close-up — PCB loading robot arm
    { pos: [-4.5, 1.2, 3] as [number, number, number], target: [-3, -1.1, -0.5] as [number, number, number], dur: 4 },
    // 3. Center station — components assembly arm in action
    { pos: [1.5, 0.8, 3] as [number, number, number], target: [0, -1.1, -0.8] as [number, number, number], dur: 3.5 },
    // 4. Finished iPhone close-up — completed product at station 5
    { pos: [7.5, 0.4, 2.5] as [number, number, number], target: [6, -1.2, 0] as [number, number, number], dur: 3.5 },
    // 5. Robot monitoring row — front side eye level tracking left
    { pos: [-7, -0.2, 5] as [number, number, number], target: [5, -0.5, 1.8] as [number, number, number], dur: 4 },
    // 6. God view — aerial reveal of entire production line
    { pos: [0, 12, 4] as [number, number, number], target: [0, -1, 0] as [number, number, number], dur: 5 },
  ];

  const desiredPos = useRef(new THREE.Vector3(...shots[0].pos));
  const desiredTarget = useRef(new THREE.Vector3(...shots[0].target));
  const lerpTarget = useRef(new THREE.Vector3(...shots[0].target));
  const elapsed = useRef(0);
  const shotIdx = useRef(0);

  // Initialise camera to first shot position immediately
  useEffect(() => {
    camera.position.set(...shots[0].pos);
    camera.lookAt(new THREE.Vector3(...shots[0].target));
  }, []);

  useFrame((_, delta) => {
    elapsed.current += delta;
    const shot = shots[shotIdx.current];

    if (elapsed.current >= shot.dur) {
      elapsed.current = 0;
      shotIdx.current = (shotIdx.current + 1) % shots.length;
      const next = shots[shotIdx.current];
      desiredPos.current.set(...next.pos);
      desiredTarget.current.set(...next.target);
    }

    // Subtle handheld drift within each shot — adds organic life
    const t = elapsed.current;
    const driftX = Math.sin(t * 0.28 + shotIdx.current) * 0.04;
    const driftY = Math.cos(t * 0.19 + shotIdx.current * 1.3) * 0.025;
    const driftedPos = desiredPos.current.clone().add(new THREE.Vector3(driftX, driftY, 0));

    // Lerp camera position and look-at for smooth gliding movement
    camera.position.lerp(driftedPos, 0.012);
    lerpTarget.current.lerp(desiredTarget.current, 0.012);
    camera.lookAt(lerpTarget.current);
  });

  return null;
}

/**
 * HeroScene
 * 导出的主组件：Canvas + 灯光 + Float 包裹的工厂场景 + 粒子 + OrbitControls。
 */
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.5, 9], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      {/* 极低环境光：让 emissive 主导画面，制造电影感的深色基调 */}
      <ambientLight intensity={0.04} />
      {/* 顶部柔和补光 */}
      <directionalLight position={[0, 12, 4]} intensity={0.2} color="#ffffff" />
      {/* 主聚光：偏冷青色，从左上方打入 */}
      <spotLight
        position={[-6, 9, 3]}
        intensity={3}
        color="#7ee7ff"
        angle={0.45}
        penumbra={0.85}
        decay={1.5}
      />
      {/* 副聚光：紫色补光从右后方打入，增加层次 */}
      <spotLight
        position={[7, 7, -3]}
        intensity={2}
        color="#7c4dff"
        angle={0.5}
        penumbra={0.9}
        decay={1.5}
      />
      {/* 中心点光源：在后排机器人附近，强化中心亮度 */}
      <pointLight position={[0, 1.5, -0.7]} intensity={2} color="#39d6ff" distance={5} decay={2} />
      {/* 右侧点光源：照亮工业臂区域 */}
      <pointLight position={[4, 0, 0]} intensity={1.5} color="#39d6ff" distance={4} decay={2} />

      {/* Linear phone assembly factory — no float for grounded industrial feel */}
      <LinearFactoryScene />

      {/* 全场粒子 */}
      <Particles />

      {/* CinematicCamera：自动在 6 个机位间切换 */}
      <CinematicCamera />

      {/* 后期处理：Bloom 让 emissive 部分发光，Vignette 边缘暗角 */}
      <EffectComposer>
        <Bloom
          intensity={1.4}
          luminanceThreshold={0.25}
          luminanceSmoothing={0.85}
          mipmapBlur
          radius={0.7}
        />
        <DepthOfField
          focusDistance={0.008}
          focalLength={0.04}
          bokehScale={2.5}
          height={480}
        />
        <Vignette
          offset={0.15}
          darkness={0.75}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </Canvas>
  );
}
