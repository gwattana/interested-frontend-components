"use client";

import { useRef } from "react";

export default function PrismCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current!.style.setProperty("--px", `${x}%`);
    cardRef.current!.style.setProperty("--py", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative w-[300px] h-[200px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center"
      style={{ "--px": "50%", "--py": "50%" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute -inset-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-500"
        style={{
          background:
            "conic-gradient(from 0deg at var(--px) var(--py), #f43f5e, #f97316, #facc15, #4ade80, #22d3ee, #818cf8, #f43f5e)",
          filter: "blur(40px) saturate(1.6)",
          animation: "prism-spin 5s linear infinite",
        }}
      />
      <div className="relative z-10 text-center px-8">
        <p className="text-white font-semibold text-base">Prism Card</p>
        <p className="text-zinc-500 text-sm mt-1">Move your mouse to refract the light.</p>
      </div>
      <style>{`@keyframes prism-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}