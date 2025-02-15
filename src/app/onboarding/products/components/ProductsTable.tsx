"use client"

import { ShopifyProduct } from '@/types/product'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"
import { HelpCircle, Trash2 } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'
import ProductFilters from './ProductFilters'
import { useState } from 'react'

interface ProductsTableProps {
  products: ShopifyProduct[];
  loading: boolean;
  currentPage: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (page: number) => void;
  selectedProducts: string[];
  onSelectionChange: (selectedIds: string[]) => void;
  onDeselect?: (productId: string) => void;
}

const ProductsTable: React.FC<ProductsTableProps> = ({
  products,
  loading,
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange,
  selectedProducts,
  onSelectionChange,
  onDeselect
}) => {
  const [filters, setFilters] = useState({
    status: '',
    inventoryStatus: '',
    productType: '',
    vendor: '',
    search: '',
    selectedForExport: ''
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <LoadingSpinner className="w-6 h-6 text-blue-600 mb-2" />
        <p className="text-sm text-gray-500">Cargando productos...</p>
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500 mb-1">No hay productos disponibles</p>
        <p className="text-sm text-gray-400">Conecta tu tienda para ver tus productos aquí</p>
      </div>
    );
  }

  const getImageUrl = (image: any) => {
    if (!image) return null;
    if (typeof image === 'string') return image;
    if (image.url) return image.url;
    if (image.src) return image.src;
    return null;
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      onSelectionChange(products.map(p => p.id));
    } else {
      onSelectionChange([]);
    }
  };

  const handleSelectProduct = (productId: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedProducts, productId]);
    } else {
      onSelectionChange(selectedProducts.filter(id => id !== productId));
    }
  };

  // Define your filter options
  const filterOptions = {
    productTypes: [
      'Ropa',
      'Accesorios',
      'Electrónicos',
      'Hogar',
      // Add more product types as needed
    ]
  }

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    // Add any additional filter logic here
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative w-full overflow-hidden rounded-lg border bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1400px] caption-bottom text-sm">
            <thead className="border-b bg-gray-50/75">
              <tr>
                <th className="h-10 w-[50px] px-3 text-left align-middle">
                  <Checkbox
                    checked={selectedProducts.length === products.length}
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all products"
                  />
                </th>
                <th className="h-10 w-[80px] px-3 text-left align-middle font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Imagen
                </th>
                <th className="h-10 w-[350px] px-3 text-left align-middle font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Producto
                </th>
                <th className="h-10 w-[120px] px-3 text-left align-middle font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Estado
                </th>
                <th className="h-10 w-[120px] px-3 text-left align-middle font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Inventario
                </th>
                <th className="h-10 w-[150px] px-3 text-left align-middle font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Tipo
                </th>
                <th className="h-10 w-[150px] px-3 text-left align-middle font-medium text-gray-500 text-xs uppercase tracking-wider">
                  Vendedor
                </th>
                <th className="h-10 w-[200px] px-3 text-left align-middle font-medium text-gray-500 text-xs uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Seleccionado
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="inline-flex items-center hover:text-gray-600">
                          <HelpCircle className="h-3 w-3 text-gray-400 hover:text-gray-600" />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="max-w-xs rounded-md bg-gray-900 px-3 py-2 text-xs text-gray-50 shadow-md animate-in fade-in-0 zoom-in-95"
                          sideOffset={5}
                        >
                          Productos que has seleccionado para exportar a Estados Unidos
                          <Tooltip.Arrow className="fill-gray-900" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="transition-colors hover:bg-gray-50/50"
                >
                  <td className="p-3 align-middle w-[50px]">
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={(checked) => handleSelectProduct(product.id, checked as boolean)}
                      aria-label={`Select ${product.title}`}
                    />
                  </td>
                  <td className="p-3 align-middle w-[80px]">
                    <div className="relative h-10 w-10">
                      {product.images?.[0] && getImageUrl(product.images[0]) ? (
                        <Image
                          src={getImageUrl(product.images[0])}
                          alt={typeof product.images[0] === 'object' ? product.images[0].alt || product.title : product.title}
                          width={40}
                          height={40}
                          className="rounded-lg object-cover ring-1 ring-gray-200"
                          unoptimized
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center ring-1 ring-gray-200">
                          <span className="text-xs text-gray-400">N/A</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-3 align-middle w-[350px]">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900 truncate">{product.title}</span>
                      <span className="text-xs text-gray-400">{product.id}</span>
                    </div>
                  </td>
                  <td className="p-3 align-middle w-[120px]">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                      product.status === 'active' 
                        ? "bg-green-50 text-green-700 ring-1 ring-green-600/10"
                        : "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/10"
                    )}>
                      {product.status === 'active' ? 'Activo' : 'Borrador'}
                    </span>
                  </td>
                  <td className="p-3 align-middle w-[120px]">
                    <span className={cn(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                      product.inventoryQuantity > 0
                        ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/10"
                        : "bg-red-50 text-red-700 ring-1 ring-red-600/10"
                    )}>
                      {product.inventoryQuantity} unidades
                    </span>
                  </td>
                  <td className="p-3 align-middle w-[150px]">
                    <span className="text-gray-600 text-sm">{product.productType || '-'}</span>
                  </td>
                  <td className="p-3 align-middle w-[150px]">
                    <span className="text-gray-600 text-sm">{product.vendor}</span>
                  </td>
                  <td className="p-3 align-middle w-[200px]">
                    {product.selectedForExport && (
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-50 text-green-700 ring-1 ring-green-600/10">
                          Seleccionado
                        </span>
                        <button
                          onClick={() => onDeselect?.(product.id)}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                          title="Deseleccionar producto"
                        >
                          <Trash2 className="h-3.5 w-3.5 text-gray-400 hover:text-red-500" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-lg border px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm text-gray-600">
          Mostrando <span className="font-medium">{(currentPage - 1) * productsPerPage + 1}</span> a <span className="font-medium">{Math.min(currentPage * productsPerPage, totalProducts)}</span> de <span className="font-medium">{totalProducts}</span> productos
        </p>
        <div className="flex gap-1">
          {Array.from({ length: Math.ceil(totalProducts / productsPerPage) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                currentPage === page
                  ? "bg-[#131F42] text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-50 ring-1 ring-gray-200"
              )}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      <ProductFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default ProductsTable 