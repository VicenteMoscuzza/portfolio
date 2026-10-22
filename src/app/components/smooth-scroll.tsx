"use client"

import { ReactLenis } from "lenis/react"
import { ReactNode, useEffect, useState } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  if (reducedMotion) return <>{children}</>

  return (
    <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -72 } }}>
      {children}
    </ReactLenis>
  )
}
