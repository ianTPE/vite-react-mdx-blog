import React from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '@/lib/article-utils';
import Layout from '@/components/layout/Layout';
import { ArticleMetadata } from '@/types/Article';

const HomePage: React.FC = () => {
  const [articles, setArticles] = React.useState<ArticleMetadata[]>([]);
  
  React.useEffect(() => {
    const loadedArticles = getAllArticles();
    setArticles(loadedArticles);
  }, []);
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">最新文章</h1>
        
        <div className="space-y-8">
          {articles.length === 0 ? (
            <p>尚無發布的文章</p>
          ) : (
            articles.map((article) => (
              <article key={article.slug} className="border-b pb-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link 
                    to={`/articles/${article.slug}`} 
                    className="hover:text-blue-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-500 mb-3">
                  {new Date(article.publishDate).toLocaleDateString('zh-TW')} • 
                  {article.tags.map(tag => (
                    <span key={tag} className="ml-2 inline-block px-2 py-1 bg-gray-100 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{article.summary}</p>
                <Link 
                  to={`/articles/${article.slug}`} 
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  閱讀更多 →
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;