"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FeatureBanner from "../components/feature-banner";
import FeatureCarousel from "../components/feature-carousel";
import CTASection from "../components/cta-section";

export default function Feature() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <FeatureBanner />

        {/* Features Section */}
        <FeatureCarousel />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
