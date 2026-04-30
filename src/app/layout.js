import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "PixGen ai image",
  description: " AI Image Generation Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.className} h-full antialiased`}
    >
      <body
       className="min-h-full flex flex-col">
        <Navbar/>  
        <main className="container mx-auto px-5 md:px-8 lg:px-12">
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
