import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Sandbox | Exbordia',
  description: 'Playground para experimentar con diferentes diseños y componentes',
}

// Marcar explícitamente como ruta pública y sin cache
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import { SandboxLayoutClient } from "@/components/sandbox/sandbox-layout-client"

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 