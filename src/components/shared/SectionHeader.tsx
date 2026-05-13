type Props = {
  badge?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ badge, title, subtitle, center = true, light = false }: Props) {
  return (
    <div className={`mb-10 md:mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs md:text-sm font-semibold px-3 md:px-4 py-1.5 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
