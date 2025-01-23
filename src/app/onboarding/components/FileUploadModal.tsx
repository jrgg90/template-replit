'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FilePlus, Upload, Trash2, X, FileIcon, Loader2, AlertCircle } from "lucide-react"
import { useState, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { toast } from 'sonner'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

interface FileUploadModalProps {
  open: boolean
  onClose: () => void
  onUpload: (file: File) => void
  loading?: boolean
  progress?: number
}

export function FileUploadModal({ 
  open, 
  onClose, 
  onUpload, 
  loading,
  progress = 0 
}: FileUploadModalProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    setError(null)
    
    // Validar tamaño del archivo
    if (file.size > MAX_FILE_SIZE) {
      setError('El archivo no debe superar los 10MB')
      return
    }

    // Validar tipo de archivo
    const validTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/pdf'
    ]
    
    if (!validTypes.includes(file.type)) {
      setError('Por favor sube un archivo CSV, Excel o PDF')
      return
    }
    
    setSelectedFile(file)
  }

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Sube tu archivo de productos</DialogTitle>
          <p className="text-sm text-gray-500 mt-2">
            Sube un archivo con información acerca de tus productos. 
            Puede ser un archivo Excel, CSV, o un PDF.
            <br />
            <span className="text-xs">Tamaño máximo: 10MB</span>
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <Input
            type="file"
            accept=".csv,.xlsx,.xls,.pdf"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          {!selectedFile ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={cn(
                "flex h-48 cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed",
                "border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100",
                isDragging && "border-[#131F42] bg-[#131F42]/5"
              )}
            >
              <div className="rounded-full bg-white p-3 shadow-sm">
                <FilePlus className="h-6 w-6 text-gray-400" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Haz clic para seleccionar</p>
                <p className="text-xs text-gray-500">
                  o arrastra y suelta tu archivo aquí
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <FileIcon className="h-8 w-8 text-[#131F42]" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFile(null)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}

          {loading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-center text-gray-500">
                {progress}% completado
              </p>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                if (selectedFile) {
                  setError(null)
                  onUpload(selectedFile)
                }
              }}
              disabled={!selectedFile || loading || !!error}
              className="bg-[#131F42] text-white hover:bg-[#1c2b5d] min-w-[100px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Subiendo...
                </>
              ) : (
                'Subir archivo'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 