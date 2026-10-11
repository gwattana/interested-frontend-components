"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 280;
const HEIGHT = 180;

export default function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [revealed, setRevealed] = useState(false);

  const paint = () => {
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.globalCompositeOperation = "source-over";
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, "#a1a1aa");
    gradient.addColorStop(0.5, "#e4e4e7");
    gradient.addColorStop(1, "#71717a");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#3f3f46";
    ctx.font = "600 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch here", WIDTH / 2, HEIGHT / 2 + 5);
  };

  useEffect(paint, []);

  const reset = () => {
    paint();
    setRevealed(false);
  };

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d")!;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(e.clientX - rect.left, e.clientY - rect.top, 18, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkReveal = () => {
    drawing.current = false;
    const { data } = canvasRef.current!.getContext("2d")!.getImageData(0, 0, WIDTH, HEIGHT);
    let cleared = 0;
    for (let i = 3; i < data.length; i += 4 * 16) if (data[i] === 0) cleared++;
    if (cleared / (data.length / (4 * 16)) > 0.5) setRevealed(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative rounded-2xl overflow-hidden" style={{ width: WIDTH, height: HEIGHT }}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-700 flex flex-col items-center justify-center">
          <p className="text-white text-3xl font-bold">50% OFF</p>
          <p className="text-emerald-100 text-xs mt-1">You found the secret prize</p>
        </div>
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="absolute inset-0 cursor-crosshair touch-none transition-opacity duration-500"
          style={{ opacity: revealed ? 0 : 1 }}
          onPointerDown={(e) => {
            drawing.current = true;
            scratch(e);
          }}
          onPointerMove={scratch}
          onPointerUp={checkReveal}
          onPointerLeave={() => drawing.current && checkReveal()}
        />
      </div>
      <button onClick={reset} className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
        Reset
      </button>
    </div>
  );
}
