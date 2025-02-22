"use client"

import { MainHeader } from "@/components/layout/MainHeader"
import { useTranslation } from "@/app/i18n/client"

interface BlogPageProps {
  params: {
    lang: string
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const { t } = useTranslation('blog')
  
  return (
    <main className="min-h-screen bg-white">
      <MainHeader lang={params.lang} />
      
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          {t('description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <article className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {t('posts.post1.title')}
            </h2>
            <p className="text-gray-600">
              {t('posts.post1.description')}
            </p>
          </article>
          {/* ... más posts */}
        </div>
      </section>
    </main>
  )
} 