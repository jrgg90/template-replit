"use client"

import * as React from "react"

interface SidebarProviderProps {
  children: React.ReactNode
}

const SidebarProviderContext = React.createContext<{
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}>({
  collapsed: false,
  setCollapsed: () => {},
})

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <SidebarProviderContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarProviderContext.Provider>
  )
}

export function useSidebarProvider() {
  const context = React.useContext(SidebarProviderContext)
  if (!context) {
    throw new Error("useSidebarProvider must be used within a SidebarProvider")
  }
  return context
} 