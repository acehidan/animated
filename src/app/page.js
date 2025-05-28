"use client";
import HeroSection from "./components/hero-section";
import HeroSectionMobile from "./components/hero-section-mobile";
import Navbar from "./components/navbar";
import ClientSection from "./components/client-section";
import ProductFeatures from "./components/product-features";
import TestmonialSection from "./components/testmonial-section";
import CTASection from "./components/cta-section";
import Footer from "./components/footer";
import ProductFeatureCarousel from "./components/product-feature-carousel";

function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ClientSection />

        <ProductFeatures />
        <ProductFeatureCarousel />
        <TestmonialSection />
        {/* <PricingPlan /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Page;
