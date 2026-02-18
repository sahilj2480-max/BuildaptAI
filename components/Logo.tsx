import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const textColor = variant === 'light' 
    ? 'text-white group-hover:text-brand-100' 
    : 'text-navy-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400';
  
  const highlightColor = 'text-brand-600 dark:text-brand-500 group-hover:text-brand-500 dark:group-hover:text-brand-400';

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Image */}
      <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
        <img 
            src="/logo.png" 
            alt="Buildapt AI" 
            className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Wordmark */}
      <div className={`flex items-baseline tracking-tight transition-all duration-300 group-hover:-translate-y-0.5 ${textColor}`}>
        <span className="font-display font-bold text-xl transition-colors duration-300">Buildapt</span>
        <span className={`font-display font-semibold text-xl ml-0.5 transition-colors duration-300 ${highlightColor}`}>AI</span>
      </div>
    </Link>
  );
};