"use client"

import { useState } from "react"
import BlogCard from "@/components/shared/BlogCard"
import { blogList } from "@/data/blog"

const kategori = ["Semua", "Tips WC", "Edukasi", "Harga & Biaya"]

export default function BlogFilter() {
  const [aktif, setAktif] = useState("Semua")
  const filtered = aktif === "Semua" ? blogList : blogList.filter((p) => p.kategori === aktif)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {kategori.map((k) => (
          <button
            key={k}
            onClick={() => setAktif(k)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              aktif === k
                ? "bg-navy text-white"
                : "bg-white text-slate-700 border border-slate-200 hover:border-navy hover:text-navy"
            }`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}
