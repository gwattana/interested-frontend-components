"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

function Stat({ target, label, duration }: { target: number; label: string; duration?: number }) {
  const value = useCountUp(target, duration);
  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-white tabular-nums">{value.toLocaleString()}</p>
      <p className="text-zinc-500 mt-1 text-sm">{label}</p>
    </div>
  );
}

export default function CountUp() {
  return (
    <div className="flex gap-12 flex-wrap justify-center">
      <Stat target={12847} label="Users" duration={2000} />
      <Stat target={3291} label="Components" duration={2400} />
      <Stat target={99} label="Satisfaction %" duration={1600} />
    </div>
  );
}
