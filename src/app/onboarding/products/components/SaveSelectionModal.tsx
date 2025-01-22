import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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
          <DialogTitle>Guardar productos seleccionados</DialogTitle>
          <DialogDescription>
            Has seleccionado {selectedCount} productos para exportar
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4 max-h-[200px] overflow-auto">
          {selectedProducts.slice(0, 3).map((product) => (
            <div key={product.id} className="text-sm text-gray-600">
              • {product.title}
            </div>
          ))}
          {selectedCount > 3 && (
            <div className="text-sm text-gray-500">
              y {selectedCount - 3} productos más...
            </div>
          )}
        </div>
        <DialogFooter className="flex space-x-2 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 