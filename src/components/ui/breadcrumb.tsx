"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode
}

export function Breadcrumb({
  children,
  className,
  separator = <ChevronRight className="h-4 w-4" />,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex items-center text-sm", className)}
      {...props}
    >
      {children}
    </nav>
  )
}

export function BreadcrumbList({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    >
      {children}
    </ol>
  )
}

export function BreadcrumbItem({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    >
      {children}
    </li>
  )
}

export function BreadcrumbLink({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn("text-muted-foreground hover:text-foreground transition-colors", className)}
      {...props}
    >
      {children}
    </a>
  )
}

export function BreadcrumbPage({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn("text-foreground font-medium", className)}
      aria-current="page"
      {...props}
    >
      {children}
    </span>
  )
}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li">) {
  return (
    <li
      className={cn("text-muted-foreground", className)}
      {...props}
    >
      {children || <ChevronRight className="h-4 w-4" />}
    </li>
  )
} 