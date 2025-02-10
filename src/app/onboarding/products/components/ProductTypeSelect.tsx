"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProductTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  disabled?: boolean;
}

export function ProductTypeSelect({ value, onChange, options, disabled }: ProductTypeSelectProps) {
  return (
    <Select 
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger className="h-9 min-w-[100px] text-sm" disabled={disabled}>
        <SelectValue placeholder="Tipo" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos los tipos</SelectItem>
        {options?.map((type) => (
          <SelectItem key={type} value={type || 'uncategorized'}>
            {type || 'Sin categoría'}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
} 