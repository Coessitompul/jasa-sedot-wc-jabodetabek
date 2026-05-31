"use client"

import { useState, useEffect } from "react"
import WAIcon from "@/components/shared/WAIcon"
import { COMPANY, WA_MESSAGES, getWALink, trackWAConversion } from "@/lib/constants"

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={getWALink(WA_MESSAGES.hero)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWAConversion}
        className="flex-1 flex items-center justify-center gap-2 bg-wa text-white py-4 font-bold text-sm hover:bg-wa-dark transition-colors"
      >
        <WAIcon className="w-5 h-5" />
        💬 Chat WhatsApp
      </a>
      <a
        href={`tel:${COMPANY.phoneTel}`}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-orange text-white py-4 font-bold text-sm hover:bg-brand-orange-dark transition-colors"
      >
        📞 {COMPANY.phone}
      </a>
    </div>
  )
}
