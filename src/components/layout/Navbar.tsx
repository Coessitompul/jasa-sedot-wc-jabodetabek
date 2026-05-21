"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import { COMPANY, getWALink } from "@/lib/constants"

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/area-layanan", label: "Area Layanan" },
  { href: "/blog", label: "Blog" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/kontak", label: "Kontak" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
            <span className="text-white font-bold text-sm">SWJ</span>
          </div>
          <div>
            <p className="font-display font-bold text-navy text-sm leading-tight">Sedot WC Jabodetabek Testing</p>
            <p className="text-xs text-slate-500 leading-tight">Sanitasi</p>
          </div>
        </Link>

        {/* Desktop Nav + CTA (grouped right) */}
        <div className="flex items-center gap-2">
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                      ? "text-navy bg-blue-50 font-semibold "
                      : "text-slate-600 hover:text-navy hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={getWALink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-wa text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-wa-dark transition-colors"
          >
            <WAIcon className="w-4 h-4" />
            <span>Hubungi</span>
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                  ? "text-navy bg-blue-50 font-semibold"
                  : "text-slate-700 hover:text-navy hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {/* <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-navy" />
              {COMPANY.phone}
            </a> */}
            <a
              href={getWALink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-wa text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-wa-dark transition-colors"
            >
              <WAIcon className="w-4 h-4" />
              Hubungi
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
