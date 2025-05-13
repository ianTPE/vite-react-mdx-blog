import React from 'react';
import { motion } from 'framer-motion';

interface TechStackIconProps {
  name: string;
  version: string;
  icon: React.ReactNode;
  color: string;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ name, version, icon, color }) => {
  return (
    <motion.div
      className="h-full" 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
        <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${color} flex items-center justify-center p-2`}>
          <div className="text-white text-2xl">{icon}</div>
        </div>
        <div className="font-semibold">{name}</div>
        <div className="text-gray-500 text-sm">{version}</div>
      </div>
    </motion.div>
  );
};

export default TechStackIcon;