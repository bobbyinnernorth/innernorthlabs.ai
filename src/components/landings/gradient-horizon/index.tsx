"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Beaker,
  Brain,
  Mail,
  Linkedin,
  Shield,
  LifeBuoy,
  Sparkles,
  Layers,
  Clock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

/* ------------------------------------------------------------------ */
/*  Gradient Horizon Landing Page                                      */
/* ------------------------------------------------------------------ */

export default function GradientHorizon() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-violet-500/30 overflow-x-hidden">
      {/* ---- Global gradient orb (upper) ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[900px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, #7c3aed 0%, #e11d48 60%, transparent 80%)",
          filter: "blur(120px)",
        }}
      />

      {/* =================================================================
          HERO
      ================================================================= */}
      <header className="relative z-10">
        {/* Navbar */}
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <motion.a
            href="#"
            className="text-lg font-bold tracking-tight"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">
              Inner North Labs
            </span>
          </motion.a>
          <motion.div
            className="flex items-center gap-6 text-sm text-neutral-400"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#products" className="transition hover:text-white">
              Products
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </motion.div>
        </nav>

        {/* Hero content */}
        <div className="mx-auto max-w-4xl px-6 pb-28 pt-24 text-center sm:pt-32 sm:pb-36">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#111] px-4 py-1.5 text-xs text-neutral-400"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            AI-Powered Health Tools
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-7xl"
          >
            Optimize Your Health{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
              With Intelligence
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
          >
            Inner North Labs builds AI-powered tools that help people make
            smarter decisions about their health -- starting with supplements,
            expanding everywhere.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="https://suppstacker.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-rose-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-violet-500/40 hover:brightness-110"
            >
              Try SuppStacker
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-[#333] px-7 py-3 text-sm font-medium text-neutral-300 transition hover:border-[#555] hover:text-white"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </header>

      {/* =================================================================
          ABOUT THE LAB
      ================================================================= */}
      <section id="about" className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
              About the Lab
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Built at the Intersection of{" "}
              <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">
                AI &amp; Wellbeing
              </span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "AI Research & Development",
                body: "We apply the latest advances in machine learning and large language models to personal health challenges that matter.",
              },
              {
                icon: Beaker,
                title: "Evidence-First Approach",
                body: "Every recommendation our tools make is grounded in peer-reviewed research, clinical data, and transparent reasoning.",
              },
              {
                icon: Layers,
                title: "From Supplements to Everything",
                body: "Starting with supplement optimization, we are expanding into nutrition, sleep, fitness, and holistic health intelligence.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="group rounded-2xl border border-[#222] bg-[#111] p-8 transition hover:border-[#333]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-rose-600/20">
                  <card.icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-neutral-500"
          >
            Inner North Labs LLC is an independent software studio dedicated to
            building products that make the future of personal health smarter,
            more accessible, and more human.
          </motion.p>
        </div>
      </section>

      {/* =================================================================
          PRODUCTS  — Bento Grid
      ================================================================= */}
      <section id="products" className="relative z-10 py-24 sm:py-32">
        {/* Secondary decorative orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, #7c3aed 0%, #e11d48 50%, transparent 80%)",
            filter: "blur(100px)",
          }}
        />

        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="mb-14 text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-rose-400">
              Products
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              What We&apos;re Building
            </h2>
          </motion.div>

          {/* Bento grid — asymmetric */}
          <div className="grid gap-5 sm:grid-cols-5 sm:grid-rows-2">
            {/* SuppStacker — large card, 3 col span */}
            <motion.a
              href="https://suppstacker.io"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#222] bg-[#111] p-8 sm:col-span-3 sm:row-span-2"
            >
              {/* Card gradient accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-30 transition-opacity group-hover:opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, #7c3aed 0%, #e11d48 60%, transparent 80%)",
                  filter: "blur(60px)",
                }}
              />

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600/20 to-rose-600/20 px-3 py-1 text-xs font-medium text-violet-300">
                  <Sparkles className="h-3 w-3" /> Flagship Product
                </div>
                <h3 className="mb-3 text-2xl font-extrabold sm:text-3xl">
                  SuppStacker
                </h3>
                <p className="max-w-md text-base leading-relaxed text-neutral-400">
                  AI-powered supplement optimization. Build a personalized
                  supplement stack based on your goals, health data, and the
                  latest research -- all in one intelligent platform.
                </p>
              </div>

              <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition group-hover:text-violet-300">
                Visit suppstacker.io
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>

            {/* Coming Soon card — 2 col span */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              className="flex flex-col items-start justify-center rounded-2xl border border-[#222] bg-[#111] p-8 sm:col-span-2 sm:row-span-1"
            >
              <Clock className="mb-4 h-6 w-6 text-rose-400" />
              <h3 className="mb-2 text-lg font-bold">Coming Soon</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                New AI-powered health tools are on the way. We are expanding
                beyond supplements into nutrition, sleep, and more.
              </p>
            </motion.div>

            {/* Mission statement mini card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              className="flex flex-col items-start justify-center rounded-2xl border border-[#222] bg-[#111] p-8 sm:col-span-2 sm:row-span-1"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-violet-500 to-rose-500" />
              <p className="text-sm font-medium leading-relaxed text-neutral-300">
                &ldquo;We believe everyone deserves access to intelligent,
                evidence-backed health guidance.&rdquo;
              </p>
              <span className="mt-3 text-xs text-neutral-500">
                -- Inner North Labs
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================
          CONTACT
      ================================================================= */}
      <section id="contact" className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-violet-400">
              Get in Touch
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-neutral-400">
              Have a question, partnership idea, or just want to say hello? We
              would love to hear from you.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-[#222] bg-[#111] px-8 py-5"
          >
            <Mail className="h-5 w-5 text-rose-400" />
            <a
              href="mailto:bobby@innernorthlabs.com"
              className="text-lg font-medium transition hover:text-violet-400"
            >
              bobby@innernorthlabs.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* =================================================================
          PRIVACY POLICY
      ================================================================= */}
      <section id="privacy" className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-violet-400" />
              <h2 className="text-2xl font-extrabold tracking-tight">
                Privacy Policy
              </h2>
            </div>
            <div className="mt-6 rounded-2xl border border-[#222] bg-[#111] p-8">
              <p className="text-sm leading-relaxed text-neutral-400">
                Your privacy matters to us. Inner North Labs LLC is committed to
                protecting your personal data. We collect only the minimum
                information necessary to provide our services, and we never sell
                or share your data with third parties for marketing purposes.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                For detailed information about data handling, cookies, and your
                rights, please contact us at{" "}
                <a
                  href="mailto:bobby@innernorthlabs.com"
                  className="text-violet-400 underline underline-offset-2 transition hover:text-violet-300"
                >
                  bobby@innernorthlabs.com
                </a>
                . A comprehensive privacy policy is being prepared and will be
                published here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================================
          SUPPORT
      ================================================================= */}
      <section id="support" className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <div className="flex items-center gap-3">
              <LifeBuoy className="h-5 w-5 text-rose-400" />
              <h2 className="text-2xl font-extrabold tracking-tight">
                Support
              </h2>
            </div>
            <div className="mt-6 rounded-2xl border border-[#222] bg-[#111] p-8">
              <p className="text-sm leading-relaxed text-neutral-400">
                Need help with one of our products? We are here for you. Reach
                out to our team and we will get back to you as quickly as
                possible.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:bobby@innernorthlabs.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/15 transition hover:shadow-violet-500/30 hover:brightness-110"
                >
                  <Mail className="h-4 w-4" />
                  Email Support
                </a>
                <span className="text-xs text-neutral-500">
                  Typical response time: within 24 hours
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================================
          FOOTER
      ================================================================= */}
      <footer className="relative z-10 border-t border-[#1a1a1a]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-neutral-500"
          >
            &copy; 2026 Inner North Labs LLC
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-5"
          >
            <a
              href="#privacy"
              className="text-xs text-neutral-500 transition hover:text-neutral-300"
            >
              Privacy
            </a>
            <a
              href="#support"
              className="text-xs text-neutral-500 transition hover:text-neutral-300"
            >
              Support
            </a>
            <a
              href="https://linkedin.com/in/bobbywei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition hover:text-white"
              aria-label="Founder LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
