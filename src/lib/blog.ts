import fs from 'node:fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

// Constantes para imágenes
export const BLOG_IMAGES_PATH = '/blog-images'

// Helper para construir rutas de imágenes
export function getBlogImagePath(imageName: string) {
  return `${BLOG_IMAGES_PATH}/${imageName}`
}

export async function getAllPosts(lang: string = 'es'): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id: fileName.replace(/\.md$/, ''),
        slug: fileName.replace(/\.md$/, ''),
        content,
        title: data.title,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        readingTime: data.readingTime,
        tag: data.tag,
        language: data.language || 'es',
        date: data.date || '',
        author: data.author || 'Equipo Exbordia',
        metadata: {
          author: data.author || 'Equipo Exbordia',
          date: data.date || '',
          tags: data.tags || []
        },
        translations: data.translations || {}
      }
    })
    .filter(post => post.language === lang)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      id: slug,
      slug,
      content,
      title: data.title,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      readingTime: data.readingTime,
      tag: data.tag,
      language: data.language || 'es',
      date: data.date || '',
      author: data.author || 'Equipo Exbordia',
      metadata: {
        author: data.author || 'Equipo Exbordia',
        date: data.date || '',
        tags: data.tags || []
      }
    }
  } catch {
    return null
  }
} 