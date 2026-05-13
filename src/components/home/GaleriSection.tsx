import Image from "next/image"
import SectionHeader from "@/components/shared/SectionHeader"

const photos = [
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    alt: "Armada vacuum truck sedot WC",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=500&fit=crop",
    alt: "Teknisi bekerja profesional",
  },
  {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    alt: "Peralatan sedot WC modern",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop",
    alt: "Proses pengerjaan sedot septic tank",
  },
  {
    src: "https://images.unsplash.com/photo-1583246702401-b5f1ee01fbb0?w=600&h=400&fit=crop",
    alt: "Tim lapangan berseragam",
  },
  {
    src: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=500&fit=crop",
    alt: "Hasil pekerjaan bersih dan rapi",
  },
]

export default function GaleriSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Galeri"
          title="Dokumentasi Pekerjaan"
          subtitle="Setiap pekerjaan kami dokumentasikan sebagai bukti kualitas dan profesionalisme."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={i % 2 === 0 ? 400 : 500}
                className="w-full object-cover aspect-4/3 hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
