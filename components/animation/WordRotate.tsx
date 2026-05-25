"use client";

import { useEffect, useState } from "react";

const WORDS = ["beautiful", "blazing-fast", "accessible", "modern"];

export default function WordRotate() {
  const [{ word, key }, setWord] = useState({ word: WORDS[0], key: 0 });
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        i = (i + 1) % WORDS.length;
        setWord({ word: WORDS[i], key: i });
        setExiting(false);
      }, 300);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center">
      <p className="text-zinc-400 text-lg mb-1">Build something</p>
      <div className="overflow-hidden h-14 flex items-center justify-center">
        <span
          key={key}
          className="text-4xl font-extrabold inline-block"
          style={{
            backgroundImage: "linear-gradient(135deg, #c084fc, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transform: exiting ? "translateY(-40px)" : "translateY(0)",
            opacity: exiting ? 0 : 1,
            transition: exiting ? "transform 0.3s ease, opacity 0.3s ease" : "none",
            animation: !exiting ? "word-enter 0.3s ease forwards" : "none",
          }}
        >
          {word}
        </span>
      </div>
    </div>
  );
}
