import React from 'react';
import { Button } from '../components/Button';
import { 
  Bot, 
  Workflow, 
  Database, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process orchestration."
  },
  {
    icon: Bot,
    title: "AI Assistants & Agents",
    description: "24/7 intelligent customer engagement."
  },
  {
    icon: Database,
    title: "CRM & Lead Systems",
    description: "Automated pipeline management."
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Real-time decision dashboards."
  },
  {
    icon: Zap,
    title: "Custom AI Infrastructure",
    description: "Proprietary models and tools."
  }
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-white dark:bg-navy-950 transition-colors duration-300">
        
        {/* Abstract Background Elements - Subtle Animation */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
            {/* Refined Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-25"></div>
            
            {/* Animated Glows */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-brand-400/5 dark:bg-brand-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute top-[10%] right-[-10%] w-[600px] h-[500px] bg-indigo-200/10 dark:bg-indigo-900/10 rounded-full blur-[100px] animate-float"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[500px] bg-sky-200/10 dark:bg-sky-900/10 rounded-full blur-[100px] animate-float [animation-delay:2s]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy-950 dark:text-white mb-8 animate-fade-in-up [animation-delay:200ms] leading-[1.1]">
            Building Scalable Systems <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 dark:from-brand-400 dark:via-brand-300 dark:to-indigo-400">for Businesses Adapting to AI.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            We build intelligent automations and scalable infrastructure that allow you to grow without chaos.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up [animation-delay:600ms]">
            <Button to="/contact" size="lg" className="w-full sm:w-auto min-w-[180px] shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30">Book a Strategy Call</Button>
            <Button to="/services" variant="secondary" size="lg" className="w-full sm:w-auto min-w-[180px]">Explore Services</Button>
          </div>
        </div>
      </section>

      {/* Services Section - Minimal Grid */}
      <section className="py-24 bg-slate-50/50 dark:bg-navy-900/50 border-y border-slate-100 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-3xl font-bold text-navy-950 dark:text-white mb-4">Core Capabilities</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                  Deploy specific modules to handle your most time-consuming operations.
                </p>
            </div>
            <Link to="/services" className="text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-700 dark:hover:text-brand-300 flex items-center gap-2 text-sm group">
                View Full Capabilities <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                to="/services" 
                key={index}
                className="group bg-white dark:bg-navy-900 p-8 rounded-xl border border-slate-200 dark:border-navy-800 hover:border-brand-200 dark:hover:border-brand-800 hover:shadow-card-hover dark:hover:shadow-none transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-navy-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-50 dark:group-hover:bg-navy-700 transition-colors">
                  <service.icon className="w-6 h-6 text-navy-700 dark:text-slate-200 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-navy-950 dark:text-white mb-2">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
            
            {/* 'View All' Card */}
             <Link 
                to="/services" 
                className="group bg-slate-100 dark:bg-navy-800 p-8 rounded-xl border border-transparent hover:bg-slate-200 dark:hover:bg-navy-700 transition-all duration-300 flex flex-col justify-center items-center text-center"
              >
                <div className="w-12 h-12 bg-white dark:bg-navy-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-navy-900 dark:text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 dark:text-white">View All Solutions</h3>
              </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-sm tracking-wide uppercase mb-6 justify-center">
                    <Layers className="w-4 h-4" />
                    Systematic Growth
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-6 leading-tight">
                    Don't just hire more people. <br/> Build better systems.
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                    The "Scale Paradox" kills growth: as you add more people to handle volume, complexity increases, and efficiency drops. We break this cycle by building intelligent infrastructure that scales infinitely at near-zero marginal cost.
                </p>
                
                <div className="space-y-4 max-w-lg mx-auto text-left mb-10">
                    {[
                        "Reduce operational overhead by 30-50%",
                        "Eliminate human error in critical data workflows",
                        "Free up key talent for strategic initiatives"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-navy-800">
                    <div className="flex gap-12 justify-center">
                        <div>
                            <div className="text-3xl font-bold text-navy-900 dark:text-white">15h+</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Saved Per Employee/Week</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-navy-900 dark:text-white">100%</div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Data Accuracy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section - Minimal Premium */}
      <section className="py-24 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-navy-950 dark:text-white mb-6">Ready to upgrade your business?</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                Schedule a consultation to discuss your operational bottlenecks and how we can solve them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button to="/contact" size="lg" className="shadow-xl shadow-brand-500/20">Book Strategy Call</Button>
                <Button to="/about" variant="outline" size="lg">Learn About Us</Button>
            </div>
        </div>
      </section>

    </div>
  );
};