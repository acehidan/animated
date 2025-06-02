import Link from "next/link";
import { Facebook, MessageCircle, Linkedin, Circle } from "lucide-react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <footer className="bg-[#232323] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="/Logowhite.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
            <h3 className="text-[24px] font-medium poppins mt-5">
              Sale Easily & Better with us.
            </h3>
          </div>

          <div className="space-y-10 md:space-y-4 w-full md:w-auto flex flex-col md:items-end">
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
              {pathname !== "/" && (
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 font-medium text-[14px] transition-colors"
                >
                  Home
                </Link>
              )}
              {pathname !== "/about" && (
                <Link
                  href="/about"
                  className="text-white hover:text-gray-300 font-medium text-[14px] transition-colors"
                >
                  About Live Code
                </Link>
              )}

              {pathname !== "/contact" && (
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300 font-medium text-[14px] transition-colors"
                >
                  Contact
                </Link>
              )}
            </nav>

            <div className="flex justify-between md:space-x-4 lg:space-x-10">
              <Link
                href="https://www.facebook.com/livecodemyanmar"
                target="_blank"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@live.code.myanmar?_t=ZS-8wrJ67NlGRk&_r=1"
                target="_blank"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/live-code-myanmar/"
                target="_blank"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="m.me/livecodemyanmar"
                target="_blank"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebookMessenger size={20} />
                <span className="sr-only">Messenger</span>
              </Link>
              {/* <Link
                href="#"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaTelegram size={20} />
                <span className="sr-only">Telegram</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
