'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { samplePosts } from '@/lib/blog-data'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export function BlogFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTag = searchParams.get('tag')

  // Obtener tags únicos de los posts
  const tags = Array.from(new Set(samplePosts.map(post => post.tag)))

  const handleTagClick = (tag: string) => {
    if (currentTag === tag) {
      router.push('/blog')
    } else {
      router.push(`/blog?tag=${encodeURIComponent(tag)}`)
    }
  }

  const clearFilters = () => {
    router.push('/blog')
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <button
        onClick={clearFilters}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2",
          !currentTag
            ? "bg-[#131F42] text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
      >
        Todos
        {currentTag && <X className="w-4 h-4" />}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            currentTag === tag
              ? "bg-[#131F42] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  )
} 