"use client";

import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 text-center sm:px-6">
      {/* Radial gradient overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(107, 29, 52, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
        {/* Thin gold line */}
        <motion.div
          className="mb-2 h-px bg-gold sm:mb-4"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Date */}
        <motion.p
          className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.35em] md:text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          February 14, 2026
        </motion.p>

        {/* Main heading — Great Vibes script */}
        <motion.h1
          className="font-heading text-[2.75rem] leading-[1.2] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        >
          An Evening
          <br />
          <span className="animate-shimmer">Awaits</span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="h-px w-8 bg-gold/40 sm:w-12" />
          <span className="text-base text-gold sm:text-lg">&#9829;</span>
          <div className="h-px w-8 bg-gold/40 sm:w-12" />
        </motion.div>

        {/* Tagline — Lora body font for readability */}
        <motion.p
          className="font-body max-w-xs text-base italic text-champagne/80 sm:max-w-md sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          A day crafted for two — from the stroke of midnight
          <br className="hidden sm:inline" /> to the last flicker of candlelight.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center gap-1.5 sm:bottom-10 sm:gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold/50 sm:text-xs">
          Scroll
        </span>
        <motion.div className="animate-bob text-gold/50" aria-hidden="true">
          &#8595;
        </motion.div>
      </motion.div>
    </section>
  );
}
