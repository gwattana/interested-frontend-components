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
  {
    name: "Spotlight Card",
    slug: "spotlight-card",
    category: "card",
    description: "A card with a radial spotlight that follows the mouse cursor.",
    file: "components/card/SpotlightCard.tsx",
    tags: ["mouse", "spotlight", "hover"],
  },
  {
    name: "Neon Card",
    slug: "neon-card",
    category: "card",
    description: "A card with an animated RGB border made from a rotating conic gradient.",
    file: "components/card/NeonCard.tsx",
    tags: ["neon", "border", "gradient", "animation"],
  },
  {
    name: "Glass Card",
    slug: "glass-card",
    category: "card",
    description: "A glassmorphism card with backdrop blur, color orbs, and a cursor shimmer.",
    file: "components/card/GlassCard.tsx",
    tags: ["glass", "blur", "mouse", "gradient"],
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
  {
    name: "Magnetic Button",
    slug: "magnetic-button",
    category: "button",
    description: "A button that elastically moves toward the cursor on hover.",
    file: "components/button/MagneticButton.tsx",
    tags: ["mouse", "magnetic", "physics"],
  },
  {
    name: "Confetti Button",
    slug: "confetti-button",
    category: "button",
    description: "A button that launches a burst of colorful confetti particles on click.",
    file: "components/button/ConfettiButton.tsx",
    tags: ["click", "confetti", "particles", "fun"],
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
  {
    name: "Typewriter",
    slug: "typewriter",
    category: "animation",
    description: "Text that types and erases itself through a list of phrases.",
    file: "components/animation/Typewriter.tsx",
    tags: ["text", "typing", "loop"],
  },
  {
    name: "Aurora",
    slug: "aurora",
    category: "animation",
    description: "Soft animated gradient blobs that drift like an aurora borealis.",
    file: "components/animation/Aurora.tsx",
    tags: ["gradient", "blur", "ambient"],
  },
  {
    name: "Scramble Text",
    slug: "scramble-text",
    category: "animation",
    description: "Characters randomly cycle through glyphs before resolving back to the original text on hover.",
    file: "components/animation/ScrambleText.tsx",
    tags: ["text", "hover", "glitch", "mono"],
  },
  {
    name: "Morphing Text",
    slug: "morphing-text",
    category: "animation",
    description: "Words blur and cross-fade into one another in a looping sequence.",
    file: "components/animation/MorphingText.tsx",
    tags: ["text", "blur", "loop", "gradient"],
  },

  // card (new)
  {
    name: "Tilt Card",
    slug: "tilt-card",
    category: "card",
    description: "A card that tilts in 3D perspective to follow the mouse cursor.",
    file: "components/card/TiltCard.tsx",
    tags: ["3d", "mouse", "tilt", "hover"],
  },
  {
    name: "Holographic Card",
    slug: "holographic-card",
    category: "card",
    description: "A card with a rainbow holographic shimmer that tracks the cursor.",
    file: "components/card/HolographicCard.tsx",
    tags: ["holographic", "rainbow", "mouse", "3d"],
  },

  // button (new)
  {
    name: "Liquid Button",
    slug: "liquid-button",
    category: "button",
    description: "A button where liquid rises from the bottom on hover.",
    file: "components/button/LiquidButton.tsx",
    tags: ["hover", "fill", "liquid", "animation"],
  },
  {
    name: "Glitch Button",
    slug: "glitch-button",
    category: "button",
    description: "A cyberpunk-style button with a color-split glitch effect on hover.",
    file: "components/button/GlitchButton.tsx",
    tags: ["glitch", "hover", "cyberpunk", "mono"],
  },

  // animation (new)
  {
    name: "Blur Fade",
    slug: "blur-fade",
    category: "animation",
    description: "Content blurs and fades in from below when it enters the viewport.",
    file: "components/animation/BlurFade.tsx",
    tags: ["text", "blur", "fade", "scroll"],
  },
  {
    name: "Gradient Text",
    slug: "gradient-text",
    category: "animation",
    description: "Text with a continuously flowing rainbow gradient sweep.",
    file: "components/animation/GradientText.tsx",
    tags: ["text", "gradient", "rainbow", "loop"],
  },
  {
    name: "Split Text",
    slug: "split-text",
    category: "animation",
    description: "Characters slide up staggered one by one to reveal text.",
    file: "components/animation/SplitText.tsx",
    tags: ["text", "stagger", "reveal", "animation"],
  },

  // loader (new)
  {
    name: "Pulse Loader",
    slug: "pulse-loader",
    category: "loader",
    description: "Concentric rings pulse outward from a center dot like a sonar ping.",
    file: "components/loader/PulseLoader.tsx",
    tags: ["loading", "pulse", "rings"],
  },
  {
    name: "Orbit Loader",
    slug: "orbit-loader",
    category: "loader",
    description: "Dots orbit a center point at different radii and speeds.",
    file: "components/loader/OrbitLoader.tsx",
    tags: ["loading", "orbit", "dots", "animation"],
  },

  // loader
  {
    name: "Dots Loader",
    slug: "dots-loader",
    category: "loader",
    description: "Bouncing dot loaders in multiple sizes and colors.",
    file: "components/loader/DotsLoader.tsx",
    tags: ["loading", "bounce", "dots"],
  },
  {
    name: "Ring Loader",
    slug: "ring-loader",
    category: "loader",
    description: "Spinning gradient rings in three sizes.",
    file: "components/loader/RingLoader.tsx",
    tags: ["loading", "spinner", "gradient"],
  },
  {
    name: "Wave Loader",
    slug: "wave-loader",
    category: "loader",
    description: "Five bars animate in a flowing wave pattern, shown in three color variants.",
    file: "components/loader/WaveLoader.tsx",
    tags: ["loading", "wave", "bars", "animation"],
  },

  // card
  {
    name: "Stacked Cards",
    slug: "stacked-cards",
    category: "card",
    description: "A deck of gradient cards that fans out like playing cards on hover.",
    file: "components/card/StackedCards.tsx",
    tags: ["hover", "3d", "stacked", "animation"],
  },

  // button
  {
    name: "Shiny Button",
    slug: "shiny-button",
    category: "button",
    description: "Gradient buttons with a light-sweep shine that streaks across on hover.",
    file: "components/button/ShinyButton.tsx",
    tags: ["hover", "shine", "gradient", "animation"],
  },

  // animation
  {
    name: "Word Rotate",
    slug: "word-rotate",
    category: "animation",
    description: "Words exit upward and new words enter from below in a looping vertical rotation.",
    file: "components/animation/WordRotate.tsx",
    tags: ["text", "loop", "vertical", "gradient"],
  },
  {
    name: "Marquee",
    slug: "marquee",
    category: "animation",
    description: "Two rows of badges scroll horizontally in opposite directions, looping seamlessly.",
    file: "components/animation/Marquee.tsx",
    tags: ["scroll", "loop", "ticker", "horizontal"],
  },

  // loader
  {
    name: "Skeleton Loader",
    slug: "skeleton-loader",
    category: "loader",
    description: "Pulsing content-placeholder skeleton that mimics a social card layout.",
    file: "components/loader/SkeletonLoader.tsx",
    tags: ["loading", "skeleton", "placeholder", "pulse"],
  },
  {
    name: "Progress Bar",
    slug: "progress-bar",
    category: "loader",
    description: "Animated gradient progress bars that fill from zero on mount.",
    file: "components/loader/ProgressBar.tsx",
    tags: ["loading", "progress", "gradient", "animation"],
  },
];
