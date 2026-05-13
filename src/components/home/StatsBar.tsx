import { Users, Clock, Star, Award } from "lucide-react"
import { COMPANY } from "@/lib/constants"

const stats = [
  { icon: Users, value: COMPANY.totalCustomers, label: "Pelanggan Puas" },
  { icon: Award, value: "10+", label: "Tahun Pengalaman" },
  { icon: Clock, value: COMPANY.responseTime, label: "Waktu Respon" },
  { icon: Star, value: `${COMPANY.rating}★`, label: "Rating Pelanggan" },
]

export default function StatsBar() {
  return (
    <section className="bg-brand-orange py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-6 md:py-8"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {stat.value}
                </p>
                <p className="text-orange-100 text-xs md:text-sm mt-1.5 uppercase tracking-wide font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
