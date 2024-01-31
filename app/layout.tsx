import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'tailwindcss/tailwind.css';
import 'tailwindcss-debug-screens';


const inter = Inter({ subsets: ['latin'] })
const isDev = process?.env.NODE_ENV === "development";

export const metadata: Metadata = {
  title: 'Made in Workshop',
  description: 'Shared workshop and fabrication studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
    <body className={`${isDev ? "debug-screens " : ""}${inter.className}`}>
        {children}
      </body>
     
    </html>
   
    
    
  )
}
