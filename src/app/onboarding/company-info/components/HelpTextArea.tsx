'use client'

interface HelpTextAreaProps {
  value: string
  onChange: (value: string) => void
}

export function HelpTextArea({ value, onChange }: HelpTextAreaProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
      <h3 className="text-lg text-[#131F42] font-light">
        Cuéntanos, ¿en qué necesitas más ayuda?
      </h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe aquí tus necesidades específicas..."
        className="w-full h-32 px-3 py-2 text-base font-light text-gray-700 border border-gray-300 
          rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131F42]/20 focus:border-[#131F42]
          resize-none"
      />
    </div>
  )
} 