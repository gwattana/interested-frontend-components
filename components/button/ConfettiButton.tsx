"use client";

import { useCallback, useRef } from "react";

const COLORS = [
  "#ff0080", "#7928ca", "#0070f3", "#00dfd8",
  "#38ef7d", "#ffd700", "#ff6b35",
];

export default function ConfettiButton() {
  const containerRef = useRef<HTMLDivElement>(null);

  const launch = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 32; i++) {
      const el = document.createElement("div");
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const angle = Math.random() * 2 * Math.PI;
      const speed = 60 + Math.random() * 110;
      const tx = Math.cos(angle) * speed;
      const ty = -(60 + Math.abs(Math.sin(angle)) * speed);
      const size = 5 + Math.random() * 7;

      Object.assign(el.style, {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
        background: color,
        transform: "translate(-50%, -50%) rotate(0deg)",
        pointerEvents: "none",
        transition: "transform 0.9s ease-out, opacity 0.9s ease",
        opacity: "1",
      });

      container.appendChild(el);

      // Double rAF ensures start state is painted before transition begins
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) rotate(${Math.random() * 540}deg)`;
          el.style.opacity = "0";
        });
      });

      setTimeout(() => {
        if (container.contains(el)) container.removeChild(el);
      }, 1000);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div ref={containerRef} className="relative">
        <button
          onClick={launch}
          className="relative px-8 py-3 rounded-full text-white font-semibold cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #7928ca, #ff0080)",
            boxShadow: "0 4px 24px rgba(121,40,202,0.5)",
          }}
        >
          Click for confetti
        </button>
      </div>
      <p className="text-zinc-600 text-sm">click to pop</p>
    </div>
  );
}