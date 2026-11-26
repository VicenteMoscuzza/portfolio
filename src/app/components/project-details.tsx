"use client"

import { ChevronDown } from "lucide-react"
import { useId, useState } from "react"

type ProjectDetailsProps = {
  details?: string
  highlights?: string[]
}

// Texto extra del proyecto que se despliega con "Ver más"
export function ProjectDetails({ details, highlights }: ProjectDetailsProps) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div className="mb-4">
      <div
        id={id}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden" inert={!open}>
          {details && <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{details}</p>}
          {highlights && (
            <ul className="mb-3 space-y-1.5 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2 leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="inline-flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4"
      >
        {open ? "Ver menos" : "Ver más"}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
    </div>
  )
}
