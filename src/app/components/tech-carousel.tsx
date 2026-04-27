"use client"

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"

interface TechCarouselProps {
  title: string
  technologies: string[]
}

export function TechCarousel({ title, technologies }: TechCarouselProps) {
  // Duplicamos para que el loop reinicie sin salto visual.
  const techs = useMemo(() => [...technologies, ...technologies], [technologies])

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  // px/segundo (más alto = más rápido)
  const SPEED_PX_PER_SEC = 80
  const [durationSeconds, setDurationSeconds] = useState<number>(10)
  const [distancePx, setDistancePx] = useState<number>(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const update = () => {
      // El track contiene [lista, lista], así que la distancia de 1 loop es la mitad.
      const nextDistance = track.scrollWidth / 2
      setDistancePx(nextDistance)
      setDurationSeconds(Math.max(0.001, nextDistance / SPEED_PX_PER_SEC))
    }

    update()

    const ro = new ResizeObserver(() => update())
    ro.observe(track)
    return () => ro.disconnect()
  }, [techs])

  return (
    <div className="space-y-3">
      <h5 className="text-sm font-medium text-muted-foreground">{title}</h5>
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div ref={viewportRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex animate-scroll-loop"
            style={
              ({
                ["--scroll-distance" as never]: `${distancePx}px`,
                ["--scroll-duration" as never]: `${durationSeconds}s`,
              } as CSSProperties)
            }
          >
            {techs.map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="group relative flex-shrink-0 flex flex-col items-center justify-center mx-4"
              >
                <div className="relative w-12 h-12 flex items-center justify-center rounded-lg bg-secondary/50 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary">
                  <img
                    src={`/${tech.replace(/\s/g, "").replace(".", "").toLowerCase()}.png`}
                    alt={tech}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
