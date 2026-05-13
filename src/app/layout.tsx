import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWA from "@/components/layout/FloatingWA"
import { COMPANY } from "@/lib/constants"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "600", "700", "800"],
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${COMPANY.name}`,
    default: `${COMPANY.name} - Jasa Sedot WC Profesional Jabodetabek`,
  },
  description:
    "Jasa sedot WC & tinja profesional se-Jabodetabek. Armada lengkap, teknisi berpengalaman, harga transparan. Melayani 24 jam, respon cepat 1-2 jam.",
  keywords: [
    "sedot wc",
    "jasa tinja",
    "sedot septic tank",
    "jabodetabek",
    "jakarta",
    "bekasi",
    "depok",
    "tangerang",
    "bogor",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: "Jasa sedot WC profesional Jabodetabek",
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
    areaServed: ["Jakarta", "Bekasi", "Depok", "Tangerang", "Bogor"],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "Rp 250.000 - Rp 1.500.000",
  }

  return (
    <html lang="id" className={`${plusJakarta.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  )
}
