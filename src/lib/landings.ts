import type { LandingPage } from "@/types/landing";

export const landings: LandingPage[] = [
  {
    slug: "neural-pulse",
    title: "Neural Pulse",
    description: "Futuristic biotech aesthetic with teal accents and spotlight effects",
    accent: "teal",
    tags: ["futuristic", "scientific", "teal"],
    component: () => import("@/components/landings/neural-pulse"),
  },
  {
    slug: "gradient-horizon",
    title: "Gradient Horizon",
    description: "Premium warmth with violet-to-rose gradients and bold typography",
    accent: "violet-rose",
    tags: ["premium", "gradient", "warm"],
    component: () => import("@/components/landings/gradient-horizon"),
  },
  {
    slug: "minimal-terminal",
    title: "Minimal Terminal",
    description: "Developer-credible precision with emerald accents and data-driven feel",
    accent: "emerald",
    tags: ["minimal", "terminal", "data"],
    component: () => import("@/components/landings/minimal-terminal"),
  },
];

export function getLanding(slug: string) {
  return landings.find((l) => l.slug === slug);
}

export function getAllLandingSlugs() {
  return landings.map((l) => l.slug);
}
