"use client";

import { useMemo, useState, useEffect } from "react";

const HEART_CHARS = ["♥", "♡", "✦", "❦"];

interface Particle {
  id: number;
  char: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    char: HEART_CHARS[i % HEART_CHARS.length],
    left: `${Math.random() * 100}%`,
    size: `${0.5 + Math.random() * 1}rem`,
    duration: `${14 + Math.random() * 16}s`,
    delay: `${Math.random() * 20}s`,
    opacity: 0.08 + Math.random() * 0.12,
  }));
}

export default function FloatingParticles() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setCount(window.innerWidth < 640 ? 8 : 16);
  }, []);

  const particles = useMemo<Particle[]>(() => generateParticles(count), [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-float absolute text-gold"
          style={{
            left: p.left,
            fontSize: p.size,
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
            ["--particle-opacity" as string]: p.opacity,
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
