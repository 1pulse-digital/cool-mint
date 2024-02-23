import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/detailed/footer";
// import Navbar from "@/components/navbar";
import Header from "@/components/header";


const inter = Inter({ subsets: ["latin"] });
const isDev = process?.env.NODE_ENV === "development";

export const metadata: Metadata = {
  title: "Made in Workshop",
  description: "Shared workshop and fabrication studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${isDev ? "debug-screens " : ""}${inter.className}`}>
       
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
