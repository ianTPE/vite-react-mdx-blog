import { ArticleMetadata } from '@/types/Article';

// 每篇文章的元數據
export const articlesMetadata: Record<string, ArticleMetadata> = {
  // 建置 MDX 部落格指南
  'building-mdx-blog': {
    title: '完整建置指南：React + Vite + TypeScript + MDX 部落格',
    slug: 'building-mdx-blog',
    publishDate: '2025-05-13',
    summary: '從零開始，學習如何使用 React、Vite、TypeScript 和 MDX 建立現代化的部落格系統，無需 YAML frontmatter，避免 SSR 問題。',
    tags: ['React', 'Vite', 'TypeScript', 'MDX', '教學'],
    published: true,
    coverImage: '/images/building-mdx-blog.jpg',
    author: {
      name: 'Ian Chou',
      avatar: '/images/avatars/default.png'
    },
  },
  
  // 第一篇文章
  'first-post': {
    title: 'My First Blog Post',
    slug: 'first-post',
    publishDate: '2025-05-13',
    lastUpdated: '2025-05-13',
    summary: 'An introduction to my new blog built with Vite, React, and MDX.',
    tags: ['react', 'vite', 'mdx', 'typescript'],
    published: true,
    coverImage: '/images/first-post.jpg',
    author: {
      name: 'Ian Chou',
      avatar: '/images/avatars/default.png'
    },
  },
  
  // 開始使用 MDX
  'getting-started': {
    title: '開始使用 MDX 建立部落格',
    slug: 'getting-started',
    publishDate: '2025-05-13',
    summary: '學習如何使用 React + Vite + TypeScript + MDX 建立現代化的部落格',
    tags: ['react', 'vite', 'mdx', '教學'],
    published: true,
    coverImage: '/images/getting-started.jpg',
    author: {
      name: 'Ian Chou',
      avatar: '/images/avatars/default.png'
    },
  },
  
  // MDX 部落格設置
  'mdx-blog-setup': {
    title: '使用 MDX 建立部落格',
    slug: 'mdx-blog-setup',
    publishDate: '2025-05-11',
    lastUpdated: '2025-05-11',
    summary: '了解如何整合 MDX 到 Vite 和 React 專案中，讓您可以在 Markdown 中使用 React 組件。',
    tags: ['MDX', 'Vite', 'React', 'Blog'],
    published: true,
    coverImage: '/images/mdx-blog-setup.jpg',
    author: {
      name: 'Ian Chou',
      avatar: '/images/avatars/default.png'
    },
  },
  
  // 部落格架構
  'react-vite-typescript-mdx-blog-architecture': {
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
  },
  
  // 測試文章
  'test-article': {
    title: '測試文章',
    summary: '這是一篇測試文章，用於驗證自動生成文章列表功能',
    slug: 'test-article',
    publishDate: '2025-05-14',
    lastUpdated: '2025-05-14',
    author: {
      name: 'Ian Chou',
      avatar: '/images/avatars/default.png'
    },
    tags: ['測試', 'MDX'],
    published: true
  },
};

// 輔助函數：根據 slug 獲取文章元數據
export function getArticleMetadata(slug: string): ArticleMetadata | null {
  return articlesMetadata[slug] || null;
}

// 獲取所有已發布的文章元數據列表
export function getAllPublishedArticles(): ArticleMetadata[] {
  return Object.values(articlesMetadata)
    .filter(article => article.published)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}
