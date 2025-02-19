'use client'

import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { type ReactNode, useEffect, useState } from 'react'
import { AuthProvider } from '@/lib/contexts/AuthContext'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider delayDuration={0}>
          {mounted ? children : null}
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  )
} 
