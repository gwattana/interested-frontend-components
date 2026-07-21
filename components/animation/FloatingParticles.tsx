"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  hue: number;
  drift: number;
  phase: number;
};

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width = 340;
    const H = canvas.height = 220;

    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: 1 + Math.random() * 2.5,
      speed: 0.3 + Math.random() * 0.7,
      opacity: 0.2 + Math.random() * 0.7,
      hue: 220 + Math.random() * 120,
      drift: (Math.random() - 0.5) * 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    let raf: number;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.016;

      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift + Math.sin(t + p.phase) * 0.3;
        p.opacity += (Math.random() - 0.5) * 0.02;
        p.opacity = Math.max(0.1, Math.min(0.9, p.opacity));

        if (p.y < -10) {
          p.y = H + 10;
          p.x = Math.random() * W;
        }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${p.opacity})`;
        ctx.shadowBlur = p.size * 4;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-[340px] h-[220px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-white font-bold text-lg drop-shadow-lg">Floating Particles</p>
        <p className="text-zinc-400 text-sm mt-1">Canvas-drawn glowing embers</p>
      </div>
    </div>
  );
}