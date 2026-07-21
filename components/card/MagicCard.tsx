"use client";

import { useRef } from "react";

export default function MagicCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current!.style.setProperty("--mx", `${x}px`);
    cardRef.current!.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = () => {
    cardRef.current!.style.setProperty("--mx", "-200px");
    cardRef.current!.style.setProperty("--my", "-200px");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative w-[320px] h-[220px] rounded-2xl p-px overflow-hidden"
      style={
        {
          "--mx": "-200px",
          "--my": "-200px",
          background: "rgb(24,24,27)",
        } as React.CSSProperties
      }
    >
      {/* Animated gradient border spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(200px circle at var(--mx) var(--my), rgba(139,92,246,0.8), transparent 70%)",
        }}
      />

      {/* Inner card surface */}
      <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-zinc-950 flex flex-col items-center justify-center gap-3 px-8">
        {/* Subtle inner glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[calc(1rem-1px)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(200px circle at var(--mx) var(--my), rgba(139,92,246,0.06), transparent 70%)",
          }}
        />
        <div className="relative z-10 w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-white font-semibold text-base">Magic Card</p>
          <p className="text-zinc-500 text-sm mt-1">Hover to reveal the spotlight border effect.</p>
        </div>
      </div>
    </div>
  );
}
