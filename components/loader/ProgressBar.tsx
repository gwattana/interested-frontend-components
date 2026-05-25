"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { label: "Design",      value: 92, color: "from-violet-500 to-purple-600" },
  { label: "Development", value: 67, color: "from-blue-500   to-cyan-500"   },
  { label: "Testing",     value: 38, color: "from-rose-500   to-pink-500"   },
  { label: "Deployment",  value: 15, color: "from-amber-400  to-orange-500" },
];

export default function ProgressBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 w-[280px]">
      {STEPS.map(({ label, value, color }) => (
        <div key={label} className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-zinc-300 text-sm font-medium">{label}</span>
            <span
              className="text-zinc-500 text-sm tabular-nums transition-all duration-1000"
              style={{ opacity: mounted ? 1 : 0 }}
            >
              {mounted ? value : 0}%
            </span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${color}`}
              style={{
                width: mounted ? `${value}%` : "0%",
                transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 0 10px rgba(121,40,202,0.5)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
