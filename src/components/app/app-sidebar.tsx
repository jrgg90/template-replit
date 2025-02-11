"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart2,
  Globe,
  Package,
  Megaphone,
  Truck,
  Settings,
  FileText,
  Zap,
} from "lucide-react"

// Separamos los items en dos grupos
const mainItems = [
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
    title: "Integrations",
    href: "/main-dashboard/integrations",
    icon: Zap,
  },
]

const comingSoonItems = [
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
]

const projectItems = [
  {
    title: "Expansión a España",
    href: "/main-dashboard/sales-team",
    icon: FileText,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      <nav className="space-y-6 px-3">
        {/* Main Items */}
        <div className="space-y-0.5">
          {mainItems.map((item) => (
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
        </div>

        {/* Coming Soon Section */}
        <div>
          <h4 className="px-3 text-xs font-medium text-gray-500 uppercase mb-2">
            Coming Soon
          </h4>
          <div className="space-y-0.5">
            {comingSoonItems.map((item) => (
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
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h4 className="px-3 text-xs font-medium text-gray-500 uppercase mb-2">
            Projects
          </h4>
          <div className="space-y-0.5">
            {projectItems.map((item) => (
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
          </div>
        </div>
      </nav>
    </div>
  )
} 