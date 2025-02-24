import { BlogPageClient } from "@/components/blog/blog-page-client"
import { getAllPosts } from "@/lib/blog"
import { Language } from "@/types"

interface BlogPageProps {
  params: {
    lang: Language
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Obtener todos los posts en español
  const posts = await getAllPosts('es')

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