"use client"

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
import { AlertCircle, ArrowRight, ArrowUpRight, TrendingUp, Users, AlertTriangle, Brain, ChevronDown, ChevronRight, BarChart2, Globe, CheckCircle2, XCircle } from "lucide-react"
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

export default function DashboardPage() {
  const [showActions, setShowActions] = React.useState(false)
  const [showConnections, setShowConnections] = React.useState(false)

  // Calculate marketplace health
  const marketplaceHealth = React.useMemo(() => {
    const hasError = marketplaces.some(m => m.status === 'error')
    const hasPending = marketplaces.some(m => m.status === 'pending')
    return hasError ? 'error' : hasPending ? 'warning' : 'success'
  }, [marketplaces])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Global Sales */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-medium text-gray-500">Total Global Sales</p>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">$124,563.00</h2>
              <p className="flex items-center text-xs font-medium text-emerald-600 mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12.5% from last period
              </p>
            </div>
            <Select defaultValue="7d">
              <SelectTrigger className="w-[90px] h-7 text-xs bg-gray-50 border-gray-200">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 days</SelectItem>
                <SelectItem value="30d">30 days</SelectItem>
                <SelectItem value="ytd">YTD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Additional Summary Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-xs font-medium text-gray-500">Active Markets</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">5</h3>
          <p className="text-xs text-gray-500 mt-1">Across 3 continents</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-xs font-medium text-gray-500">Growth Rate</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">+18.2%</h3>
          <p className="text-xs text-gray-500 mt-1">Month over month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-xs font-medium text-gray-500">Platform Health</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">98%</h3>
          <p className="text-xs text-gray-500 mt-1">All systems operational</p>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Growth & Intelligence */}
        <div className="col-span-2 space-y-6">
          {/* Growth & Market Intelligence */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-500" />
                <h2 className="text-base font-semibold text-gray-900">Growth & Market Intelligence</h2>
              </div>
              <Button variant="ghost" size="sm" className="h-8 text-xs font-medium text-gray-600 hover:text-gray-900">
                View All
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {combinedInsights.map((insight, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 bg-gray-50/50 rounded-lg border border-gray-100"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={cn(
                      "p-2 rounded-lg shrink-0",
                      insight.type === 'ai' && "bg-indigo-50 text-indigo-600",
                      insight.type === 'market' && "bg-emerald-50 text-emerald-600",
                      insight.type === 'regulatory' && "bg-amber-50 text-amber-600"
                    )}>
                      <insight.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{insight.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{insight.content}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full font-medium",
                      insight.confidence === 'high' && "bg-emerald-50 text-emerald-700",
                      insight.confidence === 'medium' && "bg-amber-50 text-amber-700"
                    )}>
                      {insight.metric}
                    </span>
                    <Button variant="ghost" size="sm" className="h-7 text-xs font-medium">
                      {insight.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Performance */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <CountrySalesPerformance />
          </div>
        </div>

        {/* Right Column - Status & Actions */}
        <div className="space-y-6">
          {/* Marketplace Health */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  marketplaceHealth === 'success' && "bg-emerald-500",
                  marketplaceHealth === 'warning' && "bg-amber-500",
                  marketplaceHealth === 'error' && "bg-red-500"
                )} />
                <h3 className="text-sm font-medium text-gray-900">Marketplace Status</h3>
              </div>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                Manage
                <ChevronRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
            <div className="space-y-2">
              {marketplaces.map(marketplace => (
                <div key={marketplace.name} 
                  className="flex items-center justify-between p-2.5 bg-gray-50/50 rounded-lg border border-gray-100"
                >
                  <span className="text-sm text-gray-700">{marketplace.name}</span>
                  <div className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    marketplace.status === 'connected' && "bg-emerald-50 text-emerald-700",
                    marketplace.status === 'error' && "bg-red-50 text-red-700",
                    marketplace.status === 'pending' && "bg-amber-50 text-amber-700"
                  )}>
                    {marketplace.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <h3 className="text-sm font-medium text-gray-900">{pendingActions.length} Actions Required</h3>
              </div>
              <ChevronDown className={cn(
                "w-4 h-4 text-gray-400 transition-transform",
                showActions && "transform rotate-180"
              )} />
            </div>
            <div className="space-y-2">
              {pendingActions.map(action => (
                <div key={action.id} className="p-3 bg-gray-50/50 rounded-lg border border-gray-100">
                  <p className="text-sm text-gray-700 mb-2">{action.title}</p>
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full font-medium",
                      action.priority === 'high' && "bg-red-50 text-red-700",
                      action.priority === 'medium' && "bg-amber-50 text-amber-700"
                    )}>
                      {action.priority} priority
                    </span>
                    <Button size="sm" variant="ghost" className="h-7 text-xs font-medium">
                      Resolve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 