"use client";

export default function BounceLoader() {
  const variants = [
    {
      label: "Elastic",
      balls: ["#a78bfa", "#818cf8", "#60a5fa"],
      keyframe: "bounce-elastic",
      css: `@keyframes bounce-elastic {
        0%,100% { transform: translateY(0) scaleY(1); animation-timing-function: cubic-bezier(0.33,0,0.66,0); }
        45%      { transform: translateY(-36px) scaleY(1.1); animation-timing-function: cubic-bezier(0.33,1,0.66,1); }
        60%      { transform: translateY(0) scaleY(0.85); }
        75%      { transform: translateY(-14px) scaleY(1.05); }
        90%      { transform: translateY(0) scaleY(0.95); }
      }`,
    },
    {
      label: "Wave",
      balls: ["#34d399", "#10b981", "#059669"],
      keyframe: "bounce-wave",
      css: `@keyframes bounce-wave {
        0%,100% { transform: translateY(0); animation-timing-function: ease-in; }
        50%      { transform: translateY(-32px); animation-timing-function: ease-out; }
      }`,
    },
    {
      label: "Pulse",
      balls: ["#f472b6", "#ec4899", "#db2777"],
      keyframe: "bounce-pulse",
      css: `@keyframes bounce-pulse {
        0%,100% { transform: translateY(0) scale(1); }
        50%      { transform: translateY(-28px) scale(1.2); }
      }`,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10">
      {variants.map(({ label, balls, keyframe, css }) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <div className="flex items-end gap-3 h-16">
            {balls.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full"
                style={{
                  background: color,
                  boxShadow: `0 0 10px ${color}80`,
                  animation: `${keyframe} 0.9s ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
          <span className="text-zinc-500 text-xs tracking-widest uppercase">{label}</span>
          <style>{css}</style>
        </div>
      ))}
    </div>
  );
}