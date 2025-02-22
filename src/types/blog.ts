export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string
  readingTime: string
  tag: string
  content: string
  language: string
  date: string
  author: string
  metadata?: {
    author: string
    date: string
    tags: string[]
  }
} 