"use client";

import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import ProposalSection from "@/components/ProposalSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-burgundy">
      <FloatingParticles />
      <HeroSection />
      <ScheduleSection />
      <ProposalSection />
    </main>
  );
}
