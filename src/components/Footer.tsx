import React from 'react';
import * as LucideIcons from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="gradient-text">Hrushitha</span>
            </a>
            <p className="text-gray-400 mt-2">
              Data Scientist & AI Researcher
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = (LucideIcons as any)[link.icon.charAt(0).toUpperCase() + link.icon.slice(1)];
              
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-card rounded-full hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-navy-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Hrushitha Goud Tigulla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;