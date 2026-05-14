import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/data/blog"

type Props = {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <Image
          src={post.thumbnail}
          alt={post.judul}
          width={800}
          height={450}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
          {post.kategori}
        </span>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-display text-lg font-bold text-navy hover:text-navy-light transition-colors line-clamp-2 mb-2">
            {post.judul}
          </h3>
        </Link>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
        <div className="mt-auto flex justify-end">
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-semibold text-brand-orange hover:underline"
          >
            Baca →
          </Link>
        </div>
      </div>
    </article>
  )
}
