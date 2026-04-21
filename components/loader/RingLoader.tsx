export default function RingLoader() {
  return (
    <div className="flex items-center gap-10">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-zinc-800" />
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
          style={{ borderTopColor: "#6366f1", borderRightColor: "#8b5cf6" }}
        />
      </div>

      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-[3px] border-zinc-800" />
        <div
          className="absolute inset-0 rounded-full border-[3px] border-transparent animate-spin"
          style={{
            borderTopColor: "#10b981",
            borderRightColor: "#06b6d4",
            animationDuration: "0.7s",
          }}
        />
      </div>

      <div className="relative w-6 h-6">
        <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
          style={{
            borderTopColor: "#f43f5e",
            borderRightColor: "#fb923c",
            animationDuration: "0.5s",
          }}
        />
      </div>
    </div>
  );
}
