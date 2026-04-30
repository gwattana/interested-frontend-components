"use client";

import { useRef } from "react";

export default function HolographicCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!card || !shine) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    const rotX = ((e.clientY - top) / height - 0.5) * -20;
    const rotY = ((e.clientX - left) / width - 0.5) * 20;
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    shine.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,0,128,0.5) 0%, rgba(255,165,0,0.4) 15%, rgba(0,255,128,0.3) 30%, rgba(0,128,255,0.3) 50%, rgba(128,0,255,0.4) 70%, transparent 100%)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (card) card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    if (shine) shine.style.background = "transparent";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out" }}
      className="relative w-64 h-80 rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700" />
      <div
        ref={shineRef}
        className="absolute inset-0 transition-all duration-100"
        style={{ mixBlendMode: "screen" }}
      />
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white/30" />
        </div>
        <div className="space-y-2">
          <p className="text-white font-bold text-lg">Holographic</p>
          <p className="text-zinc-400 text-sm">Move your cursor to reveal the rainbow shimmer.</p>
        </div>
        <div className="w-full h-px bg-white/10" />
      </div>
    </div>
  );
}