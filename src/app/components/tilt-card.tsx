"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { MouseEvent, ReactNode } from "react"

const MAX_TILT = 12
const spring = { stiffness: 200, damping: 20, mass: 0.5 }

type TiltCardProps = {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  const rotateX = useSpring(0, spring)
  const rotateY = useSpring(0, spring)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareOpacity = useSpring(0, spring)

  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3), transparent 60%)`

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    rotateY.set((px - 0.5) * MAX_TILT * 2)
    rotateX.set((0.5 - py) * MAX_TILT * 2)
    glareX.set(px * 100)
    glareY.set(py * 100)
    glareOpacity.set(1)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    glareOpacity.set(0)
  }

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
        <motion.div
          aria-hidden="true"
          style={{ background: glare, opacity: glareOpacity }}
          className="pointer-events-none absolute inset-0 rounded-lg mix-blend-overlay"
        />
      </motion.div>
    </div>
  )
}
