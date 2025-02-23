"use client"

import { ReactNode } from "react"
import { Inter } from 'next/font/google'
import { AuthProvider } from "@/lib/contexts/AuthContext"

const inter = Inter({ subsets: ['latin'] })

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <div className={inter.className}>
        {children}
      </div>
    </AuthProvider>
  )
} 