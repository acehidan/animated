"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for the hero image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

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
      // ref={sectionRef}
      className="section min-h-screen flex items-end relative overflow-hidden"
      style={{
        backgroundImage: "url('/background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="container mx-auto px-4 flex flex-col lg:w-1/2 justify-center items-center">
            <div className="space-y-6">
              <h1 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight inter ">
                Live Easily <br /> Live Better
              </h1>
              <span className="text-[#151515] font-semibold text-[24px]">
                with Live Code Myanmar
              </span>
              <p className="text-lg mt-5 sm:text-xl text-[#151515] max-w-lg poppins">
                With a just few simple clicks- mange your live sale stocks, rack
                live sale orders, save time with our auto replay messages
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="button">Consult with us</button>
                <button className="button-outline">See our packages</button>
              </div>
            </div>
          </div>

          <Image
            src="/herobanner.svg"
            alt="Product showcase"
            width={500}
            height={500}
            className="w-1/2 h-[80vh] hidden xl:block overflow-hidden border-none"
          />
        </div>

        <Image
          src="/letter.png"
          alt="Product showcase"
          width={261}
          height={84}
          className="hidden md:block w-[261px] h-[84px] absolute bottom-5 left-[1%]"
        />
      </div>
    </section>
  );
}
