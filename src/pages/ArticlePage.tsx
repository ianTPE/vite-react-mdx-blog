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
        <title>{metadata.title} | My MDX Blog</title>
        <meta name="description" content={metadata.summary} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.summary} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <article className="max-w-3xl mx-auto prose lg:prose-xl">
        <h1>{metadata.title}</h1>
        <div className="text-sm text-gray-500 mb-8">
          <time dateTime={metadata.publishDate}>
            {new Date(metadata.publishDate).toLocaleDateString('zh-TW')}
          </time>
          <div className="mt-2">
            {metadata.tags.map(tag => (
              <span key={tag} className="mr-2 inline-block px-2 py-1 bg-gray-100 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </article>
    </Layout>
  );
};

export default ArticlePage;