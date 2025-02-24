import { BlogPageClientEN } from "@/components/blog/blog-page-client-en"
import { getAllPosts } from "@/lib/blog"
import { Language } from "@/types"
import { notFound } from 'next/navigation'

interface BlogPageProps {
  params: {
    lang: Language
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Remover el filtro de idioma para mostrar todos los posts
  const posts = await getAllPosts()
  
  if (!posts || posts.length === 0) {
    console.log('No posts found')
  }

  return (
    <BlogPageClientEN
      initialPosts={posts}
      lang={params.lang}
    />
  )
}

export const metadata = {
  title: 'Blog | Exbordia',
  description: 'Discover the latest trends, tips and best practices to expand your business to the global market.',
} 