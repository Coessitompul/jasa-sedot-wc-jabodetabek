"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import WAIcon from "@/components/shared/WAIcon"
import { WA_MESSAGES, getWALink, trackWAConversion } from "@/lib/constants"

export default function FloatingWA() {
  const [visible, setVisible] = useState(false)
  const [bubble, setBubble] = useState(false)
  const timerStarted = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 300
      setVisible(scrolled)

      // Start bubble timer the first time button becomes visible
      if (scrolled && !timerStarted.current) {
        timerStarted.current = true
        if (sessionStorage.getItem("wa-bubble-seen")) return

        const showTimer = setTimeout(() => {
          setBubble(true)
          sessionStorage.setItem("wa-bubble-seen", "1")

          const hideTimer = setTimeout(() => setBubble(false), 6000)
          return () => clearTimeout(hideTimer)
        }, 4000)

        return () => clearTimeout(showTimer)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-50">
      {/* Bubble tooltip */}
      <div
        className={`absolute bottom-16 right-0 transition-all duration-500 ${
          bubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="relative bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 w-52">
          <button
            onClick={() => setBubble(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-400 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <X className="w-3 h-3 text-white" />
          </button>
          <p className="text-sm font-medium text-slate-800">Tim kami online! Chat sekarang 👋</p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" />
        </div>
      </div>

      {/* Hover tooltip */}
      <div className="group">
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat Sekarang!
        </span>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-wa animate-ping opacity-30" />

        {/* Button */}
        <a
          href={getWALink(WA_MESSAGES.floating)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWAConversion}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl bg-wa hover:bg-wa-dark transition-colors"
          aria-label="Chat WhatsApp"
        >
          <WAIcon className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  )
}
