'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { db } from '@/lib/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
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
      
      // Build query
      let baseQuery = query(
        collection(db, "products"),
        where("userId", "==", user?.uid)
      )

      // Add filters if they exist
      if (filters.status) {
        baseQuery = query(baseQuery, where("status", "==", filters.status))
      }
      if (filters.inventoryStatus) {
        baseQuery = query(baseQuery, where("inventoryStatus", "==", filters.inventoryStatus))
      }
      if (filters.productType) {
        baseQuery = query(baseQuery, where("productType", "==", filters.productType))
      }
      if (filters.vendor) {
        baseQuery = query(baseQuery, where("vendor", "==", filters.vendor))
      }

      // Get total count
      const snapshot = await getDocs(baseQuery)
      const totalCount = snapshot.size
      setTotalProducts(totalCount)

      // Get paginated results
      const start = (currentPage - 1) * PRODUCTS_PER_PAGE
      const end = start + PRODUCTS_PER_PAGE
      const paginatedProducts = snapshot.docs
        .slice(start, end)
        .map(doc => ({ id: doc.id, ...doc.data() })) as ShopifyProduct[]

      setProducts(paginatedProducts)
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