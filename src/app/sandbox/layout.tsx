import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Sandbox | Exbordia',
  description: 'Playground para experimentar con diferentes diseños y componentes',
}

// Marcar explícitamente como ruta pública y sin cache
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header del Sandbox */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium text-gray-900">Design Sandbox</h1>
            <span className="text-sm text-gray-500">Playground de diseño</span>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main>{children}</main>
    </div>
  )
} 