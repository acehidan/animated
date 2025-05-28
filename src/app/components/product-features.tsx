"use client";

export default function ProductFeatures() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto px-4 text-center mt-20">
        <blockquote className="mb-20 text-[18px] md:text-[32px] italic poppins">
          <span className="hidden md:block">
            {" "}
            We exists to help you Live Easily, Live Better.
          </span>
          <span className="block md:hidden">
            {" "}
            We exists to help you <br /> Live Easily, Live Better.
          </span>
        </blockquote>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-around italic">
          <div className="flex flex-col items-center">
            <span className="text-[48px] lg:text-[64px] font-bold">
              150,000 +{" "}
            </span>
            <span className="mt-2 text-[20px] lg:text-[32px]">
              Success Orders
            </span>
          </div>
          <div className="border-r border-2 border-dashed border-white"></div>
          <div className="flex flex-col items-center">
            <span className="text-[48px] lg:text-[64px] font-bold">
              1,200,000 +
            </span>
            <span className="mt-2 text-[20px] lg:text-[32px]">
              Monthly Customers <br /> Interaction
            </span>
          </div>
          <div className="border-r border-2 border-dashed border-white"></div>
          <div className="flex flex-col items-center">
            <span className="text-[48px] lg:text-[64px] font-bold">20 + </span>
            <span className="mt-2 text-[20px] lg:text-[32px]">
              Online Shops
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
