"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: (
      <span>
        King Sky <br /> Clothing Shop
      </span>
    ),
    image: "/client01.png",
  },
  {
    id: 2,
    name: (
      <span>
        Smile Lady <br />
        BKK Fashion World
      </span>
    ),
    image: "/client02.png",
  },
  { id: 3, name: <span>UEDC Myanmar</span>, image: "/client03.png" },
  {
    id: 4,
    name: (
      <span>
        Baby World <br /> Baby Clothing
      </span>
    ),
    image: "/client04.png",
  },
  {
    id: 5,
    name: (
      <span>
        Sweet Honey <br />
        Online Fashion Shop
      </span>
    ),
    image: "/client05.png",
  },
  {
    id: 6,
    name: (
      <span>
        One One <br />
        Clothing
      </span>
    ),
    image: "/client06.png",
  },
  {
    id: 7,
    name: (
      <span>
        Happy Lady Online <br /> Shopping
      </span>
    ),
    image: "/client07.png",
  },
  {
    id: 8,
    name: <span>Khit Silk & Fabric</span>,
    image: "/client08.png",
  },
];

export default function ClientSection() {
  return (
    <section className="section bg-white">
      <div className="px-4 lg:px-20 py-20 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 md:items-center md:justify-center w-full order-2 md:order-1 mt-10 md:mt-0">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-full max-w-[140px] h-[190px] hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              <Image
                src={client.image}
                alt="client"
                width={140}
                height={140}
                className="w-[140px] h-[140px] object-contain rounded-lg"
              />
              <p className="text-[12px] font-semibold poppins text-gray-500 mt-5 text-center">
                {client.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex md:justify-center order-1 md:order-2">
          <div>
            <h2 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight inter">
              Some of <br /> Our Clients
            </h2>
            <p className="text-[24px] sm:text-xl text-[#151515] max-w-lg font-semibold poppins">
              Trusted by successful <br /> Online Live Sale Business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
