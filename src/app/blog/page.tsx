import { BlogPageClient } from '@/components/blog/blog-page-client'
import { getAllPosts } from '@/lib/blog'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return <BlogPageClient initialPosts={posts} />
} 