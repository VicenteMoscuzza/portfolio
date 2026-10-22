"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

const HOVER_TARGETS = "a, button, [cmdk-item], [data-cursor='hover']"

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.5 })

  useEffect(() => {
    // Solo en dispositivos con mouse
    if (!window.matchMedia("(pointer: fine)").matches) return

    setEnabled(true)
    document.documentElement.classList.add("has-custom-cursor")

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const handleOver = (e: MouseEvent) => {
      setHovering(!!(e.target as Element).closest?.(HOVER_TARGETS))
    }
    const handleLeave = () => setVisible(false)

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseover", handleOver)
    document.documentElement.addEventListener("mouseleave", handleLeave)

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseover", handleOver)
      document.documentElement.removeEventListener("mouseleave", handleLeave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-4 -left-4 w-8 h-8 rounded-full border border-white"
      />
      <motion.div
        style={{ x, y }}
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-white"
      />
    </div>
  )
}
