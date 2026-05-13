import Image from "next/image"
import SectionHeader from "@/components/shared/SectionHeader"

const photos = [
  {
    src: "/webp/img1.webp",
    alt: "Armada vacuum truck sedot WC",
  },
  {
    src: "/webp/img2.webp",
    alt: "Teknisi bekerja profesional",
  },
  {
    src: "/webp/img3.webp",
    alt: "Peralatan sedot WC modern",
  },
  {
    src: "/webp/img4.webp",
    alt: "Proses pengerjaan sedot septic tank",
  },
  {
    src: "/webp/img5.webp",
    alt: "Tim lapangan berseragam",
  },
  {
    src: "/webp/img6.webp",
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
