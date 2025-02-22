import { languages } from '../i18n/settings'
import { Language } from "@/types"

export async function generateStaticParams() {
  return languages.map((lng) => ({ lang: lng }))
}

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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
} 