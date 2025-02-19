
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

  if (!mounted) {
    return <>{children}</>
  }

  // Check for public routes after component is mounted
  const isPublicRoute = window.location.pathname.startsWith('/sandbox') ||
                       window.location.pathname.startsWith('/blog')

  if (isPublicRoute) {
    return <>{children}</>
  }

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
