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

export function getWALink(pesan?: string) {
  const text = pesan ?? "Halo, saya butuh jasa sedot WC. Bisa dibantu?"
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`
}
