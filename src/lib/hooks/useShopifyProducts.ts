import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'
import { collection, doc, onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { ShopifyProduct, ProductListing } from '@/types/product'

export const useShopifyProducts = () => {
  const { user } = useAuth()
  const [products, setProducts] = useState<ProductListing[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      console.log('No hay usuario autenticado')
      return
    }

    setLoading(true)
    setError(null)

    console.log('Intentando obtener productos para el usuario:', user.uid)
    const productsRef = collection(doc(collection(db, 'users'), user.uid), 'shopifyProducts')

    const unsubscribe = onSnapshot(
      productsRef,
      (snapshot: QuerySnapshot<DocumentData>) => {
        console.log('Snapshot recibido:', snapshot.size, 'documentos')
        const productsData = snapshot.docs.map(doc => {
          const shopifyProduct = doc.data() as ShopifyProduct
          console.log('Producto encontrado:', shopifyProduct.title)
          
          // Transformar el producto de Shopify a nuestro formato
          return {
            id: doc.id,
            name: shopifyProduct.title,
            description: shopifyProduct.description,
            images: shopifyProduct.images.map(img => img.src),
            marketplace: 'Shopify US',
            status: shopifyProduct.status === 'active' ? 'published' : 'draft',
            optimizationScore: calculateOptimizationScore(shopifyProduct),
            price: shopifyProduct.price,
            sku: shopifyProduct.sku,
            category: shopifyProduct.productType,
            inventory: shopifyProduct.inventoryQuantity,
            originalData: shopifyProduct
          } as ProductListing
        })

        console.log('Productos procesados:', productsData.length)
        setProducts(productsData)
        setLoading(false)
      },
      (err: Error) => {
        console.error('Error fetching Shopify products:', err)
        setError('Error al cargar los productos')
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [user])

  return { products, loading, error }
}

// Función auxiliar para calcular el score de optimización
function calculateOptimizationScore(product: ShopifyProduct): number {
  let score = 0
  const checks = [
    !!product.title && product.title.length >= 5, // Título adecuado
    !!product.description && product.description.length >= 100, // Descripción detallada
    product.images.length >= 3, // Suficientes imágenes
    !!product.productType, // Tipo de producto definido
    !!product.sku, // SKU definido
  ]

  score = (checks.filter(Boolean).length / checks.length) * 100
  return Math.round(score)
} 