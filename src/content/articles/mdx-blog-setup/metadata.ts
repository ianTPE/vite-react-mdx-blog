import { ArticleMetadata } from '@/types/Article';

const metadata: ArticleMetadata = {
  title: '使用 MDX 建立部落格',
  slug: 'mdx-blog-setup',
  publishDate: '2024-05-11',
  lastUpdated: '2024-05-11',
  summary: '了解如何整合 MDX 到 React 專案中，讓您可以在 Markdown 中使用 React 組件，打造互動性更高的博客內容。',
  tags: ['MDX', 'Next.js', 'Blog'],
  published: true,
  coverImage: '/images/mdx-blog-setup.jpg',
  // Optional: override default OG image with a post-specific one
  // ogImage: '/first-post/og-image.png',
  author: {
    name: 'Ian Chou',
    avatar: '/images/avatars/default.png'
  },
};
