"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface VendorSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  disabled?: boolean;
}

export function VendorSelect({ value, onChange, options, disabled }: VendorSelectProps) {
  return (
    <Select 
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger className="h-9 min-w-[100px] text-sm" disabled={disabled}>
        <SelectValue placeholder="Vendedor" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos los vendedores</SelectItem>
        {options?.map((vendor) => (
          <SelectItem key={vendor} value={vendor || 'no-vendor'}>
            {vendor || 'Sin vendedor'}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 