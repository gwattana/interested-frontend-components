import { notFound } from "next/navigation";
import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { registry } from "@/lib/registry";
import CodeBlock from "@/components/ui/CodeBlock";
import ParallaxCard from "@/components/card/PallalaxCard";
import FlipCard from "@/components/card/FlipCard";
import GlowButton from "@/components/button/GlowButton";
import RippleButton from "@/components/button/RippleButton";
import TextShimmer from "@/components/animation/TextShimmer";
import CountUp from "@/components/animation/CountUp";
import type { ComponentType } from "react";

const componentMap: Record<string, ComponentType> = {
  "card/parallax-card": ParallaxCard,
  "card/flip-card": FlipCard,
  "button/glow-button": GlowButton,
  "button/ripple-button": RippleButton,
  "animation/text-shimmer": TextShimmer,
  "animation/count-up": CountUp,
};

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
