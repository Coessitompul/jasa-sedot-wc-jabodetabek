"use client"

import WAIcon from "@/components/shared/WAIcon"
import { trackWAConversion } from "@/lib/constants"

type Props = {
  href: string
  label?: string
  size?: "sm" | "md"
}

export default function WAButton({ href, label = "Pesan Sekarang", size = "md" }: Props) {
  if (size === "sm") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWAConversion}
        className="flex items-center justify-center gap-2 bg-wa text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-wa-dark transition-colors"
      >
        <WAIcon className="w-4 h-4" />
        {label}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWAConversion}
      className="flex items-center justify-center gap-2 bg-wa text-white px-6 py-3 rounded-xl font-semibold hover:bg-wa-dark transition-colors"
    >
      <WAIcon className="w-5 h-5" />
      {label}
    </a>
  )
}
