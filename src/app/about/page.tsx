"use client";

import AboutBanner from "../components/about-banner";
import Navbar from "../components/navbar";
import HowWeStarted from "../components/howe-start";
import AboutCTA from "../components/about-cta";
import TestimonialSection from "../components/testmonial-section";
import { useEffect, useRef } from "react";
import { initScrollColorChange } from "../lib/scroll-color";
import CTASection from "../components/cta-section";
import Footer from "../components/footer";

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize the scroll color change functionality
    const cleanup = initScrollColorChange();

    return () => {
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen transition-colors duration-500"
    >
      <Navbar />
      <main>
        <AboutBanner />
        <HowWeStarted />
        <AboutCTA />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
