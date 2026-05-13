import Image from "next/image"
import { CheckCircle, Zap } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import { COMPANY, getWALink } from "@/lib/constants"

const trustBadges = [
  "Bergaransi",
  "10+ Tahun",
  "Harga Transparan",
  "Respon Cepat",
]

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2D6E 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6">
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Melayani 24 Jam / 7 Hari
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-4 md:mb-5">
              WC Mampet? Jangan Panik,{" "}
              <span className="text-brand-orange">Biar Kami yang Beresin!</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
              Sedot WC Jabodetabek tanpa drama harga &ldquo;getok&rdquo;. Teknisi kami profesional, alatnya modern, dan yang pasti datang tepat waktu. Cukup WhatsApp, teknisi meluncur, masalah beres dalam sekejap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <a
                href={getWALink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-wa text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-wa-dark transition-colors shadow-lg"
              >
                <WAIcon className="w-5 h-5 md:w-6 md:h-6" />
                Hubungi Sekarang
              </a>
              <a
                href="/layanan"
                className="flex items-center justify-center gap-2 border-2 border-navy text-navy px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-navy hover:text-white transition-colors"
              >
                Layanan Kami
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-xs md:text-sm text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-wa shrink-0" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right image — tablet up */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=700&fit=crop"
                alt="Teknisi jasa sedot WC profesional"
                width={600}
                height={700}
                className="w-full object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
                <p className="text-navy font-bold text-2xl">{COMPANY.totalCustomers}</p>
                <p className="text-slate-600 text-sm">Pelanggan Puas</p>
              </div>
              <div className="absolute top-6 right-6 bg-brand-orange rounded-2xl p-4 shadow-xl">
                <p className="text-white font-bold text-2xl">{COMPANY.rating}★</p>
                <p className="text-orange-100 text-sm">Rating Kami</p>
              </div>
            </div>
          </div>

          {/* Tablet: stats row bawah teks */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { value: COMPANY.totalCustomers, label: "Pelanggan Puas" },
              { value: "10+", label: "Tahun Pengalaman" },
              { value: COMPANY.responseTime, label: "Waktu Respon" },
              { value: `${COMPANY.rating}★`, label: "Rating" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-50 rounded-xl p-3 text-center">
                <p className="font-display font-bold text-navy text-lg md:text-xl">{s.value}</p>
                <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
