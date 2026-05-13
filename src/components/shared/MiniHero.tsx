import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Breadcrumb = {
  label: string
  href?: string
}

type Props = {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
}

export default function MiniHero({ title, subtitle, breadcrumbs }: Props) {
  return (
    <section className="bg-navy py-10 md:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="flex items-center flex-wrap gap-1 text-xs md:text-sm text-slate-300 mb-3 md:mb-4">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 md:mt-3 text-slate-300 text-sm md:text-base lg:text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
