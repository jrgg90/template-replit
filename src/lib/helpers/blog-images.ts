import { BLOG_IMAGE_NAMING } from '../constants/blog-images'

export function getBlogImagePath(name: string) {
  return `/blog-images/${name}`
}

export function createBlogImageName(topic: string, type: keyof typeof BLOG_IMAGE_NAMING.TYPES) {
  return `${topic}-${BLOG_IMAGE_NAMING.TYPES[type]}.jpg`
}

// Uso:
// const heroImage = createBlogImageName('marketplaces', 'HERO')
// const imagePath = getBlogImagePath(heroImage)
// -> /blog-images/marketplaces-hero.jpg 