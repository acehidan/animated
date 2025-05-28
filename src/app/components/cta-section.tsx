"use client";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="section pt-24 md:pt-32 relative overflow-hidden bg-[#151515]">
      <div className="mx-auto px-4 lg:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="space-y-6 w-full md:w-1/2">
            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold leading-tight inter">
              Get In Touch
            </h1>

            <p className="text-lg text-white sm:text-xl max-w-lg poppins">
              We&apos;re here to help! Whether you have questions about our
              packages, need support, or want to discuss your specific needs,
              reach out to us.
            </p>

            <div className="">
              <button className="ctabutton">Let talk with us</button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <div className="md:p-20 p-10 bg-white rounded-4xl ">
              <Image
                src="cta.svg"
                alt="Phone"
                width={200}
                height={200}
                className="w-full lg:w-[300px] lg:h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
