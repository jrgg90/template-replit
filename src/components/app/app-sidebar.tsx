"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart2,
  Globe,
  Package,
  Megaphone,
  Truck,
  Settings,
} from "lucide-react"

const items = [
  {
    title: "Dashboard",
    href: "/main-dashboard",
    icon: BarChart2,
  },
  {
    title: "Market Research",
    href: "/main-dashboard/market-research",
    icon: Globe,
  },
  {
    title: "Product Listings",
    href: "/main-dashboard/product-listings",
    icon: Package,
  },
  {
    title: "Marketing & Advertising",
    href: "/main-dashboard/marketing",
    icon: Megaphone,
  },
  {
    title: "Fulfillment & Logistics",
    href: "/main-dashboard/fulfillment",
    icon: Truck,
  },
  {
    title: "Settings & Integrations",
    href: "/main-dashboard/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">


      {/* Navigation Items - Sin cambios */}
      <nav className="space-y-0.5 px-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-foreground",
              pathname === item.href
                ? "bg-secondary text-foreground"
                : "text-muted-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
} 