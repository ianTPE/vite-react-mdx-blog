import React from 'react';
import { Alert } from './Alert';
import { CodeBlock } from './CodeBlock';

// YouTube 組件
interface YouTubeProps {
  id: string;
  title?: string;
}

const YouTube: React.FC<YouTubeProps> = ({ id, title = 'YouTube video' }) => {
  return (
    <div style={{ aspectRatio: '16/9', margin: '24px 0' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Tweet 組件
interface TweetProps {
  id: string;
}

const Tweet: React.FC<TweetProps> = ({ id }) => {
  return (
    <div 
      style={{ 
        border: '1px solid #e1e8ed', 
        borderRadius: '12px', 
        padding: '16px', 
        margin: '16px 0',
        maxWidth: '550px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          background: '#1DA1F2', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          marginRight: '8px'
        }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </svg>
        </div>
        <span style={{ fontWeight: 'bold' }}>Tweet {id}</span>
      </div>
      <p style={{ color: '#657786' }}>
        This is a placeholder for Twitter embed. In a real app, you would use the Twitter API or embed to display the actual tweet content.
      </p>
      <div style={{ fontSize: '14px', color: '#657786', marginTop: '8px' }}>
        <a 
          href={`https://twitter.com/twitter/status/${id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#1DA1F2', textDecoration: 'none' }}
        >
          View on Twitter
        </a>
      </div>
    </div>
  );
};

// Details 組件
interface DetailsProps {
  summary: string;
  children: React.ReactNode;
  open?: boolean;
}

const Details: React.FC<DetailsProps> = ({ summary, children, open = false }) => (
  <details open={open} style={{ margin: '16px 0', borderRadius: 4, background: '#f8fafc', padding: '8px 12px' }}>
    <summary style={{ cursor: 'pointer', fontWeight: 500 }}>{summary}</summary>
    <div style={{ marginTop: 8 }}>{children}</div>
  </details>
);

// Define types for MDX components
type MDXComponentProps = React.HTMLAttributes<HTMLElement>;

// Create MDX components
const mdxComponents = {
  Alert,
  CodeBlock,
  YouTube,
  Tweet,
  Details,
  
  // Custom HTML element wrappers
  h1: (props: MDXComponentProps) => React.createElement("h1", { className: "text-3xl font-bold mb-4", ...props }),
  h2: (props: MDXComponentProps) => React.createElement("h2", { className: "text-2xl font-bold mb-3 mt-6", ...props }),
  a: (props: MDXComponentProps) => React.createElement("a", { className: "text-blue-600 hover:underline", ...props }),
};

export default mdxComponents;
