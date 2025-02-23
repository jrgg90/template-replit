import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h1 className="text-5xl font-normal text-gray-900 mb-6 tracking-tight">
                Tu asistente de 
                <span className="block font-medium">comercio internacional</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expande tu negocio globalmente con la ayuda de IA. Exbordia te ayuda a vender en marketplaces internacionales.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Comienza Gratis</Button>
                <Link href="/demo">
                  <Button variant="outline" size="lg">Ver Demo</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              {/* Aquí puedes agregar una imagen o animación */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 