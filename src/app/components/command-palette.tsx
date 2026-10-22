"use client"

import { Command } from "cmdk"
import { useLenis } from "lenis/react"
import {
  Briefcase,
  Copy,
  Download,
  FolderGit2,
  Github,
  Home,
  Linkedin,
  Mail,
  Moon,
  Search,
  Sun,
  User,
} from "lucide-react"
import { useTheme } from "next-themes"
import type Lenis from "lenis"
import { ReactNode, useEffect, useRef, useState } from "react"
import { EMAIL } from "./copy-email-button"

const NAV_OFFSET = -72

const sections = [
  { id: "top", label: "Inicio", icon: Home },
  { id: "about", label: "Sobre mí", icon: User },
  { id: "experience", label: "Experiencia", icon: Briefcase },
  { id: "projects", label: "Proyectos", icon: FolderGit2 },
  { id: "contact", label: "Contacto", icon: Mail },
]

const links = [
  { label: "GitHub", href: "https://github.com/VicenteMoscuzza", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vicente-moscuzza-56a1b8265/", icon: Linkedin },
]

function scrollToSection(id: string, lenis?: Lenis) {
  const el = id === "top" ? null : document.getElementById(id)
  if (id !== "top" && !el) return

  if (lenis) {
    lenis.scrollTo(el ?? 0, { offset: el ? NAV_OFFSET : 0 })
    return
  }
  // Sin Lenis (movimiento reducido): scroll nativo compensando el navbar fijo
  const top = el ? el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET : 0
  window.scrollTo({ top, behavior: "smooth" })
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const lenis = useLenis()
  const pendingSection = useRef<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Frena el scroll suave mientras la paleta está abierta. Al cerrarse, recién
  // ahí ejecuta el scroll pendiente: con Lenis frenado o el diálogo bloqueando
  // el scroll de la página, la orden se perdería.
  useEffect(() => {
    if (open) {
      lenis?.stop()
      return
    }
    lenis?.start()

    const id = pendingSection.current
    if (!id) return
    pendingSection.current = null
    requestAnimationFrame(() => scrollToSection(id, lenis))
  }, [open, lenis])

  const run = (action: () => void) => {
    setOpen(false)
    action()
  }

  const goToSection = (id: string) => {
    pendingSection.current = id
    setOpen(false)
  }

  const downloadCV = () => {
    const a = document.createElement("a")
    a.href = "/Vicente Moscuzza CV.pdf"
    a.download = ""
    a.click()
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de comandos"
        className="inline-flex items-center gap-2 p-2 sm:px-3 rounded-lg border border-border hover:bg-secondary transition-colors text-sm text-muted-foreground"
      >
        <Search className="w-4 h-4" />
        <kbd className="hidden sm:inline font-mono text-xs">Ctrl K</kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Menú de comandos"
        overlayClassName="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
        contentClassName="fixed left-1/2 top-[20vh] z-[80] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <Command.Input
            placeholder="¿A dónde querés ir?"
            className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <Command.List data-lenis-prevent className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No se encontraron resultados.
          </Command.Empty>

          <PaletteGroup heading="Navegación">
            {sections.map(({ id, label, icon: Icon }) => (
              <PaletteItem key={id} onSelect={() => goToSection(id)}>
                <Icon className="w-4 h-4" />
                {label}
              </PaletteItem>
            ))}
          </PaletteGroup>

          <PaletteGroup heading="Acciones">
            <PaletteItem onSelect={() => run(() => navigator.clipboard.writeText(EMAIL))}>
              <Copy className="w-4 h-4" />
              Copiar email
            </PaletteItem>
            <PaletteItem onSelect={() => run(downloadCV)}>
              <Download className="w-4 h-4" />
              Descargar CV
            </PaletteItem>
            <PaletteItem onSelect={() => run(() => setTheme(theme === "dark" ? "light" : "dark"))}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              Cambiar tema
            </PaletteItem>
          </PaletteGroup>

          <PaletteGroup heading="Links">
            {links.map(({ label, href, icon: Icon }) => (
              <PaletteItem key={label} onSelect={() => run(() => window.open(href, "_blank", "noopener,noreferrer"))}>
                <Icon className="w-4 h-4" />
                {label}
              </PaletteItem>
            ))}
          </PaletteGroup>
        </Command.List>
      </Command.Dialog>
    </>
  )
}

function PaletteGroup({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <Command.Group
      heading={heading}
      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-muted-foreground"
    >
      {children}
    </Command.Group>
  )
}

function PaletteItem({ onSelect, children }: { onSelect: () => void; children: ReactNode }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm cursor-pointer data-[selected=true]:bg-secondary"
    >
      {children}
    </Command.Item>
  )
}
