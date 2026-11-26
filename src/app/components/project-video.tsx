"use client"

type ProjectVideoProps = {
  src: string
  title: string
  className?: string
}

// Video alojado en el propio sitio (sin YouTube): sin botón de descarga,
// sin picture-in-picture y sin menú de clic derecho ("Guardar video como...").
export function ProjectVideo({ src, title, className = "" }: ProjectVideoProps) {
  return (
    <video
      // "#t=0.1" hace que el navegador muestre un fotograma como portada en vez de un recuadro negro
      src={`${src}#t=0.1`}
      title={title}
      aria-label={`Video demo: ${title}`}
      controls
      controlsList="nodownload noplaybackrate"
      disablePictureInPicture
      playsInline
      preload="metadata"
      onContextMenu={(e) => e.preventDefault()}
      className={`aspect-video w-full rounded bg-black shadow-md ${className}`}
    />
  )
}
