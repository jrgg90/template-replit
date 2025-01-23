'use client'

import { useState, useEffect } from 'react'
import { QuestionCard } from './QuestionCard'
import { HelpTextArea } from './HelpTextArea'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useAuth } from '@/lib/hooks/useAuth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { toast } from 'sonner'

interface CompanyAnswers {
  padronExportadores: boolean | null
  fraccionArancelaria: boolean | null
  fiel: boolean | null
  obligacionesFiscales: boolean | null
  helpNeeded: string
}

export function CompanyQuestionnaire() {
  const router = useRouter()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)
  const [answers, setAnswers] = useState<CompanyAnswers>({
    padronExportadores: null,
    fraccionArancelaria: null,
    fiel: null,
    obligacionesFiscales: null,
    helpNeeded: ''
  })

  // Cargar respuestas previas
  useEffect(() => {
    const loadPreviousAnswers = async () => {
      if (!user) return

      try {
        const docRef = doc(db, "company_info", user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data()
          setAnswers({
            padronExportadores: data.padronExportadores,
            fraccionArancelaria: data.fraccionArancelaria,
            fiel: data.fiel,
            obligacionesFiscales: data.obligacionesFiscales,
            helpNeeded: data.helpNeeded || ''
          })
        }
      } catch (error) {
        console.error('Error loading previous answers:', error)
        toast.error('Error al cargar respuestas previas')
      } finally {
        setInitialLoading(false)
      }
    }

    loadPreviousAnswers()
  }, [user])

  // Verificar si todas las preguntas están respondidas
  const isComplete = () => {
    return answers.padronExportadores !== null &&
           answers.fraccionArancelaria !== null &&
           answers.fiel !== null &&
           answers.obligacionesFiscales !== null
  }

  const handleSave = async () => {
    if (!user) {
      toast.error('Debes iniciar sesión para continuar')
      return
    }

    if (!isComplete()) {
      toast.error('Por favor responde todas las preguntas antes de continuar')
      return
    }

    try {
      setLoading(true)
      
      // Guardar en Firebase
      await setDoc(doc(db, "company_info", user.uid), {
        ...answers,
        updatedAt: new Date().toISOString(),
        userId: user.uid
      })

      toast.success('Información guardada correctamente')
      router.push('/onboarding/review')
    } catch (error) {
      console.error('Error saving company info:', error)
      toast.error('Error al guardar la información')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {initialLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
        </div>
      ) : (
        <>
          <QuestionCard
            question="¿Estás inscrito en el Padrón de Exportadores?"
            value={answers.padronExportadores}
            onChange={(value) => setAnswers(prev => ({ ...prev, padronExportadores: value }))}
          />

          <QuestionCard
            question="¿Sabes la fracción arancelaria de uno o más de tus productos?"
            value={answers.fraccionArancelaria}
            onChange={(value) => setAnswers(prev => ({ ...prev, fraccionArancelaria: value }))}
          />

          <QuestionCard
            question="¿Tienes acceso a la FIEL?"
            value={answers.fiel}
            onChange={(value) => setAnswers(prev => ({ ...prev, fiel: value }))}
          />

          <QuestionCard
            question="¿Tienes el documento Obligación de Cumplimientos Fiscales?"
            value={answers.obligacionesFiscales}
            onChange={(value) => setAnswers(prev => ({ ...prev, obligacionesFiscales: value }))}
          />

          <HelpTextArea
            value={answers.helpNeeded}
            onChange={(value) => setAnswers(prev => ({ ...prev, helpNeeded: value }))}
          />

          {/* Save Button */}
          <div className="flex justify-end pt-6">
            <Button
              onClick={handleSave}
              disabled={loading || !isComplete()}
              className="bg-[#131F42] text-white hover:bg-[#1c2b5d] px-8 min-w-[150px]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Guardando...
                </>
              ) : (
                <>
                  Continuar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  )
} 