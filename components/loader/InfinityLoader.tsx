const variants = [
  { color: "#818cf8", speed: 1.6 },
  { color: "#f472b6", speed: 1.1 },
];

const PATH = "M25 20c-6-8-18-8-18 0s12 8 18 0 18-8 18 0-12 8-18 0z";

export default function InfinityLoader() {
  return (
    <div className="flex items-center gap-10">
      {variants.map(({ color, speed }) => (
        <svg key={color} width="100" height="60" viewBox="0 0 50 40" fill="none">
          <path d={PATH} stroke={color} strokeOpacity="0.15" strokeWidth="3" />
          <path
            d={PATH}
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="25 75"
            style={{ animation: `infinity-trace ${speed}s linear infinite` }}
          />
        </svg>
      ))}
    </div>
  );
}
