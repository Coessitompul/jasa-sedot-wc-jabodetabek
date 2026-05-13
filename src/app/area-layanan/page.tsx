import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import MiniHero from "@/components/shared/MiniHero"
import CTABannerWA from "@/components/shared/CTABannerWA"
import { areaList } from "@/data/area"

import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Area Layanan Sedot WC Jabodetabek — Jakarta, Bekasi, Depok, Tangerang, Bogor",
  description:
    "Jasa sedot WC melayani seluruh Jabodetabek: Jakarta Selatan, Jakarta Utara, Jakarta Timur, Jakarta Barat, Bekasi, Depok, Tangerang, dan Bogor. Respon cepat ke lokasi Anda.",
  alternates: { canonical: `${SITE_URL}/area-layanan` },
  openGraph: {
    title: "Area Layanan Sedot WC Jabodetabek — Semua Kota & Kabupaten",
    description: "Melayani seluruh Jabodetabek: Jakarta, Bekasi, Depok, Tangerang, dan Bogor. Respon cepat, teknisi profesional.",
    url: `${SITE_URL}/area-layanan`,
  },
  twitter: {
    title: "Area Layanan Sedot WC Jabodetabek — Semua Kota & Kabupaten",
    description: "Melayani seluruh Jabodetabek: Jakarta, Bekasi, Depok, Tangerang, dan Bogor. Respon cepat, teknisi profesional.",
  },
}

export default function AreaLayananPage() {
  return (
    <>
      <MiniHero
        title="Area Layanan Kami"
        subtitle="Melayani seluruh wilayah Jabodetabek dengan armada yang siap bergerak kapan saja."
        breadcrumbs={[{ label: "Area Layanan" }]}
      />

      {/* Grid Area */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaList.map((area) => (
              <div
                key={area.slug}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-navy">{area.nama}</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{area.deskripsi}</p>
                <div className="mt-auto">
                  <Link
                    href={`/area-layanan/${area.slug}`}
                    className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:underline"
                  >
                    Lihat Detail
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peta sederhana / embed placeholder */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="bg-navy/5 p-6 border-b border-slate-100">
              <h2 className="font-display text-xl font-bold text-navy">Peta Jangkauan Layanan</h2>
              <p className="text-slate-600 text-sm mt-1">Wilayah Jabodetabek — Jakarta, Bekasi, Depok, Tangerang, Bogor</p>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Jabodetabek&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta area layanan Jabodetabek"
            />
          </div>
        </div>
      </section>

      <CTABannerWA
        title="Layanan di Area Anda?"
        subtitle="Hubungi kami sekarang dan cek ketersediaan layanan di lokasi Anda secara langsung."
      />
    </>
  )
}
