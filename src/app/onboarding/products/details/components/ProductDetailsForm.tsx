'use client'

import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useAuth } from '@/lib/hooks/useAuth'
import { db } from '@/lib/firebase'
import { doc, getDoc, setDoc, writeBatch } from 'firebase/firestore'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

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

interface ProductDetailForm {
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
  const [formData, setFormData] = useState<Record<string, ProductDetailForm>>({})
  const [saving, setSaving] = useState<string | null>(null)
  const [savingAll, setSavingAll] = useState(false)

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

  // Manejar cambios en los inputs
  const handleInputChange = (productId: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        ...(field.includes('.') 
          ? {
              dimensions: {
                ...(prev[productId]?.dimensions || {}),
                [field.split('.')[1]]: value
              }
            }
          : { [field]: value })
      }
    }))
  }

  // Guardar un producto específico
  const handleSaveProduct = async (productId: string) => {
    try {
      setSaving(productId)
      const productData = formData[productId]
      
      await setDoc(doc(db, "product_details", productId), {
        ...productData,
        updatedAt: new Date().toISOString(),
        userId: user!.uid
      }, { merge: true })

      toast.success('Cambios guardados')
    } catch (error) {
      console.error('Error saving product details:', error)
      toast.error('Error al guardar los cambios')
    } finally {
      setSaving(null)
    }
  }

  // Guardar todos los productos
  const handleSaveAll = async () => {
    try {
      setSavingAll(true)
      const batch = writeBatch(db)

      Object.entries(formData).forEach(([productId, data]) => {
        const docRef = doc(db, "product_details", productId)
        batch.set(docRef, {
          ...data,
          updatedAt: new Date().toISOString(),
          userId: user!.uid
        }, { merge: true })
      })

      await batch.commit()
      toast.success('Todos los cambios han sido guardados')
    } catch (error) {
      console.error('Error saving all products:', error)
      toast.error('Error al guardar los cambios')
    } finally {
      setSavingAll(false)
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
    <div className="space-y-6">
      {/* Botón de guardar todo */}
      {Object.keys(formData).length > 0 && (
        <div className="flex justify-end px-8 py-4 bg-gray-50 border-b">
          <Button
            onClick={handleSaveAll}
            disabled={savingAll}
            className="bg-[#131F42] text-white hover:bg-[#1c2b5d]"
          >
            {savingAll ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Guardando...
              </>
            ) : (
              'Guardar todos los cambios'
            )}
          </Button>
        </div>
      )}

      <Accordion type="multiple" className="w-full">
        {products.map((product) => (
          <AccordionItem key={product.id} value={product.id}>
            <AccordionTrigger className="px-8 py-6 hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-[#131F42]/10" />
                <span className="text-base font-medium text-gray-900">
                  {product.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-8 pb-8">
              <div className="space-y-8">
                <div className="space-y-5">
                  <Label className="text-base font-medium text-gray-900">Dimensiones</Label>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm text-gray-500">Largo (cm)</Label>
                      <Input
                        value={formData[product.id]?.dimensions?.length || ''}
                        onChange={(e) => handleInputChange(product.id, 'dimensions.length', e.target.value)}
                        placeholder="0"
                        className="text-base h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm text-gray-500">Ancho (cm)</Label>
                      <Input
                        value={formData[product.id]?.dimensions?.width || ''}
                        onChange={(e) => handleInputChange(product.id, 'dimensions.width', e.target.value)}
                        placeholder="0"
                        className="text-base h-12"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm text-gray-500">Alto (cm)</Label>
                      <Input
                        value={formData[product.id]?.dimensions?.height || ''}
                        onChange={(e) => handleInputChange(product.id, 'dimensions.height', e.target.value)}
                        placeholder="0"
                        className="text-base h-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium text-gray-900">Peso (kg)</Label>
                  <Input
                    value={formData[product.id]?.weight || ''}
                    onChange={(e) => handleInputChange(product.id, 'weight', e.target.value)}
                    placeholder="0.00"
                    className="text-base h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium text-gray-900">Tipo de empaque</Label>
                  <Input
                    value={formData[product.id]?.packaging || ''}
                    onChange={(e) => handleInputChange(product.id, 'packaging', e.target.value)}
                    placeholder="Ej: Caja de cartón"
                    className="text-base h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium text-gray-900">Material principal</Label>
                  <Input
                    value={formData[product.id]?.material || ''}
                    onChange={(e) => handleInputChange(product.id, 'material', e.target.value)}
                    placeholder="Ej: Madera, Plástico, Metal"
                    className="text-base h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium text-gray-900">Certificaciones (opcional)</Label>
                  <Input
                    value={formData[product.id]?.certifications || ''}
                    onChange={(e) => handleInputChange(product.id, 'certifications', e.target.value)}
                    placeholder="Ej: ISO 9001, CE"
                    className="text-base h-12"
                  />
                </div>

                {/* Botón de guardar por producto */}
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={() => handleSaveProduct(product.id)}
                    disabled={saving === product.id}
                    variant="outline"
                    className="text-[#131F42] border-[#131F42] hover:bg-[#131F42]/5"
                  >
                    {saving === product.id ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Guardando...
                      </>
                    ) : (
                      'Guardar cambios'
                    )}
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
} 