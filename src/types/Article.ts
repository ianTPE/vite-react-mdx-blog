import { ComponentType } from 'react';

export interface ArticleMetadata {
  title: string;
  slug: string;
  publishDate: string;
  lastUpdated?: string;
  summary: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
  ogImage?: string;
}

export interface ArticleWithContent {
  metadata: ArticleMetadata;
  Content: ComponentType;
  components: Record<string, ComponentType<any>>;
}