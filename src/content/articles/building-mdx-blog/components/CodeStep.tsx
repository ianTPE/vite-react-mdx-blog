import React from 'react';

interface CodeStepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export const CodeStep: React.FC<CodeStepProps> = ({ number, title, children }) => {
  return (
    <div className="my-8 border-l-4 border-blue-500 pl-4">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
          {number}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};