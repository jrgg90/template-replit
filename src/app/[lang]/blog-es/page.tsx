"use client"

import { MainHeader } from "@/components/layout/MainHeader"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { Language } from "@/types"

interface BlogEsProps {
  params: {
    lang: Language
  }
}

export default function BlogEs({ params }: BlogEsProps) {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader lang={params.lang} />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 relative z-10 flex flex-col gap-2 leading-[1.15]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-[#1A1A2E] font-light tracking-tight">
                Nuestro
              </span>
              <span className="bg-gradient-to-r from-[#0A84FF] via-[#2E5C9E] to-[#0A84FF] text-transparent bg-clip-text
                font-medium tracking-tight pb-3">
                Blog
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre las últimas tendencias, consejos y mejores prácticas
              para expandir tu negocio al mercado estadounidense
            </motion.p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 -right-20 w-72 h-72 bg-purple-100/10 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Blog Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.article 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/es/blog-es/guia-exportacion-usa">
                <Image
                  src="/blog/guia-exportacion.jpg"
                  alt="Guía de Exportación"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-[#1A1A2E]">
                    Guía Completa: Cómo Exportar a Estados Unidos
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Todo lo que necesitas saber para empezar a exportar tus productos al mercado estadounidense.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>10 min de lectura</span>
                  </div>
                </div>
              </Link>
            </motion.article>

            {/* Article 2 */}
            <motion.article 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/es/blog-es/marketplaces-usa">
                <Image
                  src="/blog/marketplaces.jpg"
                  alt="Marketplaces USA"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-[#1A1A2E]">
                    Los Mejores Marketplaces en Estados Unidos
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Análisis comparativo de las principales plataformas de venta online en EE.UU.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>8 min de lectura</span>
                  </div>
                </div>
              </Link>
            </motion.article>

            {/* Article 3 */}
            <motion.article 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/es/blog-es/regulaciones-aduanas">
                <Image
                  src="/blog/regulaciones.jpg"
                  alt="Regulaciones Aduaneras"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-[#1A1A2E]">
                    Regulaciones Aduaneras: Lo Que Debes Saber
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Guía práctica sobre las regulaciones y documentación necesaria para exportar.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>12 min de lectura</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer lang={params.lang} />
    </main>
  )
} 