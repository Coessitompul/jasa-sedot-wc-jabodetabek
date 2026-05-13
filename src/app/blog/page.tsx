import type { Metadata } from "next"
import MiniHero from "@/components/shared/MiniHero"
import BlogFilter from "@/components/shared/BlogFilter"
import CTABannerWA from "@/components/shared/CTABannerWA"

export const metadata: Metadata = {
  title: "Blog & Artikel",
  description:
    "Tips, panduan, dan informasi seputar sanitasi WC, perawatan septic tank, dan layanan sedot WC profesional Jabodetabek.",
}

export default function BlogPage() {
  return (
    <>
      <MiniHero
        title="Blog & Artikel"
        subtitle="Tips, panduan, dan informasi seputar sanitasi dan perawatan WC."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogFilter />
        </div>
      </section>
      <CTABannerWA />
    </>
  )
}
