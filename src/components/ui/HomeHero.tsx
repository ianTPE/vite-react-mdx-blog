import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
  return (
    <motion.section 
      className="relative mb-16 py-32 overflow-hidden rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </motion.div>
      
      {/* Content with staggered animations */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.div
          className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⚡ 使用 React v18.2.0、Vite v6.3.5 與 MDX v3.1.0 打造的現代化部落格
        </motion.div>
      
        <motion.h1 
          className="text-5xl sm:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Ian<span className="text-blue-300">'</span>s Vibe<br />
          <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Coding Blog
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          分享技術心得、開發經驗，以及生活中的點點滴滴。
          使用最新前端技術打造的現代化部落格。
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/articles"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg font-medium"
            >
              閱讀文章
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/about"
              className="inline-block bg-blue-800/40 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-blue-800/60 transition-colors shadow-lg text-lg font-medium"
            >
              關於作者
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeHero;