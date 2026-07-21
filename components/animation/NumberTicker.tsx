"use client";

import { useEffect, useRef, useState } from "react";

const DIGITS = "0123456789";

function useTickerValue(target: number, duration = 1800) {
  const [display, setDisplay] = useState("000000");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const targetStr = String(target).padStart(6, "0");
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const chars = targetStr.split("").map((ch, i) => {
        if (progress >= (i + 1) / targetStr.length) return ch;
        return DIGITS[Math.floor(Math.random() * 10)];
      });

      setDisplay(chars.join(""));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return display;
}

function Ticker({ label, target, color }: { label: string; target: number; color: string }) {
  const display = useTickerValue(target);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-1">
        {display.split("").map((ch, i) => (
          <div
            key={i}
            className="w-9 h-12 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-xl font-bold"
            style={{ color, textShadow: `0 0 10px ${color}` }}
          >
            {ch}
          </div>
        ))}
      </div>
      <p className="text-zinc-500 text-xs tracking-widest uppercase">{label}</p>
    </div>
  );
}

export default function NumberTicker() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col items-center gap-8">
      <div key={key} className="flex flex-col gap-6">
        <Ticker label="Score"    target={924857} color="#a78bfa" />
        <Ticker label="Stars"    target={138204} color="#34d399" />
      </div>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="text-xs text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 px-4 py-1.5 rounded-lg transition-colors"
      >
        Replay
      </button>
    </div>
  );
}