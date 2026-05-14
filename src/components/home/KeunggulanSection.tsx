import { Clock, DollarSign, Zap, Shield, Wrench, BadgeCheck } from "lucide-react"
import SectionHeader from "@/components/shared/SectionHeader"
import AnimateIn from "@/components/shared/AnimateIn"

const keunggulan = [
  { icon: Clock,      title: "Layanan 24 Jam",      desc: "Kami beroperasi penuh 24 jam sehari, 7 hari seminggu — termasuk hari libur nasional." },
  { icon: DollarSign, title: "Harga Transparan",     desc: "Tidak ada biaya tersembunyi. Estimasi harga diberikan sebelum pengerjaan dimulai." },
  { icon: Zap,        title: "Respon Cepat",         desc: "Tim kami siap hadir dalam waktu kurang dari 2 jam setelah konfirmasi pemesanan." },
  { icon: Shield,     title: "Berizin Resmi",        desc: "Beroperasi dengan SIUP, NIB, dan izin lingkungan resmi dari pemerintah." },
  { icon: Wrench,     title: "Peralatan Modern",     desc: "Menggunakan vacuum truck berkapasitas tinggi dan peralatan sanitasi terkini." },
  { icon: BadgeCheck, title: "Bergaransi",           desc: "Setiap pekerjaan dilengkapi garansi kepuasan. Tidak puas? Kami kembali tanpa biaya tambahan." },
]

export default function KeunggulanSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <SectionHeader
            badge="Keunggulan Kami"
            title="Kenapa Pilih Kami?"
            subtitle="Kami memahami bahwa masalah sanitasi adalah urusan penting. Inilah komitmen kami kepada setiap pelanggan."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {keunggulan.map((item, i) => {
            const Icon = item.icon
            return (
              <AnimateIn
                key={item.title}
                animation="fade-up"
                delay={i * 80}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-5 md:p-7 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-navy flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="font-display text-base md:text-lg font-bold text-navy mb-1.5 md:mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
