import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/detailed/footer";
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
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="http://localhost:3000/_next/static/media/MiW%20Favicon.08e4e686.svg"
      />

      <body className={`${isDev ? "debug-screens " : ""}${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
