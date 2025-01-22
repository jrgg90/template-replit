"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileText, Package, ClipboardCheck } from "lucide-react"; // Iconos sugeridos
import Link from "next/link";
import { useState } from "react";

const navigationItems = [
  {
    label: "Productos",
    href: "/onboarding/products",
    icon: <Package className="w-5 h-5" />,
  },
  {
    label: "Información de Empresa",
    href: "/onboarding/company-info",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    label: "En Revisión",
    href: "/onboarding/review",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
];

export function OnboardingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="h-full bg-white/50 border-r border-gray-100 flex-shrink-0 absolute left-0 z-10"
      animate={{
        width: isOpen ? "240px" : "60px",
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 px-2 py-2 rounded-md transition-colors",
              "hover:bg-gray-100/50 group"
            )}
          >
            <div className="text-gray-500">{item.icon}</div>
            <motion.span
              animate={{
                opacity: isOpen ? 1 : 0,
                display: isOpen ? "block" : "none",
              }}
              className="text-sm text-gray-600 font-medium whitespace-nowrap"
            >
              {item.label}
            </motion.span>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
} 