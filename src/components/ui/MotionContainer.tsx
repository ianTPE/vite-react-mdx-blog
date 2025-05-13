import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const MotionContainer: React.FC<MotionContainerProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;