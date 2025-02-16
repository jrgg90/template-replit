'use client'

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface TypewriterTextProps {
  text: string
  className?: string
  showCursor?: boolean
}

export const TypewriterText = ({ text, className = "", showCursor = false }: TypewriterTextProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const characters = Array.from(text)

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.04
          }
        },
        hidden: {}
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
            },
            hidden: {
              opacity: 0,
              y: 20,
            }
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-[1.2em] bg-gray-400 ml-1 relative -top-0.5"
          animate={{
            opacity: [1, 0]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      )}
    </motion.div>
  )
} 