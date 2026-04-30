const presets = [
  {
    text: "Beautiful",
    gradient:
      "linear-gradient(90deg, #f43f5e, #f97316, #facc15, #4ade80, #22d3ee, #818cf8, #f43f5e)",
  },
  {
    text: "Interfaces",
    gradient: "linear-gradient(90deg, #818cf8, #c084fc, #f472b6, #818cf8)",
  },
  {
    text: "For Everyone",
    gradient: "linear-gradient(90deg, #22d3ee, #34d399, #a3e635, #22d3ee)",
  },
];

export default function GradientText() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {presets.map(({ text, gradient }) => (
        <span
          key={text}
          style={{
            background: gradient,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite",
          }}
          className="text-5xl font-black"
        >
          {text}
        </span>
      ))}
    </div>
  );
}