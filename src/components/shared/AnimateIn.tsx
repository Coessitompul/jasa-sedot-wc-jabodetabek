"use client"

import { useEffect, useRef, useState } from "react"

type Animation = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  animation?: Animation
}

const hiddenStyles: Record<Animation, React.CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(32px)" },
  "fade-in":    { opacity: 0 },
  "fade-left":  { opacity: 0, transform: "translateX(32px)" },
  "fade-right": { opacity: 0, transform: "translateX(-32px)" },
  "zoom-in":    { opacity: 0, transform: "scale(0.9)" },
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  duration = 550,
  animation = "fade-up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(visible ? { opacity: 1, transform: "none" } : hiddenStyles[animation]),
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
