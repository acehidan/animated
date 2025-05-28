"use client";

import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="section min-h-screen flex items-end relative overflow-hidden bg-white">
      <div className="w-full mt-40 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="container mx-auto px-4 flex flex-col md:w-1/2 md:justify-center md:items-center">
            <div className="space-y-6">
              <span className="text-[#151515] font-semibold text-[16px] md:text-[24px]">
                At Live Code Myanmar
              </span>
              <h1 className="text-4xl my-5 md:text-5xl text-primary lg:text-6xl font-bold leading-tight inter ">
                We turn <br /> your Facebook live <br /> chaos into calm
              </h1>
            </div>
          </div>

          <Image
            src="/aboutbanner.svg"
            alt="Product showcase"
            width={500}
            height={500}
            className="w-1/2 h-[80vh] hidden md:block overflow-hidden border-none"
          />

          <Image
            src="/abouthero.svg"
            alt="Product showcase"
            width={500}
            height={500}
            className="w-full md:hidden object-cover overflow-hidden border-none mt-10"
          />
        </div>
      </div>
    </section>
  );
}
