"use client"

import { Phone } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import { COMPANY, getWALink, trackWAConversion } from "@/lib/constants"

type Props = {
  title?: string
  subtitle?: string
}

export default function CTABannerWA({
  title = "Butuh Bantuan Sekarang?",
  subtitle = "Tim kami siap membantu 24 jam. Hubungi via WhatsApp untuk respon tercepat!",
}: Props) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-2xl md:rounded-3xl px-6 py-10 md:px-10 md:py-12 lg:px-16 text-center">
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">{title}</h2>
          <p className="text-slate-300 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href={getWALink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWAConversion}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-wa text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base hover:bg-wa-dark transition-colors"
            >
              <WAIcon className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </a>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
