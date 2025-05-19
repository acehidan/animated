"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function FeatureBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate content on load
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: "url('/ctabg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 min-h-[calc(100vh-12rem)] grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="w-full hidden md:block"></div>
        <div
          className="w-full flex justify-center items-center text-white"
          ref={contentRef}
        >
          <h1 className="text-4xl md:text-5xl font-semibold">
            Manage your shop <br /> better and sale online <br /> easily with
            our features
          </h1>
        </div>
      </div>
    </section>
  );
}
