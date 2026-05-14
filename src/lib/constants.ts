export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sedotwcjabodetabek.com"

export const COMPANY = {
  name: "Sedot WC Jabodetabek",
  tagline: "Solusi Sanitasi Profesional Jabodetabek",
  phone: "0821-1382-5332",
  phoneTel: "+6282113825332",
  whatsapp: "6282113825332",
  email: "sedotwcjabodetabek@gmail.com",
  address: "Seluruh Wilayah Jabodetabek",
  mapsEmbed: "https://maps.google.com/maps?q=Jakarta+Selatan&output=embed",
  established: "2014",
  totalCustomers: "10.000+",
  responseTime: "Sangat Cepat",
  rating: "4.9",
  instagram: "https://instagram.com/sedotwcjabodetabek",
  facebook: "https://facebook.com/sedotwcjabodetabek",
}

export function getWALink(pesan?: string) {
  const text = pesan ?? "Halo, saya butuh jasa sedot WC. Bisa dibantu?"
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`
}
