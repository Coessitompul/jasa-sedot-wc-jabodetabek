import FaqAccordion from "@/components/shared/FaqAccordion"

const faqs = [
  {
    q: "Berapa biaya jasa sedot WC?",
    a: "Biaya mulai dari Rp 400.000 untuk sedot WC rumah tangga. Harga bervariasi tergantung jenis layanan, ukuran tangki, dan lokasi. Hubungi kami via WhatsApp untuk mendapatkan estimasi harga gratis sebelum pengerjaan — tidak ada biaya tersembunyi.",
  },
  {
    q: "Seberapa cepat tim bisa datang ke lokasi?",
    a: "Untuk area Jabodetabek, sesaat setelah konfirmasi, tim kami akan segera bergegas menuju lokasi. Untuk kondisi darurat, kami memiliki tim siaga khusus yang bisa tiba lebih cepat, termasuk malam hari dan hari libur.",
  },
  {
    q: "Apakah tersedia layanan 24 jam termasuk hari libur?",
    a: "Ya, kami melayani 24 jam sehari, 7 hari seminggu, termasuk hari libur nasional. Hubungi kami kapan saja melalui WhatsApp atau telepon dan tim kami siap membantu.",
  },
  {
    q: "Seberapa sering septic tank perlu disedot?",
    a: "Tergantung jumlah penghuni dan ukuran tangki. Panduan umum: 1-2 orang setiap 3-5 tahun, 3-4 orang setiap 2-3 tahun, 5 orang ke atas setiap 1-2 tahun. Untuk penggunaan komersial seperti restoran atau kantor, disarankan setiap 6-12 bulan.",
  },
  {
    q: "Apakah proses penyedotan berbau dan mengotori lingkungan sekitar?",
    a: "Tidak. Kami menggunakan vacuum truck modern dengan tangki tertutup, sehingga limbah langsung tersedot ke dalam tangki tanpa berceceran. Bau dapat diminimalkan dan area sekitar tetap bersih setelah pengerjaan selesai.",
  },
  {
    q: "Area mana saja yang dilayani?",
    a: "Kami melayani seluruh wilayah Jabodetabek: Jakarta (Selatan, Pusat, Barat, Timur, Utara), Bekasi, Depok, Tangerang, dan Bogor. Tidak yakin apakah lokasi Anda terjangkau? Hubungi kami dan kami akan konfirmasi langsung.",
  },
  {
    q: "Apakah ada garansi setelah pengerjaan?",
    a: "Ya, semua layanan kami dilengkapi garansi. Jika dalam waktu yang disepakati terjadi masalah yang berkaitan dengan pekerjaan kami, tim kami akan kembali untuk menanganinya tanpa biaya tambahan.",
  },
  {
    q: "Dokumen dan izin apa saja yang dimiliki?",
    a: "Kami beroperasi dengan izin lengkap: SIUP, NIB (Nomor Induk Berusaha), Izin Lingkungan dari DLH untuk pengelolaan limbah.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar layanan sedot WC kami.
          </p>
        </div>
        <FaqAccordion items={faqs} />
      </div>
    </section>
  )
}
