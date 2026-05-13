import { Phone } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import { COMPANY, getWALink } from "@/lib/constants"

export default function CTABanner() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-linear-to-r from-brand-orange to-brand-orange-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-100 font-semibold mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">Layanan Darurat Tersedia</p>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-5">
          Butuh Sedot WC Sekarang?
        </h2>
        <p className="text-orange-100 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-7 md:mb-10">
          Jangan tunggu sampai meluap. Hubungi kami sekarang dan tim kami siap hadir dalam{" "}
          <strong className="text-white">{COMPANY.responseTime}</strong>.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <a
            href={getWALink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-wa text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-wa-dark transition-colors shadow-lg"
          >
            <WAIcon className="w-5 h-5 md:w-6 md:h-6" />
            Chat WhatsApp
          </a>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
