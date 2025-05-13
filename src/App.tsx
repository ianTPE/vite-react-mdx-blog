import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from '@/pages/HomePage';
import ArticlePage from '@/pages/ArticlePage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="*" element={<div>404 - 頁面不存在</div>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;