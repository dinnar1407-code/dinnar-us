// @ts-nocheck
"use client";
import { useEffect, useRef } from "react";

const NODE_COUNT = 70;
const MAX_DIST = 135;

export function NodeNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes = [];
    let raf;
    let W = 0;
    let H = 0;

    function setup() {
      W = canvas.offsetWidth || 800;
      H = canvas.offsetHeight || 600;
      canvas.width = W;
      canvas.height = H;
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 1.0,
        phase: Math.random() * Math.PI * 2,
        bright: Math.random() < 0.15,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.phase += 0.016;
        if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
        else if (n.x > W) { n.x = W; n.vx = -Math.abs(n.vx); }
        if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
        else if (n.y > H) { n.y = H; n.vy = -Math.abs(n.vy); }
      }

      // Draw connection lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX_DIST * MAX_DIST) {
            const alpha = (1 - Math.sqrt(d2) / MAX_DIST) * 0.28;
            ctx.strokeStyle = `rgba(57,214,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes (15% are "hotspot" junction nodes with a glow)
      for (const n of nodes) {
        const pr = n.r + Math.sin(n.phase) * 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.bright ? pr * 1.8 : pr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57,214,255,${n.bright ? 1.0 : 0.7})`;
        ctx.fill();
        if (n.bright) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, pr * 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(57,214,255,0.07)";
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    }

    setup();
    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(setup);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
}
