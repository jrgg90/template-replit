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
import ProductsLayout from './components/ProductsLayout'
import { Button } from '@/components/ui/button'
import { SaveSelectionModal } from './components/SaveSelectionModal'
import { writeBatch, doc } from 'firebase/firestore'
import { toast } from 'sonner'

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
    search: '',
    selectedForExport: ''
  })
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

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

      // Add selectedForExport filter
      if (filters.selectedForExport) {
        baseQuery = query(
          baseQuery, 
          where("selectedForExport", "==", filters.selectedForExport === 'selected')
        )
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

  const handleSaveSelection = async () => {
    setShowSaveModal(true)
  }

  const handleConfirmSave = async () => {
    try {
      setIsSaving(true)
      const batch = writeBatch(db)

      // Get all currently selected products from the database
      const currentlySelected = products.filter(p => p.selectedForExport).map(p => p.id)
      
      // Products to be deselected (were selected but not in the new selection)
      const toDeselect = currentlySelected.filter(id => !selectedProducts.includes(id))
      
      // Products to be selected (in the new selection but weren't selected before)
      const toSelect = selectedProducts.filter(id => !currentlySelected.includes(id))

      // Update products to be deselected
      toDeselect.forEach(productId => {
        const productRef = doc(db, "products", productId)
        batch.update(productRef, {
          selectedForExport: false,
          selectedAt: null
        })
      })

      // Update products to be selected
      toSelect.forEach(productId => {
        const productRef = doc(db, "products", productId)
        batch.update(productRef, {
          selectedForExport: true,
          selectedAt: new Date().toISOString()
        })
      })

      await batch.commit()
      
      toast.success(
        toSelect.length > 0 && toDeselect.length > 0
          ? 'Productos actualizados exitosamente'
          : toSelect.length > 0
          ? 'Productos seleccionados exitosamente'
          : 'Productos deseleccionados exitosamente'
      )
      
      setShowSaveModal(false)
      setSelectedProducts([])
      fetchProducts() // Refresh the list
    } catch (error) {
      console.error('Error saving products:', error)
      toast.error('Error al actualizar los productos')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeselect = async (productId: string) => {
    try {
      const batch = writeBatch(db)
      const productRef = doc(db, "products", productId)
      
      batch.update(productRef, {
        selectedForExport: false,
        selectedAt: null
      })

      await batch.commit()
      toast.success('Producto deseleccionado')
      fetchProducts() // Refresh the list
    } catch (error) {
      console.error('Error deselecting product:', error)
      toast.error('Error al deseleccionar el producto')
    }
  }

  return (
    <ProductsLayout>
      <div className="space-y-8">
        {/* Header Section with Save Button */}
        <div>
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Volver a la conexión</span>
          </button>
          
          <div className="flex justify-between items-baseline">
            <div className="text-left">
              <h2 className="text-4xl tracking-tight">
                <span className="font-light text-gray-600">Selecciona los productos</span>
                <span className="font-medium text-[#131F42]"> que quieres exportar</span>
              </h2>
              <p className="mt-3 text-base text-gray-600 font-light">
                Los necesitamos para comenzar tu proceso de pre-exportación
              </p>
            </div>

            <Button
              onClick={handleSaveSelection}
              className="bg-[#131F42] hover:bg-[#0F1835] text-white -mb-0.5"
              disabled={selectedProducts.length === 0}
            >
              Guardar Selección ({selectedProducts.length})
            </Button>
          </div>
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
            selectedProducts={selectedProducts}
            onSelectionChange={setSelectedProducts}
            onDeselect={handleDeselect}
          />
        </div>
      </div>

      <SaveSelectionModal 
        open={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        onConfirm={handleConfirmSave}
        selectedCount={selectedProducts.length}
        selectedProducts={products.filter(p => selectedProducts.includes(p.id))}
      />
    </ProductsLayout>
  )
} 