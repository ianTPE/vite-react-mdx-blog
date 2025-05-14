import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  children: string;
  language?: string;
}

const copyToClipboard = (text: string) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = 'text' }) => {
  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => copyToClipboard(children)}
        style={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
        aria-label="Copy code"
      >
        📋
      </button>
      <SyntaxHighlighter language={language} style={oneDark} wrapLongLines>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
