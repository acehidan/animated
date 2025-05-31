"use client";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section py-24 relative overflow-hidden pattern">
      <div className="mx-auto px-4 lg:px-20 z-10">
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

            <Link href="/contact" className="ctabutton">
              Let&apos;s talk with us
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <div
              className="md:p-20 p-10 bg-white"
              style={{ borderRadius: "60px" }}
            >
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
