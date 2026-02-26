"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  FlaskConical,
  Terminal,
  Activity,
  Database,
  Shield,
  Clock,
  Mail,
  Linkedin,
  ChevronRight,
  Lock,
  HeadphonesIcon,
} from "lucide-react";

/* ─────────────────────────── Section Wrapper ──────────────────────────── */

function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full max-w-5xl mx-auto px-6 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

/* ───────────────────────────── Section Label ──────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
        {children}
      </span>
      <div className="h-px flex-1 bg-zinc-800" />
    </div>
  );
}

/* ────────────────────────────── Main Page ─────────────────────────────── */

export default function MinimalTerminalLanding() {
  const [currentYear] = useState(() => new Date().getFullYear());

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(161,161,170,0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <header className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Nav hint */}
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono mb-12">
              <Terminal className="w-4 h-4" />
              <span>inner-north-labs</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-zinc-300">home</span>
            </div>

            {/* Terminal headline */}
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              <span className="text-emerald-400">{">"}</span>{" "}
              Building the future
              <br className="hidden sm:block" />{" "}
              of health
              <span className="inline-block w-[3px] h-[1em] bg-emerald-400 ml-1 align-middle animate-[blink_1s_steps(2)_infinite]" />
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-zinc-400 font-sans max-w-2xl leading-relaxed">
              Inner North Labs builds AI-powered tools that help people
              understand, track, and optimize their health through data.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://suppstacker.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-emerald-400/60 px-6 py-3 font-mono text-sm text-emerald-400 transition-all duration-200 hover:bg-emerald-400 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
              >
                Explore SuppStacker
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                onClick={() => scrollTo("products")}
                className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-6 py-3 font-mono text-sm text-zinc-400 transition-all duration-200 hover:border-zinc-500 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500/50"
              >
                View Products
              </button>
            </div>
          </motion.div>
        </Section>
      </header>

      {/* ═══════════════════════ ABOUT ═══════════════════════ */}
      <div className="py-20 sm:py-28">
        <Section id="about">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>// the_stack</SectionLabel>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
                  AI meets health science.
                  <br />
                  <span className="text-zinc-500">Precision by default.</span>
                </h2>
                <p className="text-zinc-400 font-sans leading-relaxed">
                  Inner North Labs LLC is a software studio focused on the
                  intersection of artificial intelligence and human health. We
                  design tools that synthesize complex nutritional and biomedical
                  data into clear, actionable intelligence — built for people
                  who take their health seriously.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: FlaskConical,
                    label: "Research-Backed",
                    desc: "Every recommendation is grounded in peer-reviewed evidence and structured data pipelines.",
                  },
                  {
                    icon: Database,
                    label: "Data-First Architecture",
                    desc: "Built on robust data infrastructure designed for scale, reliability, and real-time inference.",
                  },
                  {
                    icon: Shield,
                    label: "Privacy-First",
                    desc: "Your health data stays yours. No selling, no sharing, no compromises.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-md border border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-zinc-100 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* ═══════════════════════ PRODUCTS ═══════════════════════ */}
      <div className="py-20 sm:py-28">
        <Section id="products">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>// products</SectionLabel>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SuppStacker Card */}
              <a
                href="https://suppstacker.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 transition-all duration-300 hover:border-emerald-400/30 hover:bg-zinc-900/60"
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg border border-emerald-400/20 bg-emerald-400/5 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-emerald-400" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 transition-all group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Terminal-style header */}
                <div className="font-mono text-xs text-zinc-600 mb-3">
                  <span className="text-emerald-400/60">$</span> cat
                  product.yml
                </div>

                <h3 className="font-sans text-xl font-semibold text-zinc-100 mb-2">
                  SuppStacker
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  Compare supplement stacks from health experts like Huberman,
                  Rhonda Patrick, and Brad Stanfield. Track costs, export for
                  your doctor, and build your own stack — every supplement
                  backed by timestamped podcast clips.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["AI", "Health", "Supplements", "Live"].map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs ${
                        tag === "Live"
                          ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
                          : "bg-zinc-800/60 text-zinc-500 border border-zinc-800"
                      }`}
                    >
                      {tag === "Live" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </a>

              {/* Coming Soon Card */}
              <div className="relative rounded-lg border border-zinc-800/60 border-dashed bg-zinc-900/20 p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg border border-zinc-800 bg-zinc-900/30 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-zinc-600" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 px-2.5 py-0.5 font-mono text-xs text-amber-400/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                    In Development
                  </span>
                </div>

                <div className="font-mono text-xs text-zinc-700 mb-3">
                  <span className="text-zinc-600">$</span> status --next
                </div>

                <h3 className="font-sans text-xl font-semibold text-zinc-500 mb-2">
                  Coming Soon
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  New tools are in the pipeline. More AI-powered health
                  applications designed to give you a data-driven edge.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["AI", "Health", "TBA"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-zinc-800/30 text-zinc-700 border border-zinc-800/50 px-2.5 py-0.5 font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* ═══════════════════════ CONTACT ═══════════════════════ */}
      <div className="py-20 sm:py-28">
        <Section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>// contact</SectionLabel>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
                <div className="flex-1">
                  <h2 className="font-sans text-xl font-semibold text-zinc-100 mb-2">
                    Get in touch
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Questions, partnerships, or just want to say hello? Reach
                    out directly.
                  </p>
                </div>
                <a
                  href="mailto:bobby@innernorthlabs.com"
                  className="group inline-flex items-center gap-3 rounded-md border border-zinc-800 bg-zinc-900/60 px-5 py-3 transition-all duration-200 hover:border-emerald-400/30 hover:bg-zinc-900"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-sm text-zinc-300 group-hover:text-zinc-100">
                    bobby@innernorthlabs.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* ═══════════════════════ PRIVACY ═══════════════════════ */}
      <div className="py-20 sm:py-28">
        <Section id="privacy">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>// privacy_policy</SectionLabel>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 mt-0.5">
                  <Lock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="font-sans text-xl font-semibold text-zinc-100 mb-2">
                    Privacy Policy
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Last updated: February {currentYear}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                <p>
                  Inner North Labs LLC is committed to protecting your privacy.
                  We collect only the data necessary to provide and improve our
                  services. We do not sell your personal information to third
                  parties.
                </p>
                <p>
                  Our applications may collect usage analytics, health-related
                  data you choose to input, and standard technical information
                  (device type, browser, IP address) to maintain service quality.
                  All health data is encrypted at rest and in transit.
                </p>
                <p>
                  For detailed information about data handling practices specific
                  to each product, please refer to the privacy documentation
                  within that application. For questions, contact us at{" "}
                  <a
                    href="mailto:bobby@innernorthlabs.com"
                    className="text-emerald-400 hover:underline underline-offset-4"
                  >
                    bobby@innernorthlabs.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* ═══════════════════════ SUPPORT ═══════════════════════ */}
      <div className="py-20 sm:py-28">
        <Section id="support">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>// support</SectionLabel>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 mt-0.5">
                    <HeadphonesIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="font-sans text-xl font-semibold text-zinc-100 mb-2">
                      Support
                    </h2>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Need help with one of our products? We are here to assist.
                      Reach out and we will get back to you as soon as possible.
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:bobby@innernorthlabs.com?subject=Support%20Request"
                  className="group inline-flex items-center gap-2 rounded-md border border-emerald-400/60 px-5 py-3 font-mono text-sm text-emerald-400 transition-all duration-200 hover:bg-emerald-400 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                </a>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="border-t border-zinc-800/60 mt-8">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="font-mono text-xs text-zinc-600">
                &copy; {currentYear} Inner North Labs LLC
              </span>
              <span className="hidden sm:inline text-zinc-800">&middot;</span>
              <span className="font-mono text-xs text-zinc-700">
                Built in Melbourne
              </span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollTo("privacy")}
                className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => scrollTo("support")}
                className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Support
              </button>
              <a
                href="https://linkedin.com/in/bobbywei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Blinking cursor keyframes injected via style tag ── */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
