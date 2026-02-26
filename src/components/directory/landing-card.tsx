"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface LandingCardProps {
  slug: string;
  title: string;
  description: string;
  accent: string;
  tags: string[];
}

const accentColors: Record<string, string> = {
  teal: "from-teal-500/20 to-teal-500/5",
  "violet-rose": "from-violet-500/20 to-rose-500/5",
  emerald: "from-emerald-500/20 to-emerald-500/5",
};

const accentBorders: Record<string, string> = {
  teal: "group-hover:border-teal-500/30",
  "violet-rose": "group-hover:border-violet-500/30",
  emerald: "group-hover:border-emerald-500/30",
};

const accentDots: Record<string, string> = {
  teal: "bg-teal-400",
  "violet-rose": "bg-violet-400",
  emerald: "bg-emerald-400",
};

export function LandingCard({
  slug,
  title,
  description,
  accent,
  tags,
}: LandingCardProps) {
  return (
    <Link href={`/preview/${slug}`} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/80 p-6 transition-colors ${accentBorders[accent] || ""}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100 ${accentColors[accent] || ""}`}
        />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={`h-2 w-2 rounded-full ${accentDots[accent] || "bg-zinc-400"}`}
              />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white" />
          </div>
          <p className="mb-4 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/5 text-xs text-zinc-400"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
