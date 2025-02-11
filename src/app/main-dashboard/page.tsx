"use client"

import { useState } from "react"
import { 
  BarChart2, Globe2, ShoppingBag, ArrowUpRight, 
  TrendingUp, Target, AlertCircle, Users,
  AlertTriangle, Brain, ChevronDown, ChevronRight, 
  CheckCircle2, XCircle 
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { cn } from "@/lib/utils"
import { CountrySalesBreakdown } from "./components/CountrySalesBreakdown"
import { CountrySalesPerformance } from "./components/CountrySalesPerformance"
import React from "react"

// Static data for demo
const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
]

const pendingActions = [
  {
    id: 1,
    title: "Export documentation required for Germany",
    type: "legal",
    priority: "high"
  },
  {
    id: 2,
    title: "Shipment to Canada delayed",
    type: "shipping",
    priority: "medium"
  },
  {
    id: 3,
    title: "Amazon account disconnected, reconnect now",
    type: "platform",
    priority: "high"
  }
]

const marketplaces = [
  { name: "Shopify", status: "connected" },
  { name: "Amazon", status: "error" },
  { name: "Mercado Libre", status: "connected" },
  { name: "Etsy", status: "connected" },
  { name: "eBay", status: "pending" }
]

// Add news data
const newsInsights = [
  {
    type: 'competitor',
    icon: Users,
    title: 'Competitor Movement',
    content: 'Your competitor just expanded to Spain, targeting the same market segment.',
    timestamp: '2 hours ago',
    priority: 'medium'
  },
  {
    type: 'market',
    icon: TrendingUp,
    title: 'Market Trend',
    content: 'Demand for handmade leather bags is rising in France, showing 25% growth.',
    timestamp: '1 day ago',
    priority: 'high'
  },
  {
    type: 'regulatory',
    icon: AlertTriangle,
    title: 'Regulatory Alert',
    content: 'New EU import taxes on textiles announced, effective from next quarter.',
    timestamp: '3 days ago',
    priority: 'high'
  }
]

// Add the countrySalesData to the static data section
const countrySalesData = [
  { country: 'United States', value: 65000 },
  { country: 'Mexico', value: 45000 },
  { country: 'Canada', value: 35000 },
  { country: 'Spain', value: 25000 },
  { country: 'France', value: 15000 },
]

// Add AI confidence type
type Confidence = 'high' | 'medium' | 'low';

// Add AI insights data
const aiInsights = [
  {
    title: "Expansion Opportunity",
    content: "Your competitor expanded to Spain—consider listing on Amazon Spain for market entry.",
    confidence: 'high' as Confidence,
    type: 'expansion',
    metric: "85% market fit",
    action: "Explore Amazon Spain"
  },
  {
    title: "Product Trend",
    content: "Demand for handmade leather bags is rising in France. Consider expanding there.",
    confidence: 'medium' as Confidence,
    type: 'trend',
    metric: "20% growth predicted",
    action: "View Market Analysis"
  },
  {
    title: "Platform Optimization",
    content: "Your Shopify traffic is up 15%. Optimize your store for better conversions.",
    confidence: 'high' as Confidence,
    type: 'optimization',
    metric: "15% traffic increase",
    action: "View Recommendations"
  }
]

// Merge AI insights and market trends
const combinedInsights = [
  {
    type: 'ai',
    icon: Brain,
    title: 'Market Expansion',
    content: 'Spain market shows 85% fit with your product',
    metric: '+85% fit',
    confidence: 'high' as const,
    timestamp: 'Just now',
    action: 'Explore Opportunity'
  },
  {
    type: 'market',
    icon: TrendingUp,
    title: 'Demand Surge',
    content: 'Leather goods demand up 25% in France',
    metric: '+25% growth',
    confidence: 'medium' as const,
    timestamp: '2h ago',
    action: 'View Analysis'
  },
  {
    type: 'regulatory',
    icon: AlertTriangle,
    title: 'EU Regulation',
    content: 'New import rules affecting textile sector',
    metric: 'High Impact',
    confidence: 'high' as const,
    timestamp: '1d ago',
    action: 'Review Changes'
  }
]

const activeCountries = [
  {
    id: 1,
    flag: "🇫🇷",
    name: "France",
    position: 1
  },
  {
    id: 2,
    flag: "🇩🇪",
    name: "Germany",
    position: 2
  },
  {
    id: 3,
    flag: "🇪🇸",
    name: "Spain",
    position: 3
  }
]

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-medium text-gray-900">Dashboard</h1>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content (2 cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Main Market Card */}
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Section */}
              <div className="p-8 space-y-6">
                <h2 className="text-2xl font-normal">
                  Explore insights and compare new markets
                </h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex gap-3">
                    <div className="w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    <p>Compare your existing markets with promising new ones.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    <p>Discover markets best suited to your business, with information on competitiveness and ease-of-doing-business.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 h-1 rounded-full bg-gray-300 mt-2" />
                    <p>Get tailored insights about customer behavior and market trends.</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button 
                    className="bg-[#1a73e8] hover:bg-[#1557b0] text-white"
                  >
                    Explore markets
                  </Button>
                </div>
              </div>

              {/* Right Section */}
              <div className="border-l bg-gray-50">
                <div className="p-8">
                  <h3 className="text-base font-medium text-gray-900 mb-6">
                    YOUR SHORTLISTED MARKETS
                  </h3>
                  <div className="space-y-2">
                    {activeCountries.map((country) => (
                      <div
                        key={country.id}
                        className="flex items-center gap-4 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <span className="w-6 text-sm font-medium text-gray-500">
                          {country.position}
                        </span>
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm font-medium text-gray-900">
                          {country.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button 
                      variant="link" 
                      className="text-[#1a73e8] hover:text-[#1557b0] p-0 h-auto font-medium"
                    >
                      Edit shortlist →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className={cn("p-2 w-fit rounded-lg", action.bgColor)}>
                    <action.icon className={cn("h-5 w-5", action.iconColor)} />
                  </div>
                  <h3 className="font-medium">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                  <Button variant="link" className="text-[#1a73e8] p-0 h-auto">
                    {action.action} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Market Insights */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-gray-900">Market Insights</h2>
              <Button variant="ghost" className="text-sm font-medium text-gray-600">
                View all
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketInsights.map((insight, index) => (
                <Card key={index} className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gray-50">
                        <insight.icon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{insight.title}</h3>
                        <p className="text-sm text-emerald-600">{insight.metric}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {insight.description}
                    </p>
                    <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200">
                      {insight.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - AI Assistant & Roadmap */}
        <div className="space-y-8">
          {/* AI Export Assistant */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white shadow-sm">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-medium">AI Export Assistant</h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Tu consultor de exportación disponible 24/7
                    </p>
                  </div>
                  <div className="space-y-3">
                    {aiSuggestions.map((suggestion, index) => (
                      <Button 
                        key={index}
                        variant="outline"
                        className="w-full justify-start text-left normal-case bg-white/80 hover:bg-white"
                      >
                        {suggestion.icon}
                        <span>{suggestion.text}</span>
                      </Button>
                    ))}
                  </div>
                  <Button className="w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white">
                    Iniciar conversación
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Expansion Roadmap */}
          <Card className="overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-6">Tu Plan de Expansión</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-8 relative">
                  {roadmapSteps.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-white",
                        step.completed ? "bg-emerald-500" : 
                        step.current ? "bg-blue-500" : "bg-gray-200"
                      )}>
                        {step.completed ? "✓" : index + 1}
                      </div>
                      <div>
                        <h3 className={cn(
                          "font-medium",
                          !step.completed && !step.current && "text-gray-500"
                        )}>
                          {step.title}
                        </h3>
                        <p className={cn(
                          "text-sm",
                          step.completed || step.current ? "text-gray-600" : "text-gray-500"
                        )}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

const marketInsights = [
  {
    icon: TrendingUp,
    title: "Oportunidad en España",
    metric: "85% market fit",
    description: "El mercado español muestra una alta compatibilidad con tus productos actuales.",
    action: "Explorar Oportunidad"
  },
  {
    icon: Target,
    title: "Tendencia de Productos",
    metric: "20% crecimiento",
    description: "La demanda de productos artesanales está creciendo en Francia.",
    action: "Ver Análisis"
  }
]

const nextSteps = [
  {
    icon: AlertCircle,
    title: "Completa tu perfil",
    description: "Actualiza tu información de empresa para acceder a más mercados.",
    action: "Completar Ahora"
  },
  {
    icon: Globe2,
    title: "Conecta Amazon ES",
    description: "Todo listo para empezar a vender en Amazon España.",
    action: "Conectar"
  },
  {
    icon: ShoppingBag,
    title: "Revisa productos",
    description: "10 productos listos para publicar en nuevos mercados.",
    action: "Revisar"
  }
]

const quickActions = [
  {
    icon: AlertCircle,
    title: "Completa tu perfil",
    description: "Actualiza tu información de empresa para acceder a más mercados.",
    action: "Completar Ahora",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    icon: Globe2,
    title: "Conecta Amazon ES",
    description: "Todo listo para empezar a vender en Amazon España.",
    action: "Conectar",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: ShoppingBag,
    title: "Revisa productos",
    description: "10 productos listos para publicar en nuevos mercados.",
    action: "Revisar",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  }
]

const aiSuggestions = [
  {
    icon: <Users className="h-5 w-5 mr-2" />,
    text: "Competitor Movement"
  },
  {
    icon: <TrendingUp className="h-5 w-5 mr-2" />,
    text: "Market Trend"
  },
  {
    icon: <AlertTriangle className="h-5 w-5 mr-2" />,
    text: "Regulatory Alert"
  }
]

const roadmapSteps = [
  {
    title: "Market Research",
    description: "Research new markets and identify potential opportunities",
    completed: false,
    current: true
  },
  {
    title: "Business Plan",
    description: "Develop a comprehensive business plan for market entry",
    completed: false,
    current: false
  },
  {
    title: "Product Preparation",
    description: "Prepare products for export and obtain necessary certifications",
    completed: false,
    current: false
  },
  {
    title: "Market Entry",
    description: "Launch your products in the selected market",
    completed: false,
    current: false
  },
  {
    title: "Post-Launch Support",
    description: "Provide ongoing support and assistance after market entry",
    completed: false,
    current: false
  }
] 