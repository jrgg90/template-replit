'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { TypewriterText } from "./typewriter-text"

interface ChatMessageProps {
  message: string
  isUser?: boolean
  className?: string
}

export const ChatMessage = ({ message, isUser = false, className = "" }: ChatMessageProps) => {
  return (
    <div className="flex items-start gap-4 max-w-4xl">
      {isUser && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden shadow-md"
        >
          <Image
            src="/aiprofile.png"
            alt="User Profile"
            width={48}
            height={48}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      )}
      
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative ${isUser ? 'bg-gray-50' : 'bg-white'} rounded-2xl p-6 
            shadow-sm ${isUser ? 'rounded-tl-none' : 'rounded-tr-none'}`}
        >
          {isUser ? (
            <>
              <TypewriterText
                text={message}
                className={`text-2xl font-normal text-gray-900 tracking-tight ${className}`}
                showCursor
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 left-0 text-sm text-gray-400"
              >
                ahora
              </motion.span>
            </>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600"
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  )
} 