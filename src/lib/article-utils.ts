import { ArticleMetadata, ArticleWithContent } from '@/types/Article';
import { createComponentRegistry } from './component-registry';

// 使用 Vite 的 import.meta.glob 動態導入
const metadataModules = import.meta.glob('../content/articles/*/metadata.ts', { eager: true });
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
  const articles: ArticleMetadata[] = [];
  
  // 打印所有可用的元數據模組路徑
  console.log('Available metadata module paths:', Object.keys(metadataModules));
  
  for (const path in metadataModules) {
    const module = metadataModules[path] as { default: ArticleMetadata };
    console.log(`Processing path: ${path}, metadata:`, module.default);
    if (module.default && module.default.published) {
      articles.push(module.default);
    } else {
      console.log(`Skipping article at ${path} - not published or no default export`);
    }
  }
  
  // 按日期排序，最新的優先
  return articles.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

// 根據 slug 載入特定文章
export async function getArticleBySlug(slug: string): Promise<ArticleWithContent | null> {
  // 尋找此 slug 對應的元數據路徑
  const metadataPath = Object.keys(metadataModules).find(
    path => path.includes(`/${slug}/metadata.ts`)
  );
  
  if (!metadataPath) return null;
  
  // 獲取元數據
  const metadata = (metadataModules[metadataPath] as { default: ArticleMetadata }).default;
  
  // 載入 MDX 內容
  const contentPath = metadataPath.replace('metadata.ts', 'index.mdx');
  const ContentModule = await contentModules[contentPath]();
  
  // 載入該文章的專屬組件 (如果有)
  const componentsPath = metadataPath.replace('metadata.ts', 'components/index.ts');
  let articleComponents = {};
  
  try {
    if (componentModules[componentsPath]) {
      const componentsModule = await componentModules[componentsPath]();
      articleComponents = componentsModule.default || {};
    }
  } catch (error) {
    console.warn(`Failed to load components for article "${slug}"`, error);
  }
  
  // 建立組件註冊表，結合全局組件和文章專屬組件
  const globalComponents = getGlobalComponents();
  const components = createComponentRegistry(globalComponents, articleComponents);
  
  return {
    metadata,
    Content: ContentModule.default,
    components
  };
}

// 獲取文章的 OG Image URL
export function getArticleOgImage(article: ArticleMetadata): string {
  if (article.ogImage) {
    return `/content/articles/${article.slug}/${article.ogImage}`;
  }
  return '/images/og-default.png'; // 預設 OG Image
}