"use client"

import { motion } from "framer-motion"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Conecta a un experto de comercio global de IA a tu equipo",
      description: "Sincroniza tu tienda de Shopify, WooCommerce, Wix, etc. con Exbordia con un solo clic."
    },
    {
      number: "2",
      title: "Descubre dónde vender",
      description: "Exbordia analiza demanda, competencia y regulaciones para sugerirte dónde vender."
    },
    {
      number: "3",
      title: "Publica automáticamente",
      description: "Exbordia optimiza y sube tus productos en Amazon, Etsy, Faire y más por ti y sin esfuerzo."
    },
    {
      number: "4",
      title: "Resuelve dudas en segundos",
      description: "Tu asistente de IA te guía en regulaciones, certificaciones y cumplimiento legal."
    },
    {
      number: "5",
      title: "¡Comienza a Vender!",
      description: "Gestiica ventas, inventarios, y logística en un solo lugar."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Pasos */}
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-8 group items-start"
          >
            {/* Número con círculo */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[#F5F7F9] flex items-center justify-center
                text-[#131F42] font-medium group-hover:bg-[#131F42] group-hover:text-white
                transition-all duration-300 text-xl">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 w-[2px] h-[calc(100%+2rem)] 
                  bg-gradient-to-b from-[#131F42]/20 to-transparent -translate-x-1/2" />
              )}
            </div>

            {/* Contenido */}
            <div className="flex-1 pt-1">
              <h3 className="text-2xl font-medium text-[#131F42] mb-3 group-hover:text-[#131F42] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 