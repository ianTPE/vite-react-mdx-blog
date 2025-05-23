import { ArticleMetadata, ArticleWithContent } from '@/types/Article';
import { createComponentRegistry } from './component-registry';
import { getAllPublishedArticles, getArticleMetadata } from '../content/articles/metadata';

// 使用 Vite 的 import.meta.glob 動態導入
const contentModules = import.meta.glob('../content/articles/*/index.mdx');
const componentModules = import.meta.glob('../content/articles/*/components/index.ts');
const globalComponentsModule = import.meta.glob('../components/mdx/components.tsx', { eager: true });

// 獲取全局組件
const getGlobalComponents = () => {
  const globalComponentsPath = Object.keys(globalComponentsModule)[0];
  if (globalComponentsPath) {
    return (globalComponentsModule[globalComponentsPath] as any).default || {};
  }
  return {};
};

// 獲取所有文章元數據 (用於文章列表)
export function getAllArticles() {
  // 使用集中式元數據文件中的函數
  return getAllPublishedArticles();
}

// 根據 slug 載入特定文章
export async function getArticleBySlug(slug: string): Promise<ArticleWithContent | null> {
  // 從集中式元數據文件獲取元數據
  const metadata = getArticleMetadata(slug);
  
  if (!metadata) return null;
  
  // 載入 MDX 內容
  const contentPath = `../content/articles/${slug}/index.mdx`;
  console.log('Loading MDX content from:', contentPath);
  
  // 檢查路徑是否存在於 contentModules 中
  if (!contentModules[contentPath]) {
    console.error(`MDX content not found for article: ${slug}`);
    return null;
  }
  
  const ContentModule = await contentModules[contentPath]();
  
  // 載入該文章的專屬組件 (如果有)
  const componentsPath = `../content/articles/${slug}/components/index.ts`;
  let articleComponents = {};
  
  try {
    if (componentModules[componentsPath]) {
      const componentsModule = await componentModules[componentsPath]();
      articleComponents = componentsModule.default || {};
      console.log('Loaded article-specific components:', Object.keys(articleComponents));
    }
  } catch (error) {
    console.warn(`Failed to load components for article "${slug}"`, error);
  }
  
  // Return the article data without combining components
  // This lets the ArticlePage handle component merging with our global MDX provider
  return {
    metadata,
    Content: ContentModule.default,
    components: articleComponents
  };
}

// 獲取文章的 OG Image URL
export function getArticleOgImage(article: ArticleMetadata): string {
  if (article.ogImage) {
    return `/content/articles/${article.slug}/${article.ogImage}`;
  }
  return '/images/og-default.png'; // 預設 OG Image
}