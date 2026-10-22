"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

export const EMAIL = "vicente.moscuzza@gmail.com"

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copiar email ${EMAIL}`}
      className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.15 }}
          className="mr-2"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </motion.span>
      </AnimatePresence>
      {copied ? "¡Copiado!" : "Copiar email"}
    </button>
  )
}
