"use client"

import { Github, Linkedin, ExternalLink, ArrowUpRight, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { CommandPalette } from "./components/command-palette"
import { ContactForm } from "./components/contact-form"
import { CopyEmailButton, EMAIL } from "./components/copy-email-button"
import { CustomCursor } from "./components/custom-cursor"
import { Reveal } from "./components/reveal"
import { ScrollProgress } from "./components/scroll-progress"
import { TechCarousel } from "./components/tech-carousel"
import { MateIcon } from "./components/mate-icon"
import { ProjectDetails } from "./components/project-details"
import { ProjectVideo } from "./components/project-video"
import { SpotlightCard } from "./components/spotlight-card"

const frontendTechs = ["html", "css", "react", "next.js", "tailwind", "svelte"]
const backendTechs = ["c", "javascript", "typescript", "node.js", "python", "postgresql", "mysql", "sequelize", "typeorm", "django", "fastapi", "strapi", "expressjs", "java", "springboot"]
const extraTechs = ["docker", "git", "azure", "aws", "vercel", "supabase"]

type Project = {
  title: string
  description: string
  techs: string[]
  link?: string
  image?: string
  /** Ruta del video dentro de /public */
  video?: string
  /** Link al repositorio (se muestra como botón "Ver código") */
  repo?: string
  badge?: string
  /** Card un poco más ancha en pantallas grandes */
  featured?: boolean
  /** Texto extra que se despliega con "Ver más" */
  details?: string
  highlights?: string[]
}

const projects: Project[] = [
  {
    title: "Quento Club",
    description:
      "Sistema de turnos para un complejo de pádel real: una plataforma web y un agente de WhatsApp con IA que reservan sobre una misma base de datos, sin dobles reservas.",
    details:
      "Sistema de gestión de turnos para un complejo de pádel real de 8 canchas, que reemplazó el cuaderno y el chat manual. Dos canales de reserva, una plataforma web y un agente de WhatsApp con IA, sobre una única base de datos: lo que se reserva en uno aparece al instante en el otro y la doble reserva deja de ser posible.",
    highlights: [
      "Agente de WhatsApp con IA (Gemini + MCP) que consulta, reserva, reprograma y cancela turnos en lenguaje natural",
      "Reservas en tiempo real y partidos abiertos para completar jugadores, con chat interno y sistema de puntos",
      "Panel para el club con turnera global, métricas de ocupación y control de asistencia",
      "5 roles con permisos propios: invitado, jugador, profesor, trabajador y dueño",
    ],
    featured: true,
    techs: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Python", "Gemini", "MCP"],
    video: "/quento-demo.webm",
    repo: "https://github.com/JoacoMazza/padel-quento",
    badge: "🎓 Proyecto final · UTN FRLP",
  },
  {
    title: "NutriGym",
    description:
      "Plataforma completa de gestión de rutinas y dietas para gimnasios personalizadas, según preferencias del usuario, con roles de administrador y usuario final.",
    techs: ["Next.js", "React", "Sequelize", "PostgreSQL"],
    image: "/NutriGym.png",
  },
]

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <div className="font-mono text-lg font-semibold">
              <MateIcon className="w-7 h-7" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Sobre mí
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Experiencia
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Proyectos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                Contacto
              </a>
            </div>
            <div className="flex items-center gap-2">
              <CommandPalette />
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="container-max">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal className="w-full">
              <p className="font-mono text-sm mb-4">Hola, soy</p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance">
                {"<Vicente Moscuzza />"}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-muted-foreground mb-6 sm:mb-8">
                Desarrollador Full Stack
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-2xl">
                Construyo experiencias digitales excepcionales. Especializado en crear aplicaciones web modernas que
                combinan diseño intuitivo con arquitectura robusta, enfocándome en el rendimiento y la experiencia del
                usuario.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Ver mi trabajo
                </a>
                <a
                  href="/Vicente Moscuzza CV.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
                >
                  Descargar CV
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="flex justify-center mt-8 lg:mt-0 order-first lg:order-last mb-8 lg:mb-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 group rounded-full overflow-hidden shadow-lg ring-1 ring-border transition-transform duration-500 ease-out hover:scale-110">
                <img
                  src="/fotocv.jpg"
                  alt="Foto de Vicente Moscuzza"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                  src="/fotocvanimada.jpg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 motion-reduce:transition-none"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-16">
            <Reveal className="lg:col-span-2 min-w-0">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Sobre mí</h3>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Soy estudiante de{" "}
                  <span className="font-semibold text-foreground">Ingeniería en Sistemas de Información</span> en la Universidad
                  Tecnológica Nacional de La Plata, actualmente me encuentro en el último año de la carrera. Me
                  especializo en el desarrollo de aplicaciones web modernas. Mi pasión está en la intersección del
                  diseño y la ingeniería, creando productos que no solo funcionan perfectamente sino que también ofrecen
                  experiencias excepcionales.
                </p>
                <p>
                  Estoy buscando un trabajo donde pueda aplicar mis habilidades técnicas y mi pasión por el desarrollo web.
                  Me entusiasma la idea de contribuir a proyectos innovadores y seguir aprendiendo en un entorno dinámico.
                  Me considero una persona proactiva, con ganas de enfrentar nuevos desafíos y crecer profesionalmente.
                </p>
              </div>
            </Reveal>

            {/* Tech Carousel Section */}
            <Reveal delay={0.15} className="lg:col-span-1 w-full overflow-hidden">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Tecnologías</h4>
              <div className="space-y-6 sm:space-y-8">
                <TechCarousel title="Frontend" technologies={frontendTechs} />
                <TechCarousel title="Backend" technologies={backendTechs} />
                <TechCarousel title="Extras" technologies={extraTechs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-secondary/30">
        <div className="container-max">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Experiencia</h3>
          </Reveal>
          <div className="space-y-8 sm:space-y-12">
            <Reveal className="group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-2 sm:gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 underline-offset-4 decoration-foreground/30 group-hover:underline">
                    Desarrollo Full Stack y Conexión IoT
                  </h4>
                  <p className="font-medium mb-2">Laboratorio LISA - UTN FRLP</p>
                  <p className="text-sm text-muted-foreground">2025 — Presente</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 hidden lg:block" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En este laboratorio participo del proyecto <span className="font-semibold">Ciudades Inteligentes</span>, donde
                estoy trabajando en el desarrollo Full Stack de la plataforma y también participo en la conexión de dos placas ESP-32 mediante tecnología LoRa.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Svelte", "Django", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-accent/50 rounded text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-max">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Proyectos destacados</h3>
          </Reveal>
          {/* En pantallas grandes: grilla de 5 columnas, el proyecto destacado ocupa 3 y el resto 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {projects.map((project, index) => {
              // La card entera es un link solo si no tiene video (si no, el clic en play abriría el link)
              const wholeCardIsLink = !!project.link && !project.video

              const cardContent = (
                <div className="p-4 sm:p-6 h-full">
                  {project.video ? (
                    <ProjectVideo src={project.video} title={project.title} className="mb-4" />
                  ) : (
                    project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded mb-4 shadow-md"
                      />
                    )
                  )}
                  {project.badge && (
                    <span className="inline-block mb-3 px-2 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                      {project.badge}
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h5 className="font-semibold underline-offset-4 decoration-foreground/30 group-hover:underline">{project.title}</h5>
                    {wholeCardIsLink && (
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,translate] shrink-0" />
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-xs font-medium hover:bg-secondary transition-colors shrink-0"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Ver código
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {(project.details || project.highlights) && (
                    <ProjectDetails details={project.details} highlights={project.highlights} />
                  )}
                  <div className="flex flex-wrap gap-1">
                    {project.techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 border border-border rounded text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )

              return (
                <Reveal
                  key={project.title}
                  delay={index * 0.1}
                  className={`h-full ${project.featured ? "lg:col-span-3" : "lg:col-span-2"}`}
                >
                  <SpotlightCard>
                    {wholeCardIsLink ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer block h-full"
                      >
                        {cardContent}
                      </a>
                    ) : (
                      cardContent
                    )}
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-secondary/30">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <Reveal className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Contáctame</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Siempre estoy abierto a escuchar nuevas oportunidades. Envíame un mensaje y te responderé lo antes posible.
              </p>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.1} className="bg-card border border-border rounded-xl p-4 sm:p-8 mb-8">
              <ContactForm />
            </Reveal>
            {/* Social Links */}
            <Reveal delay={0.2} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <a
                href="https://github.com/VicenteMoscuzza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vicente-moscuzza-56a1b8265/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <CopyEmailButton />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-border">
        <div className="container-max">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Vicente. Construido con React y NextJS.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {EMAIL}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/VicenteMoscuzza"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vicente-moscuzza-56a1b8265/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
