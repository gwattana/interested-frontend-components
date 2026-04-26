"use client";

import { useEffect, useState } from "react";

const WORDS = ["Creative", "Dynamic", "Elegant", "Modern", "Inspired"];

export default function MorphingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="text-zinc-500 text-lg">We build</p>
      <span
        className="text-5xl font-extrabold inline-block"
        style={{
          backgroundImage: "linear-gradient(135deg, #c084fc, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: visible ? 1 : 0,
          filter: visible ? "blur(0px)" : "blur(10px)",
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.4s ease, filter 0.4s ease, transform 0.4s ease",
        }}
      >
        {WORDS[index]}
      </span>
      <p className="text-zinc-500 text-lg">products</p>
    </div>
  );
}