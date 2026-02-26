"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Brain,
  Pill,
  FlaskConical,
  ArrowRight,
  Mail,
  Linkedin,
  Shield,
  HeadsetIcon,
  Sparkles,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-teal-400">
      {children}
    </span>
  );
}

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-teal-500/20 hover:bg-white/[0.04] ${className}`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/[0.08] via-transparent to-transparent" />
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-500/20 via-transparent to-transparent opacity-0 blur-sm group-hover:opacity-50" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated Teal Pulse Background (Hero)                             */
/* ------------------------------------------------------------------ */

function HeroPulse() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary pulse ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="h-[600px] w-[600px] rounded-full md:h-[900px] md:w-[900px]"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.15) 0%, rgba(13,148,136,0.05) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Secondary pulse ring (offset, slower) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="h-[400px] w-[400px] rounded-full md:h-[700px] md:w-[700px]"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.1) 0%, rgba(13,148,136,0.03) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(13,148,136,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(13,148,136,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050508] to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050508] to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                               */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.04] bg-[#050508]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10">
            <Brain className="h-4 w-4 text-teal-400" />
          </div>
          <span className="font-sans text-sm font-semibold tracking-tight text-[#ededed]">
            Inner North Labs
          </span>
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {[
            ["About", "#about"],
            ["Products", "#products"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-widest text-[#888] transition-colors hover:text-teal-400"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#products"
          className="rounded-lg bg-teal-500/10 px-4 py-2 text-xs font-semibold text-teal-400 transition-all hover:bg-teal-500/20"
        >
          Explore
        </a>
      </div>
    </motion.nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                      */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <HeroPulse />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SectionLabel>
            <Sparkles className="h-3 w-3" />
            AI-Powered Health Optimization
          </SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 font-sans text-5xl font-bold leading-[1.05] tracking-tight text-[#ededed] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          The Future of
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Health Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#888] sm:text-lg"
        >
          Inner North Labs builds AI-powered tools that help people make
          smarter decisions about their health. Precision. Science. Results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-3.5 text-sm font-semibold text-[#050508] shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-400 hover:shadow-teal-500/30"
          >
            View Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] px-8 py-3.5 text-sm font-semibold text-[#ededed] transition-all hover:border-white/[0.15] hover:bg-white/[0.03]"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mx-auto mt-20 grid max-w-md grid-cols-3 gap-8"
        >
          {[
            ["AI-First", "Approach"],
            ["Health", "Focused"],
            ["Data", "Driven"],
          ].map(([big, small]) => (
            <div key={big} className="text-center">
              <div className="font-sans text-lg font-bold text-teal-400 sm:text-xl">
                {big}
              </div>
              <div className="mt-1 text-xs text-[#888]">{small}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About the Lab                                                     */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <Section id="about" className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <SectionLabel>
              <FlaskConical className="h-3 w-3" />
              About the Lab
            </SectionLabel>
            <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-[#ededed] sm:text-4xl md:text-5xl">
              Where AI Meets
              <br />
              Human Health
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#888]">
              Inner North Labs LLC is a research-driven software company focused
              on building intelligent tools at the intersection of artificial
              intelligence and personal health optimization.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#888]">
              We believe that everyone deserves access to the kind of
              personalized health insights that were once reserved for elite
              athletes and research institutions. Our AI systems analyze complex
              health data to deliver clear, actionable recommendations tailored
              to each individual.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#888]">
              From supplement stacking to biomarker analysis, we are building a
              suite of products designed to help people take control of their
              well-being with science-backed intelligence.
            </p>
          </div>

          {/* Right -- feature highlights */}
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Brain,
                title: "AI Research",
                desc: "Deep learning models trained on peer-reviewed health literature and clinical datasets.",
              },
              {
                icon: FlaskConical,
                title: "Scientific Rigor",
                desc: "Every recommendation is grounded in published research and evidence-based methodology.",
              },
              {
                icon: Layers,
                title: "Software Engineering",
                desc: "Production-grade applications built with modern tooling for reliability and speed.",
              },
              {
                icon: Shield,
                title: "Privacy First",
                desc: "Your health data stays yours. We build with encryption, consent, and transparency at the core.",
              },
            ].map((item) => (
              <GlowCard key={item.title}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10">
                  <item.icon className="h-5 w-5 text-teal-400" />
                </div>
                <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#888]">
                  {item.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Products                                                          */
/* ------------------------------------------------------------------ */

function Products() {
  return (
    <Section id="products" className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>
            <Pill className="h-3 w-3" />
            Products
          </SectionLabel>
          <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-[#ededed] sm:text-4xl md:text-5xl">
            Tools Built for
            <br />
            Optimal Health
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#888]">
            Our growing product line uses cutting-edge AI to simplify complex
            health decisions and put personalized insights in your hands.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* SuppStacker Card */}
          <a
            href="https://suppstacker.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 transition-all duration-500 hover:border-teal-500/25 hover:bg-white/[0.04]">
              {/* Background accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/[0.06] blur-3xl transition-all duration-700 group-hover:bg-teal-500/[0.12]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  Live
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 ring-1 ring-teal-500/20">
                    <Pill className="h-7 w-7 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl font-bold text-[#ededed]">
                      SuppStacker
                    </h3>
                    <p className="text-sm text-[#888]">
                      AI-Powered Supplement Optimization
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[#888]">
                  SuppStacker uses AI to analyze your health goals, existing
                  supplements, and the latest research to build personalized
                  supplement stacks. Get dosage recommendations, interaction
                  warnings, and evidence-backed suggestions tailored to your
                  unique biology.
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-teal-400 transition-all group-hover:gap-3">
                  Visit suppstacker.io
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </a>

          {/* Coming Soon Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] border-dashed bg-white/[0.01] p-10">
            {/* Muted background accent */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-3 py-1 text-xs font-semibold text-[#888]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#888]" />
                In Development
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.06]">
                  <Sparkles className="h-7 w-7 text-[#555]" />
                </div>
                <div>
                  <h3 className="font-sans text-2xl font-bold text-[#ededed]/60">
                    Coming Soon
                  </h3>
                  <p className="text-sm text-[#888]/60">
                    Next-Generation Health Tools
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[#888]/60">
                We are actively developing new AI-powered applications to expand
                our health optimization platform. From biomarker tracking to
                personalized nutrition planning, the next wave of tools is on
                the way. Stay tuned.
              </p>

              <div className="mt-8 text-sm font-semibold text-[#888]/40">
                More details coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                           */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <Section id="contact" className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>
            <Mail className="h-3 w-3" />
            Contact
          </SectionLabel>
          <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-[#ededed] sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#888]">
            Have questions, partnership inquiries, or just want to say hello?
            Reach out and we will get back to you.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <GlowCard className="text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10">
              <Mail className="h-6 w-6 text-teal-400" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#888]">
              Email Us
            </p>
            <a
              href="mailto:bobby@innernorthlabs.com"
              className="mt-2 inline-block font-mono text-lg text-teal-400 transition-colors hover:text-teal-300"
            >
              bobby@innernorthlabs.com
            </a>
          </GlowCard>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Privacy Policy (Placeholder)                                      */
/* ------------------------------------------------------------------ */

function PrivacyPolicy() {
  return (
    <Section id="privacy" className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>
            <Shield className="h-3 w-3" />
            Privacy Policy
          </SectionLabel>
          <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-[#ededed] sm:text-4xl">
            Your Privacy Matters
          </h2>

          <div className="mt-8 space-y-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
            <div>
              <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                Data Collection
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                Inner North Labs LLC collects only the minimum data necessary to
                provide our services. We may collect usage analytics, contact
                information you voluntarily provide, and technical data required
                to improve application performance.
              </p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                Data Usage
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                Your data is used exclusively to deliver and improve our
                products. We do not sell, rent, or share your personal
                information with third parties for marketing purposes.
              </p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                Data Security
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                We employ industry-standard encryption and security practices to
                protect your data. Access to personal information is restricted
                to authorized personnel only.
              </p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                Contact
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                For questions regarding our privacy practices, please contact us
                at{" "}
                <a
                  href="mailto:bobby@innernorthlabs.com"
                  className="text-teal-400 hover:text-teal-300"
                >
                  bobby@innernorthlabs.com
                </a>
                .
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-[#888]/60">
            This is a placeholder privacy policy. A comprehensive policy will be
            published as our products evolve.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Support (Placeholder)                                             */
/* ------------------------------------------------------------------ */

function Support() {
  return (
    <Section id="support" className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>
            <HeadsetIcon className="h-3 w-3" />
            Support
          </SectionLabel>
          <h2 className="mt-6 font-sans text-3xl font-bold tracking-tight text-[#ededed] sm:text-4xl">
            We Are Here to Help
          </h2>

          <div className="mt-8 space-y-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
            <div>
              <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                General Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                If you need help with any of our products or have questions
                about your account, please reach out to our support team at{" "}
                <a
                  href="mailto:bobby@innernorthlabs.com"
                  className="text-teal-400 hover:text-teal-300"
                >
                  bobby@innernorthlabs.com
                </a>
                . We aim to respond within 24 hours on business days.
              </p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                Bug Reports & Feedback
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                Found a bug or have a feature request? We value your feedback.
                Send details to our email and include as much information as
                possible so we can investigate and improve.
              </p>
            </div>
            <div className="h-px bg-white/[0.06]" />
            <div>
              <h3 className="font-sans text-sm font-semibold text-[#ededed]">
                Product-Specific Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#888]">
                For support related to SuppStacker, please visit{" "}
                <a
                  href="https://suppstacker.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300"
                >
                  suppstacker.io
                </a>{" "}
                for product-specific documentation and help resources.
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-[#888]/60">
            A dedicated support portal is coming soon. In the meantime, email is
            the fastest way to reach us.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-500/10">
              <Brain className="h-3.5 w-3.5 text-teal-400" />
            </div>
            <span className="text-sm text-[#888]">
              &copy; 2026 Inner North Labs LLC
            </span>
          </div>

          {/* Center links */}
          <div className="flex items-center gap-6">
            {[
              ["Privacy", "#privacy"],
              ["Support", "#support"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs text-[#888] transition-colors hover:text-teal-400"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right */}
          <a
            href="https://linkedin.com/in/bobbywei"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] text-[#888] transition-all hover:border-teal-500/20 hover:text-teal-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page Component                                               */
/* ------------------------------------------------------------------ */

export default function NeuralPulseLanding() {
  return (
    <div className="min-h-screen bg-[#050508] font-sans text-[#ededed] selection:bg-teal-500/30 selection:text-white">
      <Nav />
      <main>
        <Hero />
        {/* Divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
        </div>
        <About />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Products />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Contact />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <PrivacyPolicy />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Support />
      </main>
      <Footer />
    </div>
  );
}
