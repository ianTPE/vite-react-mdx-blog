import React, { createElement } from 'react';
/**
 * 組件註冊管理器 - 實現組件優先級和回退機制
 */
export const createComponentRegistry = (
  globalComponents: Record<string, React.ComponentType<any>> = {},
  localComponents: Record<string, React.ComponentType<any>> = {}
) => {
  // 合併全局組件和局部組件，優先使用局部組件
  const registry = { ...globalComponents, ...localComponents };
  
  // 錯誤處理組件
  const FallbackComponent = ({ name, ...props }: { name: string, [key: string]: any }) => {
    console.warn(`Component "${name}" not found. Please check if it's registered.`);
    return createElement('div', { 
      style: { 
        border: '1px solid #ff6b6b',
        background: '#fff0f0', 
        padding: '8px 12px',
        borderRadius: '4px'
      }
    }, `組件 "${name}" 未找到`);
  };
  
  // 代理組件查找，實現更好的錯誤處理
  return new Proxy(registry, {
    get: (target, prop: string) => {
      return target[prop] || ((props: any) => createElement(FallbackComponent, { name: prop, ...props }));
    }
  });
};