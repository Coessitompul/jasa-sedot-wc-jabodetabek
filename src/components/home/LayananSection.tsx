import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionHeader from "@/components/shared/SectionHeader"
import ServiceCard from "@/components/shared/ServiceCard"
import { layananList } from "@/data/layanan"

export default function LayananSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Layanan Kami"
          title="Solusi Sanitasi Lengkap"
          subtitle="Dari sedot WC rumah tangga hingga IPAL industri, kami menangani semua kebutuhan sanitasi Anda."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {layananList.map((layanan) => (
            <ServiceCard
              key={layanan.slug}
              slug={layanan.slug}
              icon={layanan.icon}
              nama={layanan.nama}
              deskripsi={layanan.deskripsi}
              poin={layanan.poin}
              harga={layanan.harga}
            />
          ))}
        </div>
        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-navy hover:text-white transition-colors text-sm md:text-base"
          >
            Lihat Semua Layanan
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
