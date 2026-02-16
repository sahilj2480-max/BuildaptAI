import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = "", 
  icon = false,
  size = 'md'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-navy-900 dark:bg-brand-600 hover:bg-navy-950 dark:hover:bg-brand-500 text-white shadow-lg shadow-navy-900/20 dark:shadow-brand-600/20 hover:shadow-xl hover:shadow-navy-900/40 dark:hover:shadow-brand-600/40 border border-transparent",
    secondary: "bg-white dark:bg-navy-800 text-navy-900 dark:text-white hover:bg-slate-50 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-navy-600",
    outline: "bg-transparent border border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-navy-600 hover:text-navy-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-navy-800",
    ghost: "bg-transparent text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${variant === 'primary' ? 'text-brand-200' : 'currentColor'}`} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedStyles}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`group ${combinedStyles}`}>
      {content}
    </button>
  );
};