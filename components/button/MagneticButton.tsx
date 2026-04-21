"use client";

import { useRef } from "react";

export default function MagneticButton() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    btnRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    btnRef.current!.style.transform = "translate(0, 0)";
  };

  return (
    <div
      className="flex items-center justify-center w-40 h-20"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <button
        ref={btnRef}
        className="px-7 py-3 rounded-xl bg-white text-black font-semibold transition-transform duration-200 ease-out hover:scale-105"
      >
        Hover me
      </button>
    </div>
  );
}
