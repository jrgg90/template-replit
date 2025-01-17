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
                  className="absolute top-4 left-0 -ml-px mt-0.5 w-full h-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex items-center group">
                <span className="h-9 flex items-center">
                  <span
                    className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full ${
                      step.status === 'current'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {stepIdx + 1}
                  </span>
                </span>
                <span className="ml-4 min-w-0 flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
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