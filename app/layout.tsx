import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { Header } from "@/components/header";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Solomon | Personal Portfolio",
  description:
    "Solomon Ndifereke is a Software Engineer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[300dvh] pt-28 sm:pt-36`}
      >
        <div className="absolute bg-[#fbe2e3] -z-10 w-[31.25rem] h-[31.25rem] top-[-6rem] right-[11rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="absolute bg-[#dbd7fb] -z-10 w-[50rem] h-[31.25rem] top-[-1rem] left-[-35rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
