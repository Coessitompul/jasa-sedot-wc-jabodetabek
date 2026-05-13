import { Shield, Award, Leaf, BadgeCheck } from "lucide-react"
import SectionHeader from "@/components/shared/SectionHeader"

const dokumen = [
  {
    icon: Shield,
    nama: "SIUP",
    keterangan: "Surat Izin Usaha Perdagangan resmi dari Dinas Perindustrian & Perdagangan",
    nomor: "No. 503/SIUP/2014",
  },
  {
    icon: Award,
    nama: "NIB",
    keterangan: "Nomor Induk Berusaha terdaftar di sistem OSS Kementerian Investasi",
    nomor: "No. 8120001234567",
  },
  {
    icon: Leaf,
    nama: "Izin Lingkungan",
    keterangan: "Izin pengelolaan limbah B3 dari Dinas Lingkungan Hidup DKI Jakarta",
    nomor: "No. 660/IL/2015",
  },
  {
    icon: BadgeCheck,
    nama: "Sertifikat Kompetensi",
    keterangan: "Teknisi bersertifikat dari Badan Nasional Sertifikasi Profesi (BNSP)",
    nomor: "No. BNSP/SKT/2020",
  },
]

export default function LegalitasSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Legalitas"
          title="Terdaftar & Berlisensi Resmi"
          subtitle="Beroperasi secara legal dengan dokumen izin lengkap dari instansi pemerintah terkait."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {dokumen.map((dok) => {
            const Icon = dok.icon
            return (
              <div
                key={dok.nama}
                className="bg-slate-50 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center text-center border border-slate-200 hover:border-navy transition-colors"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-navy flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-display text-sm md:text-base lg:text-lg font-bold text-navy mb-1">{dok.nama}</h3>
                <p className="text-slate-400 text-xs mb-2 md:mb-3">{dok.nomor}</p>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed hidden sm:block">{dok.keterangan}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
