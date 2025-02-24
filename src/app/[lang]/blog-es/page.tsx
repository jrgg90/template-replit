import { BlogPageClient } from "@/components/blog/blog-page-client"
import { getAllPosts } from "@/lib/blog"
import { Language } from "@/types"
import { notFound } from 'next/navigation'

interface BlogPageProps {
  params: {
    lang: Language
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Verificar que estamos en la ruta correcta y que existen posts
  const posts = await getAllPosts('es')
  
  if (!posts || posts.length === 0) {
    console.log('No se encontraron posts')
  }

  return (
    <BlogPageClient 
      initialPosts={posts}
      lang={params.lang}
    />
  )
}

export const metadata = {
  title: 'Blog | Exbordia',
  description: 'Descubre las últimas tendencias, consejos y mejores prácticas para expandir tu negocio al mercado global.',
} 