import React from 'react';
import { Alert } from './Alert';
import { CodeBlock } from './CodeBlock';
import Tweet from './Tweet'; // 導入新的 Tweet 組件

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
