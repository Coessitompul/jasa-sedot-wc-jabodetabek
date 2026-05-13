import SectionHeader from "@/components/shared/SectionHeader"
import TestimoniCard from "@/components/shared/TestimoniCard"
import { testimoniList } from "@/data/testimoni"

export default function TestimoniSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimoni"
          title="Apa Kata Pelanggan Kami"
          subtitle="Ribuan pelanggan telah mempercayakan masalah sanitasi mereka kepada kami."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimoniList.map((t) => (
            <TestimoniCard key={t.nama} testimoni={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
