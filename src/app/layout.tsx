import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import Navbar from "@/app/components/Navbar"
import LenisProvider from "./components/LenisProvider"
import Footer from "./components/Footer"

const mainFont = Playfair_Display({
  variable: "--font-playfair-serif",
  subsets: ["cyrillic"],
})

const bodyFont = Lato({
  variable: "--font-lato-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata : Metadata = {
  title: "Trisha Aesthetics — Advanced Skin & Aesthetic Treatments | [City] Clinic",
  description: "Personalized aesthetic care including Botox, fillers, laser hair removal, facials, and skin rejuvenation. Book consultations with certified practitioners at our [City] clinic.",
  keywords: [
    "aesthetic clinic [city]",
    "skin clinic [city]",
    "Botox [city]",
    "dermal fillers [city]",
    "laser hair removal [city]",
    "lip fillers [city]",
    "acne scar treatment [city]",
    "medical aesthetics",
    "cosmetic dermatology",
    "non-surgical treatments"
  ],
  robots: { index: true, follow: true },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} ${bodyFont.variable} antialiased`}>
        <LenisProvider />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
