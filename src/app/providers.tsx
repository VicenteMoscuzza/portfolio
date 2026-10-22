"use client"

import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"
import { SmoothScroll } from "./components/smooth-scroll"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>{children}</SmoothScroll>
      </MotionConfig>
    </ThemeProvider>
  )
}
