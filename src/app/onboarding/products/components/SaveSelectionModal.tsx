import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SaveSelectionModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedCount: number;
  selectedProducts: Array<{
    title: string;
    id: string;
  }>;
}

export function SaveSelectionModal({
  open,
  onClose,
  onConfirm,
  selectedCount,
  selectedProducts
}: SaveSelectionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium text-gray-900">
            Productos seleccionados
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 mt-1">
            Has seleccionado {selectedCount} producto{selectedCount !== 1 ? 's' : ''} para exportar.
            En el siguiente paso podrás agregar información detallada de cada producto.
          </DialogDescription>
        </DialogHeader>

        {/* Lista de productos */}
        <div className="space-y-3 py-4 max-h-[200px] overflow-auto">
          {selectedProducts.slice(0, 3).map((product) => (
            <div key={product.id} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#131F42]/10" />
              <p className="text-sm text-gray-600 font-light">
                {product.title}
              </p>
            </div>
          ))}
          {selectedCount > 3 && (
            <p className="text-sm text-gray-500 pl-5 font-light">
              y {selectedCount - 3} producto{selectedCount - 3 !== 1 ? 's' : ''} más...
            </p>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-700">
            <span className="font-medium">Siguiente paso:</span>{' '}
            <span className="font-light">
              Necesitaremos información adicional como dimensiones, peso y empaque 
              de cada producto para el proceso de exportación.
            </span>
          </p>
        </div>

        {/* Botones */}
        <DialogFooter className="flex gap-3 sm:gap-0">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 sm:flex-none font-light"
          >
            Cancelar
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 sm:flex-none bg-[#131F42] hover:bg-[#1c2b5d] text-white font-light"
          >
            Continuar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 