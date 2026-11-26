"use client"

import { MouseEvent, ReactNode, useRef } from "react"

type SpotlightCardProps = {
  children: ReactNode
  className?: string
}

// Card con un brillo suave que sigue al mouse por el fondo y el borde,
// más una leve elevación al pasar por encima.
export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group/spot relative h-full rounded-lg bg-border p-px transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {/* Brillo del borde: queda detrás del contenido y solo se ve en el 1px de padding */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(350px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--foreground) 45%, transparent), transparent 70%)",
        }}
      />
      <div className="relative h-full overflow-hidden rounded-[calc(var(--radius-lg)-1px)] bg-card">
        {/* Brillo del fondo: debajo del contenido, así no tiñe imágenes ni el video */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
          style={{
            background:
              "radial-gradient(500px circle at var(--spot-x) var(--spot-y), color-mix(in oklab, var(--foreground) 6%, transparent), transparent 70%)",
          }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  )
}
