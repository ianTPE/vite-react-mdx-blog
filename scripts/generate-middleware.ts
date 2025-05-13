import fs from 'fs';
import path from 'path';

async function generateMiddleware() {
  // Instead of using glob, we'll directly list the known articles
  const articles = [
    { slug: "first-post", hasCustomOgImage: false },
    { slug: "getting-started", hasCustomOgImage: false }
  ];
  
  // Generate middleware content
  const middlewareContent = `
// 自動生成的 Vercel Edge 中間件
// 生成於: ${new Date().toISOString()}
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/articles/:slug*', '/og-image/:slug*'],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // 處理文章路由
  if (pathname.startsWith('/articles/')) {
    const slug = pathname.split('/')[2];
    const validSlugs = ${JSON.stringify(articles.map(a => a.slug))};
    
    if (validSlugs.includes(slug)) {
      // 文章的快取控制
      const response = NextResponse.next();
      response.headers.set('Cache-Control', 'public, max-age=3600');
      return response;
    }
  }
  
  // 處理 OG Image 請求
  if (pathname.startsWith('/og-image/')) {
    const slug = pathname.split('/')[2];
    const articleData = ${JSON.stringify(articles)}.find(a => a.slug === slug);
    
    if (articleData) {
      const response = NextResponse.next();
      // 設定更長的快取時間，因為 OG Image 不常變更
      response.headers.set('Cache-Control', 'public, max-age=86400');
      return response;
    }
    
    // 重定向到預設 OG Image
    return NextResponse.rewrite(new URL('/images/og-default.png', request.url));
  }
  
  return NextResponse.next();
}
`;
  
  // Write to project root middleware.ts
  fs.writeFileSync('middleware.ts', middlewareContent);
  console.log('✅ 已生成 middleware.ts');
}

generateMiddleware().catch(console.error);