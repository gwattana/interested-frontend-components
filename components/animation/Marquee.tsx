"use client";

const ITEMS = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Framer Motion", "shadcn/ui", "Radix UI", "Three.js",
  "WebGL", "CSS Animations", "Vite", "Turborepo",
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="flex flex-col gap-4 w-[380px] overflow-hidden">
      {/* Forward scroll */}
      <div
        className="flex gap-3 w-max"
        style={{ animation: "marquee 18s linear infinite" }}
      >
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 text-sm font-medium whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
      {/* Reverse scroll */}
      <div
        className="flex gap-3 w-max"
        style={{ animation: "marquee 22s linear infinite reverse" }}
      >
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
