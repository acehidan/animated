"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F2F3F7] text-[#151515]">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="py-24 pt-32 relative"
          data-bgcolor="#ffffff"
          data-textcolor="#000000"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto md:text-center mt-20">
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-semibold mb-6">
                Get in touch
              </h1>
              <p className="text-lg text-slate-600 mb-8 poppins">
                We&apos;re here to help! Whether you have questions about our
                packages, need support, or want to discuss your specific needs,
                reach out to us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          className="py-16"
          data-bgcolor="#F2F3F7"
          data-textcolor="#000000"
        >
          <div className="container mx-auto px-4 ">
            <div className="max-w-5xl bg-white mx-auto px-10 py-10 border border-slate-200 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-20">
                <div className="space-y-10 py-10">
                  <h2 className="text-[32px] font-bold mb-8">
                    Talk with our sale team
                  </h2>
                  <p className="text-lg mb-8">
                    Our office hours are Monday to Friday,
                    <br /> 9 AM to 5 PM. We're here to assist you with any
                    questions or support you need.
                  </p>

                  <button className="button">+959 535 433 452</button>
                </div>

                <div className="hidden md:block w-1 h-52 bg-primary opacity-25"></div>
                <div className="md:hidden h-1 w-full bg-primary opacity-25"></div>

                <div className="space-y-10 py-10">
                  <h2 className="text-[32px] font-bold mb-8">
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
      </main>

      <Footer />
    </div>
  );
}
