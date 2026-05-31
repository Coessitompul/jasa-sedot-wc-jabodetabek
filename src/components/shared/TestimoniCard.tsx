import { Star } from "lucide-react"
import type { Testimoni } from "@/data/testimoni"

type Props = {
  testimoni: Testimoni
}

export default function TestimoniCard({ testimoni }: Props) {
  const initials = testimoni.nama
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-1">
        {Array.from({ length: testimoni.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
        ))}
      </div>
      <p className="text-slate-200 text-sm leading-relaxed italic">&ldquo;{testimoni.teks}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-11 h-11 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
          <span className="text-brand-orange font-bold text-sm">{initials}</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimoni.nama}</p>
          <p className="text-slate-300 text-xs">{testimoni.kota}</p>
        </div>
      </div>
    </div>
  )
}
