"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Scroll</h1>
        </div>
        <div className="scroll-section-inner" ref={sectionRef}>
          <div className="scroll-section w-[100vw] flex items-center justify-center">
            <h3 className="text-4xl font-bold">Section 1</h3>
          </div>
          <div className="scroll-section w-[100vw] flex items-center justify-center">
            <h3 className="text-4xl font-bold">Section 2</h3>
          </div>
          <div className="scroll-section w-[100vw] flex items-center justify-center">
            <h3 className="text-4xl font-bold">Section 3</h3>
          </div>
          <div className="scroll-section w-[100vw] flex items-center justify-center">
            <h3 className="text-4xl font-bold">Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
