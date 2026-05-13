import Link from "next/link"
import { Home } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import { getWALink } from "@/lib/constants"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-brand-orange font-bold text-8xl mb-4">404</p>
        <h1 className="font-display text-3xl font-bold text-navy mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-slate-600 max-w-md mx-auto mb-8">
          Maaf, halaman yang Anda cari tidak ada. Mungkin sudah dipindahkan atau URL-nya salah.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-light transition-colors"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <a
            href={getWALink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-wa text-white px-6 py-3 rounded-xl font-semibold hover:bg-wa-dark transition-colors"
          >
            <WAIcon className="w-5 h-5" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
