"use client";

import { useEffect, useState } from "react";

const phrases = [
  "React Developer.",
  "UI Explorer.",
  "Code Collector.",
  "Component Builder.",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const phrase = phrases[phraseIdx];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = phrase.slice(0, text.length + 1);
        setText(next);
        if (next === phrase) {
          setPaused(true);
          setTimeout(() => { setPaused(false); setDeleting(true); }, 1400);
        }
      } else {
        const next = phrase.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx, paused]);

  return (
    <div className="text-center">
      <p className="text-zinc-500 text-sm mb-3 uppercase tracking-widest">I am a</p>
      <h2 className="text-3xl font-bold text-white min-h-[2.5rem]">
        {text}
        <span className="text-indigo-400 animate-pulse ml-0.5">|</span>
      </h2>
    </div>
  );
}
