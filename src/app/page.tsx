import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Globe2, Truck, BarChart3, DollarSign } from 'lucide-react'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import AnimatedBackground from "@/components/ui/animated-background"
import { ScrollRevealStat } from "@/components/ui/scroll-reveal-stat"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/exbordia-logo.png"
              alt="Exbordia Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-[#131F42] font-light rounded-[4px]">
              Iniciar Sesión
            </Button>
            <Button className="bg-[#131F42] text-white hover:bg-[#1c2b5d] rounded-[4px]">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[800px]">
        {/* Background Rectangle with Decorative Elements */}
        <div className="absolute top-24 left-0 right-0 bottom-0 mx-auto w-[95%]">
          {/* Base Rectangle - Bottom Layer */}
          <div className="absolute inset-0 bg-[#F1F6F9] rounded-[2.5rem] z-0" />
          
          {/* Dotted Pattern - Middle Layer */}
          <div className="absolute inset-0 z-[1]">
            <svg className="w-full h-full">
              <pattern 
                id="dotPattern" 
                x="0" 
                y="0" 
                width="20" 
                height="20" 
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#CBD5E1" fillOpacity="0.3" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
        </div>
        
        {/* Content - Top Layer */}
        <div className="relative container mx-auto max-w-4xl px-4 z-[2]">
          <div className="flex flex-col items-center text-center pt-12">
            <h1 className="text-3xl md:text-[4rem] font-normal text-[#131F42] leading-[1.15] mb-8 tracking-tight">
              <span className="font-light">¡Vende tus productos</span><br />
              <span className="font-medium">en Estados Unidos</span><br />
              <span className="font-light">sin complicaciones!</span>
            </h1>
            <p className="text-base md:text-lg font-light text-gray-600 mb-20 max-w-2xl mx-auto tracking-wide">
              Nos encargamos de la logística, la entrega y los pagos en USD, para que tú solo te enfoques en hacer crecer tu negocio.
            </p>
            <InteractiveHoverButton 
              text="Comienza Ahora"
              className="bg-[#131F42] text-white border-none"
            />
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#131F42] mb-6">
              Expande Tu Mercado <span className="font-light">con Facilidad</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exbordia facilita la expansión global para marcas internacionales. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Storage and Fulfillment Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
              Inventario y Envíos desde EE. UU
              </h3>
              <p className="text-gray-600">
                Mantenga sus productos más cerca de los clientes en uno de nuestros 
                almacenes y permítanos gestionar la entrega D2C y B2B para entregas 
                confiables en 2 días.
              </p>
            </div>

            {/* Returns Management Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Gestión de Devoluciones
              </h3>
              <p className="text-gray-600">
                Gestionamos la logística inversa localmente. Optimizamos las devoluciones 
                con manejo basado en EE.UU. para mejorar la satisfacción del cliente y 
                reducir costos.
              </p>
            </div>

            {/* Cross-Border Payments Card */}
            <div className="bg-[#E8F1F1] rounded-3xl p-8 lg:row-span-2">
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Pagos Transfronterizos
              </h3>
              <p className="text-gray-600 mb-8">
                Reciba pagos en USD instantáneamente con Exbordia como su Merchant of Record, asegurando transacciones seguras para ventas en EE.UU. 
                Nos encargamos de impuestos y cumplimiento.
              </p>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Payment</span>
                    <span className="font-medium">$284.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Transfer</span>
                    <span className="font-medium">$114.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Insights Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Insights de Mercado
              </h3>
              <p className="text-gray-600">
                Obtenga una ventaja competitiva con insights de mercado basados en datos 
                y pronósticos de demanda para optimizar inventario y satisfacer la 
                demanda internacional.
              </p>
            </div>

            {/* Ocean & Air Freight Card */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-[#131F42]" />
              </div>
              <h3 className="text-2xl font-medium text-[#131F42] mb-4">
                Logística Internacional
              </h3>
              <p className="text-gray-600">
              Desde que el producto sale de tu fábrica en México hasta que llega a nuestras bodegas en EE. UU., gestionamos cada paso del proceso logístico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#131F42] mb-6">
              ¿Cómo <span className="font-light">Funciona?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {[
              {
                id: 1,
                title: "Sincroniza Tu Tienda",
                description: "Conecta tu e-commerce (Shopify, WooCommerce, Wix) con Exbordia en minutos."
              },
              {
                id: 2,
                title: "Selecciona Tus Productos",
                description: "Elige qué productos quieres exportar y recibe nuestra guía para cumplir los requisitos necesarios."
              },
              {
                id: 3,
                title: "Envía a EE. UU.",
                description: "Coordinamos el transporte y despacho aduanal para que tus productos lleguen a nuestras bodegas."
              },
              {
                id: 4,
                title: "Almacena y Vende",
                description: "Tus productos estarán listos en nuestras bodegas en EE. UU. para entregas rápidas a clientes finales o empresas."
              },
              {
                id: 5,
                title: "Recibe Tus Pagos",
                description: "Procesamos los pagos de tus clientes y te depositamos directamente en tu cuenta bancaria en México."
              }
            ].map((step) => (
              <div 
                key={step.id} 
                className="group relative bg-white rounded-2xl p-8 pt-16 transition-all duration-300 hover:bg-[#F1F6F9] cursor-pointer"
              >
                {/* Connecting Line */}
                {step.id < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 z-0" />
                )}
                
                {/* Step Number */}
                <div className="absolute top-0 left-4">
                  <span className="text-[8rem] font-black text-[#131F42]/5 group-hover:text-[#131F42]/10 transition-colors duration-300 font-mono leading-none">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-medium text-[#131F42] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Add this after How it Works section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-[#131F42] mb-6">
              Nuestros Resultados <span className="font-light">Hablan por Sí Mismos</span>
            </h2>
          </div>

          <div className="space-y-6">
            <ScrollRevealStat
              stat="80%"
              description="menos en costos logísticos para tu negocio"
            />
            <ScrollRevealStat
              stat="2.5 días"
              description="o menos en tiempo de entrega para cumplir las expectativas de tus clientes en E.E.U.U."
            />
            <ScrollRevealStat
              stat="24/7"
              description="soporte personalizado en español para resolver todas tus dudas"
            />
            <ScrollRevealStat
              stat="100%"
              description="transparencia total: Sin costos ocultos ni complicaciones"
            />
            <ScrollRevealStat
              stat="0 riesgo"
              description="prueba con un piloto para comenzar sin compromiso"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131F42] text-white py-12">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            {/* Logo */}
            <div>
              <Image 
                src="/exbordia-logo.png" 
                alt="Exbordia Logo" 
                width={140} 
                height={40}
                className="brightness-0 invert object-contain"
              />
            </div>

            {/* Contact */}
            <div className="text-right">
              <p className="text-sm">
                <span className="text-white text-base font-medium mr-2">Contacto:</span>
                <a href="mailto:contacto@exbordia.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                  contacto@exbordia.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} Exbordia. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Términos y Condiciones</a>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Política de Privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
