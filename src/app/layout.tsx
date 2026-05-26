import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWA from "@/components/layout/FloatingWA"
import { COMPANY, SITE_URL } from "@/lib/constants"

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

const defaultTitle    = `${COMPANY.name} - Jasa Sedot WC Profesional Jabodetabek`
const defaultDesc     = "Jasa sedot WC & tinja profesional se-Jabodetabek. Armada lengkap, teknisi berpengalaman, harga transparan. Melayani 24 jam, respon cepat 1-2 jam."
const defaultOgImage  = `${SITE_URL}/webp/hero-image.webp`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo-tab.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo-tab.svg",
  },

  title: {
    template: `%s | ${COMPANY.name}`,
    default: defaultTitle,
  },
  description: defaultDesc,
  keywords: [
    "sedot wc", "jasa sedot wc", "jasa tinja", "sedot septic tank",
    "jabodetabek", "jakarta", "bekasi", "depok", "tangerang", "bogor",
    "sedot wc murah", "sedot wc 24 jam", "sedot wc profesional",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: defaultTitle,
    description: defaultDesc,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: `${COMPANY.name} — Jasa Sedot WC Profesional` }],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDesc,
    images: [defaultOgImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: COMPANY.name,
    description: defaultDesc,
    url: SITE_URL,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    logo: `${SITE_URL}/logo-tab.svg`,
    image: defaultOgImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2615,
      longitude: 106.8106,
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Bekasi" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bogor" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "Rp 250.000 - Rp 1.500.000",
    sameAs: [COMPANY.instagram, COMPANY.facebook],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`,
    foundingDate: COMPANY.established,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.rating,
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1200",
    },
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
