import { Input } from "@/components/ui/input"

interface InputWithLabelProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  placeholder?: string
  type?: string
  className?: string
}

function InputWithLabel({ 
  label, 
  value, 
  onChange, 
  id, 
  placeholder = "", 
  type = "text",
  className = ""
}: InputWithLabelProps) {
  return (
    <div className="group relative w-full">
      <label
        htmlFor={id}
        className="origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-base text-gray-500 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-[#131F42] has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-[#131F42]"
      >
        <span className="inline-flex bg-white px-2">{label}</span>
      </label>
      <Input 
        id={id} 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`h-12 border-gray-200 focus:border-[#131F42] focus:ring-1 focus:ring-[#131F42] transition-colors text-base ${className}`}
      />
    </div>
  )
}

export { InputWithLabel } 