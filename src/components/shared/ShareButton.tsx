"use client"

import { Share2 } from "lucide-react"

export default function ShareButton() {
  function handleCopy() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
    >
      <Share2 className="w-4 h-4" />
      Salin Link
    </button>
  )
}
