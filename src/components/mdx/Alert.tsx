import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'error' | 'success';
}

export const Alert: React.FC<AlertProps> = ({ children, type = 'info' }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-500 text-blue-700',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
    error: 'bg-red-50 border-red-500 text-red-700',
    success: 'bg-green-50 border-green-500 text-green-700'
  };
  
  return (
    <div className={`border-l-4 p-4 my-4 ${styles[type]}`}>
      {children}
    </div>
  );
};