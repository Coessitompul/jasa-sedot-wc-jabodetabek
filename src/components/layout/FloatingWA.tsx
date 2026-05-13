"use client"

import { useState, useEffect } from "react"
import WAIcon from "@/components/shared/WAIcon"
import { getWALink } from "@/lib/constants"

export default function FloatingWA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href={getWALink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat Sekarang!
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-wa animate-ping opacity-30" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl bg-wa hover:bg-wa-dark transition-colors">
        <WAIcon className="w-7 h-7 text-white" />
      </span>
    </a>
  )
}
