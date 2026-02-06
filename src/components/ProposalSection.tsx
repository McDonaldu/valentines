"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ResponseSection from "./ResponseSection";

const NO_TEXTS = ["No", "Are you sure?", "Really?", "Think again...", "Pretty please?"];

export default function ProposalSection() {
  const [accepted, setAccepted] = useState(false);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noVisible, setNoVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [bounds, setBounds] = useState({ width: 200, height: 150 });

  useEffect(() => {
    const updateBounds = () => {
      const vw = window.innerWidth;
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const widthFactor = vw < 640 ? 0.2 : 0.35;
        const heightFactor = vw < 640 ? 0.15 : 0.25;
        setBounds({
          width: Math.min(rect.width * widthFactor, vw < 640 ? 120 : 250),
          height: Math.min(rect.height * heightFactor, vw < 640 ? 100 : 180),
        });
      }
    };
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  const handleNoDodge = useCallback(() => {
    const newCount = dodgeCount + 1;
    setDodgeCount(newCount);

    if (newCount >= NO_TEXTS.length) {
      setNoVisible(false);
      return;
    }

    const newX = (Math.random() - 0.5) * 2 * bounds.width;
    const newY = (Math.random() - 0.5) * 2 * bounds.height;
    setNoPosition({ x: newX, y: newY });
  }, [dodgeCount, bounds]);

  const currentNoText = NO_TEXTS[Math.min(dodgeCount, NO_TEXTS.length - 1)];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh]"
    >
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="proposal"
            className="flex min-h-[100dvh] flex-col items-center justify-center px-5 text-center sm:px-6"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            {/* Radial glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 45%, rgba(107, 29, 52, 0.5) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
              {/* "So..." teaser — Great Vibes */}
              <motion.p
                className="font-heading text-2xl text-gold sm:text-3xl md:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                So...
              </motion.p>

              {/* The big question — Great Vibes */}
              <motion.h2
                className="font-heading text-[2rem] leading-[1.3] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Will You Be My
                <br />
                <span className="text-gold">Valentine?</span>
              </motion.h2>

              {/* Divider */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="h-px w-8 bg-gold/30 sm:w-10" />
                <span className="text-gold/50">&#9829;</span>
                <div className="h-px w-8 bg-gold/30 sm:w-10" />
              </motion.div>

              {/* Buttons — Lora for readability */}
              <motion.div
                className="relative mt-4 flex items-center gap-4 sm:mt-6 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {/* Yes button */}
                <motion.button
                  className="animate-pulse-glow font-body cursor-pointer rounded-full bg-gold px-8 py-3 text-base font-bold text-burgundy transition-colors hover:bg-gold-light sm:px-10 sm:py-3.5 sm:text-lg md:px-14 md:py-4 md:text-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setAccepted(true)}
                >
                  Yes
                </motion.button>

                {/* No button — dodges! */}
                {noVisible && (
                  <motion.button
                    ref={noButtonRef}
                    aria-live="polite"
                    className="font-body cursor-pointer rounded-full border border-cream/20 px-4 py-2.5 text-xs font-medium text-cream/50 transition-colors hover:border-cream/40 sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-3.5 md:text-base"
                    animate={{
                      x: noPosition.x,
                      y: noPosition.y,
                      opacity: dodgeCount >= NO_TEXTS.length - 1 ? 0.3 : 1,
                      scale: dodgeCount >= NO_TEXTS.length - 1 ? 0.8 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    onMouseEnter={handleNoDodge}
                    onTouchStart={handleNoDodge}
                  >
                    {currentNoText}
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="response"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ResponseSection />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
