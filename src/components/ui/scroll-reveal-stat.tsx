'use client'

import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface ScrollRevealStatProps {
  stat: ReactNode
  description: string
}

export function ScrollRevealStat({ stat, description }: ScrollRevealStatProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-8 bg-white rounded-3xl p-8 shadow-sm"
    >
      <div className="flex-shrink-0 w-1/3">
        <span className="text-[4rem] md:text-[5rem] font-medium text-[#131F42] leading-none">
          {stat}
        </span>
      </div>
      <div className="flex-grow">
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </motion.div>
  )
} 