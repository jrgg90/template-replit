import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

// Agregar este objeto JSON-LD
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Exbordia',
  url: 'https://www.exbordia.com',
  sameAs: [
    'https://linkedin.com/company/exbordia'
  ]
}

export const metadata: Metadata = {
  title: 'Exbordia - Expande tu tienda online a nuevos mercados fácilmente',
  description: 'Conéctate con Exbordia y haz crecer tu e-commerce. Descubre mercados, posiciona tus productos y comienza a vender internacionalmente hoy mismo.',
  keywords: 'exportación, ecommerce, Estados Unidos, logística, marketplaces, Inteligencia Artificial',
  openGraph: {
    title: 'Exbordia - Expande tu tienda online a nuevos mercados fácilmente',
    description: 'Conéctate con Exbordia y haz crecer tu e-commerce. Descubre mercados, posiciona tus productos y comienza a vender internacionalmente hoy mismo.',
    url: 'https://www.exbordia.com',
    siteName: 'Exbordia',
    images: [
      {
        url: '/exbordia-logo-white.jpeg',
        width: 1200,
        height: 630,
        alt: 'Exbordia - Comercio Internacional con IA',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/snippet.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
