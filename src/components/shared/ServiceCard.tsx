import { Check, type LucideIcon } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import { getWALink } from "@/lib/constants"

type Props = {
  slug: string
  icon: LucideIcon
  nama: string
  deskripsi: string
  poin: string[]
  harga: string
  variant?: "compact" | "full"
}

export default function ServiceCard({ slug, icon: Icon, nama, deskripsi, poin, harga, variant = "compact" }: Props) {
  if (variant === "full") {
    return (
      <div id={slug} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5 md:p-8 flex flex-col">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-navy" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-navy">{nama}</h3>
            <p className="text-brand-orange font-semibold text-sm mt-0.5">{harga}</p>
          </div>
        </div>
        <p className="text-slate-600 mb-5 leading-relaxed">{deskripsi}</p>
        <ul className="space-y-2 mb-6">
          {poin.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
              <Check className="w-4 h-4 text-wa shrink-0" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <a
            href={getWALink(`Halo, saya butuh jasa ${nama}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-wa text-white px-6 py-3 rounded-xl font-semibold hover:bg-wa-dark transition-colors"
          >
            <WAIcon className="w-5 h-5" />
            Pesan Sekarang
          </a>
        </div>
      </div>
    )
  }

  return (
    <div id={slug} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-navy" />
      </div>
      <h3 className="font-display text-lg font-bold text-navy mb-2">{nama}</h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">{deskripsi}</p>
      <p className="text-brand-orange font-bold text-sm mb-4">{harga}</p>
      <div className="mt-auto">
        <a
          href={getWALink(`Halo, saya butuh jasa ${nama}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-wa text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-wa-dark transition-colors"
        >
          <WAIcon className="w-4 h-4" />
          Pesan Sekarang
        </a>
      </div>
    </div>
  )
}
