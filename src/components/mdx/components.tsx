import React from 'react';
import { Alert } from './Alert';
import { CodeBlock } from './CodeBlock';
import YouTube from './YouTube';  // Import YouTube component
import Tweet from './Tweet';  // Import Tweet component

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
  
  // 特别重要：确保代码块组件正确映射
  pre: (props: any) => {
    // 检查是否是代码块
    const isCodeBlock = (
      props.children &&
      React.isValidElement(props.children) &&
      props.children.props &&
      props.children.props.className &&
      props.children.props.className.includes('language-')
    );
    
    if (isCodeBlock) {
      // 如果是代码块，提取代码内容和语言
      const { children, className } = props.children.props;
      return <CodeBlock className={className}>{children}</CodeBlock>;
    }
    
    // 如果不是代码块，使用默认渲染
    return <pre {...props} />;
  },
  
  // 不需要单独映射 code，因为已经在 pre 中处理了
  // code: (props: MDXComponentProps) => <code {...props} />,
};

export default mdxComponents;