"use client"

import { type ReactNode } from "react"
import { type TooltipProps } from "recharts"

export type ChartConfig = Record<
  string,
  {
    label: string
    color?: string
  }
>

interface ChartContainerProps {
  config: ChartConfig
  children: ReactNode
  className?: string
}

export function ChartContainer({
  config,
  children,
  className,
}: ChartContainerProps) {
  return (
    <div className={className}>
      <style>
        {Object.entries(config).map(
          ([key, value]) =>
            value.color &&
            `
              :root {
                --color-${key}: ${value.color};
              }
            `
        )}
      </style>
      {children}
    </div>
  )
}

type TooltipItem = {
  value: number | string
  name?: string
  color?: string
  dataKey?: string
  payload?: Record<string, any>
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: TooltipItem[]
  label?: string
  className?: string
  nameKey?: string
  labelFormatter?: (value: string) => string | ReactNode
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  nameKey = "name",
  labelFormatter = (value: string) => value,
}: ChartTooltipContentProps) {
  if (!active || !payload) {
    return null
  }

  return (
    <div className={`rounded-lg border bg-background p-2 shadow-sm ${className}`}>
      <div className="grid gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm font-medium">
            {typeof labelFormatter === 'function' ? labelFormatter(label || '') : label}
          </div>
        </div>
        <div className="grid gap-1">
          {payload.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">
                  {typeof item.value === 'number' 
                    ? `$${item.value.toLocaleString()}`
                    : item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ChartTooltip(props: TooltipProps<number | string, string>) {
  return (
    <g>
      <foreignObject
        x={props.coordinate?.x ?? 0}
        y={props.coordinate?.y ?? 0}
        width={1}
        height={1}
      >
        <ChartTooltipContent 
          active={props.active}
          payload={props.payload as unknown as TooltipItem[]}
          label={props.label}
          labelFormatter={(value: string) => {
            if (props.labelFormatter) {
              return props.labelFormatter(value, props.payload?.[0]?.payload)
            }
            return value
          }}
        />
      </foreignObject>
    </g>
  )
}