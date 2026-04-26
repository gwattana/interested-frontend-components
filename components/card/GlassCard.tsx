"use client";

import { useRef } from "react";

export default function GlassCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current!.style.setProperty("--gx", `${x}%`);
    cardRef.current!.style.setProperty("--gy", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative w-[320px] h-[220px] rounded-2xl overflow-hidden flex items-center justify-center"
      style={
        {
          "--gx": "50%",
          "--gy": "50%",
          background:
            "linear-gradient(135deg, rgba(121,40,202,0.65) 0%, rgba(0,112,243,0.45) 50%, rgba(0,223,216,0.55) 100%)",
        } as React.CSSProperties
      }
    >
      {/* Blurred color orbs */}
      <div
        className="pointer-events-none absolute w-36 h-36 rounded-full -top-10 -right-10 transition-transform duration-700 group-hover:scale-125"
        style={{ background: "rgba(121,40,202,0.75)", filter: "blur(30px)" }}
      />
      <div
        className="pointer-events-none absolute w-28 h-28 rounded-full -bottom-8 -left-8 transition-transform duration-700 group-hover:scale-110"
        style={{ background: "rgba(0,223,216,0.55)", filter: "blur(26px)" }}
      />

      {/* Frosted glass layer */}
      <div
        className="absolute inset-[1px] rounded-2xl"
        style={{
          backdropFilter: "blur(18px)",
          background: "rgba(255,255,255,0.06)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
        }}
      />

      {/* Cursor shimmer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background:
            "radial-gradient(circle 100px at var(--gx) var(--gy), rgba(255,255,255,0.09), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <p className="text-white/90 text-xl font-bold">Glass Card</p>
        <p className="text-white/50 text-sm mt-2 leading-relaxed">
          Frosted glassmorphism with backdrop blur, gradient orbs, and a
          cursor-tracking shimmer.
        </p>
      </div>
    </div>
  );
}