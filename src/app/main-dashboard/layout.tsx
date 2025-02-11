"use client"

import Image from "next/image"
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
        {/* Header section - Reemplazado con logo */}
        <div className="p-4 border-b flex items-center">
          <Image
            src="/exbordia-logo.png"
            alt="Exbordia"
            width={140}
            height={32}
            priority
            className="dark:invert"
          />
        </div>

        {/* Navigation section - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground px-2">Platform</p>
              <AppSidebar />
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