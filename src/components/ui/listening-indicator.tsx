'use client'

import { motion } from "framer-motion"

export const ListeningIndicator = () => {
  return (
    <div className="flex-shrink-0">
      <motion.div
        className="relative w-2.5 h-2.5"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 bg-[#131F42] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[#131F42]/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
      </motion.div>
    </div>
  )
} 