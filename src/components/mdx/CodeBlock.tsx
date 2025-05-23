import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  // 提取語言 (className 格式如 "language-javascript")
  const language = className ? className.replace('language-', '') : '';
  
  // 处理 children 为字符串
  const code = String(children).trim();
  
  return (
    <div className="my-4 rounded-md overflow-hidden">
      <div className="bg-gray-800 text-gray-200 px-4 py-1 text-sm flex justify-between items-center">
        <span>{language || 'code'}</span>
        <span className="text-xs text-gray-400">使用 prism-react-renderer</span>
      </div>
      <Highlight
        theme={themes.nightOwl}
        code={code}
        language={language || 'text'}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} p-4 overflow-auto`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span className="inline-block w-8 text-right mr-4 text-gray-500 select-none">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};