"use client";

export default function NeonButton() {
  const variants = [
    { label: "EXECUTE", color: "#00fff5", shadow: "0 0 8px #00fff5, 0 0 20px #00fff5, 0 0 40px #00fff580", border: "#00fff5" },
    { label: "ENGAGE",  color: "#ff00ea", shadow: "0 0 8px #ff00ea, 0 0 20px #ff00ea, 0 0 40px #ff00ea80", border: "#ff00ea" },
    { label: "LAUNCH",  color: "#39ff14", shadow: "0 0 8px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff1480", border: "#39ff14" },
  ];

  return (
    <div className="flex flex-col items-center gap-5">
      {variants.map(({ label, color, shadow, border }) => (
        <button
          key={label}
          className="group relative px-10 py-3 bg-black font-mono text-sm font-bold tracking-[0.25em] uppercase overflow-hidden transition-all duration-300"
          style={{
            color,
            border: `1px solid ${border}`,
            boxShadow: `inset 0 0 0px transparent`,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.boxShadow = shadow;
            el.style.textShadow = shadow;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.boxShadow = "inset 0 0 0px transparent";
            el.style.textShadow = "none";
          }}
        >
          {/* Scan line sweep on hover */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${color}18 50%, transparent 100%)`,
              animation: "scan 1.2s linear infinite",
            }}
          />
          <span className="relative z-10">{label}</span>
        </button>
      ))}
      <style>{`
        @keyframes scan {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
