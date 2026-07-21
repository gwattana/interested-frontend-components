"use client";

export default function StarBorder() {
  return (
    <div className="flex flex-col items-center gap-6">
      {["violet", "cyan", "amber"].map((color) => {
        const palette: Record<string, { from: string; to: string; glow: string; text: string }> = {
          violet: { from: "#8b5cf6", to: "#6366f1", glow: "rgba(139,92,246,0.5)", text: "Violet Star" },
          cyan:   { from: "#06b6d4", to: "#0ea5e9", glow: "rgba(6,182,212,0.5)",   text: "Cyan Star" },
          amber:  { from: "#f59e0b", to: "#f97316", glow: "rgba(245,158,11,0.5)",  text: "Amber Star" },
        };
        const { from, to, glow, text } = palette[color];
        return (
          <div key={color} className="relative w-64 rounded-2xl p-px overflow-hidden" style={{ background: "rgb(24,24,27)" }}>
            {/* Rotating star/comet on border */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `conic-gradient(from 0deg, transparent 0%, transparent 85%, ${from} 92%, ${to} 95%, ${from} 97%, transparent 100%)`,
                animation: `spin ${2 + ["violet","cyan","amber"].indexOf(color) * 0.4}s linear infinite`,
              }}
            />
            <div className="relative rounded-[calc(1rem-1px)] bg-zinc-950 px-5 py-4 flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${glow}`, boxShadow: `0 0 12px ${glow}` }}
              >
                <span className="text-white text-sm font-bold">✦</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{text} Border</p>
                <p className="text-zinc-500 text-xs mt-0.5">Rotating comet trace</p>
              </div>
            </div>
          </div>
        );
      })}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}