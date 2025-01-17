'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import ProductsTable from './components/ProductsTable'
import ProductFilters from './components/ProductFilters'
import { ShopifyProduct } from '@/types/product'

const PRODUCTS_PER_PAGE = 10

export default function ProductsPage() {
  const { user } = useAuth()
  const [products, setProducts] = useState<ShopifyProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [filters, setFilters] = useState({
    status: '',
    inventoryStatus: '',
    productType: '',
    vendor: '',
    search: '',
  })

  useEffect(() => {
    if (user) {
      fetchProducts()
    }
  }, [user, currentPage, filters])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/products/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.uid,
          page: currentPage,
          limit: PRODUCTS_PER_PAGE,
          filters
        })
      })

      const data = await response.json()
      setProducts(data.products)
      setTotalProducts(data.total)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Products</h1>
      
      <ProductFilters 
        filters={filters} 
        onFilterChange={setFilters}
      />

      <ProductsTable 
        products={products}
        loading={loading}
        currentPage={currentPage}
        totalProducts={totalProducts}
        productsPerPage={PRODUCTS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  )
} 