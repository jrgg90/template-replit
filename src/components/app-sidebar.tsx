"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

const data = {
  user: {
    name: "Usuario",
    email: "usuario@example.com",
    avatar: "/avatars/default.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Productos",
      url: "#",
      icon: Bot,
    },
    {
      title: "Envíos",
      url: "#",
      icon: Map,
    },
    {
      title: "Reportes",
      url: "#",
      icon: PieChart,
    },
    {
      title: "Configuración",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ className }: { className?: string }) {
  return (
    <nav className={`w-64 bg-white border-r ${className}`}>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div>
              <div className="font-medium">{data.user.name}</div>
              <div className="text-sm text-gray-500">{data.user.email}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {data.navMain.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg
                    ${item.isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
} 