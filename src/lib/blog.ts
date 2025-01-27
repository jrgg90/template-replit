import fs from 'node:fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  readingTime: string
  tag: string
  content: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

// Constantes para imágenes
export const BLOG_IMAGES_PATH = '/blog-images'

// Helper para construir rutas de imágenes
export function getBlogImagePath(imageName: string) {
  return `${BLOG_IMAGES_PATH}/${imageName}`
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.md$/, ''),
        content,
        ...(data as Omit<BlogPost, 'slug' | 'content'>)
      }
    })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      content,
      ...(data as Omit<BlogPost, 'slug' | 'content'>)
    }
  } catch {
    return null
  }
} 