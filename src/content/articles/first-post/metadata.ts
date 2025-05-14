import { ArticleMetadata } from '@/types/Article';

const metadata: ArticleMetadata = {
  title: 'My First Blog Post',
  slug: 'first-post',
  publishDate: '2025-05-13',
  lastUpdated: '2025-05-13',
  summary: 'An introduction to my new blog built with Vite, React, and MDX.',
  tags: ['react', 'vite', 'mdx', 'typescript'],
  published: true,
  coverImage: '/images/first-post.jpg',
  // Optional: override default OG image with a post-specific one
  // ogImage: '/first-post/og-image.png',
  author: {
    name: 'Ian Chou',
    avatar: '/images/avatars/default.png'
  },
};

export default metadata;