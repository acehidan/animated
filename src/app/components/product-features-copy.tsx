"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Stock Management",
    image: "/feature1.svg",
    description: "Keep your stock list where you can see",
    text: "Store all your stocks in one place and track the list from the most selling product to the least selling one",
  },
  {
    id: 2,
    title: "Customer Management",
    image: "/feature2.svg",
    description: "Keep your stock list where you can see",
    text: "Store all your stocks in one place and track the list from the most selling product to the least selling one",
  },
  {
    id: 3,
    title: "Live Sale",
    image: "/feature3.svg",
    description: "Keep your stock list where you can see",
    text: "Store all your stocks in one place and track the list from the most selling product to the least selling one",
  },
  {
    id: 4,
    title: "Sale Report",
    image: "/feature4.svg",
    description: "View report and control your sale",
    text: "Store all your stocks in one place and track the list from the most selling product to the least selling one",
  },
];

export default function ProductFeatures() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

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
          onUpdate: (self) => {
            const slideIndex = Math.round(
              self.progress * (features.length - 1)
            );
            setActiveSlide(slideIndex);
          },
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section
      className="scroll-section-outer py-24"
      data-bgcolor="#151515"
      data-textcolor="#ffffff"
    >
      <div className="max-w-3xl mx-auto text-center mb-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 inter">
          Built for Sale Easily
        </h2>
        <p className="text-lg md:text-2xl poppins">
          Manage your shop better and sale online easily with our features
          focused to solve your problems.
        </p>
      </div>
      <div ref={triggerRef}>
        <div className="h-[35vh] flex items-center justify-center ">
          <div>
            <div className="mt-10 text-center w-full space-x-10">
              {features.map((_, index) => (
                <button key={index}>
                  <p
                    className={`text-[22px] font-bold transition-all duration-300 ${
                      index === activeSlide
                        ? "text-[#305CDE]"
                        : "text-white opacity-50"
                    }`}
                  >
                    {" "}
                    {features[index].title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div ref={sectionRef} className="scroll-section-inner">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-screen h-full flex items-center px-4"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2">
                  <h3 className="text-[22px] font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[28px] text-white poppins">
                    {feature.description}
                  </p>
                  <p className="text-[16px] text-white poppins">
                    {feature.text}
                  </p>
                </div>
                <div className="order-1">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={500}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-20">
        <blockquote className="mb-20 text-[32px] italic poppins">
          Live Code Myanmar exists to help you Live Easily, Live Better.
        </blockquote>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-around italic">
          <div className="flex flex-col items-center">
            <span className="text-[64px] font-bold">1.1 M</span>
            <span className="mt-2 text-[32px]">
              Customer <br /> Interaction
            </span>
          </div>
          <div className="border-r border-2 border-dashed border-white"></div>
          <div className="flex flex-col items-center">
            <span className="text-[64px] font-bold">5,651</span>
            <span className="mt-2 text-[32px]">
              Successful <br /> Orders
            </span>
          </div>
          <div className="border-r border-2 border-dashed border-white"></div>
          <div className="flex flex-col items-center">
            <span className="text-[64px] font-bold">13</span>
            <span className="mt-2 text-[32px]">
              Successful <br /> Business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
