"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const clients = [
  { id: 1, name: "Client 1", image: "" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  { id: 4, name: "Client 4" },
  { id: 5, name: "Client 5" },
  { id: 6, name: "Client 6" },
];

export default function ClientSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate clients on scroll
    if (clientsRef.current) {
      gsap.from(clientsRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      data-bgcolor="#ffffff"
      data-textcolor="#000000"
    >
      <div className="mt-[-5px]">
        <div className="w-full ">
          <Image
            src="/clientSection.svg"
            alt="Full width image"
            layout="responsive"
            width={1920} // your image's original width
            height={1080} // your image's original height
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="container px-40 py-20 mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full max-w-[140px] grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src="/e.jpg"
                alt={client.name}
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
