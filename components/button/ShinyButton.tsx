"use client";

const BUTTONS = [
  { label: "Get started", from: "#7928ca", to: "#ff0080" },
  { label: "Learn more",  from: "#0070f3", to: "#00dfd8" },
  { label: "View demos",  from: "#38ef7d", to: "#0070f3" },
];

export default function ShinyButton() {
  return (
    <div className="flex flex-col gap-4">
      {BUTTONS.map(({ label, from, to }) => (
        <button
          key={label}
          className="group relative overflow-hidden px-10 py-3 rounded-xl text-white font-semibold text-sm"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
            }}
          />
          {label}
        </button>
      ))}
    </div>
  );
}
