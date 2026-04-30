"use client";

import { useEffect, useState } from "react";

const phrases = ["Hello, World!", "Split Text Effect", "Character by Character"];

function SplitPhrase({ phrase, triggerDelay }: { phrase: string; triggerDelay: number }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), triggerDelay + 400);
    return () => clearTimeout(t);
  }, [triggerDelay]);

  return (
    <div className="flex overflow-hidden">
      {phrase.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block text-2xl font-bold text-white"
          style={{
            transition: `transform 0.5s cubic-bezier(.23,1,.32,1) ${i * 40}ms, opacity 0.5s ease ${i * 40}ms`,
            transform: active ? "translateY(0)" : "translateY(110%)",
            opacity: active ? 1 : 0,
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default function SplitText() {
  return (
    <div className="flex flex-col gap-6 items-center p-8">
      {phrases.map((phrase, i) => (
        <SplitPhrase key={phrase} phrase={phrase} triggerDelay={i * 600} />
      ))}
    </div>
  );
}