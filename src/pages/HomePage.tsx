import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllArticles } from '@/lib/article-utils';
import { ArticleMetadata } from '@/types/Article';
import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/ui/ArticleCard';
import HomeHero from '@/components/ui/HomeHero';
import FeaturedPost from '@/components/ui/FeaturedPost';
import TechStackIcon from '@/components/ui/TechStackIcon';
import NewsletterSignup from '@/components/ui/NewsletterSignup';
import MotionContainer from '@/components/ui/MotionContainer';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<ArticleMetadata[]>([]);
  
  useEffect(() => {
    const loadedArticles = getAllArticles();
    setArticles(loadedArticles);
  }, []);

  const recentArticles = articles.slice(0, 3); // 取最新3篇
  const featuredArticle = articles.length > 0 ? articles[0] : null; // 首篇为精选文章
  
  return (
    <Layout>
      <Helmet>
        <title>Ian's Vibe Coding Blog</title>
        <meta name="description" content="分享技術心得、開發經驗，以及生活中的點點滴滴。使用 React 和 MDX 構建的現代化部落格。" />
      </Helmet>
      
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero 區塊 */}
        <HomeHero />
        
        {/* 精選文章區塊 */}
        {featuredArticle && (
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">精選文章</h2>
            </div>
            <FeaturedPost post={featuredArticle} />
          </section>
        )}
        
        {/* 最新文章區塊 */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">最新文章</h2>
            <Link 
              to="/articles" 
              className="text-blue-600 hover:text-blue-800 font-medium group flex items-center"
            >
              查看所有文章 
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
            </Link>
          </div>
          
          {recentArticles.length > 0 ? (
            <MotionContainer className="grid md:grid-cols-3 gap-8">
              {recentArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </MotionContainer>
          ) : (
            <p className="text-gray-600 text-center py-12">目前還沒有文章。待續！</p>
          )}
        </section>
        
        {/* 技術棧區塊 */}
        <section className="mb-16 py-12 bg-gray-50 rounded-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">技術棧</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">本部落格使用以下現代化前端技術構建</p>
          </div>
          <MotionContainer className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4" delay={0.3}>
            <TechStackIcon 
              name="React" 
              version="v18" 
              icon="⚛" 
              color="bg-blue-500"
            />
            <TechStackIcon 
              name="Vite" 
              version="v4" 
              icon="⚡" 
              color="bg-purple-600"
            />
            <TechStackIcon 
              name="TypeScript" 
              version="v5" 
              icon="TS" 
              color="bg-blue-700"
            />
            <TechStackIcon 
              name="Tailwind" 
              version="v3" 
              icon="🌊" 
              color="bg-teal-500"
            />
            <TechStackIcon 
              name="MDX" 
              version="v2" 
              icon="📄" 
              color="bg-yellow-500"
            />
          </MotionContainer>
        </section>
        
        {/* 訂閱區塊 */}
        <section className="mb-16">
          <NewsletterSignup />
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;