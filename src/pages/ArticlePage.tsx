import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleBySlug, getArticleOgImage } from '@/lib/article-utils';
import { MDXProvider } from '@mdx-js/react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    async function loadArticle() {
      setLoading(true);
      if (!slug) return;
      
      try {
        const articleData = await getArticleBySlug(slug);
        if (!articleData) {
          navigate('/404', { replace: true });
          return;
        }
        setArticle(articleData);
      } catch (error) {
        console.error('Error loading article:', error);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    }
    
    loadArticle();
  }, [slug, navigate]);
  
  if (loading) return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8">載入中...</div>
    </Layout>
  );
  
  if (!article) return (
    <Layout>
      <div className="max-w-3xl mx-auto py-8">找不到文章</div>
    </Layout>
  );
  
  const { metadata, Content, components } = article;
  const ogImageUrl = getArticleOgImage(metadata);
  
  return (
    <Layout>
      <Helmet>
        <title>{metadata.title} | Ian's Vibe Coding Blog</title>
        <meta name="description" content={metadata.summary} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.summary} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <article className="max-w-4xl mx-auto pt-10 pb-12">
        {/* 文章標題 */}
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        
        {/* 文章信息 */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
            <img 
              src="/images/author.png" 
              alt="Ian" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.outerHTML = `<div class="w-full h-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">I</div>`;
              }}
            />
          </div>
          <div>
            <div className="font-medium">Ian</div>
            <time dateTime={metadata.publishDate} className="text-gray-500 text-sm">
              {new Date(metadata.publishDate).toLocaleDateString('zh-TW', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="ml-auto flex gap-2">
            {metadata.tags.map(tag => (
              <span key={tag} className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* 封面圖片 */}
        {metadata.coverImage && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={metadata.coverImage} 
              alt={metadata.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        {/* 提示信息 */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
          <p className="text-blue-700">
            這篇指南適用於已經熟悉 React 和 TypeScript 的開發者，如果您是新手，建議先了解基础知識。
          </p>
        </div>
        
        {/* 文章內容 */}
        <div className="article-content">
          <div className="prose lg:prose-xl w-full">
            <MDXProvider components={components}>
              <Content />
            </MDXProvider>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticlePage;