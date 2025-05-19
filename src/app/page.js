"use client";
import HeroSection from "./components/hero-section";
import HeroSectionMobile from "./components/hero-section-mobile";
import Navbar from "./components/navbar";
import ScrollSection from "./components/ScrollSection";
import ClientSection from "./components/client-section";
import { useEffect, useRef } from "react";
import { initScrollColorChange } from "./lib/scroll-color";
import ProductFeaturesCopy from "./components/product-features-copy";
import ProductFeaturesMobile from "./components/product-features-mobile";
import TestmonialSection from "./components/testmonial-section";
import PricingPlan from "./components/pricing-plan";
import CTASection from "./components/cta-section";
import Footer from "./components/footer";

function Page() {
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
        <div className="md:hidden">
          <HeroSectionMobile />
        </div>
        <div className="hidden md:block">
          <HeroSection />
        </div>
        <ClientSection />
        <div className="md:hidden">
          <ProductFeaturesMobile />
        </div>
        <div className="hidden md:block">
          <ProductFeaturesCopy />
        </div>
        <TestmonialSection />
        <PricingPlan />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
