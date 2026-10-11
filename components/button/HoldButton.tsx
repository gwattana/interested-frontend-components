"use client";

import { useRef, useState } from "react";

const variants = [
  { label: "Hold to delete", done: "Deleted", color: "#f43f5e", duration: 1500 },
  { label: "Hold to confirm", done: "Confirmed", color: "#22c55e", duration: 1000 },
];

function Hold({ label, done, color, duration }: (typeof variants)[number]) {
  const [holding, setHolding] = useState(false);
  const [complete, setComplete] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const start = () => {
    if (complete) return;
    setHolding(true);
    timer.current = setTimeout(() => {
      setComplete(true);
      setHolding(false);
      setTimeout(() => setComplete(false), 1500);
    }, duration);
  };

  const cancel = () => {
    clearTimeout(timer.current);
    setHolding(false);
  };

  return (
    <button
      onPointerDown={start}
      onPointerUp={cancel}
      onPointerLeave={cancel}
      className="relative w-48 py-3 rounded-xl overflow-hidden border font-semibold text-sm select-none touch-none transition-transform active:scale-[0.97]"
      style={{ borderColor: color, color: complete ? "#fff" : color }}
    >
      <span
        className="absolute inset-y-0 left-0"
        style={{
          background: color,
          width: holding || complete ? "100%" : "0%",
          transition: holding ? `width ${duration}ms linear` : "width 300ms ease-out",
        }}
      />
      <span className="relative z-10" style={{ color: holding || complete ? "#fff" : undefined }}>
        {complete ? done : label}
      </span>
    </button>
  );
}

export default function HoldButton() {
  return (
    <div className="flex flex-col items-center gap-6">
      {variants.map((v) => (
        <Hold key={v.label} {...v} />
      ))}
    </div>
  );
}
