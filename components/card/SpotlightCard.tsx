"use client";

import { useRef } from "react";

export default function SpotlightCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current!.style.setProperty("--x", `${x}px`);
    cardRef.current!.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="relative w-[300px] h-[200px] rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden flex items-center justify-center group"
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle 130px at var(--x) var(--y), rgba(255,255,255,0.07), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background:
            "radial-gradient(circle 130px at var(--x) var(--y), rgba(255,255,255,0.15), transparent)",
          mask: "linear-gradient(black, black) padding-box, linear-gradient(black, black)",
          WebkitMask:
            "linear-gradient(black, black) padding-box exclude, linear-gradient(black, black)",
        }}
      />
      <div className="relative text-center">
        <p className="text-white font-semibold text-lg">Spotlight Card</p>
        <p className="text-zinc-500 text-sm mt-1">Move your mouse</p>
      </div>
    </div>
  );
}
