import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { 
      sanitize: false // Permite HTML en el markdown
    })
    .use(remarkGfm) // Soporte para tablas y otras características
    .process(markdown)
  
  return result.toString()
} 