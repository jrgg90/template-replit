const ProgressSteps = () => {
  const steps = [
    { name: 'Pre-exportación', status: 'current' },
    { name: 'Logística y Envío', status: 'upcoming' },
    { name: 'Operación', status: 'upcoming' },
  ]

  return (
    <div className="w-full">
      <nav aria-label="Progress">
        <ol className="grid grid-cols-3 gap-0">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className="relative"
            >
              {/* Connector Line */}
              {stepIdx !== steps.length - 1 && (
                <div 
                  className="absolute left-[calc(50%+20px)] top-[14px] w-[calc(100%-40px)] h-[1px] bg-gray-200"
                  aria-hidden="true"
                />
              )}

              {/* Step Content */}
              <div className="flex flex-col items-center relative">
                {/* Circle */}
                <span 
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs transition-colors
                    ${
                      step.status === 'current'
                        ? 'bg-[#131F42] text-white font-medium'
                        : 'bg-white border border-gray-200 text-gray-400'
                    }`}
                >
                  {stepIdx + 1}
                </span>

                {/* Label */}
                <span 
                  className={`mt-2 text-xs ${
                    step.status === 'current' 
                      ? 'text-[#131F42] font-medium' 
                      : 'text-gray-400 font-light'
                  }`}
                >
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

export default ProgressSteps 