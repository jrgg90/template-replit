'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'
import { formatDate } from '@/lib/utils'
import { Clock } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden 
        hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-[#131F42]">
              {post.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-xl font-medium text-[#131F42] mb-3 group-hover:text-[#1c2b5d] 
            transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>
          
          {/* Metadata */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
} 