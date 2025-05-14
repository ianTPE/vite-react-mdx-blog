import fs from 'fs';
import path from 'path';

// 調試腳本：檢查所有文章的元數據

function debugArticles() {
  const articlesDir = path.resolve('src/content/articles');
  
  // 獲取所有文章目錄
  const articleFolders = fs.readdirSync(articlesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`找到 ${articleFolders.length} 個文章目錄:`, articleFolders);
  
  // 讀取每個文章的元數據
  articleFolders.forEach(folder => {
    const metadataPath = path.join(articlesDir, folder, 'metadata.ts');
    
    try {
      if (fs.existsSync(metadataPath)) {
        const content = fs.readFileSync(metadataPath, 'utf8');
        console.log(`\n--- ${folder} 的元數據 ---`);
        console.log(content);
        
        // 檢查是否有 published 字段
        if (!content.includes('published:')) {
          console.error(`⚠️ ${folder} 沒有 published 字段!`);
        } else if (content.includes('published: false')) {
          console.warn(`⚠️ ${folder} 的 published 設置為 false!`);
        }
        
        // 檢查是否有 export default
        if (!content.includes('export default')) {
          console.error(`⚠️ ${folder} 沒有導出元數據!`);
        }
      } else {
        console.error(`⚠️ ${folder} 沒有 metadata.ts 文件!`);
      }
    } catch (error) {
      console.error(`讀取 ${folder} 元數據時出錯:`, error);
    }
  });
}

debugArticles();
