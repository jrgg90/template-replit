"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    label: "Tienda y Productos",
    href: "/onboarding",
    icon: "📦",
    color: "text-gray-900"
  },
  {
    label: "Información de Empresa",
    href: "/onboarding/company-info",
    icon: "📄",
    color: "text-gray-900"
  },
  {
    label: "En Revisión",
    href: "/onboarding/review",
    icon: "✅",
    color: "text-gray-900"
  },
];

export function OnboardingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    // Si estamos en productos, consideramos la opción de Tienda como activa
    if (pathname === '/onboarding/products') {
      return href === '/onboarding';
    }
    // Si no, verificamos si la ruta actual coincide con el href
    return pathname === href;
  };

  return (
    <motion.div
      className="h-full bg-white border-r border-gray-100 flex-shrink-0 absolute left-0 z-10 shadow-sm"
      animate={{
        width: isOpen ? "280px" : "80px",
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <nav className="pt-4 px-3 space-y-2">
        {navigationItems.map((item) => {
          const isActive = isItemActive(item.href);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 py-2.5 transition-all relative w-full"
            >
              {/* Icon container - fixed width */}
              <div className={cn(
                "flex items-center justify-center w-12 h-12 text-2xl rounded-xl transition-all flex-shrink-0",
                isActive 
                  ? "bg-[#131F42]/10" 
                  : "hover:bg-gray-100"
              )}>
                {item.icon}
              </div>

              {/* Label container - fixed position */}
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  display: isOpen ? "block" : "none",
                }}
                className="min-w-[160px]"
              >
                <span className={cn(
                  "text-base font-light",
                  isActive ? "text-[#131F42]" : "text-gray-600"
                )}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
} 