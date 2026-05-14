import { MessageCircle, MapPin, Wrench, BadgeCheck } from "lucide-react"
import SectionHeader from "@/components/shared/SectionHeader"
import AnimateIn from "@/components/shared/AnimateIn"

const steps = [
  { icon: MessageCircle, title: "Hubungi Kami",    desc: "Hubungi via WhatsApp atau telepon. Ceritakan masalah dan lokasi Anda." },
  { icon: MapPin,        title: "Survei Lokasi",   desc: "Tim kami datang untuk survei dan memberikan estimasi harga yang transparan." },
  { icon: Wrench,        title: "Pengerjaan",      desc: "Proses sedot dilakukan dengan peralatan modern dan prosedur higienis." },
  { icon: BadgeCheck,    title: "Selesai & Garansi", desc: "Pekerjaan selesai bersih. Kami berikan garansi kepuasan untuk setiap layanan." },
]

export default function CaraKerjaSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn animation="fade-up">
          <SectionHeader
            badge="Cara Pesan"
            title="Proses Pemesanan Mudah"
            subtitle="4 langkah simpel dari telepon sampai masalah beres."
          />
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
          {/* Garis penghubung desktop */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <AnimateIn
                key={step.title}
                animation="fade-up"
                delay={i * 120}
                duration={500}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Nomor */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center z-20">
                  {i + 1}
                </div>

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-navy flex items-center justify-center mb-3 md:mb-5 shadow-md hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-display text-sm md:text-base lg:text-lg font-bold text-navy mb-1.5 md:mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
