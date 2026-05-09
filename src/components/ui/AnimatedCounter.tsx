"use client";
import { animate, useInView, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  format,
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  format?: (n: number) => string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState<string>(format ? format(0) : "0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setDisplay(format ? format(v) : Math.round(v).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, motionVal, format]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
