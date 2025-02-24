'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import type { BlogPost } from '@/types/blog'
import type { Language } from '@/types'

interface BlogCardProps {
  post: BlogPost
  lang: Language
}

export function BlogCard({ post, lang }: BlogCardProps) {
  const blogPath = lang === 'es' ? 'blog-es' : 'blog-en'
  
  return (
    <Link href={`/${lang}/${blogPath}/${post.slug}`}>
      <article className="group h-[420px] flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        {/* Image Container - Fixed Height */}
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Container - Fixed Padding & Height */}
        <div className="flex flex-col flex-1 p-6">
          {/* Tag */}
          <span className="inline-block px-3 py-1 text-sm text-[#131F42] bg-blue-50 rounded-full mb-3 w-fit">
            {post.tag}
          </span>

          {/* Title - Limited to 2 lines */}
          <h3 className="text-lg font-medium text-[#131F42] mb-2 line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt - Limited to 3 lines */}
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Reading Time - Fixed at Bottom */}
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-auto">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
} 