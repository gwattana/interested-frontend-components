const phrases = [
  { text: "Ride the wave", color: "#38bdf8" },
  { text: "Keep it flowing", color: "#a78bfa" },
];

export default function WaveText() {
  return (
    <div className="flex flex-col gap-8 items-center">
      {phrases.map(({ text, color }) => (
        <p key={text} className="flex text-3xl font-bold">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                color,
                animation: "wave-letter 1.2s ease-in-out infinite",
                animationDelay: `${i * 0.06}s`,
                whiteSpace: char === " " ? "pre" : undefined,
              }}
            >
              {char}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}