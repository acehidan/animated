"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if we're in a dark section by looking at body background
      const bodyBg = window.getComputedStyle(document.body).backgroundColor;
      setIsDarkSection(bodyBg === "rgb(0, 0, 0)" || bodyBg === "#000000");
    };

    window.addEventListener("scroll", handleScroll);
    // Also add a MutationObserver to detect background color changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          const bodyBg = window.getComputedStyle(document.body).backgroundColor;
          setIsDarkSection(bodyBg === "rgb(0, 0, 0)" || bodyBg === "#000000");
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white backdrop-blur-md shadow-sm`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className={`text-2xl font-bold ${
              isDarkSection ? "text-white" : "text-black"
            }`}
          >
            <Image src="logo.svg" alt="Logo" width={150} height={100} />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors text-[14px] ${
                isActive("/")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary hover:opacity-100 opacity-50"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors text-[14px] ${
                isActive("/about")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary hover:opacity-100 opacity-50"
              }`}
            >
              About Live Code
            </Link>
            {/* <Link
              href="/feature"
              className={`font-medium transition-colors text-[14px] ${
                isActive("/feature")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary hover:opacity-100 opacity-50"
              }`}
            >
              Features
            </Link> */}
            {/* <Link
              href="/plan"
              className={`font-medium transition-colors text-[14px] ${
                isActive("/plan")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary hover:opacity-100 opacity-50"
              }`}
            >
              Packages
            </Link> */}
            <Link
              href="/contact"
              className={`font-medium transition-colors text-[14px] ${
                isActive("/contact")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary hover:opacity-100 opacity-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          <Link href="/contact" className="button hidden md:block">
            Consult with us
          </Link>

          <button
            className={`md:hidden ${
              isDarkSection ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDarkSection ? "bg-black" : "bg-white"}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`py-2 font-medium transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-2 font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Live Code
            </Link>

            {/* <Link
              href="/feature"
              className={`py-2 font-medium transition-colors ${
                isActive("/feature")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/plan"
              className={`py-2 font-medium transition-colors ${
                isActive("/plan")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Packages
            </Link> */}
            <Link
              href="/contact"
              className={`py-2 font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : isDarkSection
                  ? "text-white hover:text-primary"
                  : "text-black hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" className="button">
              Consult with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
