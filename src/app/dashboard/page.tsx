"use client"

import { AppSidebar } from "@/components/app/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar-provider"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <Separator orientation="vertical" className="h-6" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex-1 space-y-4 p-4">
            {/* Quick Stats */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Ventas Totales</h3>
                <p className="mt-2 text-2xl font-bold">$24,563.00</p>
                <span className="text-sm text-green-600">+12.5% vs último mes</span>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Órdenes Pendientes</h3>
                <p className="mt-2 text-2xl font-bold">45</p>
                <span className="text-sm text-muted-foreground">12 en proceso de envío</span>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Inventario</h3>
                <p className="mt-2 text-2xl font-bold">1,234</p>
                <span className="text-sm text-yellow-600">3 productos bajos en stock</span>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-medium">Ventas Recientes</h3>
                <div className="mt-4 space-y-4">
                  <div className="h-12 rounded-lg bg-muted/50" />
                  <div className="h-12 rounded-lg bg-muted/50" />
                  <div className="h-12 rounded-lg bg-muted/50" />
                </div>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-medium">Análisis de Mercado</h3>
                <div className="mt-4">
                  <div className="h-[300px] rounded-lg bg-muted/50" />
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
} 