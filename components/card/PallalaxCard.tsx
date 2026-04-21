"use client";

import { useRef } from "react";

export default function ParallaxCard() {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        const rect = cardRef.current!.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        cardRef.current!.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

        // optional: glare effect
        const glare = cardRef.current!.querySelector(
            ".glare"
        ) as HTMLDivElement;

        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        glare.style.background = `
      radial-gradient(circle at ${glareX}% ${glareY}%,
      rgba(255,255,255,0.25),
      transparent)
    `;
    };

    const reset = () => {
        cardRef.current!.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <div
            className="w-[320px] h-[200px] [perspective:1000px]"
            onMouseMove={handleMove}
            onMouseLeave={reset}
        >
            <div
                ref={cardRef}
                className="relative w-full h-full rounded-2xl bg-zinc-900 text-white flex items-center justify-center transition-transform duration-150 [transform-style:preserve-3d]"
            >
                {/* glare layer */}
                <div className="glare absolute inset-0 rounded-2xl pointer-events-none" />

                {/* content (depth) */}
                <h2 className="[transform:translateZ(60px)] text-xl font-semibold">
                    Parallax Card
                </h2>
            </div>
        </div>
    );
}