"use client";

import { motion } from "motion/react";
import ScheduleCard from "./ScheduleCard";

const SCHEDULE = [
  {
    time: "12:00 AM",
    title: "Midnight Snack",
    venue: "Filling Station Bar & Cafe",
    description: "The day begins at midnight, with you.",
    image: "/midnight-snack.jpg",
  },
  {
    time: "5:30 PM – 6:30 PM",
    title: "Escape Room",
    venue: "Century City Mall",
    description: "Can we find our way out? Together.",
    image: "/escape-room.jpg",
  },
  {
    time: "10:00 PM",
    title: "Dinner",
    venue: "Firefly Roofdeck",
    description: "Under the stars, just us.",
    image: "/dinner.jpg",
  },
];

export default function ScheduleSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-32">
      {/* Section heading */}
      <motion.div
        className="mb-12 text-center sm:mb-16 md:mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-body mb-2 text-[10px] font-medium uppercase tracking-[0.35em] text-gold/70 sm:mb-3 sm:text-xs">
          The Itinerary
        </p>
        <h2 className="font-heading text-3xl text-cream sm:text-4xl md:text-6xl">
          Our Day Together
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-3 sm:mt-6">
          <div className="h-px w-6 bg-gold/30 sm:w-8" />
          <span className="text-xs text-gold/50 sm:text-sm">&#10022;</span>
          <div className="h-px w-6 bg-gold/30 sm:w-8" />
        </div>
      </motion.div>

      {/* Schedule cards */}
      <div className="mx-auto flex max-w-2xl flex-col gap-6 sm:gap-8 md:gap-12">
        {SCHEDULE.map((item, i) => (
          <ScheduleCard key={item.title} {...item} index={i} />
        ))}
      </div>
    </section>
  );
}
