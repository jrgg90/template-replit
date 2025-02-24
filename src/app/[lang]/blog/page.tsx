import { BlogPageClient } from "@/components/blog/blog-page-client"
import { getAllPosts } from "@/lib/blog"
import { Language } from "@/types"

interface BlogPageProps {
  params: {
    lang: Language
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const posts = await getAllPosts(params.lang)

  return (
    <BlogPageClient 
      initialPosts={posts}
      lang={params.lang}
    />
  )
} 