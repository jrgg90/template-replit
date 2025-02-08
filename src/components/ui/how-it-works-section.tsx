"use client"

import { motion } from "framer-motion"

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Sincroniza Tu Tienda con Exbordia",
      description: "Conecta tu e-commerce (Shopify, WooCommerce, Wix) con Exbordia en minutos."
    },
    {
      number: "2",
      title: "Identifica los mercados más prometedores para tus productos",
      description: "Descubre en qué países tus productos tienen mayor demanda y crea una estrategia de expansión. Ya sea que quieras vender en Estados Unidos, Canadá, Europa, LATAM o Asia, Exbordia te ayuda a preparar tu marca para conquistar el mercado internacional."
    },
    {
      number: "3",
      title: "Publica tus productos en los mejores marketplaces",
      description: "Seleccionamos las mejores plataformas digitales para tu marca. Por ejemplo: Amazon, Etsy, Faire, Ebay y más. Optimizamos tus descripciones y publicamos tus productos en segundos."
    },
    {
      number: "4",
      title: "Total Asistencia en Exportación",
      description: "Nuestro equipo y asistentes de IA te ayudan a cumplir con todas las regulaciones y certificaciones necesarias para exportar tus productos en cada país."
    },
    {
      number: "5",
      title: "¡Comienza a Vender!",
      description: "Gestiona todas tus ventas internacionales, así como tus inventarios y logística desde un solo lugar con la plataforma de Exbordia."
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
                transition-all duration-300 text-lg">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 w-[2px] h-[calc(100%+2rem)] 
                  bg-gradient-to-b from-[#131F42]/20 to-transparent -translate-x-1/2" />
              )}
            </div>

            {/* Contenido */}
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-medium text-[#131F42] mb-3 group-hover:text-[#131F42] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 