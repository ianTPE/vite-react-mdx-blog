import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

// 处理不同格式的代码块输入
// 这个函数尝试从不同格式的输入中提取代码内容和语言
// 包括直接的代码字符串和已经经过 rehype 处理的 HTML 结构
const extractCodeAndLanguage = (children: React.ReactNode, className?: string): { code: string; language: string } => {
  let code = '';
  let language = '';
  
  // 情况1: 类名中包含语言信息
  if (className) {
    if (className.includes('language-')) {
      language = className.replace('language-', '');
    } else if (className.includes('hljs language-')) {
      language = className.replace('hljs language-', '');
    }
  }
  
  // 检查不同类型的输入
  if (typeof children === 'string') {
    // 情况2: 直接字符串
    code = children.trim();
  } else if (React.isValidElement(children)) {
    const childElement = children as React.ReactElement;
    
    // 情况3: 可能是已经包含 HTML 结构的 code 元素
    if (childElement.type === 'code' && childElement.props.children) {
      // 从 code 元素中提取内容
      if (typeof childElement.props.children === 'string') {
        code = childElement.props.children.trim();
      } else if (React.isValidElement(childElement.props.children)) {
        // 更深层次的嵌套结构
        code = React.Children.toArray(childElement.props.children)
          .map(child => (React.isValidElement(child) && child.props.children) || '')
          .join('')
          .trim();
      }
      
      // 从 code 元素获取语言
      if (!language && childElement.props.className) {
        if (childElement.props.className.includes('language-')) {
          language = childElement.props.className.replace('language-', '');
        } else if (childElement.props.className.includes('hljs language-')) {
          language = childElement.props.className.replace('hljs language-', '');
        }
      }
    } else {
      // 情况4: 其他复杂结构，尝试递归提取
      code = React.Children.toArray(childElement.props.children)
        .map(child => {
          if (typeof child === 'string') {
            return child;
          } else if (React.isValidElement(child)) {
            // 递归提取
            const { code: nestedCode } = extractCodeAndLanguage(child, '');
            return nestedCode;
          }
          return '';
        })
        .join('')
        .trim();
    }
  }
  
  return { code, language: language || 'text' };
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  // 提取代码和语言
  const { code, language } = extractCodeAndLanguage(children, className);
  
  // 如果没有代码，返回空元素
  if (!code) {
    console.warn('CodeBlock received empty code');
    return <pre>{children}</pre>;
  }
  
  return (
    <div className="my-4 rounded-md overflow-hidden">
      <div className="bg-gray-800 text-gray-200 px-4 py-1 text-sm flex justify-between items-center">
        <span>{language || 'text'}</span>
        <span className="text-xs text-gray-400">使用 prism-react-renderer</span>
      </div>
      <Highlight
        theme={themes.nightOwl}
        code={code}
        language={language}
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