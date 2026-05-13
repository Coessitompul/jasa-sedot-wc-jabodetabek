import type { Metadata } from "next"
import MiniHero from "@/components/shared/MiniHero"
import KontakContent from "@/components/kontak/KontakContent"
import { COMPANY, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: `Kontak & Pemesanan Jasa Sedot WC`,
  description: `Hubungi ${COMPANY.name} kapan saja 24 jam via WhatsApp ${COMPANY.phone}. Estimasi harga gratis, respon cepat, teknisi siap hadir ke lokasi Anda.`,
  alternates: { canonical: `${SITE_URL}/kontak` },
  openGraph: {
    title: `Kontak & Pemesanan — ${COMPANY.name}`,
    description: `Hubungi kami 24 jam via WhatsApp atau telepon. Estimasi gratis, respon cepat!`,
    url: `${SITE_URL}/kontak`,
  },
  twitter: {
    title: `Kontak & Pemesanan — ${COMPANY.name}`,
    description: `Hubungi kami 24 jam via WhatsApp atau telepon. Estimasi gratis, respon cepat!`,
  },
}

export default function KontakPage() {
  return (
    <>
      <MiniHero
        title="Kontak Kami"
        subtitle="Hubungi kami kapan saja. Tim kami siap membantu 24 jam."
        breadcrumbs={[{ label: "Kontak" }]}
      />
      <KontakContent />
    </>
  )
}
