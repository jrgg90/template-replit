"use client"

import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export function CTA() {
  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-gradient-to-br from-[#F5F7F9] to-[#EDF1F4] rounded-3xl p-8 lg:p-16 gap-12 items-center 
          shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50">
          
          {/* Hero Text */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl tracking-tight max-w-3xl font-light text-[#131F42] leading-tight">
              <span className="font-medium">
                Una plataforma inteligente
              </span>{" "}
              para Escalar tu Negocio Globalmente
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Conectamos tu negocio con los principales marketplaces y plataformas de manera inteligente y automatizada
            </p>
          </div>

          {/* Logos Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
              {/* Gradient Overlays para efecto de fade en los bordes */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F5F7F9] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#EDF1F4] to-transparent z-10" />
              
              {/* Logos Container */}
              <div className="relative px-10">
                <Image
                  src="/logos2.png"
                  alt="Plataformas conectadas"
                  width={1000}
                  height={100}
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSemzk2gJ3yZthlBf1cl8yy4weKUWa0AGl48LFx3w6F1A6YAJQ/viewform?usp=header"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="gap-4 bg-[#131F42] hover:bg-[#1c2b5d] px-8 text-sm transform hover:scale-[1.02] transition-all duration-300 rounded-[50px]">
                Empieza Hoy <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA 