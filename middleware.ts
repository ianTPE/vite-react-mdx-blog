// 自動生成的 Vercel Edge 中間件
// 生成於: 2025-05-13T00:00:00.000Z
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
    const validSlugs = ["first-post", "getting-started"];
    
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
    const articleData = [
      {"slug":"first-post","hasCustomOgImage":false}, 
      {"slug":"getting-started","hasCustomOgImage":false}
    ].find(a => a.slug === slug);
    
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