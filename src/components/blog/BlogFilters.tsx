'use client'

import { BlogPost } from '@/types/blog'
import { cn } from '@/lib/utils'

interface BlogFiltersProps {
  posts: BlogPost[]
  selectedTag: string | null
  onTagSelect: (tag: string | null) => void
}

export function BlogFilters({ posts, selectedTag, onTagSelect }: BlogFiltersProps) {
  // Obtener tags únicos de los posts
  const tags = Array.from(new Set(posts.map(post => post.tag)))

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onTagSelect(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          selectedTag === null
            ? "bg-[#131F42] text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
      >
        Todos
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedTag === tag
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