"use client"

import { type LucideIcon, ChevronsUpDown } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface Team {
  name: string
  logo: LucideIcon
  plan: string
}

export function TeamSwitcher({ teams }: { teams: Team[] }) {
  const Logo = teams[0].logo
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Logo className="h-4 w-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="font-semibold">{teams[0].name}</span>
            <span className="text-xs text-muted-foreground">{teams[0].plan}</span>
          </div>
          <ChevronsUpDown className="h-4 w-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
} 