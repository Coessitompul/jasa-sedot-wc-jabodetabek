import { Droplets, Building2, Factory, UtensilsCrossed, Drill, AlertTriangle, type LucideIcon } from "lucide-react"

export type Layanan = {
  slug: string
  icon: LucideIcon
  nama: string
  deskripsi: string
  poin: string[]
  harga: string
}

export const layananList: Layanan[] = [
  {
    slug: "sedot-wc",
    icon: Droplets,
    nama: "Sedot WC / Tinja",
    deskripsi: "Layanan sedot WC rumah tangga dan kost-kostan menggunakan mesin kapasitas tinggi. Proses cepat, bersih, dan tidak mengganggu lingkungan sekitar.",
    poin: ["Kapasitas tangki besar", "Teknisi berpengalaman", "Tidak bau & bersih", "Bergaransi"],
    harga: "Mulai Rp 300.000",
  },
  {
    slug: "sedot-septic-tank",
    icon: Building2,
    nama: "Sedot Septic Tank",
    deskripsi: "Pengosongan septic tank untuk perumahan, ruko, dan gedung komersial. Dilakukan secara menyeluruh hingga kapasitas septic tank optimal kembali.",
    poin: ["Semua ukuran septic tank", "Proses higienis", "Laporan kondisi tangki", "Bergaransi"],
    harga: "Mulai Rp 350.000",
  },
  {
    slug: "sedot-ipal",
    icon: Factory,
    nama: "Sedot IPAL",
    deskripsi: "Layanan sedot dan perawatan Instalasi Pengolahan Air Limbah (IPAL) untuk industri, hotel, rumah sakit, dan kompleks perumahan besar.",
    poin: ["Sesuai standar lingkungan", "Teknisi bersertifikat", "Laporan resmi", "Jadwal berkala"],
    harga: "Mulai Rp 500.000",
  },
  {
    slug: "sedot-grease-trap",
    icon: UtensilsCrossed,
    nama: "Sedot Grease Trap",
    deskripsi: "Pembersihan dan pengosongan grease trap / perangkap lemak untuk restoran, hotel, catering, dan dapur industri agar saluran tidak tersumbat.",
    poin: ["Cocok untuk F&B & restoran", "Mencegah penyumbatan", "Jadwal rutin tersedia", "Bergaransi"],
    harga: "Mulai Rp 400.000",
  },
  {
    slug: "sedot-sumur",
    icon: Drill,
    nama: "Sedot Sumur Bor",
    deskripsi: "Pengosongan dan pembersihan sumur bor yang sudah keruh atau tersumbat lumpur agar debit dan kualitas air kembali optimal.",
    poin: ["Mesin pompa kapasitas besar", "Pembersihan lumpur total", "Cek kualitas air", "Bergaransi"],
    harga: "Mulai Rp 250.000",
  },
  {
    slug: "darurat",
    icon: AlertTriangle,
    nama: "Penanganan Darurat",
    deskripsi: "Layanan prioritas 24 jam untuk kondisi darurat seperti WC meluap, saluran tersumbat parah, atau bau tidak tertahankan. Tim kami siap hadir dalam 1 jam.",
    poin: ["Respon 1 jam", "Tersedia 24/7 termasuk hari libur", "Tim siaga khusus darurat", "Penanganan cepat & tuntas"],
    harga: "Hubungi Kami",
  },
]
