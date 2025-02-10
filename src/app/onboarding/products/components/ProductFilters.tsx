"use client"

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ProductTypeSelect } from './ProductTypeSelect';
import { VendorSelect } from './VendorSelect';

interface FilterProps {
  filters: {
    status: string;
    inventoryStatus: string;
    productType: string;
    vendor: string;
    search: string;
    selectedForExport: string;
  };
  onFilterChange: (filters: any) => void;
}

export default function ProductFilters({ filters, onFilterChange }: FilterProps) {
  const [options, setOptions] = useState({
    productTypes: [] as string[],
    vendors: [] as string[]
  });
  const [loadingOptions, setLoadingOptions] = useState(true);
  const { user } = useAuth();
  const [searchInput, setSearchInput] = useState(filters.search);
  const debouncedSearch = useDebounce(searchInput, 300);

  useEffect(() => {
    if (user) {
      fetchOptions();
    }
  }, [user]);

  useEffect(() => {
    onFilterChange({ ...filters, search: debouncedSearch });
  }, [debouncedSearch]);

  const fetchOptions = async () => {
    try {
      setLoadingOptions(true);
      const response = await fetch('/api/products/options', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.uid })
      });

      const data = await response.json();
      setOptions(data);
    } catch (error) {
      console.error('Error fetching options:', error);
    } finally {
      setLoadingOptions(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    onFilterChange({ ...filters, [key]: value })
  }

  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-2">
      {/* Search Bar */}
      <div className="flex-1 min-w-[200px]">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Buscar productos..."
            className="block w-full h-9 rounded-md border-0 py-1.5 pl-10 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#131F42]"
          />
        </div>
      </div>

      {/* Filters */}
      <select
        value={filters.status}
        onChange={(e) => handleChange('status', e.target.value)}
        className="h-9 min-w-[100px] rounded-md border-0 py-1.5 pl-3 pr-7 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42]"
      >
        <option value="">Estado</option>
        <option value="active">Activo</option>
        <option value="draft">Borrador</option>
      </select>

      <select
        value={filters.inventoryStatus}
        onChange={(e) => handleChange('inventoryStatus', e.target.value)}
        className="h-9 min-w-[100px] rounded-md border-0 py-1.5 pl-3 pr-7 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42]"
      >
        <option value="">Inventario</option>
        <option value="in_stock">En Stock</option>
        <option value="low_stock">Stock Bajo</option>
        <option value="out_of_stock">Sin Stock</option>
      </select>

      <select
        value={filters.selectedForExport}
        onChange={(e) => handleChange('selectedForExport', e.target.value)}
        className="h-9 min-w-[100px] rounded-md border-0 py-1.5 pl-3 pr-7 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42]"
      >
        <option value="">Selección</option>
        <option value="selected">Seleccionados</option>
        <option value="not_selected">No Seleccionados</option>
      </select>

      <ProductTypeSelect
        value={filters.productType}
        onChange={(value) => handleChange('productType', value)}
        options={options.productTypes}
        disabled={loadingOptions}
      />

      <VendorSelect
        value={filters.vendor}
        onChange={(value) => handleChange('vendor', value)}
        options={options.vendors}
        disabled={loadingOptions}
      />
    </div>
  );
} 