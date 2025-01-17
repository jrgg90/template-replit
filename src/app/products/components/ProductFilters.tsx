import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { useDebounce } from '@/lib/hooks/useDebounce';

interface FilterProps {
  filters: {
    status: string;
    inventoryStatus: string;
    productType: string;
    vendor: string;
    search: string;
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
    <div className="bg-white p-4 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border rounded-lg px-3 py-2"
      />

      <select
        value={filters.status}
        onChange={(e) => handleChange('status', e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="draft">Draft</option>
        <option value="archived">Archived</option>
      </select>

      <select
        value={filters.inventoryStatus}
        onChange={(e) => handleChange('inventoryStatus', e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">All Inventory</option>
        <option value="in_stock">In Stock</option>
        <option value="low_stock">Low Stock</option>
        <option value="out_of_stock">Out of Stock</option>
      </select>

      <select
        value={filters.productType}
        onChange={(e) => handleChange('productType', e.target.value)}
        className="border rounded-lg px-3 py-2"
        disabled={loadingOptions}
      >
        <option value="">All Types</option>
        {options.productTypes.map(type => (
          <option key={type} value={type}>
            {type || 'Uncategorized'}
          </option>
        ))}
      </select>

      <select
        value={filters.vendor}
        onChange={(e) => handleChange('vendor', e.target.value)}
        className="border rounded-lg px-3 py-2"
        disabled={loadingOptions}
      >
        <option value="">All Vendors</option>
        {options.vendors.map(vendor => (
          <option key={vendor} value={vendor}>
            {vendor || 'No Vendor'}
          </option>
        ))}
      </select>
    </div>
  )
} 