'use client'

import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { type ReactNode } from 'react'
import { AuthProvider } from '@/lib/contexts/AuthContext'

export function Providers({ children }: { children: ReactNode }) {
  // Verificar si estamos en una ruta pública
  const isPublicRoute = window.location.pathname.startsWith('/sandbox') ||
                       window.location.pathname.startsWith('/blog') ||
                       window.location.pathname.startsWith('/precios')

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