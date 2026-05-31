export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sedotwcjabodetabek.com"

export const COMPANY = {
  name: "Sedot WC Jabodetabek",
  tagline: "Solusi Sanitasi Profesional Jabodetabek",
  phone: "0881-0108-71485",
  phoneTel: "+62881010871485",
  whatsapp: "62881010871485",
  email: "supportsedotwcjabodetabek@gmail.com",
  address: "Seluruh Wilayah Jabodetabek",
  mapsEmbed: "https://maps.google.com/maps?q=Jakarta+Selatan&output=embed",
  established: "2014",
  totalCustomers: "10.000+",
  responseTime: "Cepat",
  rating: "4.9",
  instagram: "https://instagram.com/sedotwcjabodetabek",
  facebook: "https://facebook.com/sedotwcjabodetabek",
}

export const GA_CONVERSION_LABEL = "AW-18190369324/2kaCCIfVp7QcEKyE7OFD"

export const WA_MESSAGES = {
  hero:          "Halo, WC saya mampet dan butuh bantuan segera. Bisa minta estimasi harga dan waktu kedatangan?",
  floating:      "Halo, saya butuh jasa sedot WC. Bisa minta estimasi harga dan jadwal terdekat?",
  darurat:       "DARURAT 🚨 WC saya bermasalah parah, butuh teknisi SEKARANG. Lokasi saya di:",
  sedotWC:       "Halo, saya mau pesan jasa Sedot WC / Tinja. Berapa harganya dan kapan bisa datang?",
  sedotIPAL:     "Halo, saya mau tanya tentang jasa Sedot IPAL. Bisa minta penawaran harga?",
  sedotGreaseTrap: "Halo, saya butuh jasa Sedot Grease Trap. Bisa minta estimasi harga?",
}

export function getWALink(pesan?: string) {
  const text = pesan ?? WA_MESSAGES.hero
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`
}

export function trackWAConversion() {
  if (typeof window === "undefined") return
  const g = (window as any).gtag
  if (typeof g === "function") {
    g("event", "conversion", {
      send_to: GA_CONVERSION_LABEL,
      value: 1.0,
      currency: "IDR",
    })
  }
}
