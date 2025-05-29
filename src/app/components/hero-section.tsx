"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section h-[110vh] sm:h-[150vh] md:min-h-screen flex md:items-center md:overflow-hidden bg-white overflow-hidden">
      <div className="w-full mt-40 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between w-full relative">
          <div className="container mx-auto px-4 flex flex-col md:w-1/2 justify-center md:hidden absolute top-0 z-10 lg:ps-20">
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
                <Link href="/contact" className="button">
                  Get live Code
                </Link>
                {/* <button className="button-outline">See our packages</button> */}
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 hidden md:flex flex-col md:w-1/2 justify-center lg:ps-20">
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
                <Link href="/contact" className="button">
                  Get live Code
                </Link>
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
            className="w-full md:hidden object-cover overflow-hidden border-none absolute top-[250px] sm:top-[270px] z-1"
          />
        </div>
      </div>
    </section>
  );
}
