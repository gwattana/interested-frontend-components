export type ComponentMeta = {
  name: string;
  slug: string;
  category: string;
  description: string;
  file: string;
  tags?: string[];
};

export const registry: ComponentMeta[] = [
  // card
  {
    name: "Parallax Card",
    slug: "parallax-card",
    category: "card",
    description: "A 3D card that tilts and glares in response to mouse movement.",
    file: "components/card/PallalaxCard.tsx",
    tags: ["3d", "mouse", "animation"],
  },
  {
    name: "Flip Card",
    slug: "flip-card",
    category: "card",
    description: "A card that flips 180° on hover to reveal a back face.",
    file: "components/card/FlipCard.tsx",
    tags: ["3d", "hover", "css"],
  },

  // button
  {
    name: "Glow Button",
    slug: "glow-button",
    category: "button",
    description: "Buttons with an animated pulsing gradient glow behind them.",
    file: "components/button/GlowButton.tsx",
    tags: ["gradient", "glow", "animation"],
  },
  {
    name: "Ripple Button",
    slug: "ripple-button",
    category: "button",
    description: "Material-style button that spawns a ripple effect on click.",
    file: "components/button/RippleButton.tsx",
    tags: ["click", "ripple", "interaction"],
  },

  // animation
  {
    name: "Text Shimmer",
    slug: "text-shimmer",
    category: "animation",
    description: "Gradient text with a moving shimmer sweep across it.",
    file: "components/animation/TextShimmer.tsx",
    tags: ["text", "gradient", "loop"],
  },
  {
    name: "Count Up",
    slug: "count-up",
    category: "animation",
    description: "Numbers that animate upward from zero with an ease-out curve.",
    file: "components/animation/CountUp.tsx",
    tags: ["number", "counter", "easing"],
  },
];
