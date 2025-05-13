import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleMetadata } from '@/types/Article';
import MotionCard from './MotionCard';

interface FeaturedPostProps {
  post: ArticleMetadata;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
      {post.coverImage ? (
        <div className="md:w-2/5 relative">
          <div className="h-72 md:h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.coverImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </div>
        </div>
      ) : null}
      
      <div className={`p-8 md:p-10 flex flex-col ${post.coverImage ? 'md:w-3/5' : 'w-full'}`}>
        <div className="flex gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <Link to={`/articles/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-700 mb-6 text-lg line-clamp-3">
          {post.summary}
        </p>
        
        <div className="flex items-center mt-auto">
          <div className="mr-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              I
            </div>
          </div>
          <div>
            <div className="font-medium">Ian</div>
            <time dateTime={post.publishDate} className="text-gray-500 text-sm">
              {new Date(post.publishDate).toLocaleDateString('zh-TW', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <Link 
            to={`/articles/${post.slug}`}
            className="ml-auto inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            閱讀文章 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;