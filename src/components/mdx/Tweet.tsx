import React, { useEffect, useRef } from 'react';

interface TweetProps {
  id: string;
}

export default function Tweet({ id }: TweetProps) {
  const tweetRef = useRef<HTMLDivElement>(null);
  const [error, setError] = React.useState(false);
  
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined' || !tweetRef.current) return;
    
    // Clear any existing content
    if (tweetRef.current) {
      tweetRef.current.innerHTML = '';
    }
    
    // Function to render the tweet
    const renderTweet = () => {
      if (!tweetRef.current) return;
      
      const twttr = (window as any).twttr;
      if (twttr && twttr.widgets) {
        console.log(`Rendering tweet ${id}...`);
        
        twttr.widgets.createTweet(id, tweetRef.current, {
          theme: 'light',
          dnt: true,
        })
        .then((el: any) => {
          if (el) {
            console.log('Tweet rendered successfully');
          } else {
            console.error('Failed to render tweet');
            setError(true);
          }
        })
        .catch((err: any) => {
          console.error('Error rendering tweet:', err);
          setError(true);
        });
      } else {
        console.log('Twitter widgets not available, loading script...');
      }
    };
    
    // Check if Twitter widgets script already exists
    if ((window as any).twttr && (window as any).twttr.widgets) {
      renderTweet();
    } else {
      // Load Twitter widgets script
      const script = document.createElement('script');
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      script.setAttribute('async', 'true');
      script.onload = renderTweet;
      document.head.appendChild(script);
    }
    
    // Additional fallback - retry after a delay
    const timeoutId = setTimeout(() => {
      if (tweetRef.current && !tweetRef.current.querySelector('twitter-widget')) {
        console.log('Tweet not rendered after timeout, retrying...');
        renderTweet();
      }
    }, 3000);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [id]);
  
  if (error) {
    return (
      <div className="my-6 border rounded-lg border-blue-300 p-4 bg-blue-50">
        <p>無法載入推文 (ID: {id})</p>
        <a
          href={`https://twitter.com/twitter/status/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          在 Twitter 上查看
        </a>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center my-6">
      <div 
        ref={tweetRef} 
        className="max-w-xl w-full bg-gray-50 rounded-lg p-4 flex items-center justify-center min-h-[150px]"
      >
        <p className="text-gray-500">載入推文中...</p>
      </div>
    </div>
  );
}