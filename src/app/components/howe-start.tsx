"use client";

import Image from "next/image";

export default function HowWeStarted() {
  return (
    <section className="section min-h-screen flex items-end relative overflow-hidden bg-white py-40">
      <div className="w-full px-4 lg:px-20">
        <div className="flex flex-col md:flex-row w-full ">
          <div className="flex flex-col w-full lg:w-1/2 lg:justify-center">
            <div className="space-y-6">
              <h1 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight inter ">
                How we started
              </h1>
              <p
                className=" mt-5 text-[16px] lg:text-[20px] text-[#151515] lg:max-w-lg poppins"
                style={{ lineHeight: "2", letterSpacing: "0.02em" }}
              >
                Our story started on our Social Media Agency, Digital Saw,
                working hand-in-hand with online shops across Myanmar. As a
                social media agency, we saw the vibrant energy of Live Selling —
                and the silent struggles behind the scenes. Hours wasted sorting
                comments. Lost orders. Delayed responses. We knew there had to
                be a better way – a way for businesses to Live Easily, Live
                Better.
              </p>
            </div>
          </div>

          <Image
            src="/howestart.svg"
            alt="Product showcase"
            width={500}
            height={500}
            className="w-full lg:w-1/2 lg:h-[80vh] pt-8 md:pt-0  overflow-hidden border-none"
          />
        </div>

        <div className="w-full pt-5 md:pt-20">
          <p
            className="mt-5 text-[16px] lg:text-[20px] text-[#151515] poppins"
            style={{ lineHeight: "2", letterSpacing: "0.02em" }}
          >
            Our story started on our Social Media Agency, Digital Saw, working
            hand-in-hand with online shops across Myanmar. As a social media
            agency, we saw the vibrant energy of Live Selling — and the silent
            struggles behind the scenes. Hours wasted sorting comments. Lost
            orders. Delayed responses. We knew there had to be a better way – a
            way for businesses to Live Easily, Live Better.
          </p>
        </div>
      </div>
    </section>
  );
}
