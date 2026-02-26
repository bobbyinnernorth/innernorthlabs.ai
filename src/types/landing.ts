import type { ComponentType } from "react";

export interface LandingPage {
  slug: string;
  title: string;
  description: string;
  accent: string;
  tags: string[];
  component: () => Promise<{ default: ComponentType }>;
}
