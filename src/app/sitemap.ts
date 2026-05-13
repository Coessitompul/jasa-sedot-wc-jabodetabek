import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import { blogList } from "@/data/blog"
import { areaList } from "@/data/area"
import { layananList } from "@/data/layanan"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL,                         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/layanan`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/area-layanan`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`,               lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE_URL}/tentang-kami`,       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/kontak`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]

  const layananPages: MetadataRoute.Sitemap = layananList.map((l) => ({
    url: `${SITE_URL}/layanan#${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const areaPages: MetadataRoute.Sitemap = areaList.map((area) => ({
    url: `${SITE_URL}/area-layanan/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = blogList.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...layananPages, ...areaPages, ...blogPages]
}
