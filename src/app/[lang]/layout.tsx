import { Language } from "@/types"
import { AuthProvider } from "@/lib/contexts/AuthContext"

// Metadata estática en inglés
const siteMetadata = {
  title: 'Exbordia - Your International Trade Assistant',
  description: 'Your international trade assistant powered by AI. Expand your e-commerce globally with automated market research, product optimization, and regulatory compliance.',
  keywords: 'export, ecommerce, United States, logistics, marketplaces, Artificial Intelligence, international trade, global markets',
  openGraph: {
    title: 'Exbordia - Expand your online store to new markets',
    description: 'Connect with Exbordia and grow your e-commerce. Discover markets, position your products and start selling internationally today.',
    url: 'https://www.exbordia.com',
    siteName: 'Exbordia',
    images: [
      {
        url: '/exbordia-logo-white.jpeg',
        width: 1200,
        height: 630,
        alt: 'Exbordia - AI-Powered International Trade',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/snippet.ico',
  },
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
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

// Generar los parámetros estáticos para las rutas
export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

// Generar metadata
export async function generateMetadata() {
  return siteMetadata
} 