import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">My MDX Blog</Link>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <a href="https://github.com/your-username/your-repo" className="hover:underline">GitHub</a>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
      </main>
      
      <footer className="bg-slate-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} My MDX Blog. Built with React, Vite, TypeScript, and MDX.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;