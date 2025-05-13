import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  // 提取語言 (className 格式如 "language-javascript")
  const language = className ? className.replace('language-', '') : '';
  
  return (
    <div className="my-4 rounded-md overflow-hidden">
      <div className="bg-gray-800 text-gray-200 px-4 py-1 text-sm">
        {language || 'code'}
      </div>
      <pre className="bg-gray-900 p-4 overflow-auto text-gray-100">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
};