import React from 'react';
import { Alert } from './Alert';
import { CodeBlock } from './CodeBlock';

// Define types for MDX components
type MDXComponentProps = React.HTMLAttributes<HTMLElement>;

// Create MDX components
const mdxComponents = {
  Alert,
  CodeBlock,
  
  // Custom HTML element wrappers
  h1: (props: MDXComponentProps) => React.createElement("h1", { className: "text-3xl font-bold mb-4", ...props }),
  h2: (props: MDXComponentProps) => React.createElement("h2", { className: "text-2xl font-bold mb-3 mt-6", ...props }),
  a: (props: MDXComponentProps) => React.createElement("a", { className: "text-blue-600 hover:underline", ...props }),
};

export default mdxComponents;