import { InputHTMLAttributes } from 'react'

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const InputWithLabel = ({
  id,
  label,
  value,
  onChange,
  error,
  className = '',
  ...props
}: InputWithLabelProps) => {
  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className={`w-full h-12 px-4 border rounded-lg transition-colors
          ${error ? 'border-red-500' : 'border-gray-300'}
          focus:outline-none focus:ring-2 focus:ring-[#131F42] focus:border-transparent`}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 -top-2.5 bg-white px-1 text-sm transition-all
          ${error ? 'text-red-500' : 'text-gray-500'}`}
      >
        {label}
      </label>
    </div>
  )
} 