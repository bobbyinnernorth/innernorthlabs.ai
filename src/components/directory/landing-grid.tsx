"use client";

import { motion } from "motion/react";
import { LandingCard } from "./landing-card";
import type { LandingPage } from "@/types/landing";

interface LandingGridProps {
  landings: Omit<LandingPage, "component">[];
}

export function LandingGrid({ landings }: LandingGridProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {landings.map((landing) => (
        <motion.div
          key={landing.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <LandingCard
            slug={landing.slug}
            title={landing.title}
            description={landing.description}
            accent={landing.accent}
            tags={landing.tags}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
