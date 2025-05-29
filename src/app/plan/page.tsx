"use client";

import { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PlanBanner from "../components/plan-banner";
import TestimonialSection from "../components/testmonial-section";
import CTASection from "../components/cta-section";

export default function Plan() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <PlanBanner />

        <TestimonialSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
