'use client'

import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { type ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider delayDuration={0}>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
} 