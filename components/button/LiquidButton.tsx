"use client";

import { useState } from "react";

const variants = [
  { label: "Get Started", color: "#6366f1" },
  { label: "Learn More",  color: "#8b5cf6" },
  { label: "Contact Us",  color: "#06b6d4" },
];

export default function LiquidButton() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4 items-center">
      {variants.map(({ label, color }) => (
        <button
          key={label}
          onMouseEnter={() => setHovered(label)}
          onMouseLeave={() => setHovered(null)}
          className="relative overflow-hidden w-44 h-12 rounded-full text-white font-semibold text-sm tracking-wide"
          style={{ border: `2px solid ${color}` }}
        >
          <span
            className="absolute bottom-0 left-0 right-0 rounded-t-[100%] transition-all duration-500 ease-in-out"
            style={{
              height: hovered === label ? "200%" : "0%",
              background: color,
            }}
          />
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
}