'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'
import { Clock } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          {/* Tag */}
          <span className="inline-block px-3 py-1 text-sm text-[#131F42] bg-blue-50 rounded-full mb-4">
            {post.tag}
          </span>

          {/* Title */}
          <h3 className="text-xl font-medium text-[#131F42] mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Reading Time */}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
} 