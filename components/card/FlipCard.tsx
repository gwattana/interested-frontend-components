export default function FlipCard() {
  return (
    <div className="w-[280px] h-[180px] [perspective:1000px] group">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-zinc-700 flex flex-col items-center justify-center gap-2 [backface-visibility:hidden]">
          <span className="text-3xl">🃏</span>
          <p className="text-white font-semibold">Hover to flip</p>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-indigo-950 border border-indigo-700 flex flex-col items-center justify-center gap-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-3xl">✨</span>
          <p className="text-indigo-200 font-semibold">Back side!</p>
        </div>
      </div>
    </div>
  );
}
