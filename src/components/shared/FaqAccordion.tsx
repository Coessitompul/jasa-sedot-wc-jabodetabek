"use client"

import { useState } from "react"

type FaqItem = {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={faq.q}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display font-bold text-navy">{faq.q}</span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-light transition-colors ${
                  isOpen
                    ? "bg-brand-orange text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
