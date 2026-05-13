# claude.md — Instruksi Build Website Jasa Sedot WC Jabodetabek

Baca file ini secara menyeluruh sebelum menulis satu baris kode pun.
Ikuti semua instruksi di bawah ini secara lengkap dan berurutan.

---

## IDENTITAS PROJECT

Kamu sedang membangun website **jasa sedot WC dan tinja profesional** untuk wilayah Jabodetabek.

Bisnis ini sudah berjalan. Mereka punya: logo, foto tim & armada, nomor WhatsApp aktif, testimoni pelanggan, dan dokumen legalitas (SIUP, NIB).

**Tujuan website:**
- Mendatangkan sebanyak mungkin leads via WhatsApp dan telepon
- Ranking di Google untuk pencarian lokal Jabodetabek ("sedot wc bekasi", dll)
- Terlihat terpercaya dan profesional sejak detik pertama

**Psikologi target pengguna:** Mereka sering dalam kondisi darurat/mendesak. Website harus meyakinkan dalam 5 detik — langsung jawab "Bisa bantu saya? Bisa dipercaya?"

---

## TECH STACK

- **Framework:** Next.js 16, App Router, TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React (gunakan untuk SEMUA ikonografi, tidak ada library ikon lain)
- **Fonts:** Google Fonts via `next/font/google`
- **Folder:** Wajib gunakan `src/` folder

---

## ATURAN WAJIB SEBELUM CODING

1. **Urutan build:** `next.config.ts` → `tailwind.config.ts` → `src/app/globals.css` → `src/lib/constants.ts` → `src/data/*` → komponen layout → pages
2. **`"use client"` hanya bila perlu** — Navbar (scroll state), FloatingWA, form Kontak (useState). Semua section homepage biarkan sebagai Server Component
3. **Semua gambar** wajib pakai `next/image`, definisikan `width` & `height` eksplisit
4. **Semua dynamic route `[slug]`** wajib implementasi `generateStaticParams()` dan `generateMetadata()`
5. **Semua link WhatsApp** ambil dari helper `getWALink()` di `src/lib/constants.ts`, jangan hardcode
6. **Mobile-first** — layout harus sempurna di layar 375px ke atas
7. **Placeholder images** gunakan Unsplash: `https://images.unsplash.com/...` bertema pekerja/van/konstruksi

---

## FILE KONFIGURASI

### `next.config.ts`
```ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
}

export default nextConfig
```

### `tailwind.config.ts`
```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2D6E",
          light: "#1a3f8f",
          dark: "#071e4a",
        },
        brand: {
          orange: "#F97316",
          "orange-dark": "#ea6c0a",
        },
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
```

### `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: var(--font-nunito), sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-plus-jakarta), sans-serif;
  }
}
```

---

## DATA & CONSTANTS

### `src/lib/constants.ts`
```ts
export const COMPANY = {
  name: "CV. Berkah Jaya Sanitasi",
  tagline: "Solusi Sanitasi Profesional Jabodetabek",
  phone: "0812-3456-7890",
  phoneTel: "+6281234567890",
  whatsapp: "6281234567890",
  email: "info@berkahjayas anitasi.com",
  address: "Jl. Raya Contoh No. 123, Jakarta Selatan 12560",
  mapsEmbed: "https://maps.google.com/maps?q=Jakarta+Selatan&output=embed",
  established: "2014",
  totalCustomers: "1.200+",
  responseTime: "< 2 Jam",
  rating: "4.9",
  instagram: "https://instagram.com/berkahjayas anitasi",
  facebook: "https://facebook.com/berkahjayas anitasi",
}

export function getWALink(pesan?: string) {
  const text = pesan ?? "Halo, saya butuh jasa sedot WC. Bisa dibantu?"
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`
}
```

### `src/data/layanan.ts`
```ts
import { Droplets, Building2, Factory, UtensilsCrossed, Drill, AlertTriangle } from "lucide-react"

export const layananList = [
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
```

### `src/data/area.ts`
```ts
export const areaList = [
  {
    slug: "jakarta-selatan",
    nama: "Jakarta Selatan",
    deskripsi: "Melayani seluruh kecamatan di Jakarta Selatan: Kebayoran Baru, Cilandak, Pasar Minggu, Mampang, Tebet, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta selatan",
  },
  {
    slug: "jakarta-pusat",
    nama: "Jakarta Pusat",
    deskripsi: "Melayani area Jakarta Pusat: Menteng, Gambir, Senen, Cempaka Putih, Johar Baru, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta pusat",
  },
  {
    slug: "jakarta-barat",
    nama: "Jakarta Barat",
    deskripsi: "Melayani wilayah Jakarta Barat: Grogol, Kebon Jeruk, Cengkareng, Tambora, Kembangan, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta barat",
  },
  {
    slug: "jakarta-timur",
    nama: "Jakarta Timur",
    deskripsi: "Melayani area Jakarta Timur: Cakung, Duren Sawit, Jatinegara, Kramat Jati, Matraman, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta timur",
  },
  {
    slug: "jakarta-utara",
    nama: "Jakarta Utara",
    deskripsi: "Melayani wilayah Jakarta Utara: Penjaringan, Pluit, Tanjung Priok, Kelapa Gading, Cilincing, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta utara",
  },
  {
    slug: "bekasi",
    nama: "Bekasi",
    deskripsi: "Melayani Bekasi Kota dan Bekasi Kabupaten: Bekasi Timur, Bekasi Barat, Bekasi Utara, Bekasi Selatan, Tambun, Cikarang, dan sekitarnya.",
    keyword: "jasa sedot wc bekasi",
  },
  {
    slug: "depok",
    nama: "Depok",
    deskripsi: "Melayani seluruh Kota Depok: Beji, Pancoran Mas, Sukmajaya, Cilodong, Cimanggis, Sawangan, dan sekitarnya.",
    keyword: "jasa sedot wc depok",
  },
  {
    slug: "tangerang",
    nama: "Tangerang",
    deskripsi: "Melayani Kota Tangerang dan Tangerang Selatan: Serpong, Ciputat, Pamulang, Bintaro, Alam Sutera, dan sekitarnya.",
    keyword: "jasa sedot wc tangerang",
  },
  {
    slug: "bogor",
    nama: "Bogor",
    deskripsi: "Melayani Kota Bogor dan Kabupaten Bogor: Bogor Tengah, Bogor Selatan, Cibinong, Citereup, Parung, dan sekitarnya.",
    keyword: "jasa sedot wc bogor",
  },
]

// Kota tambahan untuk grid pill di homepage (tidak punya halaman detail)
export const areaChip = [
  "Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara",
  "Bekasi Kota", "Bekasi Kabupaten", "Depok", "Tangerang Kota", "Tangerang Selatan",
  "Bogor Kota", "Bogor Kabupaten", "Cikarang", "Karawang", "Serpong",
]
```

### `src/data/testimoni.ts`
```ts
export const testimoniList = [
  {
    nama: "Budi Santoso",
    kota: "Bekasi",
    rating: 5,
    teks: "Proses cepat dan bersih banget, petugas ramah dan profesional. Baru 1 jam telepon langsung datang. Recommended banget buat warga Bekasi!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    nama: "Siti Rahayu",
    kota: "Jakarta Selatan",
    rating: 5,
    teks: "Sudah 2x pakai jasa ini, selalu puas. Harga transparan, tidak ada biaya kejutan. WC rumah jadi lancar lagi, terima kasih!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    nama: "Ahmad Fauzi",
    kota: "Depok",
    rating: 5,
    teks: "Septic tank saya sudah 5 tahun tidak dikuras, akhirnya ambil jasa ini. Prosesnya profesional, tim pakai APD lengkap, lingkungan tetap bersih.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    nama: "Dewi Lestari",
    kota: "Tangerang",
    rating: 5,
    teks: "Emergency call jam 10 malam, eh langsung direspon dan tim datang dalam 1 jam lebih. Luar biasa pelayanannya, WC mampet langsung beres!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    nama: "Hendra Wijaya",
    kota: "Bogor",
    rating: 5,
    teks: "Pertama kali pakai langsung kena! Harga sesuai yang diinfokan via WA, tidak ada tambahan biaya. Teknisi juga kasih saran supaya tidak mampet lagi.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    nama: "Rina Marlina",
    kota: "Jakarta Timur",
    rating: 5,
    teks: "Grease trap restoran saya dibersihkan sama tim ini, hasilnya memuaskan. Aroma dapur jadi lebih segar. Pasti repeat order!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
]
```

### `src/data/blog.ts`
```ts
export type BlogPost = {
  slug: string
  judul: string
  excerpt: string
  kategori: string
  tanggal: string
  estimasiBaca: string
  thumbnail: string
  konten: string
}

export const blogList: BlogPost[] = [
  {
    slug: "biaya-sedot-wc-jakarta",
    judul: "Berapa Biaya Sedot WC di Jakarta? Ini Rincian Lengkapnya",
    excerpt: "Penasaran berapa biaya sedot WC di Jakarta? Simak rincian harga lengkap berdasarkan jenis layanan, ukuran tangki, dan jarak lokasi.",
    kategori: "Harga & Biaya",
    tanggal: "10 Januari 2025",
    estimasiBaca: "5 menit",
    thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=450&fit=crop",
    konten: `
## Biaya Sedot WC di Jakarta: Panduan Lengkap 2025

Banyak warga Jakarta yang belum tahu berapa biaya wajar untuk jasa sedot WC. Artikel ini membahas rincian harga secara transparan agar Anda tidak terkejut saat tagihan datang.

### Faktor yang Mempengaruhi Harga

Biaya sedot WC dipengaruhi beberapa faktor utama:

**1. Jenis Layanan**
- Sedot WC rumah tangga: Rp 300.000 – Rp 500.000
- Sedot septic tank: Rp 350.000 – Rp 600.000
- Sedot IPAL: Rp 500.000 – Rp 1.500.000

**2. Volume Tangki**
Semakin besar kapasitas tangki, semakin banyak volume yang perlu diangkut, sehingga biaya pun lebih tinggi.

**3. Aksesibilitas Lokasi**
Lokasi yang sulit dijangkau armada (gang sempit, lantai atas) bisa menambah biaya operasional.

**4. Kondisi Darurat**
Layanan darurat di luar jam kerja biasanya dikenakan biaya tambahan.

### Tips Agar Biaya Lebih Hemat

- Lakukan perawatan rutin setiap 1-2 tahun sekali agar tidak menumpuk
- Hindari membuang tisu basah, pembalut, atau sampah padat ke dalam WC
- Pesan di jam kerja normal untuk tarif standar

Untuk informasi harga terkini, hubungi kami via WhatsApp dan dapatkan estimasi biaya gratis sebelum pengerjaan.
    `,
  },
  {
    slug: "tanda-wc-mampet",
    judul: "7 Tanda WC Harus Segera Disedot Sebelum Meluap",
    excerpt: "Jangan tunggu WC meluap! Kenali 7 tanda peringatan bahwa septic tank atau saluran WC Anda sudah harus segera ditangani.",
    kategori: "Tips WC",
    tanggal: "5 Februari 2025",
    estimasiBaca: "4 menit",
    thumbnail: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=450&fit=crop",
    konten: `
## 7 Tanda WC Harus Segera Disedot

Banyak masalah WC yang sebenarnya bisa dicegah jika kita tahu tanda-tandanya sejak dini. Berikut 7 sinyal yang tidak boleh diabaikan.

### 1. Air Menggenang Setelah Flush
Jika setelah flush air tidak langsung surut atau bahkan naik, ini tanda awal penyumbatan serius.

### 2. Bau Menyengat dari Saluran
Bau busuk yang keluar dari saluran WC atau wastafel bisa menandakan septic tank sudah penuh dan perlu dikuras.

### 3. Suara Gurgling / Blub-blub
Suara gelembung aneh saat menggunakan toilet atau wastafel lain menandakan ada tekanan balik di sistem saluran.

### 4. Lantai Kamar Mandi Basah Tanpa Sebab
Rembesan air dari bawah lantai bisa berarti pipa atau tangki sudah bocor akibat tekanan berlebih.

### 5. WC Tersumbat Berulang Kali
Kalau WC sering tersumbat meski sudah dibersihkan, masalahnya bukan di permukaan tapi di dalam tangki.

### 6. Tanaman di Sekitar Septic Tank Tumbuh Subur Tidak Normal
Ini tanda kebocoran nutrisi dari septic tank ke tanah.

### 7. Lebih dari 2 Tahun Tidak Dikuras
Meski tidak ada gejala, septic tank yang tidak dikuras lebih dari 2 tahun berpotensi penuh dan bermasalah sewaktu-waktu.

Jika Anda mengalami satu atau lebih tanda di atas, segera hubungi tim kami sebelum masalah semakin parah.
    `,
  },
  {
    slug: "cara-merawat-septic-tank",
    judul: "Panduan Merawat Septic Tank agar Tahan Lama",
    excerpt: "Septic tank yang terawat bisa bertahan puluhan tahun. Pelajari cara perawatan yang benar agar tidak cepat penuh dan tidak bermasalah.",
    kategori: "Edukasi",
    tanggal: "20 Februari 2025",
    estimasiBaca: "6 menit",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    konten: `
## Panduan Lengkap Merawat Septic Tank

Septic tank yang dirawat dengan baik bisa berfungsi optimal selama puluhan tahun. Sebaliknya, perawatan yang salah bisa memperpendek umurnya dan menyebabkan masalah serius.

### Cara Kerja Septic Tank

Septic tank bekerja dengan dua proses: pengendapan lumpur di dasar dan penguraian oleh bakteri anaerob. Bakteri inilah yang mengurai kotoran menjadi cairan dan gas.

### Do's — Yang Harus Dilakukan

- **Kuras secara rutin** setiap 1-3 tahun tergantung pemakaian
- **Gunakan produk pembersih ramah bakteri** untuk menjaga populasi bakteri pengurai
- **Periksa kondisi tangki** setidaknya sekali setahun

### Don'ts — Yang Harus Dihindari

- **Jangan buang bahan kimia keras** seperti bleach, disinfektan, atau obat serangga dalam jumlah besar ke saluran
- **Jangan buang sampah padat**: tisu basah, pembalut, rokok, plastik
- **Jangan parkir kendaraan berat** di atas area septic tank
- **Jangan tanam pohon berakar dalam** di dekat septic tank

### Jadwal Perawatan yang Disarankan

| Interval | Aktivitas |
|---|---|
| Setiap bulan | Cek ada tidaknya bau tidak normal |
| Setiap 6 bulan | Periksa saluran inlet dan outlet |
| Setiap 1-3 tahun | Sedot dan kuras septic tank |

Hubungi kami untuk jadwal perawatan berkala dengan harga spesial pelanggan setia.
    `,
  },
  {
    slug: "sedot-wc-vs-manual",
    judul: "Perbedaan Sedot WC Manual vs Mesin Modern",
    excerpt: "Masih bingung pilih sedot WC manual atau pakai mesin? Ketahui perbedaan, kelebihan, dan kekurangan masing-masing metode di sini.",
    kategori: "Edukasi",
    tanggal: "1 Maret 2025",
    estimasiBaca: "5 menit",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=450&fit=crop",
    konten: `
## Sedot WC Manual vs Mesin Modern: Mana yang Lebih Baik?

Banyak pelanggan yang bertanya soal perbedaan antara metode manual dan mesin modern. Artikel ini menjelaskannya secara objektif.

### Metode Manual

Metode manual menggunakan alat sederhana seperti pompa tangan atau timba untuk mengeluarkan isi septic tank.

**Kelebihan:**
- Biaya lebih murah
- Bisa menjangkau area tertentu yang tidak bisa dilalui armada

**Kekurangan:**
- Proses lambat dan tidak tuntas
- Higienitas rendah, risiko kontaminasi tinggi
- Tidak bisa menangani volume besar
- Bau menyengat lebih parah selama proses

### Metode Mesin Modern (Vacuum Truck)

Vacuum truck adalah armada khusus dengan tangki penyimpanan dan mesin pompa vakum bertenaga tinggi.

**Kelebihan:**
- Proses cepat (1-3 jam untuk ukuran rumah tangga)
- Higienis — limbah langsung masuk tangki tertutup
- Volume besar bisa ditangani sekali jalan
- Bau minimal selama proses
- Standar lingkungan terpenuhi

**Kekurangan:**
- Biaya lebih tinggi dari manual
- Memerlukan akses jalan untuk armada

### Rekomendasi

Untuk kebutuhan rumah tangga dan komersial, metode mesin modern jauh lebih direkomendasikan dari sisi higienitas, kecepatan, dan hasil akhir. Selisih biaya sebanding dengan kualitas yang didapat.

Semua layanan kami menggunakan vacuum truck modern berkapasitas besar untuk hasil terbaik.
    `,
  },
  {
    slug: "tips-wc-tidak-bau",
    judul: "5 Tips Ampuh Agar WC Rumah Tidak Bau",
    excerpt: "WC bau bisa merusak kenyamanan rumah dan membuat tamu tidak nyaman. Ikuti 5 tips ini untuk menjaga WC tetap segar sepanjang hari.",
    kategori: "Tips WC",
    tanggal: "15 Maret 2025",
    estimasiBaca: "3 menit",
    thumbnail: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=450&fit=crop",
    konten: `
## 5 Tips Ampuh Agar WC Rumah Tidak Bau

WC yang bau bukan hanya tidak nyaman, tapi juga bisa jadi tanda ada masalah sanitasi yang perlu ditangani. Berikut 5 tips yang bisa langsung Anda praktikkan.

### 1. Siram Setiap Selesai Digunakan
Kedengarannya sepele, tapi banyak yang lupa atau sengaja menghemat air. Siram segera setiap kali selesai menggunakan WC agar residu tidak menempel dan menimbulkan bau.

### 2. Bersihkan Dinding dan Lantai Kamar Mandi Setiap Hari
Uap dari WC bisa menempel di dinding dan lantai. Lap atau sikat area ini setiap hari dengan pembersih kamar mandi yang mengandung antibakteri.

### 3. Pastikan Ventilasi Udara Berjalan Baik
Kamar mandi tanpa ventilasi yang baik akan memerangkap kelembapan dan bau. Pastikan exhaust fan berfungsi atau buka jendela secara berkala.

### 4. Cek Kondisi Water Seal (Siphon)
Komponen berbentuk huruf U di bawah toilet berfungsi sebagai penghalang bau dari saluran bawah. Kalau WC berbau meski sudah bersih, kemungkinan water seal-nya rusak.

### 5. Sedot Septic Tank Secara Berkala
Bau yang berasal dari dalam saluran biasanya tanda septic tank sudah hampir penuh. Jadwalkan penyedotan rutin setiap 1-2 tahun untuk mencegah masalah ini.

Kalau bau sudah tidak bisa diatasi dengan cara di atas, hubungi kami untuk inspeksi dan penanganan profesional.
    `,
  },
  {
    slug: "frekuensi-sedot-septic-tank",
    judul: "Seberapa Sering Septic Tank Harus Disedot?",
    excerpt: "Tidak ada jawaban tunggal untuk pertanyaan ini. Frekuensi penyedotan ideal tergantung pada ukuran tangki, jumlah penghuni, dan pola penggunaan.",
    kategori: "Edukasi",
    tanggal: "1 April 2025",
    estimasiBaca: "4 menit",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=450&fit=crop",
    konten: `
## Seberapa Sering Septic Tank Harus Disedot?

Pertanyaan ini sering ditanyakan pelanggan kami. Jawabannya: tergantung beberapa faktor, tapi ada panduan umum yang bisa dijadikan patokan.

### Faktor Penentu Frekuensi Penyedotan

**Ukuran Tangki**
Tangki yang lebih kecil tentu lebih cepat penuh dibandingkan tangki berkapasitas besar.

**Jumlah Penghuni**
Makin banyak penghuni, makin cepat tangki terisi. Rumah dengan 2 orang bisa lebih jarang dari rumah dengan 6 orang.

**Pola Penggunaan**
Penggunaan berlebihan (seperti penggunaan di restoran) mempercepat pengisian tangki.

**Kondisi Tangki**
Tangki tua yang sudah retak atau tidak kedap mungkin perlu lebih sering diperiksa.

### Panduan Frekuensi Berdasarkan Jumlah Penghuni

| Penghuni | Kapasitas Tangki | Rekomendasi Frekuensi |
|---|---|---|
| 1-2 orang | < 1.000 liter | Setiap 3-5 tahun |
| 3-4 orang | 1.000-2.000 liter | Setiap 2-3 tahun |
| 5+ orang | > 2.000 liter | Setiap 1-2 tahun |
| Komersial | Bervariasi | Setiap 6-12 bulan |

### Tanda Tangki Sudah Harus Disedot Segera

- Bau menyengat dari saluran
- WC lambat atau sering tersumbat
- Ada rembesan di area sekitar tangki
- Sudah lebih dari 3 tahun tidak disedot

Jika tidak yakin, hubungi kami untuk inspeksi gratis dan rekomendasi jadwal yang tepat untuk kondisi spesifik Anda.
    `,
  },
]
```

---

## STRUKTUR FOLDER LENGKAP

Buat semua file berikut sesuai urutan:

```
├── public/
│   └── images/               ← kosongkan, nanti diisi client
│
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── not-found.tsx
    │   ├── layanan/
    │   │   └── page.tsx
    │   ├── area-layanan/
    │   │   ├── page.tsx
    │   │   └── [slug]/
    │   │       └── page.tsx
    │   ├── tentang-kami/
    │   │   └── page.tsx
    │   ├── blog/
    │   │   ├── page.tsx
    │   │   └── [slug]/
    │   │       └── page.tsx
    │   └── kontak/
    │       └── page.tsx
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx          ← "use client"
    │   │   ├── Footer.tsx
    │   │   └── FloatingWA.tsx      ← "use client"
    │   ├── home/
    │   │   ├── HeroSection.tsx
    │   │   ├── StatsBar.tsx
    │   │   ├── KeunggulanSection.tsx
    │   │   ├── LayananSection.tsx
    │   │   ├── AreaSection.tsx
    │   │   ├── CaraKerjaSection.tsx
    │   │   ├── TestimoniSection.tsx
    │   │   ├── GaleriSection.tsx
    │   │   ├── LegalitasSection.tsx
    │   │   └── CTABanner.tsx
    │   └── shared/
    │       ├── MiniHero.tsx
    │       ├── SectionHeader.tsx
    │       ├── ServiceCard.tsx
    │       ├── TestimoniCard.tsx
    │       ├── BlogCard.tsx
    │       └── CTABannerWA.tsx
    │
    ├── data/
    │   ├── layanan.ts
    │   ├── area.ts
    │   ├── testimoni.ts
    │   └── blog.ts
    │
    └── lib/
        ├── constants.ts
        └── utils.ts
```

---

## ROOT LAYOUT: `src/app/layout.tsx`

```tsx
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Nunito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWA from "@/components/layout/FloatingWA"
import { COMPANY } from "@/lib/constants"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "600", "700", "800"],
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${COMPANY.name}`,
    default: `${COMPANY.name} - Jasa Sedot WC Profesional Jabodetabek`,
  },
  description: "Jasa sedot WC & tinja profesional se-Jabodetabek. Armada lengkap, teknisi berpengalaman, harga transparan. Melayani 24 jam, respon cepat 1-2 jam.",
  keywords: ["sedot wc", "jasa tinja", "sedot septic tank", "jabodetabek", "jakarta", "bekasi", "depok", "tangerang", "bogor"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.name,
    "description": "Jasa sedot WC profesional Jabodetabek",
    "telephone": COMPANY.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY.address,
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID",
    },
    "areaServed": ["Jakarta", "Bekasi", "Depok", "Tangerang", "Bogor"],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "Rp 250.000 - Rp 1.500.000",
  }

  return (
    <html lang="id" className={`${plusJakarta.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  )
}
```

---

## SPESIFIKASI HALAMAN

### HOME PAGE `src/app/page.tsx`

Import dan render semua section berikut secara berurutan:

1. **HeroSection** — Background navy + dot pattern. Badge oranye "⚡ Melayani 24 Jam / 7 Hari". H1: "Sedot WC & Tinja Profesional Se-Jabodetabek". Subheadline. 2 CTA button: (1) oranye "💬 Chat WhatsApp Sekarang" → `getWALink()`, (2) outline putih "📞 Telepon Langsung" → `tel:${COMPANY.phoneTel}`. Trust badges row: ✅ Bergaransi | ✅ 10+ Tahun | ✅ Harga Transparan | ✅ Respon Cepat. Kanan hero: placeholder image Unsplash

2. **StatsBar** — Background oranye. 4 stat: "1.200+" Pelanggan | "10+" Tahun Pengalaman | "< 2 Jam" Respon | "4.9★" Rating

3. **KeunggulanSection** — "Kenapa Pilih Kami?" Grid 3 kolom 6 card: Layanan 24 Jam, Harga Transparan, Respon Cepat, Berizin Resmi, Peralatan Modern, Bergaransi. Tiap card pakai ikon Lucide relevan

4. **LayananSection** — "Layanan Kami" Grid 3 kolom dari `layananList`. Tiap card: ikon + nama + deskripsi singkat + harga + tombol "Pesan Sekarang" → `getWALink("Halo, saya butuh jasa " + layanan.nama)`. CTA "Lihat Semua Layanan →" ke `/layanan`

5. **AreaSection** — "Area Layanan Kami" Grid pill semua `areaChip`. Yang ada di `areaList` bisa diklik ke `/area-layanan/[slug]`. CTA "Lihat Semua Area →" ke `/area-layanan`

6. **CaraKerjaSection** — "Proses Pemesanan Mudah" Timeline horizontal 4 langkah: Hubungi Kami → Survei Lokasi → Pengerjaan → Selesai & Garansi

7. **TestimoniSection** — "Apa Kata Pelanggan Kami" Background navy. Grid atau carousel 3-6 card dari `testimoniList`. Tiap card: avatar + nama + kota + bintang + teks

8. **GaleriSection** — "Dokumentasi Pekerjaan" Masonry atau grid 3 kolom 6-9 foto Unsplash bertema pekerja/van/tools

9. **LegalitasSection** — "Terdaftar & Berlisensi Resmi" Row 4 badge dokumen: SIUP | NIB | Izin Lingkungan | Sertifikat Kompetensi

10. **CTABanner** — Background gradient oranye. "Butuh Sedot WC Sekarang?" 2 tombol WA + Telepon

---

### HALAMAN LAYANAN `src/app/layanan/page.tsx`

```
Metadata: title "Layanan Kami", description unik
- MiniHero: "Layanan Kami" + breadcrumb
- Grid 2 kolom card besar semua layanan dari layananList
  Tiap card: ikon besar + nama + deskripsi panjang + list poin + harga + tombol WA
- Section "Paket Bundling": card 2 paket (Paket Rumah Tangga = WC + Septic Tank, Paket Komersial = IPAL + Grease Trap)
- FAQ accordion 6 pertanyaan umum tentang layanan
- CTABannerWA
```

---

### HALAMAN AREA INDEX `src/app/area-layanan/page.tsx`

```
Metadata: title "Area Layanan Jabodetabek"
- MiniHero: "Area Layanan Kami" + breadcrumb
- Grid 3 kolom card semua area dari areaList
  Tiap card: nama kota + deskripsi + link "Lihat Detail →"
- Embed Google Maps / SVG peta Jabodetabek sederhana
- CTABannerWA
```

---

### HALAMAN AREA DETAIL `src/app/area-layanan/[slug]/page.tsx`

```tsx
// Wajib implementasi:
export async function generateStaticParams() {
  return areaList.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }) {
  const area = areaList.find((a) => a.slug === params.slug)
  return {
    title: `Jasa Sedot WC ${area.nama}`,
    description: `Jasa sedot WC profesional di ${area.nama}. Melayani 24 jam, respon cepat 1-2 jam. Harga transparan, bergaransi. Hubungi sekarang!`,
  }
}

// Konten halaman:
- H1: "Jasa Sedot WC [Nama Kota] — Cepat & Terpercaya"
- Deskripsi 2-3 paragraf yang menyebut nama kota secara natural
- Daftar layanan tersedia (dari layananList, semua layanan)
- Testimoni dari warga kota tersebut (filter dari testimoniList berdasarkan kota)
- CTA WA dengan pesan pre-filled: `getWALink("Halo, saya butuh jasa sedot WC di " + area.nama)`
- FAQ lokal: "Berapa biaya sedot WC di [Nama Kota]?", "Apakah melayani area [kecamatan]?", dll
- CTABannerWA
```

---

### HALAMAN TENTANG KAMI `src/app/tentang-kami/page.tsx`

```
Metadata: title "Tentang Kami"
- MiniHero: "Tentang Kami" + breadcrumb
- Sejarah: "Berdiri sejak 2014, kami telah melayani 1.200+ pelanggan..." paragraf 3-4 kalimat
- Visi & Misi: 2 kolom card navy
- Tim: Grid 4 kolom foto tim dengan nama & jabatan (placeholder Unsplash)
- Armada: Grid foto armada & peralatan (placeholder Unsplash)
- Legalitas lengkap: 4 card dokumen (SIUP, NIB, Izin Lingkungan, Sertifikat Kompetensi)
  Tiap card: ikon Shield/Award dari Lucide + nama dokumen + nomor/keterangan
- Pencapaian: Row stats (1200+ pelanggan, 10+ tahun, 50+ armada, 4.9 rating)
- CTABannerWA
```

---

### HALAMAN BLOG INDEX `src/app/blog/page.tsx`

```
Metadata: title "Blog & Artikel"
- MiniHero: "Blog & Artikel" + breadcrumb
- Row filter kategori: Semua | Tips WC | Edukasi | Harga & Biaya
- Grid 3 kolom BlogCard dari blogList
  Tiap card: thumbnail + kategori chip + judul + excerpt + tanggal + estimasi baca + "Baca →"
- CTABannerWA sidebar atau bawah
```

---

### HALAMAN BLOG DETAIL `src/app/blog/[slug]/page.tsx`

```tsx
// Wajib implementasi:
export async function generateStaticParams() {
  return blogList.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = blogList.find((p) => p.slug === params.slug)
  return {
    title: post.judul,
    description: post.excerpt,
  }
}

// Layout 2 kolom (konten + sidebar):
Kiri (2/3):
- Breadcrumb: Home → Blog → [Judul]
- Kategori chip + H1 judul + meta (tanggal, estimasi baca)
- Hero image (thumbnail artikel)
- Konten artikel dalam format prose (render markdown/string dari post.konten)
- Share buttons: WhatsApp | Copy Link
- Artikel terkait (3 artikel lain dari blogList)

Kanan (1/3) sticky:
- CTA WA card: "Butuh jasa sedot WC? Hubungi kami sekarang!" + tombol WA
- Daftar artikel lainnya
```

---

### HALAMAN KONTAK `src/app/kontak/page.tsx`

```
"use client" — karena ada form dengan useState

Metadata: title "Kontak Kami"
- MiniHero: "Kontak Kami" + breadcrumb
- 3 Card cara menghubungi: WhatsApp | Telepon | Email (dengan ikon Lucide)
- 2 kolom:
  Kiri: Form (Nama, No. HP, Alamat, dropdown Jenis Layanan, Textarea Pesan, tombol Submit)
    Submit → redirect ke WhatsApp dengan pesan terformat dari isian form
  Kanan: Info kontak (alamat, jam operasional, telp, email) + Google Maps embed
- FAQ singkat 4 pertanyaan
```

---

## KOMPONEN LAYOUT

### `src/components/layout/Navbar.tsx` — `"use client"`

```
- Sticky top-0, z-50
- Scroll listener: tambah shadow dan bg-white/95 backdrop-blur saat scroll > 50px
- Logo kiri (teks brand atau next/image jika ada logo)
- Menu tengah: Layanan | Area Layanan | Blog | Tentang Kami | Kontak
  Gunakan next/link, active state berdasarkan usePathname()
- Kanan: ikon Phone + nomor telp (hidden di mobile) + Tombol "Chat WA" oranye
- Mobile: hamburger menu → drawer/dropdown dengan semua menu + CTA
```

### `src/components/layout/Footer.tsx`

```
- Background navy (#0B2D6E), teks putih
- Logo + tagline
- Grid 4 kolom:
  1. Tentang: deskripsi singkat + sosmed icons (Instagram, Facebook)
  2. Layanan: list link ke /layanan#[slug]
  3. Area: list link ke /area-layanan/[slug] (5 kota utama + "Lihat Semua")
  4. Kontak: alamat, jam (24 jam/7 hari), telp, email
- Garis pemisah
- Copyright bar: "© 2025 CV. Berkah Jaya Sanitasi. All rights reserved." | Kebijakan Privasi | Syarat & Ketentuan
```

### `src/components/layout/FloatingWA.tsx` — `"use client"`

```
- fixed bottom-6 right-6 z-50
- Tombol bulat hijau (#25D366), shadow besar
- Ikon MessageCircle dari Lucide, warna putih
- Pulse animation ring: pseudo-element atau div absolut dengan animate-ping
- Tooltip "Chat Sekarang!" muncul saat hover
- Link: getWALink()
- Muncul setelah scroll 300px (useState + useEffect scroll listener)
```

---

## DESIGN TOKENS TAILWIND

Gunakan class-class berikut secara konsisten:

```
Warna navy    → bg-navy, text-navy, border-navy
Warna oranye  → bg-brand-orange, text-brand-orange, hover:bg-brand-orange-dark
Section bg    → bg-white, bg-slate-50, bg-navy (bergantian)
Card          → rounded-2xl shadow-md hover:shadow-xl transition-shadow
Button CTA    → bg-brand-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-orange-dark
Button outline → border-2 border-white text-white px-6 py-3 rounded-xl hover:bg-white/10
Section padding → py-16 md:py-24
Container     → max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
H2 section    → font-display text-3xl md:text-4xl font-bold text-navy
```

---

## TIDAK BOLEH DILAKUKAN

- Jangan gunakan library UI lain (shadcn, MUI, Chakra) — hanya Tailwind + Lucide
- Jangan hardcode nomor WA/telepon di dalam JSX, selalu ambil dari `constants.ts`
- Jangan buat komponen yang memerlukan `"use client"` padahal tidak butuh interaktivitas
- Jangan lupa `generateStaticParams` di semua dynamic route
- Jangan gunakan `<img>` biasa — selalu `next/image`
- Jangan lupa `alt` di semua gambar (penting untuk SEO & aksesibilitas)

---

*File ini adalah sumber kebenaran tunggal untuk project ini.*
*Semua keputusan desain, struktur, dan konten mengacu ke dokumen ini.*
