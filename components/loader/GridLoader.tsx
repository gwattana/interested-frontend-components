const cells = Array.from({ length: 9 });

export default function GridLoader() {
  return (
    <div className="flex items-center gap-10">
      <div className="grid grid-cols-3 gap-1.5">
        {cells.map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-sm bg-indigo-400"
            style={{ animation: "grid-pulse 1.3s ease-in-out infinite", animationDelay: `${(i % 3) * 0.1 + Math.floor(i / 3) * 0.1}s` }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {cells.map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-sm bg-emerald-400"
            style={{ animation: "grid-pulse 1s ease-in-out infinite", animationDelay: `${((i % 3) + Math.floor(i / 3)) * 0.08}s` }}
          />
        ))}
      </div>
    </div>
  );
}