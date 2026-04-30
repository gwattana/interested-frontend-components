"use client";

import { useRef } from "react";

export default function TiltCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale3d(1.04,1.04,1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out" }}
      className="w-64 h-80 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-6 flex flex-col justify-between cursor-pointer shadow-2xl shadow-violet-500/30"
    >
      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-white/60" />
      </div>
      <div className="space-y-2">
        <p className="text-white font-bold text-lg">Tilt Card</p>
        <p className="text-white/60 text-sm">Hover to see the 3D tilt effect in action.</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-6 h-1.5 rounded-full bg-white/30" />
          ))}
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm" />
      </div>
    </div>
  );
}