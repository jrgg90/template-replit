'use client'

import { useEffect, useState } from 'react'
import { db, storage } from '@/lib/firebase'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import { Trash2, FileIcon, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface UploadedFilesProps {
  userId: string
  onReload?: () => void
}

export function UploadedFiles({ userId, onReload }: UploadedFilesProps) {
  const [files, setFiles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)

  useEffect(() => {
    loadFiles()
  }, [userId])

  const loadFiles = async () => {
    try {
      const docRef = doc(db, "product_files", userId)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data())
        
        const fileData = docSnap.data()
        if (!fileData.storagePath) {
          console.error('Storage path missing in document:', fileData)
        }
        
        setFiles([{
          ...fileData,
          storagePath: fileData.storagePath || `product-files/${userId}/${fileData.fileName}`
        }])
      } else {
        console.log('No document found for userId:', userId)
        setFiles([])
      }
    } catch (error) {
      console.error('Error loading files:', error)
      setFiles([])
    } finally {
      setLoading(false)
      onReload?.()
    }
  }

  const handleDelete = async (file: any) => {
    console.log('Attempting to delete file:', {
      fileName: file.fileName,
      storagePath: file.storagePath,
      fullFile: file
    })

    if (!file.storagePath) {
      console.error('No storage path found for file:', file)
      toast.error('Error al eliminar el archivo: Ruta no encontrada')
      return
    }

    try {
      setDeleting(file.fileName)
      
      console.log('Deleting from storage path:', file.storagePath)
      
      const storageRef = ref(storage, file.storagePath)
      try {
        await deleteObject(storageRef)
        console.log('Successfully deleted from storage')
      } catch (storageError) {
        console.error('Error deleting from storage:', storageError)
      }
      
      const docRef = doc(db, "product_files", userId)
      await deleteDoc(docRef)
      console.log('Successfully deleted from Firestore')
      
      setFiles([])
      toast.success('Archivo eliminado correctamente')
    } catch (error) {
      console.error('Error in delete process:', error)
      toast.error('Error al eliminar el archivo')
    } finally {
      setDeleting(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center p-4">
        <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
      </div>
    )
  }

  if (files.length === 0) {
    return null
  }

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <p className="text-sm text-gray-500 mb-3">Archivos subidos:</p>
      <div className="space-y-2">
        {files.map((file) => (
          <div 
            key={file.fileName}
            className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <FileIcon className="h-5 w-5 text-[#131F42]" />
              <div>
                <p className="text-sm font-medium text-gray-900">{file.fileName}</p>
                <p className="text-xs text-gray-500">
                  {file.fileSizeFormatted} • Subido el {new Date(file.uploadedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(file)}
              disabled={deleting === file.fileName}
              className="h-8 w-8 p-0"
            >
              {deleting === file.fileName ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500" />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
} 