const variants = [
  { center: "#6366f1", dots: "#818cf8" },
  { center: "#f43f5e", dots: "#fb7185" },
  { center: "#10b981", dots: "#34d399" },
];

export default function OrbitLoader() {
  return (
    <div className="flex gap-12 items-center">
      {variants.map(({ center, dots }, vi) => (
        <div key={vi} className="relative w-16 h-16 flex items-center justify-center">
          <span className="relative z-10 w-3 h-3 rounded-full" style={{ background: center }} />
          {[0, 1, 2].map((i) => {
            const size = 40 + i * 25;
            return (
              <span
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${size}%`,
                  height: `${size}%`,
                  top: `${(100 - size) / 2}%`,
                  left: `${(100 - size) / 2}%`,
                  animation: `orbit ${1.2 + i * 0.4}s linear infinite`,
                }}
              >
                <span
                  className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: dots,
                    opacity: 1 - i * 0.2,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </span>
            );
          })}
        </div>
      ))}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}