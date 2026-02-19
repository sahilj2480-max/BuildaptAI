import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-navy-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mt-2">
              Empowering US & global businesses with intelligent automation. We turn repetitive tasks into scalable systems.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/20">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/20">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            {/* Added Horizontal Line for separation */}
            <div className="w-full h-px bg-navy-800/50 mt-8 md:hidden"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 font-display">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-brand-400 transition-all text-sm hover:translate-x-1 inline-block duration-200">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-400 transition-all text-sm hover:translate-x-1 inline-block duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-400 transition-all text-sm hover:translate-x-1 inline-block duration-200">Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-400 transition-all text-sm hover:translate-x-1 inline-block duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 font-display">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-all text-sm hover:translate-x-1 inline-block duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-all text-sm hover:translate-x-1 inline-block duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-all text-sm hover:translate-x-1 inline-block duration-200">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 font-display">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-sm text-slate-400 group cursor-default">
                <div className="p-2 bg-navy-900 rounded-lg group-hover:bg-brand-600/20 group-hover:text-brand-400 transition-colors">
                    <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                </div>
                <span className="mt-1 group-hover:text-white transition-colors">hello@buildapt.ai</span>
              </li>
              <li className="flex items-start gap-4 text-sm text-slate-400 group cursor-default">
                <div className="p-2 bg-navy-900 rounded-lg group-hover:bg-brand-600/20 group-hover:text-brand-400 transition-colors">
                    <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                </div>
                <span className="mt-1 group-hover:text-white transition-colors">
                  Maharashtra, India<br />
                  <span className="text-slate-500 text-xs group-hover:text-slate-400">Serving US & Global Clients</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Buildapt AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-3 py-1 bg-navy-900 rounded-full border border-navy-800 hover:border-brand-900 transition-colors">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-400 text-xs font-medium">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};