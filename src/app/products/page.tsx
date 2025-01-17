'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { db } from '@/lib/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import ProductsTable from './components/ProductsTable'
import ProductFilters from './components/ProductFilters'
import { ShopifyProduct } from '@/types/product'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import OnboardingLayout from '../onboarding/components/OnboardingLayout'

const PRODUCTS_PER_PAGE = 10

export default function ProductsPage() {
  const router = useRouter()
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
    search: ''
  })

  useEffect(() => {
    if (user) {
      fetchProducts()
    }
  }, [user, currentPage, filters])

  const fetchProducts = async () => {
    try {
      setLoading(true)
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
    <OnboardingLayout>
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-left">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Volver a la conexión</span>
          </button>
          
          <h2 className="text-4xl tracking-tight">
            <span className="font-light text-gray-600">Selecciona</span>
            <span className="font-medium text-[#131F42]"> tus productos</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 font-light">
            Los necesitamos para comenzar tu proceso de pre-exportación
          </p>
        </div>

        {/* Products Section */}
        <div className="space-y-4">
          {/* Filters Box */}
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <ProductFilters 
              filters={filters} 
              onFilterChange={setFilters}
            />
          </div>

          {/* Table */}
          <ProductsTable 
            products={products}
            loading={loading}
            currentPage={currentPage}
            totalProducts={totalProducts}
            productsPerPage={PRODUCTS_PER_PAGE}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </OnboardingLayout>
  )
} 