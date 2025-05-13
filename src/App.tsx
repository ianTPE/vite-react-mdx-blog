import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from '@/pages/HomePage';
import ArticlePage from '@/pages/ArticlePage';
import Layout from '@/components/layout/Layout';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
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
    </HelmetProvider>
  );
}

export default App;