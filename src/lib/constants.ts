export const COMPANY = {
  name: "CV. Berkah Jaya Sanitasi",
  tagline: "Solusi Sanitasi Profesional Jabodetabek",
  phone: "0812-3456-7890",
  phoneTel: "+6281234567890",
  whatsapp: "6281234567890",
  email: "info@berkahjayas anitasi.com",
  address: "Jl. Raya Contoh No. 123, Jakarta Selatan 12560",
  mapsEmbed: "https://maps.google.com/maps?q=Jakarta+Selatan&output=embed",
  established: "2014",
  totalCustomers: "1.200+",
  responseTime: "< 2 Jam",
  rating: "4.9",
  instagram: "https://instagram.com/berkahjayas anitasi",
  facebook: "https://facebook.com/berkahjayas anitasi",
}

export function getWALink(pesan?: string) {
  const text = pesan ?? "Halo, saya butuh jasa sedot WC. Bisa dibantu?"
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`
}
