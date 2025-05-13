import { ArticleMetadata } from '@/types/Article';

const metadata: ArticleMetadata = {
  title: '測試文章',
  description: '這是一篇測試文章，用於驗證自動生成文章列表功能',
  slug: 'test-article',
  publishDate: '2025-05-14',
  lastUpdated: '2025-05-14',
  author: {
    name: '測試作者',
    avatar: '/images/avatars/default.png'
  },
  tags: ['測試', 'MDX'],
  published: true
};

export default metadata;
