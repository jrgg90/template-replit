import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Exbordia',
  description: 'Current job openings · Software Engineer · Product Manager · Sales Executive',
}

export default function CareersPage() {
  return (
    <main>
      <h1>Careers at Exbordia</h1>
      
      {/* Este párrafo podría ser usado por Google como snippet */}
      <p className="text-xl text-gray-600 mb-8">
        Current job openings · Software Engineer · Product Manager · Sales Executive
      </p>

      {/* Resto del contenido */}
    </main>
  )
} 