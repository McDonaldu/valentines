"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ScheduleCardProps {
  time: string;
  title: string;
  venue: string;
  description: string;
  image: string;
  index: number;
}

export default function ScheduleCard({
  time,
  title,
  venue,
  description,
  image,
  index,
}: ScheduleCardProps) {
  return (
    <motion.div
      className="group relative mx-auto w-full max-w-lg"
      initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg backdrop-blur-md transition-all duration-500 hover:border-gold/40 hover:bg-wine/50">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
          <Image
            src={image}
            alt={`${title} at ${venue}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 512px"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/30 to-transparent" />

          {/* Time badge overlaid on image — Lora for readability at small size */}
          <div className="absolute bottom-4 left-4 inline-block rounded-full border border-gold/40 bg-burgundy/70 px-3 py-1 backdrop-blur-sm sm:left-6 sm:px-4 sm:py-1.5">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
              {time}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-5 sm:p-6 md:p-8">
          {/* Gold accent line on left */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-gold/60 via-gold/30 to-transparent" />

          {/* Title — Great Vibes script */}
          <h3 className="font-heading mb-1.5 text-2xl text-cream sm:text-3xl md:text-4xl">
            {title}
          </h3>

          {/* Venue — Lora italic */}
          <p className="font-body mb-3 text-sm font-medium italic text-rose-gold sm:text-base">
            {venue}
          </p>

          {/* Description — Lora */}
          <p className="font-body text-base leading-relaxed text-champagne/70 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute -bottom-1 -right-1 h-12 w-12 rounded-tl-3xl border-l border-t border-gold/10 sm:h-16 sm:w-16" />
      </div>
    </motion.div>
  );
}
