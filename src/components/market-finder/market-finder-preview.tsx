"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { MarketCard } from "./market-card"

const MarketFinderPreview = () => {
  const [expandedCountry, setExpandedCountry] = useState<string>("Francia")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // o un placeholder/skeleton
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center gap-4 scale-[0.8] origin-center transform"
    >
      <MarketCard
        country="Francia"
        flag="🇫🇷"
        score={89}
        description="Mercado con alto poder adquisitivo y fuerte demanda de productos premium."
        isExpanded={expandedCountry === "Francia"}
        onToggle={() => setExpandedCountry(expandedCountry === "Francia" ? "" : "Francia")}
        metrics={{
          demandGrowth: 85,
          marketplaceTraffic: 92,
          marketSize: 78
        }}
        analysis={{
          cost: "Medio",
          competition: "Moderada",
          regulation: "Media"
        }}
      />

      <MarketCard
        country="Alemania"
        flag="🇩🇪"
        score={86}
        description="Mayor economía de Europa con consumidores tech-savvy y alta adopción de e-commerce."
        isExpanded={expandedCountry === "Alemania"}
        onToggle={() => setExpandedCountry(expandedCountry === "Alemania" ? "" : "Alemania")}
        metrics={{
          demandGrowth: 82,
          marketplaceTraffic: 88,
          marketSize: 90
        }}
        analysis={{
          cost: "Alto",
          competition: "Alta",
          regulation: "Alta"
        }}
      />
    </motion.div>
  )
}

export default MarketFinderPreview 