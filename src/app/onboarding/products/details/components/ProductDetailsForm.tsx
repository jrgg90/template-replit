'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useAuth } from '@/lib/hooks/useAuth'
import { db } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { Loader2 } from 'lucide-react'

interface ProductDetail {
  id: string
  title: string
  dimensions: {
    length: string
    width: string
    height: string
  }
  weight: string
  packaging: string
  material: string
  certifications: string
}

export function ProductDetailsForm() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<ProductDetail[]>([])

  useEffect(() => {
    if (user) {
      loadSelectedProducts()
    }
  }, [user])

  const loadSelectedProducts = async () => {
    try {
      // Obtener los productos seleccionados del usuario
      const userDoc = await getDoc(doc(db, "users", user!.uid))
      if (!userDoc.exists()) {
        return
      }

      const selectedProductIds = userDoc.data().selectedProducts || []
      
      // Obtener los detalles de cada producto
      const productsData = await Promise.all(
        selectedProductIds.map(async (id: string) => {
          const productDoc = await getDoc(doc(db, "products", id))
          return {
            id: productDoc.id,
            title: productDoc.data()?.title || 'Producto sin título',
            dimensions: { length: '', width: '', height: '' },
            weight: '',
            packaging: '',
            material: '',
            certifications: ''
          }
        })
      )

      setProducts(productsData)
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">No hay productos seleccionados</p>
      </div>
    )
  }

  return (
    <div className="divide-y divide-gray-100">
      <Accordion type="multiple" className="w-full">
        {products.map((product) => (
          <AccordionItem key={product.id} value={product.id}>
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#131F42]/10" />
                <span className="text-sm font-medium text-gray-900">
                  {product.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-6">
                {/* Dimensiones */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium text-gray-900">Dimensiones</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs text-gray-500">Largo (cm)</Label>
                      <Input placeholder="0" className="text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs text-gray-500">Ancho (cm)</Label>
                      <Input placeholder="0" className="text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs text-gray-500">Alto (cm)</Label>
                      <Input placeholder="0" className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Peso */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-900">Peso (kg)</Label>
                  <Input placeholder="0.00" className="text-sm" />
                </div>

                {/* Empaque */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-900">Tipo de empaque</Label>
                  <Input placeholder="Ej: Caja de cartón" className="text-sm" />
                </div>

                {/* Material */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-900">Material principal</Label>
                  <Input placeholder="Ej: Madera, Plástico, Metal" className="text-sm" />
                </div>

                {/* Certificaciones */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-900">Certificaciones (opcional)</Label>
                  <Input placeholder="Ej: ISO 9001, CE" className="text-sm" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
} 