'use client'

import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { type ReactNode } from 'react'
import { AuthProvider } from '@/lib/contexts/AuthContext'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [shouldWrap, setShouldWrap] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    try {
      const isPublicRoute = pathname?.startsWith('/sandbox') ||
                           pathname?.startsWith('/blog')
      setShouldWrap(!isPublicRoute)
    } catch (err) {
      console.error('Error in Providers:', err)
      setError(err as Error)
      setShouldWrap(false)
    }
  }, [pathname])

  return (
    <AuthProvider>
      {shouldWrap ? (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      ) : (
        children
      )}
    </AuthProvider>
  )
} 