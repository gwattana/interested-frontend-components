"use client";

export default function NeonCard() {
  return (
    <div
      className="relative w-[300px] rounded-2xl overflow-hidden"
      style={{
        padding: "2px",
        boxShadow: "0 0 40px rgba(121,40,202,0.35)",
      }}
    >
      {/* Rotating conic-gradient visible as 2px border through overflow:hidden */}
      <div
        className="pointer-events-none absolute"
        style={{
          inset: "-50%",
          width: "200%",
          height: "200%",
          background:
            "conic-gradient(from 0deg, #ff0080, #7928ca, #0070f3, #00dfd8, #38ef7d, #ff0080)",
          animation: "neon-spin 3s linear infinite",
        }}
      />
      <div
        className="relative flex flex-col gap-3 p-8"
        style={{
          background: "rgb(9,9,11)",
          borderRadius: "calc(1rem - 2px)",
        }}
      >
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
          Component
        </span>
        <h3 className="text-white text-xl font-bold">Neon Card</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          A rotating conic-gradient clipped to a 2 px border, creating a
          vivid animated neon glow.
        </p>
        <div className="flex gap-2 mt-1">
          {["CSS", "Neon", "Border"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs bg-zinc-800 text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}