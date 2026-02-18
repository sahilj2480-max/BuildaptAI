import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Default to Dark Mode (true) if no local storage preference exists
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Default to dark
    }
    return true;
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-100 dark:border-navy-800 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 px-1 py-1 ${
                  location.pathname === item.path 
                    ? 'text-brand-600 dark:text-brand-400 drop-shadow-[0_0_12px_rgba(14,165,233,0.5)]' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle - Removed white border, added soft background */}
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/50 hover:bg-slate-200/80 dark:bg-navy-800/50 dark:hover:bg-navy-700/80 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 active:scale-95 active:rotate-12 backdrop-blur-sm"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button to="/contact" variant="primary" size="sm" className="rounded-full px-6 shadow-lg shadow-brand-500/20">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button 
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100/50 hover:bg-slate-200/80 dark:bg-navy-800/50 dark:hover:bg-navy-700/80 text-slate-500 dark:text-slate-400 transition-all"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy-950 border-b border-slate-100 dark:border-navy-800 animate-fade-in absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  location.pathname === item.path
                    ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-900 hover:text-navy-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button to="/contact" variant="primary" className="w-full justify-center">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};