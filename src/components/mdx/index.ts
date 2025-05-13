import { Alert } from './Alert';
import { CodeBlock } from './CodeBlock';

// 導出全局 MDX 組件
export default {
  Alert,
  CodeBlock,
  // 可增加更多全局組件...
  
  // 覆寫原生 HTML 元素
  h1: (props: any) => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mb-3 mt-6" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
};