import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import BlogCard from "@/components/shared/BlogCard"
import ShareButton from "@/components/shared/ShareButton"
import WAIcon from "@/components/shared/WAIcon"
import { blogList } from "@/data/blog"
import { getWALink, COMPANY, SITE_URL } from "@/lib/constants"

export async function generateStaticParams() {
  return blogList.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogList.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.judul,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.judul,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.thumbnail, width: 800, height: 450, alt: post.judul }],
      publishedTime: post.tanggal,
      authors: [COMPANY.name],
      section: post.kategori,
    },
    twitter: {
      card: "summary_large_image",
      title: post.judul,
      description: post.excerpt,
      images: [post.thumbnail],
    },
  }
}

function renderMarkdown(text: string) {
  const lines = text.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-display text-2xl font-bold text-navy mt-8 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-display text-xl font-bold text-navy mt-6 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i])
        i++
      }
      const [header, , ...rows] = tableLines
      const headers = header.split("|").filter((c) => c.trim())
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-navy text-white">
              <tr>
                {headers.map((h, j) => (
                  <th key={j} className="px-4 py-3 text-left font-semibold">{h.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => {
                const cells = row.split("|").filter((c) => c.trim())
                return (
                  <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    {cells.map((cell, k) => (
                      <td key={k} className="px-4 py-3 border-t border-slate-100">{cell.trim()}</td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.startsWith("- ")) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 my-3 text-slate-600">
          {listItems.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ul>
      )
      continue
    } else if (line !== "") {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
      elements.push(
        <p
          key={i}
          className="text-slate-600 leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )
    }
    i++
  }

  return elements
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogList.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogList.filter((p) => p.slug !== slug).slice(0, 3)

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.judul,
    description: post.excerpt,
    image: post.thumbnail,
    datePublished: post.tanggal,
    dateModified: post.tanggal,
    author: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-tab.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    articleSection: post.kategori,
    inLanguage: "id-ID",
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog",    item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.judul, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-navy transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-700 font-medium line-clamp-1">{post.judul}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Konten artikel */}
          <article className="lg:col-span-2">
            <span className="inline-block bg-navy/10 text-navy text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              {post.kategori}
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
              {post.judul}
            </h1>
            {/* <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {post.tanggal}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.estimasiBaca}
              </span>
            </div> */}

            <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
              <Image
                src={post.thumbnail}
                alt={post.judul}
                width={800}
                height={450}
                className="w-full object-cover"
                priority
              />
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm">
              {renderMarkdown(post.konten)}
            </div>

            {/* Share buttons */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm font-medium text-slate-600">Bagikan:</span>
              <a
                href={getWALink(`Baca artikel menarik: ${post.judul}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-wa text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-wa-dark transition-colors"
              >
                <WAIcon className="w-4 h-4" />
                WhatsApp
              </a>
              <ShareButton />
            </div>

            {/* Artikel terkait */}
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-navy mb-6">Artikel Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 sticky top-24 self-start">
            <div className="bg-navy rounded-2xl p-6">
              <h3 className="font-display font-bold text-white text-lg mb-3">
                Butuh Jasa Sedot WC?
              </h3>
              <p className="text-slate-300 text-sm mb-5">
                Hubungi kami sekarang untuk respon cepat dan estimasi harga gratis!
              </p>
              <a
                href={getWALink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-wa text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-wa-dark transition-colors w-full"
              >
                <WAIcon className="w-5 h-5" />
                Chat WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-4 border-b border-slate-100">
                <h3 className="font-display font-bold text-navy">Artikel Lainnya</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {blogList
                  .filter((p) => p.slug !== slug)
                  .slice(0, 4)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="flex items-start gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors group"
                    >
                      <Image
                        src={p.thumbnail}
                        alt={p.judul}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[10px] font-semibold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-full mb-1">
                          {p.kategori}
                        </span>
                        <p className="text-sm font-medium text-slate-700 group-hover:text-navy transition-colors line-clamp-2 leading-snug">
                          {p.judul}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-navy shrink-0 self-center transition-colors" />
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  )
}
