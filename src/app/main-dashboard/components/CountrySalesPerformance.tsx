"use client"

import * as React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const performanceData = [
  { 
    date: 'Jan', 
    US: 16060, 
    MX: 26106, 
    CA: 14500, 
    ES: 11700, 
    FR: 8900 
  },
  { 
    date: 'Feb', 
    US: 15200, 
    MX: 24800, 
    CA: 13800, 
    ES: 12400, 
    FR: 9200 
  },
  { 
    date: 'Mar', 
    US: 18500, 
    MX: 28900, 
    CA: 15200, 
    ES: 13100, 
    FR: 9800 
  },
  { 
    date: 'Apr', 
    US: 17800, 
    MX: 27500, 
    CA: 16100, 
    ES: 12800, 
    FR: 10200 
  },
  { 
    date: 'May', 
    US: 19200, 
    MX: 29800, 
    CA: 16800, 
    ES: 13500, 
    FR: 11100 
  },
  { 
    date: 'Jun', 
    US: 20500, 
    MX: 31200, 
    CA: 17900, 
    ES: 14200, 
    FR: 11800 
  }
]

const countryConfig = {
  US: {
    label: "United States",
    color: "#2563eb",
  },
  MX: {
    label: "Mexico",
    color: "#16a34a",
  },
  CA: {
    label: "Canada",
    color: "#dc2626",
  },
  ES: {
    label: "Spain",
    color: "#9333ea",
  },
  FR: {
    label: "France",
    color: "#ea580c",
  },
} satisfies ChartConfig

export function CountrySalesPerformance() {
  const [activeCountry, setActiveCountry] = React.useState<keyof typeof countryConfig>("US")

  const total = React.useMemo(
    () => ({
      US: performanceData.reduce((acc, curr) => acc + curr.US, 0),
      MX: performanceData.reduce((acc, curr) => acc + curr.MX, 0),
      CA: performanceData.reduce((acc, curr) => acc + curr.CA, 0),
      ES: performanceData.reduce((acc, curr) => acc + curr.ES, 0),
      FR: performanceData.reduce((acc, curr) => acc + curr.FR, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-4 py-3">
          <h3 className="text-sm font-semibold">Sales Performance by Country</h3>
          <p className="text-xs text-muted-foreground">
            Showing sales data for the last 3 months
          </p>
        </div>
        <div className="flex overflow-x-auto">
          {Object.entries(countryConfig).map(([key, config]) => (
            <button
              key={key}
              data-active={activeCountry === key}
              className="flex flex-1 min-w-[100px] flex-col justify-center gap-1 border-t px-3 py-2 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0"
              onClick={() => setActiveCountry(key as keyof typeof countryConfig)}
            >
              <span className="text-[11px] text-muted-foreground">
                {config.label}
              </span>
              <span className="text-sm font-bold leading-none">
                ${total[key as keyof typeof total].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ChartContainer
          config={countryConfig}
          className="w-full h-[200px]"
        >
          <LineChart
            data={performanceData}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11 }}
              tickMargin={8}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11 }}
              tickMargin={8}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[120px]"
                  nameKey="sales"
                />
              }
            />
            <Line
              dataKey={activeCountry}
              type="monotone"
              stroke={countryConfig[activeCountry].color}
              strokeWidth={2}
              dot={{ r: 2, strokeWidth: 2 }}
              activeDot={{ r: 4, strokeWidth: 2 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
} 