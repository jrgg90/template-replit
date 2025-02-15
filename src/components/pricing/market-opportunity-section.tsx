"use client"

import { motion } from "framer-motion"
import { Globe2, TrendingUp, Users, ShoppingCart, BarChart, Building2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

interface StatCardProps {
  number: string
  description: string
  source: string
  sourceUrl: string
  icon: React.ReactNode
  delay: number
}

const StatCard = ({ number, description, source, sourceUrl, icon, delay }: StatCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  // Función helper para formatear el número y el USD
  const formatNumber = (number: string) => {
    if (number.includes('USD')) {
      const [value, currency] = number.split(' USD')
      return (
        <span className="flex items-baseline gap-1">
          <span>{value}</span>
          <span className="text-lg text-gray-400 font-normal">USD</span>
        </span>
      )
    }
    return number
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300
        hover:border-blue-100 group"
    >
      <div className="text-blue-800/80 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="space-y-2">
        <motion.h3 
          className="text-5xl font-medium text-gray-700 flex items-baseline"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        >
          {formatNumber(number)}
        </motion.h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <a 
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
        >
          Fuente: {source}
        </a>
      </div>
    </motion.div>
  )
}

export function MarketOpportunitySection() {
  const stats = [
    {
      number: "$7.9T USD",
      description: "Valor esperado del mercado global de e-commerce transfronterizo B2C para 2030",
      source: "Shopify EY",
      sourceUrl: "https://www.shopify.com/international/managed/resources/ey-report",
      icon: <Globe2 className="w-8 h-8" />,
    },
    {
      number: "31.2%",
      description: "De todas las ventas online globales son transfronterizas",
      source: "Capital One",
      sourceUrl: "https://capitaloneshopping.com/research/cross-border-online-shopping-statistics/",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      number: "~572M",
      description: "Compradores transfronterizos en el mundo",
      source: "AMVO Mexico",
      sourceUrl: "https://www.amvo.org.mx/",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "71.8M",
      description: "Estadounidenses harán compras internacionales en 2024",
      source: "Capital One",
      sourceUrl: "https://capitaloneshopping.com/research/cross-border-online-shopping-statistics/",
      icon: <ShoppingCart className="w-8 h-8" />,
    },
    {
      number: "83%",
      description: "De los comercios aumentaron sus países de venta con Shopify Managed Markets",
      source: "Capital One",
      sourceUrl: "https://capitaloneshopping.com/research/cross-border-online-shopping-statistics/",
      icon: <BarChart className="w-8 h-8" />,
    },
    {
      number: "31.9%",
      description: "De compradores en EE.UU. han comprado de retailers internacionales el último año",
      source: "Capital One",
      sourceUrl: "https://capitaloneshopping.com/research/cross-border-online-shopping-statistics/",
      icon: <Building2 className="w-8 h-8" />,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl font-normal text-[#131F42] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tu oportunidad en el 
            <span className="font-medium"> comercio global</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 