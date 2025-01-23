'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { db } from '@/lib/firebase'
import { collection, query, where, getDocs, getDoc, setDoc, updateDoc } from 'firebase/firestore'
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
      loadSelectedProducts()
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
      if (filters.selectedForExport) {
        baseQuery = query(
          baseQuery, 
          where("selectedForExport", "==", filters.selectedForExport === 'selected')
        )
      }

      // Get all products first
      const snapshot = await getDocs(baseQuery)
      let filteredProducts = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      })) as ShopifyProduct[]

      // Apply search filter in memory
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        filteredProducts = filteredProducts.filter(product => 
          product.title.toLowerCase().includes(searchTerm) ||
          product.productType.toLowerCase().includes(searchTerm) ||
          product.vendor.toLowerCase().includes(searchTerm)
        )
      }

      // Update total count after search filter
      setTotalProducts(filteredProducts.length)

      // Apply pagination
      const start = (currentPage - 1) * PRODUCTS_PER_PAGE
      const end = start + PRODUCTS_PER_PAGE
      const paginatedProducts = filteredProducts.slice(start, end)

      // Sincronizar los checkboxes con los productos ya seleccionados
      const selectedIds = paginatedProducts
        .filter(product => product.selectedForExport)
        .map(product => product.id)
      setSelectedProducts(prevSelected => {
        const uniqueSelected = new Set([...prevSelected, ...selectedIds])
        return Array.from(uniqueSelected)
      })

      setProducts(paginatedProducts)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadSelectedProducts = async () => {
    try {
      const userDoc = await getDoc(doc(db, "users", user!.uid))
      if (userDoc.exists()) {
        const savedSelectedProducts = userDoc.data().selectedProducts || []
        setSelectedProducts(savedSelectedProducts)
      }
    } catch (error) {
      console.error('Error loading selected products:', error)
      toast.error('Error al cargar productos seleccionados')
    }
  }

  const handleSaveSelection = async () => {
    setShowSaveModal(true)
  }

  const handleConfirmSave = async () => {
    try {
      setIsSaving(true)
      
      // Guardar los productos seleccionados en Firestore
      const userRef = doc(db, "users", user!.uid)
      
      // Primero verificamos si el documento existe
      const userDoc = await getDoc(userRef)
      
      if (!userDoc.exists()) {
        // Si no existe, lo creamos
        await setDoc(userRef, {
          selectedProducts: selectedProducts,
          updatedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          userId: user!.uid,
          email: user!.email
        })
      } else {
        // Si existe, lo actualizamos
        await updateDoc(userRef, {
          selectedProducts: selectedProducts,
          updatedAt: new Date().toISOString()
        })
      }
      
      toast.success('Productos guardados correctamente')
      setShowSaveModal(false)
      
      // Redirigir a la página de detalles
      router.push('/onboarding/products/details')
    } catch (error) {
      console.error('Error saving products:', error)
      toast.error('Error al guardar los productos')
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
        {/* Header Section with Buttons */}
        <div>
          {/* Botón Volver */}
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
                <span className="font-medium text-[#131F42]"> que deseas exportar</span>
              </h2>
              <p className="mt-3 text-base text-gray-600 font-light">
                Marca los productos que quieres incluir en tu proceso de exportación
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => router.push('/onboarding/products/details')}
                variant="outline"
                className="text-gray-500 border border-gray-200 hover:bg-gray-50 
                  hover:text-gray-700 font-light px-6 text-sm whitespace-nowrap"
              >
                Más información de productos
              </Button>
              <Button
                onClick={handleSaveSelection}
                disabled={selectedProducts.length === 0}
                className="bg-[#131F42] text-white hover:bg-[#1c2b5d] 
                  font-light px-6 text-sm whitespace-nowrap"
              >
                Guardar Selección ({selectedProducts.length})
              </Button>
            </div>
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