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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { AlertCircle, ArrowRight, ArrowUpRight } from "lucide-react"

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

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Select defaultValue="7d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="ytd">Year to date</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-6">
        {/* Global Sales Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">Total Global Sales</p>
                <h2 className="text-3xl font-bold mt-2">$124,563.00</h2>
                <p className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  +12.5% from last period
                </p>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Detailed Sales Report
            </Button>
          </Card>

          {/* Pending Actions Card */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Pending Actions</h3>
            <div className="space-y-3">
              {pendingActions.map(action => (
                <div key={action.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm">{action.title}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="secondary">Resolve Now</Button>
                      <Button size="sm" variant="ghost">Ignore</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Marketplace Connections */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Marketplace Connections</h3>
            <div className="space-y-3">
              {marketplaces.map(marketplace => (
                <div key={marketplace.name} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                  <span className="text-sm">{marketplace.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    marketplace.status === 'connected' ? 'bg-green-100 text-green-700' :
                    marketplace.status === 'error' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {marketplace.status}
                  </span>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                <span>Add New Connection</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Sales Performance Graph */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Sales Performance</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </main>
    </div>
  )
} 