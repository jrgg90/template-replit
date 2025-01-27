import path from 'node:path'
import matter from 'gray-matter'
import * as fs from 'node:fs'

// Definir la interfaz para los posts
interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  readingTime: string
  content: string
  tag: string
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // Leer el directorio de posts de forma síncrona
    const fileNames = fs.readdirSync(postsDirectory)
    
    // Leer cada archivo y procesar su contenido
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        id,
        slug: id,
        content: matterResult.content,
        ...(matterResult.data as Omit<BlogPost, 'id' | 'slug' | 'content'>)
      }
    })

    // Ordenar posts por fecha
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
} 