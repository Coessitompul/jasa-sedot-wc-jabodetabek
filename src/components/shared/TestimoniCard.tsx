import Image from "next/image"
import { Star } from "lucide-react"
import type { Testimoni } from "@/data/testimoni"

type Props = {
  testimoni: Testimoni
}

export default function TestimoniCard({ testimoni }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-1">
        {Array.from({ length: testimoni.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
        ))}
      </div>
      <p className="text-slate-200 text-sm leading-relaxed italic">&ldquo;{testimoni.teks}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto">
        <Image
          src={testimoni.avatar}
          alt={testimoni.nama}
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-white font-semibold text-sm">{testimoni.nama}</p>
          <p className="text-slate-300 text-xs">{testimoni.kota}</p>
        </div>
      </div>
    </div>
  )
}
