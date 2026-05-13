import type { Metadata } from "next"
import { Package, Building } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import MiniHero from "@/components/shared/MiniHero"
import ServiceCard from "@/components/shared/ServiceCard"
import CTABannerWA from "@/components/shared/CTABannerWA"
import { layananList } from "@/data/layanan"
import { getWALink } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Layanan Kami",
  description:
    "Lengkap! Layanan sedot WC, septic tank, IPAL, grease trap, sumur bor, dan penanganan darurat 24 jam se-Jabodetabek. Harga transparan, bergaransi.",
}

const faqs = [
  {
    q: "Berapa lama proses pengerjaan sedot WC?",
    a: "Untuk rumah tangga biasa, proses sedot WC umumnya memakan waktu 1-3 jam tergantung volume dan kondisi tangki.",
  },
  {
    q: "Apakah ada biaya tambahan di luar estimasi?",
    a: "Tidak ada biaya tersembunyi. Estimasi harga diberikan sebelum pengerjaan dan kami komitmen tidak ada tambahan biaya.",
  },
  {
    q: "Apakah layanan tersedia di hari libur?",
    a: "Ya, kami beroperasi 24 jam penuh termasuk hari libur nasional dan hari raya.",
  },
  {
    q: "Bagaimana cara pemesanan layanan?",
    a: "Cukup hubungi kami via WhatsApp atau telepon. Tim kami akan merespons dalam hitungan menit.",
  },
  {
    q: "Apakah ada garansi setelah pengerjaan?",
    a: "Ya, setiap layanan kami dilengkapi garansi kepuasan. Jika ada masalah pasca pengerjaan, kami siap kembali tanpa biaya tambahan.",
  },
  {
    q: "Berapa kapasitas maksimum yang bisa ditangani?",
    a: "Armada kami memiliki kapasitas tangki hingga 8.000 liter. Untuk kebutuhan melebihi itu, kami bisa mengirim lebih dari satu armada.",
  },
]

const paketBundling = [
  {
    icon: Package,
    nama: "Paket Rumah Tangga",
    layanan: ["Sedot WC / Tinja", "Sedot Septic Tank"],
    deskripsi: "Solusi lengkap untuk hunian rumah tinggal dan kost. Satu kunjungan, dua masalah beres.",
    harga: "Mulai Rp 550.000",
    waPesan: "Halo, saya tertarik dengan Paket Rumah Tangga (Sedot WC + Septic Tank)",
  },
  {
    icon: Building,
    nama: "Paket Komersial",
    layanan: ["Sedot IPAL", "Sedot Grease Trap"],
    deskripsi: "Ideal untuk restoran, hotel, pabrik, dan gedung komersial yang membutuhkan penanganan IPAL dan grease trap berkala.",
    harga: "Mulai Rp 850.000",
    waPesan: "Halo, saya tertarik dengan Paket Komersial (IPAL + Grease Trap)",
  },
]

export default function LayananPage() {
  return (
    <>
      <MiniHero
        title="Layanan Kami"
        subtitle="Solusi sanitasi lengkap untuk rumah tangga hingga industri se-Jabodetabek."
        breadcrumbs={[{ label: "Layanan" }]}
      />

      {/* Grid Layanan */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {layananList.map((layanan) => (
              <ServiceCard
                key={layanan.slug}
                slug={layanan.slug}
                icon={layanan.icon}
                nama={layanan.nama}
                deskripsi={layanan.deskripsi}
                poin={layanan.poin}
                harga={layanan.harga}
                variant="full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Paket Bundling */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-orange/10 text-brand-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Hemat Lebih Banyak
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Paket Bundling</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Gabungkan dua layanan dalam satu kunjungan dan dapatkan harga yang lebih hemat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paketBundling.map((paket) => {
              const Icon = paket.icon
              return (
                <div key={paket.nama} className="bg-navy rounded-2xl p-8 text-white flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{paket.nama}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paket.layanan.map((l) => (
                      <span key={l} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                        {l}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{paket.deskripsi}</p>
                  <p className="text-brand-orange font-bold text-xl mb-6">{paket.harga}</p>
                  <div className="mt-auto">
                    <a
                      href={getWALink(paket.waPesan)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-wa text-white px-6 py-3 rounded-xl font-semibold hover:bg-wa-dark transition-colors"
                    >
                      <WAIcon className="w-5 h-5" />
                      Pesan Paket Ini
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-navy">Pertanyaan Umum</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display font-bold text-navy mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABannerWA />
    </>
  )
}
