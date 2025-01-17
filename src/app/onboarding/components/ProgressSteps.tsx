const ProgressSteps = () => {
  const steps = [
    { name: 'Pre-exportación', status: 'current' },
    { name: 'Logística y Envío', status: 'upcoming' },
    { name: 'Operación', status: 'upcoming' },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <nav aria-label="Progress">
        <ol className="flex items-center justify-between">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={`relative ${
                stepIdx !== steps.length - 1 ? 'w-full' : ''
              }`}
            >
              {stepIdx !== steps.length - 1 && (
                <div
                  className="absolute top-4 left-0 -ml-px mt-0.5 w-full h-[1px] bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-center group">
                <span className="h-9 flex items-center">
                  <span
                    className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full text-sm font-light transition-colors
                      ${
                        step.status === 'current'
                          ? 'bg-[#131F42] text-white'
                          : 'bg-white border-2 border-gray-200 text-gray-400'
                      }`}
                  >
                    {stepIdx + 1}
                  </span>
                </span>
                <span className="ml-4 min-w-0 flex flex-col">
                  <span className={`text-sm font-light ${
                    step.status === 'current' ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
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