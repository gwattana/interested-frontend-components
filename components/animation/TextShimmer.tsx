export default function TextShimmer() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2
        className="text-5xl font-bold tracking-tight"
        style={{
          background: "linear-gradient(90deg, #52525b 0%, #ffffff 40%, #52525b 80%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shimmer 2.5s linear infinite",
        }}
      >
        Shimmer Text
      </h2>

      <p
        className="text-xl font-medium"
        style={{
          background: "linear-gradient(90deg, #6366f1 0%, #a5b4fc 40%, #6366f1 80%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shimmer 2s linear infinite",
        }}
      >
        Indigo variant
      </p>
    </div>
  );
}
