"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutCTA() {
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
      className="section min-h-screen flex items-center relative overflow-hidden"
      data-bgcolor="#151515"
      data-textcolor="#ffffff"
    >
      <div className="container mx-auto flex items-center">
        <div className="mx-auto text-center inter" ref={contentRef}>
          <h1
            className="hidden md:block text-4xl md:text-5xl font-semibold "
            style={{
              lineHeight: "1.4",
            }}
          >
            You should spend more time connecting <br /> with customers, not
            chasing spreadsheets.
          </h1>
          <h1 className="md:hidden text-[24px] font-semibold">
            You should spend more <br /> time connecting with customers, not
            chasing spreadsheets.
          </h1>
        </div>
      </div>
    </section>
  );
}
