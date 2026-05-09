"use client";
import { useRef, type ReactNode } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
  intensity = 6,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { damping: 18, stiffness: 220 });
  const sy = useSpring(my, { damping: 18, stiffness: 220 });
  const rx = useTransform(sy, [0, 1], [intensity, -intensity]);
  const ry = useTransform(sx, [0, 1], [-intensity, intensity]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={cn("transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
}
