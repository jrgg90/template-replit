"use client"

import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function CTA() {
  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-gradient-to-br from-[#F5F7F9] to-[#EDF1F4] rounded-3xl p-8 lg:p-16 gap-8 items-center 
          shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl tracking-tight max-w-3xl font-light text-[#131F42] leading-tight">
              <span className="font-medium">
                Una sola plataforma
              </span>{" "}
              para manejar todo tu negocio en Estados Unidos
            </h3>
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-gray-600 max-w-2xl mx-auto">
              Pre exportación, logística, almacenamiento, órdenes, devoluciones, pagos y manejo de impuestos. 
              Además, conectamos tu empresa con los principales marketplaces para aumentar tus ventas de manera 
              sencilla y eficiente.
            </p>
          </div>
          <div className="flex justify-center">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSemzk2gJ3yZthlBf1cl8yy4weKUWa0AGl48LFx3w6F1A6YAJQ/viewform?usp=header"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="gap-4 bg-[#131F42] hover:bg-[#1c2b5d] px-8 text-sm transform hover:scale-[1.02] transition-all duration-300">
                Empieza a Exportar <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA 