import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import path from 'path';
import { execSync } from 'child_process';

// 自訂插件：監視文章目錄並在需要時重新生成文章列表
function articleWatcher() {
  return {
    name: 'article-watcher',
    buildStart() {
      // 在構建開始時生成文章列表
      console.log('🔄 重新生成文章列表...');
      execSync('npm run generate-articles', { stdio: 'inherit' });
    },
    configureServer(server) {
      // 監視文章目錄的變化
      const articlesDir = path.resolve('src/content/articles');
      
      server.watcher.add(articlesDir);
      
      server.watcher.on('addDir', (filePath) => {
        if (filePath.includes(articlesDir) && filePath.split(path.sep).length === path.resolve(articlesDir).split(path.sep).length + 1) {
          console.log('🔍 檢測到新的文章目錄:', path.basename(filePath));
          // 重新生成文章列表
          execSync('npm run generate-articles', { stdio: 'inherit' });
          // 通知客戶端重新加載
          server.ws.send({ type: 'full-reload' });
        }
      });
      
      server.watcher.on('unlinkDir', (filePath) => {
        if (filePath.includes(articlesDir) && filePath.split(path.sep).length === path.resolve(articlesDir).split(path.sep).length + 1) {
          console.log('🧹 檢測到文章目錄被刪除:', path.basename(filePath));
          // 重新生成文章列表
          execSync('npm run generate-articles', { stdio: 'inherit' });
          // 通知客戶端重新加載
          server.ws.send({ type: 'full-reload' });
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [
    articleWatcher(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight, rehypeSlug],
      providerImportSource: '@mdx-js/react',
      jsxImportSource: 'react', // Add JSX import source
      development: process.env.NODE_ENV !== 'production', // Enable development mode for better error messages
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['@mdx-js/react', 'react', 'react-dom'],
  },
  server: {
    watch: {
      usePolling: true, // Improve file watching in some environments
    },
    hmr: {
      overlay: true, // Show errors on screen
    },
  },
});