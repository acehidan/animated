"use client";

import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Stock Management ",
    sub: (
      <span>
        Keep your stock list <br /> where you can see
      </span>
    ),
    content:
      "With Live Code Myanmar, managing your product stock is fast and flexible. Easily define live sale codes, edit stock quantities, and add or delete stock in just a few clicks — all from one place.",
    image: "/feature1.svg",
  },
  {
    id: 2,
    name: "Live Sale Section",
    sub: "Track all of your product list from live sales and mange the stock control of your business",
    content:
      "Monitor your stock in real-time during live sessions! The Live Sale section gives you instant visibility of product quantities while you’re live, so you never miss a sale due to stock errors",
    image: "/feature2.svg",
  },
  {
    id: 3,
    name: "Order Management",
    sub: "Auto-generated types keep everything working as expected.",
    content:
      "Track every order from your live sale with ease! See who ordered what in real-time, and export order data to PDF or print them individually or all at once. You can also access order history for up to 365 days — perfect for reviewing past sales or managing customer records.",
    image: "/feature3.svg",
  },
  {
    id: 4,
    name: "Sale Report Insights",
    sub: "Validate content structure before shipping live.",
    content:
      "Get a clear picture of your product performance! The Sale Report feature shows your Top 3 Best-Selling and Top 3 Least-Selling items — including total sales amount and quantity. Make smarter decisions backed by real data.",
    image: "/feature4.svg",
  },
];

export default function ProductFeatureCarousel() {
  const swiperRef = useRef<any>(null);

  // Custom previous button click handler
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Custom next button click handler
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="px-4 lg:px-20 mx-auto">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div>
              <h2 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight">
                Built to <br /> Sale Easily
              </h2>
              <p className="text-lg mt-5 sm:text-xl text-[#151515] max-w-lg">
                Manage your shop better and sale online easily
              </p>
            </div>
            <div className="flex md:items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-500 hover:bg-slate-100 transition-colors shadow-md"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 text-blue-900" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-500 hover:bg-slate-100 transition-colors shadow-md"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 text-blue-900" />
              </button>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="mt-10 text-black overflow-x-hidden">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination]}
              slidesPerView={1.5}
              spaceBetween={20}
              loop={true}
              centeredSlides={false}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="rounded-xl shadow-sm h-[400px] px-8 py-8 border border-slate-200 bg-white">
                    <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-bold mb-4 text-primary">
                      {testimonial.name}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-center h-full">
                      <div className="md:w-1/2 md:pr-6 order-2 mt-4 md:mt-0">
                        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-gray-800 mb-3">
                          {testimonial.sub}
                        </h3>
                        <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed">
                          {testimonial.content}
                        </p>
                      </div>

                      <div className="w-full md:w-1/2 order-1  flex justify-center">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={400}
                          height={400}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
