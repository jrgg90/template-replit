export const handleError = (error: unknown, context: string) => {
  console.error(`Error in ${context}:`, error)
  // Add any error reporting service here
} 