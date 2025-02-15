'use client'

import { BlogPost } from '@/types/blog'
import { BlogCard } from './BlogCard'
import { useSearchParams } from 'next/navigation'
import { BlogPagination } from './BlogPagination'

const POSTS_PER_PAGE = 6

interface BlogGridProps {
  initialPosts: BlogPost[]
}

export function BlogGrid({ initialPosts }: BlogGridProps) {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('q')?.toLowerCase()
  const currentPage = Number(searchParams.get('page')) || 1
  
  // Filtrar posts
  let filteredPosts = initialPosts

  if (searchTerm) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm)
    )
  }

  // Paginar posts
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          No se encontraron artículos que coincidan con tu búsqueda
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <BlogPagination 
        totalPosts={filteredPosts.length} 
        postsPerPage={POSTS_PER_PAGE} 
      />
    </div>
  )
} 