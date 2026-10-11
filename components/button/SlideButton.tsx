const variants = [
  { label: "Get started", color: "#8b5cf6" },
  { label: "Learn more", color: "#0ea5e9" },
  { label: "Continue", color: "#f59e0b" },
];

export default function SlideButton() {
  return (
    <div className="flex flex-col items-center gap-6">
      {variants.map(({ label, color }) => (
        <button
          key={label}
          className="group relative w-48 py-3 rounded-full overflow-hidden border-2 font-semibold text-sm"
          style={{ borderColor: color, color }}
        >
          <span
            className="absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
            style={{ background: color }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
            {label}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </button>
      ))}
    </div>
  );
}
