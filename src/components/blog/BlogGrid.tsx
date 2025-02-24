'use client'

import { BlogCard } from './BlogCard'
import { useSearchParams } from 'next/navigation'
import type { BlogPost } from '@/types/blog'
import { BlogPagination } from './BlogPagination'
import { useTranslation } from 'react-i18next'
import type { Language } from '@/types'

const POSTS_PER_PAGE = 9

interface BlogGridProps {
  posts: BlogPost[]
  lang: Language
}

export function BlogGrid({ posts, lang }: BlogGridProps) {
  const { t } = useTranslation('blog')
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('q')?.toLowerCase()
  const currentPage = Number(searchParams.get('page')) || 1
  
  // Filtrar posts
  let filteredPosts = posts

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
          {t('no_articles_found')}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <BlogCard 
            key={post.id} 
            post={post} 
            lang={lang}
          />
        ))}
      </div>

      <BlogPagination 
        totalPosts={filteredPosts.length} 
        postsPerPage={POSTS_PER_PAGE} 
      />
    </div>
  )
} 