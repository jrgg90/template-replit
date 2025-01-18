import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { Search } from 'lucide-react';

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
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Search Bar */}
      <div className="flex-1">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Buscar productos..."
            className="block w-full rounded-md border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#131F42] sm:text-sm"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select
          value={filters.status}
          onChange={(e) => handleChange('status', e.target.value)}
          className="min-w-[120px] rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42] sm:text-sm"
        >
          <option value="">Estado</option>
          <option value="active">Activo</option>
          <option value="draft">Borrador</option>
        </select>

        <select
          value={filters.inventoryStatus}
          onChange={(e) => handleChange('inventoryStatus', e.target.value)}
          className="min-w-[120px] rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42] sm:text-sm"
        >
          <option value="">Inventario</option>
          <option value="in_stock">En Stock</option>
          <option value="low_stock">Stock Bajo</option>
          <option value="out_of_stock">Sin Stock</option>
        </select>

        <select
          value={filters.selectedForExport}
          onChange={(e) => handleChange('selectedForExport', e.target.value)}
          className="min-w-[120px] rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42] sm:text-sm"
        >
          <option value="">Selección</option>
          <option value="selected">Seleccionados</option>
          <option value="not_selected">No Seleccionados</option>
        </select>

        <select
          value={filters.productType}
          onChange={(e) => handleChange('productType', e.target.value)}
          className="min-w-[120px] rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42] sm:text-sm disabled:bg-gray-50 disabled:text-gray-500"
          disabled={loadingOptions}
        >
          <option value="">Tipo</option>
          {options.productTypes.map((type) => (
            <option key={type} value={type}>{type || 'Sin categoría'}</option>
          ))}
        </select>

        <select
          value={filters.vendor}
          onChange={(e) => handleChange('vendor', e.target.value)}
          className="min-w-[120px] rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#131F42] sm:text-sm disabled:bg-gray-50 disabled:text-gray-500"
          disabled={loadingOptions}
        >
          <option value="">Vendedor</option>
          {options.vendors.map((vendor) => (
            <option key={vendor} value={vendor}>{vendor || 'Sin vendedor'}</option>
          ))}
        </select>
      </div>
    </div>
  );
} 