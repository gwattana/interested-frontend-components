export default function GlowButton() {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-center">
      <div className="relative inline-flex">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 blur opacity-70 animate-pulse" />
        <button className="relative px-8 py-3 rounded-xl bg-zinc-950 text-white font-medium hover:bg-zinc-900 transition-colors">
          Violet Glow
        </button>
      </div>

      <div className="relative inline-flex">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 blur opacity-70 animate-pulse" />
        <button className="relative px-8 py-3 rounded-xl bg-zinc-950 text-white font-medium hover:bg-zinc-900 transition-colors">
          Warm Glow
        </button>
      </div>

      <div className="relative inline-flex">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 blur opacity-70 animate-pulse" />
        <button className="relative px-8 py-3 rounded-xl bg-zinc-950 text-white font-medium hover:bg-zinc-900 transition-colors">
          Cool Glow
        </button>
      </div>
    </div>
  );
}
