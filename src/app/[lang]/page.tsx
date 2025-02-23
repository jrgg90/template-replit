import { redirect } from 'next/navigation'
import { Language } from "@/types"

interface PageProps {
  params: {
    lang: Language
  }
}

export default function Page({ params }: PageProps) {
  // Redirigir según el idioma
  if (params.lang === 'en') {
    redirect('/en/home')
  }
  
  // Para español, asegurarnos de que la redirección sea absoluta
  return redirect('/es/inicio')
}

// Desactivar la generación estática para esta página
export const dynamic = 'force-dynamic' 