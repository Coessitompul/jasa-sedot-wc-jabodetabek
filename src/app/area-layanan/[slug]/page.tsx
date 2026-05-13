import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import MiniHero from "@/components/shared/MiniHero"
import ServiceCard from "@/components/shared/ServiceCard"
import TestimoniCard from "@/components/shared/TestimoniCard"
import CTABannerWA from "@/components/shared/CTABannerWA"
import FaqAccordion from "@/components/shared/FaqAccordion"
import { areaList } from "@/data/area"
import { layananList } from "@/data/layanan"
import { testimoniList } from "@/data/testimoni"
import { getWALink } from "@/lib/constants"

export async function generateStaticParams() {
  return areaList.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = areaList.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: `Jasa Sedot WC ${area.nama}`,
    description: `Jasa sedot WC profesional di ${area.nama}. Melayani 24 jam, respon cepat 1-2 jam. Harga transparan, bergaransi. Hubungi sekarang!`,
  }
}

const localFaqs = (nama: string) => [
  {
    q: `Berapa biaya sedot WC di ${nama}?`,
    a: `Biaya sedot WC di ${nama} mulai dari Rp 300.000 tergantung jenis layanan dan volume tangki. Hubungi kami untuk estimasi gratis sebelum pengerjaan.`,
  },
  {
    q: `Apakah melayani seluruh kecamatan di ${nama}?`,
    a: `Ya, kami melayani seluruh kecamatan di ${nama} dan sekitarnya. Tim kami familiar dengan area ini dan bisa hadir dalam waktu singkat.`,
  },
  {
    q: `Berapa lama waktu respons untuk area ${nama}?`,
    a: `Untuk area ${nama}, kami menargetkan waktu respons kurang dari 2 jam setelah konfirmasi pemesanan.`,
  },
  {
    q: `Apakah tersedia layanan darurat 24 jam di ${nama}?`,
    a: `Ya, kami menyediakan layanan darurat 24 jam termasuk malam hari dan hari libur untuk seluruh area ${nama}.`,
  },
]

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = areaList.find((a) => a.slug === slug)
  if (!area) notFound()

  const testimoniArea = testimoniList.filter((t) =>
    t.kota.toLowerCase().includes(area.nama.toLowerCase().split(" ")[0])
  )

  return (
    <>
      <MiniHero
        title={`Jasa Sedot WC ${area.nama}`}
        subtitle="Cepat, Bersih & Terpercaya"
        breadcrumbs={[
          { label: "Area Layanan", href: "/area-layanan" },
          { label: area.nama },
        ]}
      />

      {/* Deskripsi area */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy mb-5">
                Layanan Sedot WC Profesional di {area.nama}
              </h2>
              <div className="prose prose-slate max-w-none space-y-4 text-slate-600">
                <p>
                  CV. Berkah Jaya Sanitasi melayani jasa sedot WC dan tinja profesional di seluruh wilayah{" "}
                  <strong>{area.nama}</strong> dan sekitarnya. Dengan armada vacuum truck berkapasitas besar dan
                  teknisi berpengalaman, kami siap menangani berbagai kebutuhan sanitasi Anda.
                </p>
                <p>
                  {area.deskripsi} Tim kami yang berbasis di area {area.nama} memastikan waktu respons yang
                  cepat — umumnya kurang dari 2 jam setelah konfirmasi pemesanan.
                </p>
                <p>
                  Kami beroperasi 24 jam penuh, 7 hari seminggu, termasuk hari libur nasional. Harga transparan
                  tanpa biaya tersembunyi, dan setiap pekerjaan dilengkapi garansi kepuasan pelanggan.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Respon cepat < 2 jam", "Harga transparan", "Bergaransi", "Higienis & bersih", "Teknisi bersertifikat", "Armada lengkap"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-24 self-start">
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-lg mb-4">Pesan Sekarang</h3>
                <p className="text-slate-300 text-sm mb-5">
                  Hubungi kami via WhatsApp untuk respon tercepat. Estimasi harga gratis!
                </p>
                <a
                  href={getWALink(`Halo, saya butuh jasa sedot WC di ${area.nama}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-wa text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-wa-dark transition-colors w-full"
                >
                  <WAIcon className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daftar layanan */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy mb-8">
            Layanan Tersedia di {area.nama}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {layananList.map((layanan) => (
              <ServiceCard
                key={layanan.slug}
                slug={layanan.slug}
                icon={layanan.icon}
                nama={layanan.nama}
                deskripsi={layanan.deskripsi}
                poin={layanan.poin}
                harga={layanan.harga}
                area={area.nama}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimoni area */}
      {testimoniArea.length > 0 && (
        <section className="py-10 md:py-16 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white mb-8">
              Kata Pelanggan di {area.nama}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimoniArea.map((t) => (
                <TestimoniCard key={t.nama} testimoni={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ lokal */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy mb-8">
            FAQ — Jasa Sedot WC {area.nama}
          </h2>
          <FaqAccordion items={localFaqs(area.nama)} />
        </div>
      </section>

      <CTABannerWA
        title={`Butuh Sedot WC di ${area.nama}?`}
        subtitle="Hubungi kami sekarang dan dapatkan estimasi harga gratis. Respon cepat, harga transparan!"
      />
    </>
  )
}
