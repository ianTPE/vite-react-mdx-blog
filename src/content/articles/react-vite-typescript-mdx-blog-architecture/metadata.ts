import { ArticleMetadata } from '@/types/Article';

const metadata: ArticleMetadata = {
  title: 'React + Vite + TypeScript + MDX 部落格架構',
  slug: 'react-vite-typescript-mdx-blog-architecture',
  publishDate: '2025-05-13',
  summary: '探討基於 React、Vite、TypeScript 和 MDX 的現代部落格架構，不使用 frontmatter、避免 SSR 問題，並提供局部 MDX 組件與自動化中間件生成。',
  tags: ['React', 'Vite', 'TypeScript', 'MDX', '架構設計'],
  published: true,
  coverImage: '/images/react-vite-typescript-mdx-blog-architecture.jpg',
  author: {
    name: 'Ian Chou',
    avatar: '/images/avatars/default.png'
  },
};

export default metadata;