import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Language } from "@/types"

export default function Page() {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  
  // Si estamos en la raíz, redirigir según el idioma en la URL
  if (pathname.includes('/en')) {
    redirect('/en/home')
  }
  
  redirect('/es/inicio')
}

// Esto asegura que la página se renderice en el servidor
export const dynamic = 'force-dynamic' 