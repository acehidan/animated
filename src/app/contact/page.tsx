"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import CTASection from "../components/cta-section";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div className="">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="section min-h-screen flex items-end relative overflow-hidden bg-white"
          style={{
            backgroundImage: "url('/pattern.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full mt-40 md:mt-0 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between w-full">
              <div className="container mx-auto px-4 flex flex-col md:w-1/2 justify-center lg:ps-20">
                <div className="space-y-6">
                  <h1 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight inter ">
                    Get in touch
                  </h1>
                  <p className="text-[20px] mt-5 sm:text-xl text-[#1F1F1F] poppins">
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
                className="w-1/2 h-[80vh] hidden md:block overflow-hidden border-none"
              />

              <Image
                src="/contacthero.svg"
                alt="Product showcase"
                width={500}
                height={500}
                className="w-full md:hidden overflow-hidden border-none mt-10"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto  px-4 lg:px-20 bg">
            <div className="bg-white px-10 lg:px-20 py-10 border border-slate-200 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-20">
                <div className="space-y-10 py-10">
                  <h2 className="text-[24px] md:text-[32px] font-semibold mb-8 inter text-[#151515] ">
                    Talk with our sale team
                  </h2>
                  <p className="text-[16px] md:text-[20px] mb-8 text-[#151515] source-sans-3">
                    Our office hours are Monday to Friday,
                    <br /> 9 AM to 5 PM. We&apos;re here to assist you with any{" "}
                    <br />
                    questions or support you need.
                  </p>

                  <a
                    href="tel:+959535433452"
                    className="button w-full flex items-center gap-5"
                  >
                    <MdOutlineLocalPhone size={24} />
                    <span>+959 535 433 452</span>
                  </a>
                </div>

                <div className="hidden md:block w-1 h-52 bg-primary opacity-25"></div>
                <div className="md:hidden h-1 w-full bg-primary opacity-25"></div>

                <div className="space-y-10 py-10 max-w-lg">
                  <h2 className="text-[24px] md:text-[32px] font-semibold mb-8 inter text-[#151515]">
                    Contact us on Messegner
                  </h2>
                  <p className="text-[16px] md:text-[20px] mb-8 text-[#151515] source-sans-3">
                    If you want to learn more about our product <br /> and
                    consult for your business. Our sale team is <br /> ready to
                    answer your question anytime soon.
                  </p>

                  <a
                    href="https://m.me/livecodemyanmar"
                    className="button w-full flex items-center gap-5"
                  >
                    <FaFacebookMessenger size={24} />
                    <span>Live Code Messenger</span>
                  </a>
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
