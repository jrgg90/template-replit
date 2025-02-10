"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const countrySalesData = [
  { country: 'United States', value: 65000 },
  { country: 'Mexico', value: 45000 },
  { country: 'Canada', value: 35000 },
  { country: 'Spain', value: 25000 },
  { country: 'France', value: 15000 },
]

export function CountrySalesBreakdown() {
  const total = countrySalesData.reduce((acc, curr) => acc + curr.value, 0)

  return (
    <Card className="p-4 bg-white/50 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Sales Breakdown by Country</h3>
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={countrySalesData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis 
              dataKey="country" 
              type="category" 
              tick={{ fontSize: 12 }}
              width={100}
            />
            <Tooltip
              formatter={(value: number) => [
                `$${value.toLocaleString()}`,
                `${((value / total) * 100).toFixed(1)}%`
              ]}
            />
            <Bar 
              dataKey="value" 
              fill="#2563eb"
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
} 