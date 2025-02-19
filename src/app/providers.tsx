'use client'

import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { type ReactNode, useEffect, useState } from 'react'
import { AuthProvider } from '@/lib/contexts/AuthContext'
import { usePathname } from 'next/navigation'

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  // Siempre envolvemos con AuthProvider porque el LoginButton lo necesita
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider delayDuration={0}>
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  )
} 
