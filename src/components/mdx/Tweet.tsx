import React, { useEffect, useRef } from 'react';

// Tweet 組件 - 使用官方 Twitter 嵌入腳本
interface TweetProps {
  id: string;
}

const Tweet: React.FC<TweetProps> = ({ id }) => {
  const tweetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 確保只在客戶端運行
    if (typeof window !== 'undefined' && tweetRef.current) {
      // 清空容器，以防重新渲染
      tweetRef.current.innerHTML = '';
      
      // 創建 tweet 容器
      const tweetContainer = document.createElement('div');
      tweetRef.current.appendChild(tweetContainer);
      
      // 加載 Twitter widget 腳本
      if (!(window as any).twttr) {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        script.setAttribute('async', 'true');
        script.onload = () => {
          renderTweet(tweetContainer, id);
        };
        document.head.appendChild(script);
      } else {
        renderTweet(tweetContainer, id);
      }
    }
    
    // 重要：監聽腳本是否已載入完畢的備用方法
    const checkInterval = setInterval(() => {
      if ((window as any).twttr && (window as any).twttr.widgets) {
        console.log("Twitter widgets script found, attempting to render again");
        if (tweetRef.current) {
          const existingTweet = tweetRef.current.querySelector('twitter-widget');
          if (!existingTweet) {
            const containers = tweetRef.current.querySelectorAll('div');
            if (containers.length > 0) {
              renderTweet(containers[containers.length - 1], id);
            }
          }
        }
        clearInterval(checkInterval);
      }
    }, 1000);
    
    return () => {
      clearInterval(checkInterval);
    };
  }, [id]);

  // 渲染 tweet 的函數
  const renderTweet = (container: HTMLElement, tweetId: string) => {
    const twttr = (window as any).twttr;
    if (twttr && twttr.widgets) {
      console.log(`Rendering tweet ${tweetId}...`);
      twttr.widgets.createTweet(
        tweetId,
        container,
        {
          theme: 'light',
          lang: 'zh-tw',
          dnt: true,
          conversation: 'none' // 不顯示對話內容
        }
      ).then((el: any) => {
        console.log(`Tweet ${tweetId} has been rendered`, el);
      }).catch((error: any) => {
        console.error('Failed to render tweet:', error);
        // 顯示後備內容
        showFallbackContent(container, tweetId);
      });
    } else {
      console.warn('Twitter widgets are not available yet');
      // Twitter 小工具腳本沒有加載，顯示後備內容
      showFallbackContent(container, tweetId);
    }
  };

  // 當 Tweet 嵌入失敗時顯示的後備內容
  const showFallbackContent = (container: HTMLElement, tweetId: string) => {
    container.innerHTML = `
      <div style="
        border: 2px solid #1DA1F2; 
        border-radius: 12px; 
        padding: 16px; 
        margin: 24px 0;
        max-width: 550px;
        background-color: #f8f9fa;
      ">
        <p>無法載入 Tweet (ID: ${tweetId}).</p>
        <a 
          href="https://twitter.com/twitter/status/${tweetId}" 
          target="_blank"
          rel="noopener noreferrer"
          style="
            color: white; 
            background: #1DA1F2;
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 14px;
            text-decoration: none;
            display: inline-block;
          "
        >
          直接查看 Tweet
        </a>
      </div>
    `;
  };

  return (
    <div ref={tweetRef} className="tweet-container my-6 flex justify-center">
      <div className="max-w-xl w-full">
        {/* Tweet 將在此處渲染 */}
        {/* 加載中顯示的內容 */}
        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          border: '1px solid #eee',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9' 
        }}>
          載入 Tweet 中...
        </div>
      </div>
    </div>
  );
};

export default Tweet;