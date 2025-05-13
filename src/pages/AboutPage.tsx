import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>關於 | Ian's Vibe Coding Blog</title>
        <meta name="description" content="關於 Ian 和這個部落格的故事、宗旨和技術棧。" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 頁面標題 */}
        <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          關於這個部落格
        </h1>
        
        {/* 作者介紹 */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex p-0">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
  <img
    src="/images/author.png"
    alt="Ian 作者大頭照"
    className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-lg"
  />
</div>
            </div>
            
            <div className="p-8 md:p-12 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">嗨，我是 Ian 👋</h2>
              <p className="text-gray-700 mb-6 text-lg">
                我是一位充滿熱情的全端開發者，喜歡探索和分享最新的網頁技術。擁有超過十年的開發經驗，專注於 React 生態系統和現代化前端架構。
              </p>
              
              <p className="text-gray-700 mb-8">
                在這個部落格，我將分享我在開發過程中的心得、經驗和技巧，希望能幫助到更多的開發者。無論是實用的程式碼片段、深入的技術探討，還是開發過程中的思考，這裡都會有所涉及。
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ianTPE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                
                <a 
                  href="mailto:ian@wo94.top" 
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  聯絡我
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* 部落格宗旨 */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">部落格宗旨</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">分享知識</h3>
                  <p className="text-gray-700">提供深入而實用的技術內容，從基礎概念到高級技巧，幫助開發者提升技能。</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">探索創新</h3>
                  <p className="text-gray-700">緊跟前端技術發展，探索新工具和最佳實踐，提供第一手的實戰經驗。</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">建立社群</h3>
                  <p className="text-gray-700">創建一個友善的學習環境，鼓勵讀者參與討論和分享，共同成長。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 技術棧 */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">本站技術棧</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚛️</div>
                  <div>
                    <h3 className="text-lg font-semibold">React 18</h3>
                    <p className="text-gray-700">
                      最新版本的 React 框架，利用 Hooks、Concurrent Mode 和 Suspense 等特性提升性能和開發體驗。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h3 className="text-lg font-semibold">Vite 4</h3>
                    <p className="text-gray-700">
                      下一代前端構建工具，提供快速的開發環境和高效的構建過程。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📄</div>
                  <div>
                    <h3 className="text-lg font-semibold">MDX</h3>
                    <p className="text-gray-700">
                      結合 Markdown 和 JSX 的強大文件格式，允許在文章中嵌入互動式 React 組件。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌊</div>
                  <div>
                    <h3 className="text-lg font-semibold">Tailwind CSS</h3>
                    <p className="text-gray-700">
                      實用優先的 CSS 框架，提供高度可定制的設計系統，快速構建現代化 UI。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎭</div>
                  <div>
                    <h3 className="text-lg font-semibold">Framer Motion</h3>
                    <p className="text-gray-700">
                      功能強大的 React 動畫庫，提供直觀的 API 來創建流暢的界面動畫。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔷</div>
                  <div>
                    <h3 className="text-lg font-semibold">TypeScript</h3>
                    <p className="text-gray-700">
                      JavaScript 的超集，添加了靜態類型系統，提高代碼質量和開發效率。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 聯絡信息 */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">有問題或建議？</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            無論是技術問題、合作提案還是部落格內容建議，我都非常歡迎你的回饋和想法。
          </p>
          
          <div className="inline-block">
            <a 
              href="mailto:ian@wo94.top" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center text-lg font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              聯絡我
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;