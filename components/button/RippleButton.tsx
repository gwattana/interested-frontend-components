"use client";

import { useState } from "react";

type Ripple = { id: number; x: number; y: number };

export default function RippleButton() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
  };

  return (
    <button
      onClick={addRipple}
      className="relative overflow-hidden px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors select-none"
    >
      <span className="relative z-10">Click me</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 w-4 h-4 pointer-events-none"
          style={{
            left: r.x - 8,
            top: r.y - 8,
            animation: "ripple 0.7s ease-out forwards",
          }}
        />
      ))}
    </button>
  );
}
