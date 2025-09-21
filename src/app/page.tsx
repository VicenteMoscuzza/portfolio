"use client"

import { Coffee, Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Portfolio() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container-max">
          <div className="flex items-center justify-between py-4">
            <div className="font-mono text-lg font-semibold pl-4">
              <Coffee />
            </div>
            <div className="hidden md:flex items-center space-x-8">
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
            {/* Botón Dark/Light Mode */}
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
      </nav>
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
  <div className="container-max">
    {/* Cambia items-start por items-center para alinear verticalmente */}
    <div className="max-w-4xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      <div>
        <p className="font-mono text-sm mb-4">Hola, soy</p>
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">{"<Vicente Moscuzza />"}</h1>
        <h2 className="text-3xl lg:text-5xl font-bold text-muted-foreground mb-8">Desarrollador Full Stack</h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl">
          Construyo experiencias digitales excepcionales. Especializado en crear aplicaciones web modernas que
          combinan diseño intuitivo con arquitectura robusta, enfocándome en el rendimiento y la experiencia del
          usuario.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Ver mi trabajo
          </a>
          <a
            href="/Curriculum Vitae.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            Descargar CV
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-8 lg:mt-0">
  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 group">
    <img
      src="/fotocv.jpg"
      alt="Foto de Vicente Moscuzza"
      className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg border border-border transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
    />
    <img
      src="/fotocvanimada.jpg"
      alt="Foto animada de Vicente Moscuzza"
      className="absolute inset-0 w-full h-full rounded-full shadow-lg border border-border transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
    />
  </div>
</div>
    </div>
  </div>
</section>
      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-8">Sobre mí</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Soy estudiante de {" "}
                  <span className="font-semibold">Ingeniería en Sistemas de Información</span> en la Universidad 
                  Tecnológica Nacional de La Plata, actualmente me encuentro en el cuarto año de la carrera. Me
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
            </div>

            <div>
  <h4 className="text-xl font-semibold mb-6">Tecnologías</h4>
  <div className="space-y-6">
    <div>
      <h5 className="text-sm font-medium text-muted-foreground mb-3">Frontend</h5>
      <div className="flex flex-wrap gap-4">
        {["html", "css", "react", "next.js", "tailwind", "svelte"].map((tech) => (
          <div
            key={tech}
            className="group relative flex flex-col items-center justify-center w-8 h-8"
          >
            <img
              src={`/${tech.replace(/\s/g, '').replace('.', '').toLowerCase()}.png`}
              alt={tech}
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h5 className="text-sm font-medium text-muted-foreground mb-3">Backend</h5>
      <div className="flex flex-wrap gap-4">
        {["c", "javascript", "typescript", "node.js", "python", "postgresql", "mysql", "sequelize", "django", "strapi", "expressjs"].map((tech) => (
          <div
            key={tech}
            className="group relative flex flex-col items-center justify-center w-8 h-8"
          >
            <img
              src={`/${tech.replace(/\s/g, '').replace('.', '').toLowerCase()}.png`}
              alt={tech}
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h5 className="text-sm font-medium text-muted-foreground mb-3">Extras</h5>
      <div className="flex flex-wrap gap-4">
        {["docker", "git", "azure", "aws", "vercel", "supabase"].map((tech) => (
          <div
            key={tech}
            className="group relative flex flex-col items-center justify-center w-8 h-8"
          >
            <img
              src={`/${tech.replace(/\s/g, '').replace('.', '').toLowerCase()}.png`}
              alt={tech}
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded px-2 py-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-secondary/30">
        <div className="container-max">
          <h3 className="text-3xl font-bold mb-12">Experiencia</h3>
          <div className="space-y-12">
            <div className="group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    Desarrollo Full Stack y Conexión IoT
                  </h4>
                  <p className="font-medium mb-2">Laboratorio LISA - UTN FRLP</p>
                  <p className="text-sm text-muted-foreground">2025 — Presente</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                En este laboratorio participo del proyecto <span className="font-semibold"> Ciudades Inteligentes</span>, donde 
                estoy trabajando en el desarrollo Full Stack de la plataforma y tambien participo en la conexión de dos placas ESP-32 mediante tecnología LoRa.
              </p>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "Svelte", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-accent/50 rounded text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
  <div className="container-max">
    <h3 className="text-3xl font-bold mb-12">Proyectos destacados</h3>
    <div className="grid lg:grid-cols-3 gap-8">
      {[
        {
          title: "NutriGym",
          description:
            "Plataforma completa de gestón de rutnas y dietas para gimnasios personalizadas, según preferencias del usuario, con roles de administrador y usuario final.",
          techs: ["Next.js", "React", "Sequelize", "PostgreSQL"],
          link: "https://nutrigym-henna.vercel.app/",
          image: "/NutriGym.png", // Ruta de la imagen en public
        },
        // Puedes agregar más proyectos aquí
      ].map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer block"
        >
          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
            )}
            <div className="flex items-start justify-between mb-4">
              <h5 className="font-semibold group-hover:text-accent transition-colors">{project.title}</h5>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.techs.map((tech) => (
                <span key={tech} className="px-2 py-1 border border-border rounded text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-secondary/30">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Contáctame</h3>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Siempre estoy abierto a escuchar nuevas oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:vicente.moscuzza@email.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar email
              </a>
              <a
                href="https://github.com/VicenteMoscuzza"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vicente-moscuzza-56a1b8265/"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container-max">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Vicente. Construido con React y NextJS.</p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:vicente.moscuzza@email.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                vicente.moscuzza@email.com
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
