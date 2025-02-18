import { MainHeader } from '@/components/layout/MainHeader'
import { getPostBySlug } from '@/lib/blog'
import { markdownToHtml } from '@/lib/markdown'
import { BlogContent } from '@/components/blog/BlogContent'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function BlogPostPage({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <div className="min-h-screen bg-white">
      <MainHeader />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Volver al blog</span>
          </Link>

          <BlogContent post={{ ...post, contentHtml }} />

          {/* Newsletter Subscription */}
          <section className="mt-16 bg-gradient-to-br from-[#131F42] to-[#1c2b5d] 
            rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-medium mb-4">
                ¿Te interesa exportar a Estados Unidos?
              </h2>
              <p className="text-gray-300">
                Mándanos un correo electrónico a <a href="mailto:info@exbordia.com" className="text-white">info@exbordia.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 