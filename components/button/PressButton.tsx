"use client";

const variants = [
  { label: "Confirm", from: "#6366f1", to: "#4338ca" },
  { label: "Delete", from: "#f43f5e", to: "#be123c" },
  { label: "Save", from: "#10b981", to: "#047857" },
];

export default function PressButton() {
  return (
    <div className="flex flex-col items-center gap-6">
      {variants.map(({ label, from, to }) => (
        <button
          key={label}
          className="relative px-8 py-3 rounded-xl text-white font-semibold text-sm transition-transform duration-100 ease-out active:translate-y-1"
          style={{
            background: `linear-gradient(180deg, ${from}, ${to})`,
            boxShadow: `0 6px 0 ${to}, 0 8px 14px rgba(0,0,0,0.35)`,
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = `0 2px 0 ${to}, 0 3px 8px rgba(0,0,0,0.35)`;
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = `0 6px 0 ${to}, 0 8px 14px rgba(0,0,0,0.35)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 6px 0 ${to}, 0 8px 14px rgba(0,0,0,0.35)`;
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}