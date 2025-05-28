"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Customer Management",
    company: "TechCorp",
    sub: (
      <span>
        Keep your stock list <br /> where you can see
      </span>
    ),
    content:
      "Store all your stocks in one place and track the list from the most selling product to the least selling one",
    image: "/feature1.svg",
  },
  {
    id: 2,
    name: "Order Tracking",
    company: "DataDrive Solutions",
    sub: "Track all of your product list from live sales and mange the stock control of your business",
    content:
      "Track all of your product list from live sales and mange the stock control of your business",
    image: "/feature2.svg",
  },
  {
    id: 3,
    name: "Live Sale Code",
    company: "Creative Studios",
    sub: "Auto-generated types keep everything working as expected.",
    content: "Auto-generated types keep everything working as expected.",
    image: "/feature3.svg",
  },
  {
    id: 4,
    name: "Stock Left  Update",
    company: "InnovateCo",
    sub: "Validate content structure before shipping live.",
    content: "Validate content structure before shipping live.",
    image: "/feature4.svg",
  },
];
export default function ProductFeatureCarousel() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Custom previous button click handler
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Custom next button click handler
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    className: "slick-slider",
    centerMode: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    // variableWidth: true,
    arrows: false, // Hide default arrows
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-4 lg:px-20 mx-auto">
        <div className="w-full">
          <div className=" flex flex-col md:flex-row md:justify-between md:items-center mb-8">
            <div>
              <h2 className="text-4xl my-0 sm:text-5xl text-primary lg:text-6xl font-bold leading-tight inter">
                Built to <br /> Sale Easily
              </h2>
              <p className="text-lg mt-5 sm:text-xl text-[#151515] max-w-lg poppins">
                Manage your shop better and sale online easily
              </p>
            </div>
            <div className=" flex md:items-center space-x-4 mt-4 md:mt-0">
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

          {/* Slider */}
          <div className="mt-10 text-black">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="">
                  <div className="rounded-xl shadow-sm px-5 lg:h-[550px] md:px-10 py-10 border border-slate-100">
                    <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-bold mb-2 text-primary">
                      {testimonial.name}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                      <div className="md:w-1/2 md:px-10 order-2 mt-5 md:mt-0">
                        <h3 className="text-[18px] md:text-[28px] lg:text-[38px] inter text-dark">
                          {testimonial.sub}
                        </h3>
                        <p className="text-[16px] md:text-[18px] lg:text-[24px] poppin mt-5">
                          &quot;{testimonial.content}&quot;
                        </p>
                      </div>

                      <div className="w-full md:w-1/2 order-1">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={600}
                          height={500}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Add custom styles for the slider */}
      <style jsx global>{`
        .testimonial-slider .slick-track {
          display: flex !important;
        }
        .testimonial-slider .slick-slide {
          height: inherit !important;
        }
        .testimonial-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}
