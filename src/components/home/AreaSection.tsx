import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import SectionHeader from "@/components/shared/SectionHeader"
import { areaChip, findAreaSlug } from "@/data/area"

export default function AreaSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Jangkauan Layanan"
          title="Area Layanan Kami"
          subtitle="Kami melayani seluruh wilayah Jabodetabek dengan armada yang siap bergerak kapan saja."
        />
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {areaChip.map((chip) => {
            const slug = findAreaSlug(chip)
            const className =
              "flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            if (slug) {
              return (
                <Link
                  key={chip}
                  href={`/area-layanan/${slug}`}
                  className={`${className} bg-navy text-white hover:bg-navy-light`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {chip}
                </Link>
              )
            }
            return (
              <span
                key={chip}
                className={`${className} bg-white text-slate-700 border border-slate-200 hover:border-navy hover:text-navy cursor-default`}
              >
                <MapPin className="w-3.5 h-3.5" />
                {chip}
              </span>
            )
          })}
        </div>
        <div className="text-center">
          <Link
            href="/area-layanan"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-3.5 rounded-xl font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            Lihat Semua Area
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
