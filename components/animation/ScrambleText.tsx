"use client";

import { useCallback, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
const ORIGINAL = "HOVER TO SCRAMBLE";

export default function ScrambleText() {
  const [display, setDisplay] = useState(ORIGINAL);

  const scramble = useCallback(() => {
    let frame = 0;
    const totalFrames = ORIGINAL.length * 3;

    const id = setInterval(() => {
      setDisplay(
        ORIGINAL.split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor(frame / 3)) return ORIGINAL[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      frame++;
      if (frame > totalFrames) clearInterval(id);
    }, 30);
  }, []);

  return (
    <div className="text-center">
      <div
        className="cursor-pointer select-none font-mono text-2xl font-bold tracking-widest transition-colors hover:text-purple-400"
        style={{ color: "white" }}
        onMouseEnter={scramble}
      >
        {display}
      </div>
      <p className="text-zinc-600 text-sm mt-3">hover to trigger</p>
    </div>
  );
}