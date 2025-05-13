import React from 'react';

interface ArchitectureFeatureProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export const ArchitectureFeature: React.FC<ArchitectureFeatureProps> = ({ 
  title, 
  icon = "🔧", 
  children 
}) => {
  return (
    <div className="my-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
      <h3 className="text-xl font-bold mb-3 flex items-center">
        <span className="mr-2 text-2xl">{icon}</span>
        {title}
      </h3>
      <div className="pl-8 border-l-2 border-gray-300">
        {children}
      </div>
    </div>
  );
};