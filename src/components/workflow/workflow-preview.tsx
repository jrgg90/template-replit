"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export function WorkflowPreview() {
  return (
    <div className="relative">
      <Image
        src="/workflows.png"
        alt="Exbordia Workflow Interface"
        width={2400}
        height={1400}
        priority
        className="w-full h-auto object-contain"
      />
    </div>
  )
} 