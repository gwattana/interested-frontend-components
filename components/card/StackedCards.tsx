"use client";

import { useState } from "react";

const CARDS = [
  {
    gradient: "from-violet-500 to-purple-700",
    label: "Design Systems",
    sub: "Components & tokens",
  },
  {
    gradient: "from-blue-500 to-cyan-600",
    label: "UI Animations",
    sub: "Motion & transitions",
  },
  {
    gradient: "from-rose-500 to-pink-600",
    label: "Developer Tools",
    sub: "Build & deploy",
  },
];

export default function StackedCards() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer"
      style={{ width: 260, height: 170 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {CARDS.map((card, i) => (
        <div
          key={i}
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} flex flex-col justify-between p-5`}
          style={{
            zIndex: i + 1,
            transform: hovered
              ? `translateX(${(i - 1) * 78}px) rotate(${(i - 1) * 7}deg)`
              : `translateY(${(2 - i) * -8}px) scale(${1 - (2 - i) * 0.04})`,
            transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
          }}
        >
          <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
            {card.sub}
          </span>
          <span className="text-white text-lg font-bold">{card.label}</span>
        </div>
      ))}
    </div>
  );
}
