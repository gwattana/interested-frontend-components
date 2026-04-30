"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  "Design systems that scale.",
  "Animations that delight.",
  "Interfaces that inspire.",
];

function BlurFadeItem({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transition: "opacity 0.7s ease, filter 0.7s ease, transform 0.7s ease",
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(10px)",
        transform: visible ? "translateY(0)" : "translateY(14px)",
      }}
      className="text-2xl font-bold text-white"
    >
      {text}
    </p>
  );
}

export default function BlurFade() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {items.map((text, i) => (
        <BlurFadeItem key={text} text={text} delay={i * 200} />
      ))}
    </div>
  );
}