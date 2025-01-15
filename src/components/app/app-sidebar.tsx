"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Package,
  Truck,
  DollarSign,
  BarChart3,
  Settings,
  Building2,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/app/nav-main"
import { NavProjects } from "@/components/app/nav-projects"
import { NavUser } from "@/components/app/nav-user"
import { TeamSwitcher } from "@/components/app/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Sample data for Exbordia dashboard
const data = {
  user: {
    name: "Juan Pérez",
    email: "juan@empresa.mx",
    avatar: "/avatars/user.jpg",
  },
  teams: [
    {
      name: "Mi Empresa",
      logo: Building2,
      plan: "Business",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Inventario",
      url: "/dashboard/inventory",
      icon: Package,
      items: [
        {
          title: "Productos",
          url: "/dashboard/inventory/products",
        },
        {
          title: "Categorías",
          url: "/dashboard/inventory/categories",
        },
      ],
    },
    {
      title: "Envíos",
      url: "/dashboard/shipping",
      icon: Truck,
      items: [
        {
          title: "Órdenes Activas",
          url: "/dashboard/shipping/active",
        },
        {
          title: "Historial",
          url: "/dashboard/shipping/history",
        },
      ],
    },
    {
      title: "Ventas",
      url: "/dashboard/sales",
      icon: DollarSign,
      items: [
        {
          title: "Transacciones",
          url: "/dashboard/sales/transactions",
        },
        {
          title: "Reportes",
          url: "/dashboard/sales/reports",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
      items: [
        {
          title: "Métricas",
          url: "/dashboard/analytics/metrics",
        },
        {
          title: "Insights",
          url: "/dashboard/analytics/insights",
        },
      ],
    },
    {
      title: "Configuración",
      url: "/dashboard/settings",
      icon: Settings,
      items: [
        {
          title: "Perfil",
          url: "/dashboard/settings/profile",
        },
        {
          title: "Equipo",
          url: "/dashboard/settings/team",
        },
        {
          title: "Facturación",
          url: "/dashboard/settings/billing",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Equipo de Ventas",
      url: "#",
      icon: Users,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
} 