"use client";

const colors = ["#f472b6", "#38bdf8", "#facc15"];

export default function OutlineButton() {
  return (
    <div className="flex flex-col items-center gap-6">
      {colors.map((color) => (
        <button
          key={color}
          className="group relative px-10 py-3 bg-transparent font-semibold text-sm"
          style={{ color }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
          >
            <rect
              x="1"
              y="1"
              width="98"
              height="38"
              rx="8"
              fill="none"
              stroke={color}
              strokeWidth="2"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100}
              className="transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0]"
            />
          </svg>
          <span className="relative z-10">Explore</span>
        </button>
      ))}
    </div>
  );
}