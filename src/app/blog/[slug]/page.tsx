'use client'

import { BlogHeader } from '@/components/blog/BlogHeader'
import { samplePosts } from '@/lib/blog-data'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Clock, Share2, BookmarkPlus, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const post = samplePosts.find(p => p.slug === params.slug)

  // Encontrar posts relacionados basados en el tag
  const relatedPosts = samplePosts
    .filter(p => p.tag === post?.tag && p.id !== post?.id)
    .slice(0, 3)

  if (!post) {
    return null
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Volver al blog</span>
          </button>

          {/* Article */}
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-[400px] w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-8 lg:p-12">
              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-[#131F42]">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
                <h1 className="text-4xl font-medium text-[#131F42] mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center justify-between">
                  <time className="text-gray-500" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleShare}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartir
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <BookmarkPlus className="w-4 h-4 mr-2" />
                      Guardar
                    </Button>
                  </div>
                </div>
              </header>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#131F42] prose-a:text-blue-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-medium text-[#131F42] mb-8">
                Artículos relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-xl border border-gray-100 overflow-hidden 
                      hover:shadow-md transition-all duration-300">
                      <div className="relative h-48 w-full">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-[#131F42] mb-2 line-clamp-2 
                          group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <time dateTime={relatedPost.date}>
                            {formatDate(relatedPost.date)}
                          </time>
                          <span className="flex items-center">
                            Leer más
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter Subscription */}
          <section className="mt-16 bg-gradient-to-br from-[#131F42] to-[#1c2b5d] 
            rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-medium mb-4">
                ¿Te interesa exportar a Estados Unidos?
              </h2>
              <p className="text-gray-300 mb-8">
                Suscríbete a nuestro newsletter y recibe las últimas noticias, guías y consejos 
                para expandir tu negocio al mercado estadounidense.
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                    text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 
                    focus:ring-white/40"
                />
                <Button className="bg-white text-[#131F42] hover:bg-gray-100 px-6">
                  Suscribirse
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 