import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllArticles } from '@/lib/article-utils';
import { ArticleMetadata } from '@/types/Article';
import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/ui/ArticleCard';
import MotionContainer from '@/components/ui/MotionContainer';

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<ArticleMetadata[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  useEffect(() => {
    // 添加調試代碼
    console.log('Fetching articles...');
    const loadedArticles = getAllArticles();
    console.log('Loaded articles:', loadedArticles);
    console.log('Articles slugs:', loadedArticles.map(a => a.slug));
    setArticles(loadedArticles);
  }, []);

  // 獲取所有不重複的標籤
  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    articles.forEach(article => {
      article.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [articles]);

  // 過濾文章
  const filteredArticles = React.useMemo(() => {
    return articles.filter(article => {
      // 搜尋標題和摘要
      const matchesSearch = searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 根據標籤過濾
      const matchesTag = selectedTag === null || article.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [articles, searchTerm, selectedTag]);

  return (
    <Layout>
      <Helmet>
        <title>所有文章 | Ian's Vibe Coding Blog</title>
        <meta name="description" content="瀏覽所有技術文章，包括 React、Vite、TypeScript、MDX 等主題。" />
      </Helmet>
      
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">所有文章</h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* 搜尋框 */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="搜尋文章..."
                  className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="20" 
                  height="20" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
            </div>
            
            {/* 標籤過濾器 */}
            <div className="flex-1 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTag === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                全部
              </button>
              
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </header>
        
        {/* 文章列表 */}
        {filteredArticles.length > 0 ? (
          <div>
            <p className="text-gray-600 mb-8">{`找到 ${filteredArticles.length} 篇文章`}</p>
            
            <MotionContainer className="grid md:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </MotionContainer>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">未找到符合條件的文章</h2>
            <p className="text-gray-600 mb-8">請嘗試其他搜尋關鍵字或移除過濾條件</p>
            {searchTerm || selectedTag ? (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                清除所有過濾條件
              </button>
            ) : (
              <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                返回首頁
              </Link>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArticlesPage;