"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import FaqAccordion from "@/components/shared/FaqAccordion"
import { COMPANY, getWALink } from "@/lib/constants"
import { layananList } from "@/data/layanan"

const kontakInfo = [
  { type: "wa",    label: "WhatsApp", value: COMPANY.phone, href: getWALink(),                    color: "bg-wa" },
  { type: "phone", label: "Telepon",  value: COMPANY.phone, href: `tel:${COMPANY.phoneTel}`,      color: "bg-navy" },
  { type: "email", label: "Email",    value: COMPANY.email, href: `mailto:${COMPANY.email}`,      color: "bg-brand-orange" },
]

const faqs = [
  { q: "Jam berapa kami bisa menghubungi?",  a: "Kami tersedia 24 jam penuh, 7 hari seminggu termasuk hari libur." },
  { q: "Berapa lama waktu respons?",          a: "Kami menargetkan respons WhatsApp dalam 5-15 menit dan kehadiran teknisi dalam 1-2 jam." },
  { q: "Apakah ada biaya survei?",            a: "Tidak ada biaya survei. Estimasi harga diberikan gratis sebelum pengerjaan." },
  { q: "Bagaimana metode pembayaran?",        a: "Kami menerima cash, transfer bank, dan berbagai metode pembayaran digital." },
]

export default function KontakContent() {
  const [form, setForm] = useState({ nama: "", hp: "", alamat: "", layanan: "", pesan: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = [
      `Halo, saya ingin memesan layanan sedot WC.`,
      `Nama: ${form.nama}`,
      `No. HP: ${form.hp}`,
      `Alamat: ${form.alamat}`,
      form.layanan ? `Layanan: ${form.layanan}` : "",
      form.pesan   ? `Pesan: ${form.pesan}`     : "",
    ].filter(Boolean).join("\n")
    window.open(getWALink(text), "_blank")
  }

  return (
    <>
      {/* 3 cara menghubungi */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kontakInfo.map((k) => (
              <a
                key={k.label}
                href={k.href}
                target={k.type === "wa" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${k.color} flex items-center justify-center mb-4`}>
                  {k.type === "wa"    ? <WAIcon className="w-7 h-7 text-white" />      :
                   k.type === "phone" ? <Phone  className="w-7 h-7 text-white" />      :
                                        <Mail   className="w-7 h-7 text-white" />}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-1">{k.label}</h3>
                <p className="text-slate-600 text-sm">{k.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Lengkap *</label>
                  <input type="text" required value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy text-sm"
                    placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">No. HP / WhatsApp *</label>
                  <input type="tel" required value={form.hp}
                    onChange={(e) => setForm({ ...form, hp: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy text-sm"
                    placeholder="08xx-xxxx-xxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Alamat Lengkap *</label>
                  <input type="text" required value={form.alamat}
                    onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy text-sm"
                    placeholder="Jl. Nama Jalan No. X, Kota" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Jenis Layanan</label>
                  <select value={form.layanan}
                    onChange={(e) => setForm({ ...form, layanan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy text-sm bg-white">
                    <option value="">-- Pilih Layanan --</option>
                    {layananList.map((l) => (
                      <option key={l.slug} value={l.nama}>{l.nama}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Pesan / Keterangan</label>
                  <textarea rows={4} value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy text-sm resize-none"
                    placeholder="Ceritakan masalah Anda atau tambahkan keterangan..." />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-wa text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-wa-dark transition-colors">
                  <WAIcon className="w-5 h-5" />
                  Kirim via WhatsApp
                </button>
              </form>
            </div>

            {/* Info kontak + Maps */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-7">
                <h2 className="font-display text-xl font-bold text-navy mb-5">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 text-sm">Alamat</p>
                      <p className="text-slate-600 text-sm">{COMPANY.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 text-sm">Jam Operasional</p>
                      <p className="text-slate-600 text-sm">24 Jam / 7 Hari — termasuk hari libur nasional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 text-sm">Telepon / WhatsApp</p>
                      <p className="text-slate-600 text-sm">{COMPANY.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800 text-sm">Email</p>
                      <p className="text-slate-600 text-sm">{COMPANY.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src={COMPANY.mapsEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Sedot WC Jabodetabek"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy mb-8 text-center">Pertanyaan Umum</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  )
}
