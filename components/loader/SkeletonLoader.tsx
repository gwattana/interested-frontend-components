"use client";

function Bone({ className }: { className: string }) {
  return (
    <div
      className={`rounded-lg bg-zinc-800 ${className}`}
      style={{ animation: "skeleton-pulse 1.6s ease-in-out infinite" }}
    />
  );
}

export default function SkeletonLoader() {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      {/* Profile row */}
      <div className="flex items-center gap-3">
        <Bone className="w-11 h-11 rounded-full flex-shrink-0" />
        <div className="flex-1 flex flex-col gap-2">
          <Bone className="h-3 w-2/5" />
          <Bone className="h-3 w-3/5" />
        </div>
      </div>
      {/* Image placeholder */}
      <Bone className="h-36 w-full rounded-xl" />
      {/* Text lines */}
      <div className="flex flex-col gap-2">
        <Bone className="h-3 w-full" />
        <Bone className="h-3 w-11/12" />
        <Bone className="h-3 w-2/3" />
      </div>
      {/* Action row */}
      <div className="flex gap-3">
        <Bone className="h-8 w-24 rounded-full" />
        <Bone className="h-8 w-16 rounded-full" />
      </div>
    </div>
  );
}
