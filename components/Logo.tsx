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
      {/* Monogram Icon */}
      <div className="relative w-9 h-9 flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
        <svg 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
        >
          {/* Background Shape */}
          <rect width="36" height="36" rx="8" fill="url(#logo_gradient)" />
          
          {/* Geometric Monogram (B + A Integration) */}
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M9 5H21L27 10V15L22 18L27 21V26L23 31H9V5ZM14 10H19L22 12.5L19 15H14V10ZM14 26L18 20L22 26H14Z" 
            fill="white"
          />
          
          <defs>
            <linearGradient id="logo_gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" /> {/* Brand 500 - Brighter for futuristic feel */}
              <stop offset="1" stopColor="#0f172a" /> {/* Navy 900 */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark */}
      <div className={`flex items-baseline tracking-tight transition-all duration-300 group-hover:-translate-y-0.5 ${textColor}`}>
        <span className="font-display font-bold text-xl transition-colors duration-300">Buildapt</span>
        <span className={`font-display font-semibold text-xl ml-0.5 transition-colors duration-300 ${highlightColor}`}>AI</span>
      </div>
    </Link>
  );
};