"use client";

export default function FoldCard() {
  return (
    <div className="w-[280px] h-[180px] group" style={{ perspective: "1000px" }}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 flex items-center justify-center px-8 text-center">
          <p className="text-white font-semibold text-sm">Unfolded and revealed.</p>
        </div>

        <div
          className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-zinc-900 border border-b-0 border-zinc-800 origin-bottom transition-transform duration-500 ease-out flex items-start justify-center pt-6 group-hover:[transform:rotateX(-115deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="text-white font-semibold text-sm">Fold Card</p>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl bg-zinc-900 border border-t-0 border-zinc-800 origin-top transition-transform delay-100 duration-500 ease-out flex items-end justify-center pb-6 group-hover:[transform:rotateX(115deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="text-zinc-500 text-xs">Hover to open</p>
        </div>
      </div>
    </div>
  );
}