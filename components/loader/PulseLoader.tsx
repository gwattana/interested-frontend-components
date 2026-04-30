const variants = [
  { color: "#6366f1" },
  { color: "#8b5cf6" },
  { color: "#06b6d4" },
];

export default function PulseLoader() {
  return (
    <div className="flex gap-12 items-center">
      {variants.map(({ color }, vi) => (
        <div key={vi} className="relative w-16 h-16 flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                background: color,
                animation: `pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) ${i * 0.55}s infinite`,
              }}
            />
          ))}
          <span className="relative w-3 h-3 rounded-full" style={{ background: color }} />
        </div>
      ))}
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.9; }
          100% { transform: scale(4.5); opacity: 0;   }
        }
      `}</style>
    </div>
  );
}