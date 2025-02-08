"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function InspirationalSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <Image
                src="/people2.png"
                alt="Personas conectadas globalmente"
                width={600}
                height={400}
                className="rounded-2xl object-contain"
                style={{ 
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-[#131F42] leading-tight mb-6">
              Tu marca es <span className="font-medium">única</span>.
              <br />
              Ahora es momento de que el mundo la descubra.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              En Exbordia, conectamos marcas extraordinarias con clientes en todo el mundo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 