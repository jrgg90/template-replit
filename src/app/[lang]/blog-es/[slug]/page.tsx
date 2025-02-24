import { MainHeaderES } from '@/components/layout/MainHeaderES'
import { getPostBySlug } from '@/lib/blog'
import { markdownToHtml } from '@/lib/markdown'
import { BlogContent } from '@/components/blog/BlogContent'
import { FooterES } from "@/components/layout/FooterES"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Language } from "@/types"
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
    lang: Language
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <main className="min-h-screen bg-white">
      <MainHeaderES />
      
      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <Link
          href={`/${params.lang}/blog-es`}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Volver al blog</span>
        </Link>

        <BlogContent post={{ ...post, contentHtml }} />
      </article>

      <FooterES lang={params.lang} />
    </main>
  )
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Exbordia Blog`,
    description: post.excerpt,
  }
} 