import React from 'react';

interface DemoCardProps {
  title: string;
  children: React.ReactNode;
}

export const DemoCard: React.FC<DemoCardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-lg p-4 mb-6 bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};