"use client"

import { AppSidebar } from "@/components/app/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar-provider"
import { UserMenu } from "@/components/app/UserMenu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      {/* Left Sidebar - Fixed height with scrollable content area */}
      <div className="w-[240px] h-screen flex flex-col border-r bg-white">
        {/* Header section */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Mi Empresa</h2>
              <p className="text-sm text-muted-foreground">Business</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation section - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-2">Platform</p>
              <AppSidebar />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-2">Projects</p>
              <div className="space-y-1">
                <SidebarInset>Equipo de Ventas</SidebarInset>
              </div>
            </div>
          </div>
        </div>

        {/* Profile section - Fixed at bottom */}
        <div className="p-4 border-t mt-auto">
          <UserMenu />
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
} 