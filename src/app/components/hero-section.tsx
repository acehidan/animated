"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section min-h-screen flex items-end relative overflow-hidden bg-white">
      <div className="w-full mt-40 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="container mx-auto px-4 flex flex-col md:w-1/2 justify-center lg:ps-20">
            <div className="space-y-6">
              <span className="text-[#151515] font-semibold text-[24px]">
                With Live Code Myanmar
              </span>
              <h1 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight inter ">
                Live Easily <br /> Live Better
              </h1>

              <p className="text-lg mt-5 sm:text-xl text-[#151515] max-w-lg poppins">
                A sale automation tool manage your live sale with easy set up.
              </p>

              <div className="">
                <button className="button">Get live Code</button>
                {/* <button className="button-outline">See our packages</button> */}
              </div>
            </div>
          </div>

          <Image
            src="/herobanner.svg"
            alt="Product showcase"
            width={500}
            height={500}
            className="md:w-1/2 h-[80vh] hidden md:block object-cover overflow-hidden border-none rounded-l-4xl"
          />

          <Image
            src="/mobilehero.svg"
            alt="Product showcase"
            width={500}
            height={500}
            className="w-full md:hidden object-cover overflow-hidden border-none"
          />
        </div>
      </div>
    </section>
  );
}
