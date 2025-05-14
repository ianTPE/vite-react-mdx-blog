import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from '@/pages/HomePage';
import ArticlesPage from '@/pages/ArticlesPage';
import ArticlePage from '@/pages/ArticlePage';
import AboutPage from '@/pages/AboutPage';
import Layout from '@/components/layout/Layout';

// Import MDX components directly
import YouTube from '@/components/mdx/YouTube';
import Tweet from '@/components/mdx/Tweet';
import { Alert } from '@/components/mdx/Alert';
import { CodeBlock } from '@/components/mdx/CodeBlock';

// Define global MDX components
const mdxComponents = {
  YouTube,
  Tweet,
  Alert,
  CodeBlock,
  // Add basic HTML element styling
  h1: (props: any) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mb-3 mt-6" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
};

function App() {
  // Log available components for debugging
  console.log('Available MDX components:', Object.keys(mdxComponents));
  console.log('YouTube component available:', !!mdxComponents.YouTube);
  console.log('Tweet component available:', !!mdxComponents.Tweet);

  return (
    <HelmetProvider>
      <MDXProvider components={mdxComponents}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={
              <Layout>
                <div className="max-w-3xl mx-auto py-8 text-center">
                  <h1 className="text-3xl font-bold mb-4">404 - 頁面不存在</h1>
                  <p className="mb-6">很抱歉，您要找的頁面不存在。</p>
                  <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    返回首頁
                  </Link>
                </div>
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </MDXProvider>
    </HelmetProvider>
  );
}

export default App;