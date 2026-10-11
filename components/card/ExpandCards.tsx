"use client";

const panels = [
  { title: "Aurora", from: "#6366f1", to: "#a855f7" },
  { title: "Ember", from: "#f97316", to: "#e11d48" },
  { title: "Lagoon", from: "#06b6d4", to: "#10b981" },
  { title: "Dusk", from: "#f59e0b", to: "#db2777" },
];

export default function ExpandCards() {
  return (
    <div className="group/row flex w-[340px] h-[200px] gap-2">
      {panels.map(({ title, from, to }) => (
        <div
          key={title}
          className="group relative flex-1 rounded-2xl overflow-hidden cursor-pointer transition-[flex-grow] duration-500 ease-out hover:flex-[4]"
          style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
        >
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-sm whitespace-nowrap opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-200">
            {title}
          </p>
        </div>
      ))}
    </div>
  );
}
