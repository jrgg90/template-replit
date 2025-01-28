'use client'

import { Clock } from 'lucide-react'
import Image from 'next/image'

interface BlogContentProps {
  post: {
    title: string
    readingTime: string
    coverImage: string
    contentHtml: string
    tag: string
  }
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-8 lg:p-12">
        {/* Header */}
        <header className="mb-12">
          <span className="inline-block px-3 py-1 text-sm text-[#131F42] bg-blue-50 rounded-full mb-4">
            {post.tag}
          </span>
          <h1 className="text-4xl font-medium text-[#131F42] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none space-y-6
            prose-h1:text-3xl prose-h1:font-medium prose-h1:text-[#131F42] prose-h1:mb-8
            prose-h2:text-2xl prose-h2:font-medium prose-h2:text-[#131F42] prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:font-normal prose-h3:text-gray-700 prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-ul:my-4 prose-ul:pl-0 prose-ul:list-none
            prose-li:text-gray-600 prose-li:pl-0 prose-li:mb-2
            prose-li:before:content-['•'] prose-li:before:text-[#131F42] prose-li:before:mr-2 prose-li:before:inline-block
            prose-strong:text-gray-900 prose-strong:font-medium
            prose-blockquote:border-l-4 prose-blockquote:border-[#131F42]
            prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:my-6
            prose-blockquote:text-gray-600 prose-blockquote:italic
            prose-img:rounded-lg prose-img:w-full prose-img:my-8
            prose-img:shadow-md prose-img:border prose-img:border-gray-100
            [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  )
} 