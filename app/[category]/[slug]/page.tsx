import { notFound } from "next/navigation";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { registry } from "@/lib/registry";
import CodeBlock from "@/components/ui/CodeBlock";
import ParallaxCard from "@/components/card/PallalaxCard";
import FlipCard from "@/components/card/FlipCard";
import SpotlightCard from "@/components/card/SpotlightCard";
import NeonCard from "@/components/card/NeonCard";
import GlassCard from "@/components/card/GlassCard";
import GlowButton from "@/components/button/GlowButton";
import RippleButton from "@/components/button/RippleButton";
import MagneticButton from "@/components/button/MagneticButton";
import ConfettiButton from "@/components/button/ConfettiButton";
import TextShimmer from "@/components/animation/TextShimmer";
import CountUp from "@/components/animation/CountUp";
import Typewriter from "@/components/animation/Typewriter";
import Aurora from "@/components/animation/Aurora";
import ScrambleText from "@/components/animation/ScrambleText";
import MorphingText from "@/components/animation/MorphingText";
import DotsLoader from "@/components/loader/DotsLoader";
import RingLoader from "@/components/loader/RingLoader";
import WaveLoader from "@/components/loader/WaveLoader";
import TiltCard from "@/components/card/TiltCard";
import HolographicCard from "@/components/card/HolographicCard";
import LiquidButton from "@/components/button/LiquidButton";
import GlitchButton from "@/components/button/GlitchButton";
import BlurFade from "@/components/animation/BlurFade";
import GradientText from "@/components/animation/GradientText";
import SplitText from "@/components/animation/SplitText";
import PulseLoader from "@/components/loader/PulseLoader";
import OrbitLoader from "@/components/loader/OrbitLoader";
import type { ComponentType } from "react";

const componentMap: Record<string, ComponentType> = {
  "card/parallax-card": ParallaxCard,
  "card/flip-card": FlipCard,
  "card/spotlight-card": SpotlightCard,
  "card/neon-card": NeonCard,
  "card/glass-card": GlassCard,
  "button/glow-button": GlowButton,
  "button/ripple-button": RippleButton,
  "button/magnetic-button": MagneticButton,
  "button/confetti-button": ConfettiButton,
  "animation/text-shimmer": TextShimmer,
  "animation/count-up": CountUp,
  "animation/typewriter": Typewriter,
  "animation/aurora": Aurora,
  "animation/scramble-text": ScrambleText,
  "animation/morphing-text": MorphingText,
  "loader/dots-loader": DotsLoader,
  "loader/ring-loader": RingLoader,
  "loader/wave-loader": WaveLoader,
  "card/tilt-card": TiltCard,
  "card/holographic-card": HolographicCard,
  "button/liquid-button": LiquidButton,
  "button/glitch-button": GlitchButton,
  "animation/blur-fade": BlurFade,
  "animation/gradient-text": GradientText,
  "animation/split-text": SplitText,
  "loader/pulse-loader": PulseLoader,
  "loader/orbit-loader": OrbitLoader,
};

export async function generateStaticParams() {
  return registry.map((entry) => ({
    category: entry.category,
    slug: entry.slug,
  }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const entry = registry.find((e) => e.category === category && e.slug === slug);
  if (!entry) notFound();

  const Component = componentMap[`${category}/${slug}`];
  if (!Component) notFound();

  const code = await readFile(
    path.join(/* turbopackIgnore: true */ process.cwd(), entry.file),
    "utf-8"
  );

  return (
    <main className="min-h-screen bg-black pt-14">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-zinc-500 hover:text-white text-sm transition-colors mb-10 inline-block"
        >
          ← Back
        </Link>

        <div className="mb-10">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider bg-zinc-900 px-2 py-1 rounded">
            {entry.category}
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 mb-3">{entry.name}</h1>
          <p className="text-zinc-400 text-lg">{entry.description}</p>

          {entry.tags && (
            <div className="flex flex-wrap gap-1 mt-4">
              {entry.tags.map((tag) => (
                <span key={tag} className="text-xs text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center min-h-80 rounded-2xl border border-zinc-800 bg-zinc-950 mb-8">
          <Component />
        </div>

        <CodeBlock code={code} />
      </div>
    </main>
  );
}
