import { Language } from "@/types"

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Validar que lang sea un idioma válido
  const validLang = ['es', 'en'].includes(lang) ? (lang as Language) : 'es'

  return (
    <html lang={validLang}>
      <body>
        {children}
      </body>
    </html>
  )
}

// Generar los parámetros estáticos para las rutas
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
} 