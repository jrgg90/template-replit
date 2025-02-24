"use client"

import * as React from "react"
import { BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface PricingTier {
  id: string
  name: string
  price: Record<string, number | string>
  description: string
  features: string[]
  cta: string
  ctaUrl: string
  highlighted?: boolean
  popular?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  const price = tier.price[paymentFrequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular

  // Función helper para formatear el precio
  const formatPrice = (price: number | string) => {
    if (typeof price === "number") {
      // Separamos el precio en dos líneas
      return (
        <>
          <span className="text-5xl font-medium tracking-tight">$ {price}</span>
          <span className="text-xl font-medium tracking-tight ml-2">USD</span>
        </>
      )
    }
    return price
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative rounded-2xl overflow-hidden h-full",
        isHighlighted ? "bg-[#131F42]" : "bg-white",
        "border border-gray-200",
        isPopular && "ring-2 ring-blue-900",
        "hover:shadow-xl hover:shadow-blue-800/10 transition-shadow duration-300"
      )}
    >
      <div className="p-10 relative flex flex-col h-full">
        {isPopular && (
          <div className="absolute top-4 right-4">
            <div className="bg-blue-900 text-white px-4 py-1.5 text-sm font-medium rounded-full shadow-lg shadow-blue-500/20">
              Más Popular
            </div>
          </div>
        )}

        <div className="mt-4 mb-6">
          <h3 className={cn(
            "text-2xl font-medium mb-3",
            isHighlighted ? "text-white" : "text-gray-900"
          )}>
            {tier.name}
          </h3>
          <p className={cn(
            "text-base",
            isHighlighted ? "text-gray-300" : "text-gray-500"
          )}>
            {tier.description}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className={cn(
              typeof price === "number" ? "text-5xl" : "text-4xl",
              "font-medium tracking-tight",
              isHighlighted ? "text-white" : "text-gray-900"
            )}>
              {typeof price === "number" ? formatPrice(price) : price}
            </span>
            {typeof price === "number" && (
              <span className={cn(
                "text-base",
                isHighlighted ? "text-gray-300" : "text-gray-500"
              )}>
                /{paymentFrequency}
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-5 mb-10 flex-grow">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <BadgeCheck className={cn(
                "h-6 w-6 flex-shrink-0 mt-0.5",
                isHighlighted ? "text-blue-300" : "text-blue-800"
              )} />
              <span className={cn(
                "text-base leading-relaxed",
                isHighlighted ? "text-gray-300" : "text-gray-600"
              )}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a 
          href={tier.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "w-full px-6 py-4 rounded-full text-base font-medium transition-all duration-200 text-center",
            isHighlighted 
              ? "bg-white text-[#131F42] hover:bg-gray-100"
              : "bg-[#131F42] text-white hover:bg-[#1c2b5a]",
            "hover:shadow-lg hover:scale-[1.02] transform"
          )}
        >
          {tier.cta}
        </a>
      </div>
    </motion.div>
  )
} 