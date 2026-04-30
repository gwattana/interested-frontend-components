"use client";

import { useState } from "react";

const labels = ["EXECUTE", "OVERRIDE", "BYPASS"];

export default function GlitchButton() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4 items-center">
      {labels.map((label) => (
        <button
          key={label}
          onMouseEnter={() => setActive(label)}
          onMouseLeave={() => setActive(null)}
          className="relative w-44 h-12 bg-black border border-cyan-400 text-cyan-400 font-mono font-bold text-sm tracking-widest overflow-hidden"
        >
          {active === label && (
            <>
              <span
                className="absolute inset-0 flex items-center justify-center text-red-400"
                style={{
                  clipPath: "inset(20% 0 55% 0)",
                  animation: "glitch-clip-1 0.3s steps(1) infinite",
                }}
              >
                {label}
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center text-blue-400"
                style={{
                  clipPath: "inset(55% 0 15% 0)",
                  animation: "glitch-clip-2 0.3s steps(1) infinite",
                }}
              >
                {label}
              </span>
            </>
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
}