const lines = [
  { before: "Ship ", mark: "faster", after: " than ever.", color: "#facc15" },
  { before: "Design with ", mark: "intent", after: ".", color: "#f472b6" },
  { before: "Build ", mark: "delightful", after: " things.", color: "#4ade80" },
];

export default function HighlightText() {
  return (
    <div className="flex flex-col gap-6 items-center">
      {lines.map(({ before, mark, after, color }, i) => (
        <p key={mark} className="text-2xl font-bold text-zinc-100">
          {before}
          <span className="relative inline-block px-1">
            <span
              className="absolute inset-x-0 bottom-1 h-[45%] rounded-sm"
              style={{
                background: color,
                opacity: 0.45,
                animation: "highlight-sweep 3s ease-in-out infinite",
                animationDelay: `${i * 0.4}s`,
              }}
            />
            <span className="relative">{mark}</span>
          </span>
          {after}
        </p>
      ))}
    </div>
  );
}
