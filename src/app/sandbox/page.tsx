import Link from 'next/link'

// Configuración para asegurar que la página sea completamente estática
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'
export const runtime = 'edge'

export default function SandboxIndex() {
  const pages = [
    {
      title: "Market Finder",
      description: "Diseño para búsqueda y análisis de mercados",
      path: "/sandbox/market-finder",
    },
    // Aquí se pueden agregar más páginas de diseño
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <Link 
            key={page.path} 
            href={page.path}
            className="group block p-6 bg-white rounded-xl border border-gray-200 
              hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 
              transition-all duration-200"
          >
            <h2 className="text-xl font-medium text-gray-900 mb-2 
              group-hover:text-blue-600">{page.title}</h2>
            <p className="text-gray-600">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
} 