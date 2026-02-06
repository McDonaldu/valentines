"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

const SCHEDULE_SUMMARY = [
  { time: "12:00 AM", label: "Midnight Snack", venue: "Filling Station Bar & Cafe" },
  { time: "5:30 PM", label: "Escape Room", venue: "Century City Mall" },
  { time: "10:00 PM", label: "Dinner", venue: "Firefly Roofdeck" },
];

interface BurstParticle {
  id: number;
  char: string;
  xEnd: string;
  yEnd: string;
  rotation: string;
  delay: string;
  duration: string;
  size: string;
}

export default function ResponseSection() {
  const burstParticles = useMemo<BurstParticle[]>(() => {
    const chars = ["♥", "♥", "♡", "✦", "❤"];
    return Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 24) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const distance = 80 + Math.random() * 180;
      return {
        id: i,
        char: chars[i % chars.length],
        xEnd: `${Math.cos(angle) * distance}px`,
        yEnd: `${Math.sin(angle) * distance}px`,
        rotation: `${Math.random() * 720 - 360}deg`,
        delay: `${Math.random() * 0.5}s`,
        duration: `${1 + Math.random() * 1}s`,
        size: `${0.6 + Math.random() * 1.2}rem`,
      };
    });
  }, []);

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 text-center sm:px-6">
      {/* Brighter radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139, 46, 74, 0.5) 0%, transparent 60%)",
        }}
      />

      {/* Heart burst particles */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {burstParticles.map((p) => (
          <span
            key={p.id}
            className="absolute text-gold"
            style={{
              fontSize: p.size,
              ["--x-end" as string]: p.xEnd,
              ["--y-end" as string]: p.yEnd,
              ["--rotation" as string]: p.rotation,
              animation: `heartBurst ${p.duration} ease-out ${p.delay} forwards`,
            }}
          >
            {p.char}
          </span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-8">
        {/* Big heart */}
        <motion.div
          className="text-5xl text-gold sm:text-6xl md:text-8xl"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 0.2,
          }}
        >
          &#9829;
        </motion.div>

        {/* Celebration text — Great Vibes */}
        <motion.h2
          className="font-heading text-4xl text-cream sm:text-5xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          It&apos;s a Date!
        </motion.h2>

        <motion.p
          className="font-body text-base italic text-champagne/70 sm:text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          February 14, 2026
        </motion.p>

        {/* Schedule summary */}
        <motion.div
          className="mt-2 w-full max-w-xs rounded-2xl border border-card-border bg-card-bg p-5 backdrop-blur-md sm:mt-4 sm:max-w-sm sm:p-6 md:max-w-md md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="space-y-4 sm:space-y-5">
            {SCHEDULE_SUMMARY.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.15 }}
              >
                <span className="font-body mt-0.5 shrink-0 text-[10px] font-semibold uppercase tracking-wider text-gold sm:text-xs">
                  {item.time}
                </span>
                <div className="text-left">
                  <p className="font-body text-xs font-bold text-cream sm:text-sm">
                    {item.label}
                  </p>
                  <p className="font-body text-xs italic text-rose-gold/80 sm:text-sm">
                    {item.venue}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="font-body mt-2 text-sm text-gold/60 sm:mt-4 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          See you there &#9829;
        </motion.p>
      </div>
    </div>
  );
}
