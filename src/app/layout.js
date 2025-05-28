import { Poppins, Work_Sans, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const work_sans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const noto_sans_myanmar = Noto_Sans_Myanmar({
  variable: "--font-noto-sans-myanmar",
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Live Code Myanmar",
  description: "Live Code Myanmar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${work_sans.variable} ${noto_sans_myanmar.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
