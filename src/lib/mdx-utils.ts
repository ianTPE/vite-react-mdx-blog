import fs from 'fs';
import path from 'path';
import { ComponentType } from 'react';
import { ArticleMetadata, ArticleWithContent } from '../types/Article';
import componentRegistry from './component-registry';
import { getArticleMetadata } from '../content/articles/metadata';

// Path to MDX content
const ARTICLES_PATH = path.join(process.cwd(), 'src/content/articles');

/**
 * Load article content by slug
 */
export async function loadArticleContent(slug: string): Promise<ArticleWithContent | null> {
  try {
    // Dynamic import for the MDX content
    const Content = (await import(`../content/articles/${slug}/index.mdx`)).default;
    
    // Get metadata from centralized metadata file
    const metadata = getArticleMetadata(slug);
    
    // If metadata not found, return null
    if (!metadata) {
      console.error(`Metadata not found for article: ${slug}`);
      return null;
    }

    // Try to load article-specific components
    let components = {};
    try {
      components = (await import(`../content/articles/${slug}/components/index.ts`)).default;
      // Register components to the registry
      if (components) {
        componentRegistry.registerComponents(slug, components);
      }
    } catch (error) {
      // No custom components for this article
      console.info(`No custom components found for article: ${slug}`);
    }

    return {
      metadata,
      Content,
      components
    };
  } catch (error) {
    console.error(`Error loading article '${slug}':`, error);
    return null;
  }
}

/**
 * Get components for MDX
 */
export function getMDXComponents(slug: string, globalComponents: any = {}): Record<string, ComponentType<any>> {
  const articleComponents = componentRegistry.getComponents(slug);
  
  // Merge article-specific components with global components
  // Article components take precedence over global components if there's a naming conflict
  return {
    ...globalComponents,
    ...articleComponents
  };
}