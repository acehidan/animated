"use client";

import AboutBanner from "../components/about-banner";
import Navbar from "../components/navbar";
import HowWeStarted from "../components/howe-start";
import AboutCTA from "../components/about-cta";
import TestimonialSection from "../components/testmonial-section";
import CTASection from "../components/cta-section";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="">
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
