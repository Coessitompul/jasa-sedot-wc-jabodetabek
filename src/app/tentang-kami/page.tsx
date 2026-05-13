import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Award, Leaf, BadgeCheck, Users, Clock, Truck, Star } from "lucide-react"
import MiniHero from "@/components/shared/MiniHero"
import CTABannerWA from "@/components/shared/CTABannerWA"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali lebih dekat ${COMPANY.name}. Berdiri sejak ${COMPANY.established}, kami telah melayani ${COMPANY.totalCustomers} pelanggan dengan armada lengkap dan teknisi berpengalaman di Jabodetabek.`,
}

const tim = [
  { nama: "Heru Prasetyo", jabatan: "Direktur Operasional", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  { nama: "Andi Kusuma", jabatan: "Kepala Teknisi", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
  { nama: "Rina Sari", jabatan: "Customer Service", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { nama: "Budi Santoso", jabatan: "Teknisi Senior", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
]

const armada = [
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop", alt: "Vacuum truck kapasitas besar" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop", alt: "Peralatan sedot profesional" },
  { src: "https://images.unsplash.com/photo-1583246702401-b5f1ee01fbb0?w=600&h=400&fit=crop", alt: "Tim lapangan berseragam" },
]

const legalitas = [
  { icon: Shield, nama: "SIUP", nomor: "No. 503/SIUP/2014", desc: "Surat Izin Usaha Perdagangan resmi" },
  { icon: Award, nama: "NIB", nomor: "No. 8120001234567", desc: "Nomor Induk Berusaha OSS" },
  { icon: Leaf, nama: "Izin Lingkungan", nomor: "No. 660/IL/2015", desc: "Pengelolaan limbah B3 dari DLH" },
  { icon: BadgeCheck, nama: "Sertifikat Kompetensi", nomor: "No. BNSP/SKT/2020", desc: "Teknisi bersertifikat BNSP" },
]

const pencapaian = [
  { icon: Users, value: COMPANY.totalCustomers, label: "Pelanggan Puas" },
  { icon: Award, value: "10+", label: "Tahun Berpengalaman" },
  { icon: Truck, value: "50+", label: "Unit Armada" },
  { icon: Star, value: `${COMPANY.rating}★`, label: "Rating Pelanggan" },
]

export default function TentangKamiPage() {
  return (
    <>
      <MiniHero
        title="Tentang Kami"
        subtitle={`${COMPANY.name} — Solusi sanitasi profesional sejak ${COMPANY.established}.`}
        breadcrumbs={[{ label: "Tentang Kami" }]}
      />

      {/* Sejarah */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4">
                Sejarah Kami
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-5">
                Berdiri Sejak {COMPANY.established}, Melayani Ribuan Pelanggan
              </h2>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  CV. Berkah Jaya Sanitasi berdiri pada tahun {COMPANY.established} dengan tekad sederhana: memberikan
                  layanan sanitasi yang cepat, higienis, dan terjangkau untuk masyarakat Jabodetabek.
                </p>
                <p>
                  Dimulai dengan satu unit armada dan tiga teknisi, kini kami telah berkembang menjadi perusahaan
                  sanitasi terpercaya dengan armada lebih dari 50 unit dan melayani {COMPANY.totalCustomers} pelanggan
                  dari berbagai segmen — dari rumah tangga biasa hingga gedung perkantoran dan kawasan industri.
                </p>
                <p>
                  Kepercayaan pelanggan adalah motivasi terbesar kami untuk terus berinovasi dan meningkatkan
                  standar layanan. Rating {COMPANY.rating} bintang dari ribuan ulasan pelanggan adalah bukti
                  komitmen kami.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&h=500&fit=crop"
                alt="Tim CV. Berkah Jaya Sanitasi"
                width={700}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-navy rounded-2xl p-6 md:p-8 text-white">
              <h3 className="font-display text-lg md:text-xl font-bold mb-3 md:mb-4">Visi</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Menjadi perusahaan sanitasi terpercaya dan terbesar di Jabodetabek yang memberikan solusi
                lingkungan bersih, sehat, dan berkelanjutan bagi seluruh lapisan masyarakat.
              </p>
            </div>
            <div className="bg-brand-orange rounded-2xl p-6 md:p-8 text-white">
              <h3 className="font-display text-lg md:text-xl font-bold mb-3 md:mb-4">Misi</h3>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li>• Memberikan layanan sanitasi cepat, higienis, dan terjangkau</li>
                <li>• Menggunakan teknologi peralatan modern dan ramah lingkungan</li>
                <li>• Membangun tim teknisi yang kompeten dan berkarakter</li>
                <li>• Mengutamakan kepuasan dan kepercayaan pelanggan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tim */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Tim Kami</h2>
            <p className="mt-2 md:mt-3 text-slate-600 text-sm md:text-base">Profesional berpengalaman yang siap melayani Anda.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {tim.map((t) => (
              <div key={t.nama} className="text-center">
                <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden ring-4 ring-brand-orange/20">
                  <Image src={t.foto} alt={t.nama} width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <h3 className="font-display font-bold text-navy text-xs md:text-sm">{t.nama}</h3>
                <p className="text-slate-500 text-xs mt-0.5 md:mt-1">{t.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Armada */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Armada & Peralatan</h2>
            <p className="mt-2 md:mt-3 text-slate-600 text-sm md:text-base">Lebih dari 50 unit armada vacuum truck siap beroperasi.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
            {armada.map((a, i) => (
              <div key={i} className="rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image src={a.src} alt={a.alt} width={600} height={400} className="w-full object-cover aspect-4/3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legalitas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Legalitas & Sertifikasi</h2>
            <p className="mt-2 md:mt-3 text-slate-600 text-sm md:text-base">Beroperasi dengan izin resmi dan teknisi bersertifikat.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {legalitas.map((dok) => {
              const Icon = dok.icon
              return (
                <div key={dok.nama} className="bg-slate-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-slate-200">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-navy flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xs md:text-sm mb-1">{dok.nama}</h3>
                  <p className="text-slate-400 text-xs mb-1 md:mb-2">{dok.nomor}</p>
                  <p className="text-slate-600 text-xs hidden sm:block">{dok.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pencapaian */}
      <section className="py-10 md:py-16 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {pencapaian.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.label} className="text-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white/80 mx-auto mb-1.5 md:mb-2" />
                  <p className="font-display text-2xl md:text-4xl font-bold text-white">{p.value}</p>
                  <p className="text-orange-100 text-xs md:text-sm mt-0.5 md:mt-1">{p.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABannerWA />
    </>
  )
}
