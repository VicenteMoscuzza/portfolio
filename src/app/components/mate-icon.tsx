import { SVGProps } from "react"

// Ícono de mate con bombilla, dibujado con el mismo estilo de trazo que los íconos de lucide-react
export function MateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Mate"
      {...props}
    >
      {/* Bombilla: más larga y más inclinada */}
      <path d="M13 10.5 19.5 1.5" />
      <path d="M18.5 1.5h3" />
      {/* Borde de la boca */}
      <path d="M7 9h10" />
      {/* Cuerpo del mate: más alto y angosto, menos redondo */}
      <path d="M8 9c-2 3.5-2.5 8.5-1 11 .6 1 1.5 1.5 2.5 1.5h5c1 0 1.9-.5 2.5-1.5 1.5-2.5 1-7.5-1-11" />
    </svg>
  )
}
