"use client";

import { useState } from "react";
import { matchaMenu, MatchaItem } from "@/data/matchaMenu";

import HeroSection from "@/components/sections/HeroSection";
import ValueSection from "@/components/sections/ValueSection";
import CTASection from "@/components/sections/CTASection";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function Home() {
  const [active, setActive] = useState<MatchaItem>(matchaMenu[0]);

  return (
    <main className="relative z-10 bg-transparent">
      <HeroSection
        active={active}
        setActive={setActive}
        menu={matchaMenu}
      />
      <RevealOnScroll>
        {(isVisible) => <ValueSection />}
      </RevealOnScroll>
      <RevealOnScroll>
        {(isVisible) => <CTASection />}
      </RevealOnScroll>
    </main>
  );
}