// 詳細測試文章加載邏輯的腳本
import * as articleUtils from '../src/lib/article-utils';

async function testArticleLoading() {
  console.log('==== 測試文章列表加載 ====');
  
  // 加載所有文章
  const allArticles = articleUtils.getAllArticles();
  console.log(`加載到 ${allArticles.length} 篇文章:`);
  allArticles.forEach((article, index) => {
    console.log(`${index + 1}. ${article.title} (${article.slug}) - ${article.publishDate}`);
  });
  
  // 測試按 slug 加載文章
  console.log('\n==== 測試按 slug 加載文章 ====');
  
  // 所有要測試的 slug
  const slugsToTest = [
    'building-mdx-blog',
    'first-post', 
    'getting-started',
    'mdx-blog-setup',
    'react-vite-typescript-mdx-blog-architecture',
    'test-article'
  ];
  
  // 測試每個 slug
  for (const slug of slugsToTest) {
    console.log(`\n檢查 slug: "${slug}"`);
    try {
      const article = await articleUtils.getArticleBySlug(slug);
      if (article) {
        console.log(`✅ 成功載入文章: ${article.metadata.title}`);
        console.log(`   發布日期: ${article.metadata.publishDate}`);
        console.log(`   標籤: ${article.metadata.tags.join(', ')}`);
        console.log(`   已發布: ${article.metadata.published}`);
      } else {
        console.error(`❌ 找不到文章: ${slug}`);
      }
    } catch (error) {
      console.error(`❌ 載入文章失敗: ${slug}`);
      console.error(error);
    }
  }
}

// 運行測試
testArticleLoading().catch(console.error);
