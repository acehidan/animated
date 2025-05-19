"use client";
import Image from "next/image";

export default function CTASection() {
  return (
    <section
      className="section pt-24 md:pt-32 relative overflow-hidden"
      style={{
        backgroundImage: "url('/ctabg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#151515] to-[#151515]"></div> */}

      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold leading-tight inter">
              Get In Touch
            </h1>

            <p className="text-lg text-white sm:text-xl max-w-lg poppins">
              We&apos;re here to help! Whether you have questions about our
              packages, need support, or want to discuss your specific needs,
              reach out to us.
            </p>

            <div className="">
              <button
                className="button"
                style={{
                  backgroundColor: "white !important",
                  color: "black !important",
                }}
              >
                Let talk with us
              </button>
            </div>
          </div>

          <div className="relative px-0 md:px-10 pt-10 ">
            <Image
              src="phone.svg"
              alt="Phone"
              width={600}
              height={500}
              className="rounded-xl rounded-b-none shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
