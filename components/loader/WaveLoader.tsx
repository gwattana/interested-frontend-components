"use client";

const VARIANTS = [
  { color: "#7928ca", label: "Purple" },
  { color: "#0070f3", label: "Blue" },
  { color: "#00dfd8", label: "Cyan" },
];

export default function WaveLoader() {
  return (
    <div className="flex items-end gap-10">
      {VARIANTS.map(({ color, label }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <div className="flex items-end gap-[5px]" style={{ height: 44 }}>
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                style={{
                  width: 7,
                  height: 44,
                  background: color,
                  borderRadius: 4,
                  transformOrigin: "bottom",
                  animation: "wave-bar 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>
          <span className="text-zinc-500 text-xs">{label}</span>
        </div>
      ))}
    </div>
  );
}