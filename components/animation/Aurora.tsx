export default function Aurora() {
  return (
    <div className="relative w-[320px] h-[220px] rounded-2xl overflow-hidden bg-zinc-950 flex items-center justify-center">
      <div className="absolute inset-0">
        <div
          className="absolute top-[5%] left-[5%] w-[50%] h-[60%] rounded-full bg-violet-600/70 blur-2xl"
          style={{ animation: "aurora-blob1 4s ease-in-out infinite" }}
        />
        <div
          className="absolute top-[15%] right-[5%] w-[45%] h-[55%] rounded-full bg-indigo-500/60 blur-2xl"
          style={{ animation: "aurora-blob2 5s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[5%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-500/50 blur-2xl"
          style={{ animation: "aurora-blob3 6s ease-in-out infinite" }}
        />
      </div>
      <p className="relative text-white font-bold text-2xl tracking-tight">Aurora</p>
    </div>
  );
}
