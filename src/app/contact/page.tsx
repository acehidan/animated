"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import CTASection from "../components/cta-section";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F2F3F7] text-[#151515]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="section min-h-screen flex items-end relative overflow-hidden bg-white">
          <div className="w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div className="container mx-auto px-4 flex flex-col lg:w-1/2 justify-center items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight inter ">
                    Get in touch
                  </h1>
                  <p className="text-[20px] mt-5 sm:text-xl text-[#151515] poppins">
                    We&apos;re here to help! Whether you have <br /> questions
                    about our packages, need support,
                    <br /> or want to discuss your specific needs, reach <br />{" "}
                    out to us.
                  </p>
                </div>
              </div>

              <Image
                src="/contact.svg"
                alt="Product showcase"
                width={500}
                height={500}
                className="w-1/2 h-[80vh] hidden xl:block overflow-hidden border-none"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 bg">
            <div className="max-w-5xl bg-white mx-auto px-10 py-10 border border-slate-200 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-20">
                <div className="space-y-10 py-10">
                  <h2 className="text-[32px] font-bold mb-8 inter">
                    Talk with our sale team
                  </h2>
                  <p className="text-lg mb-8">
                    Our office hours are Monday to Friday,
                    <br /> 9 AM to 5 PM. We&apos;re here to assist you with any
                    questions or support you need.
                  </p>

                  <button className="button">+959 535 433 452</button>
                </div>

                <div className="hidden md:block w-1 h-52 bg-primary opacity-25"></div>
                <div className="md:hidden h-1 w-full bg-primary opacity-25"></div>

                <div className="space-y-10 py-10">
                  <h2 className="text-[32px] font-bold mb-8 inter">
                    Send Us an email
                  </h2>
                  <p className="text-lg mb-8">
                    Our office hours are Monday to Friday,
                    <br /> 9 AM to 5 PM. We&apos;re here to assist you with any
                    questions or support you need.
                  </p>

                  <button className="button">livecode.com.mm@gmail.com</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
