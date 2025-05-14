import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleMetadata } from '@/types/Article';
import MotionCard from './MotionCard';

interface ArticleCardProps {
  article: ArticleMetadata;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <MotionCard className="h-full">
      <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        {article.coverImage && (
          <div className="relative">
            <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${article.coverImage})` }}>
            </div>
            <div className="absolute top-0 right-0 mt-3 mr-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {article.tags[0] || "文章"}
              </span>
            </div>
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">
            <Link to={`/articles/${article.slug}`} className="hover:text-blue-600">
              {article.title}
            </Link>
          </h2>
          <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">{article.summary}</p>
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src={article.author?.avatar || "/images/avatars/default.png"} 
                alt={article.author?.name || "Author"} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 如果圖片加載失敗，顯示備用的文字頭像
                  const target = e.target as HTMLElement;
                  const initials = article.author?.name?.charAt(0) || "A";
                  target.outerHTML = `<div class="w-full h-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">${initials}</div>`;
                }}
              />
            </div>
            <div className="ml-2">
              <span className="text-sm text-gray-800">{article.author?.name || "匿名作者"}</span>
              <time dateTime={article.publishDate} className="text-xs text-gray-500 block">
                {new Date(article.publishDate).toLocaleDateString('zh-TW', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            </div>
            <Link 
              to={`/articles/${article.slug}`}
              className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              閱讀 →
            </Link>
          </div>
        </div>
      </article>
    </MotionCard>
  );
};

export default ArticleCard;