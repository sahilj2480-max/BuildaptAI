import React from 'react';
import { Button } from '../components/Button';
import { Target, Lightbulb, Users, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-navy-950 min-h-screen transition-colors duration-300">
      
      {/* Header */}
      <section className="bg-slate-50 dark:bg-navy-900 py-20 border-b border-slate-200 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">Building the Future of Work</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We exist to liberate human potential from repetitive tasks. By automating the mundane, we empower businesses to focus on innovation and connection.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="p-8 bg-white dark:bg-navy-900 border border-slate-100 dark:border-navy-800 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-navy-800 rounded-lg flex items-center justify-center mb-6">
                        <Target className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Our Mission</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        To accelerate digital transformation for service businesses and startups by making enterprise-grade automation accessible, reliable, and scalable.
                    </p>
                </div>
                <div className="p-8 bg-white dark:bg-navy-900 border border-slate-100 dark:border-navy-800 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-indigo-50 dark:bg-navy-800 rounded-lg flex items-center justify-center mb-6">
                        <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Our Vision</h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        A world where every business, regardless of size, runs on intelligent systems that self-optimize, allowing founders to focus purely on vision and strategy.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white">Our Core Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: ShieldCheck, title: "Trust First", desc: "We handle sensitive data with military-grade security and transparency." },
                    { icon: Lightbulb, title: "Innovation", desc: "We don't just follow trends; we build systems that stay ahead of the curve." },
                    { icon: Users, title: "Client Success", desc: "We treat your business like our own. Your ROI is our only KPI." },
                    { icon: Target, title: "Precision", desc: "Automation requires exactness. We measure twice and cut once." }
                ].map((val, i) => (
                    <div key={i} className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white dark:bg-navy-800 rounded-full flex items-center justify-center shadow-sm mb-4">
                            <val.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                        </div>
                        <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2">{val.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{val.desc}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy-900 dark:bg-navy-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-8 items-center border border-navy-800 dark:border-navy-700">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-slate-700 rounded-full overflow-hidden border-4 border-navy-700 dark:border-navy-600">
                    <img src="https://picsum.photos/400/400?grayscale" alt="Founder" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Message from the Team</h2>
                    <p className="text-slate-300 italic mb-6 leading-relaxed">
                        "We started Buildapt AI because we saw brilliant founders getting buried in spreadsheets. We knew there was a better way. Today, we're proud to be the engineering backbone for some of the fastest-growing companies in the US and India."
                    </p>
                    <div className="font-semibold text-brand-400">The Buildapt Leadership</div>
                </div>
            </div>
          </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy-950 text-center transition-colors duration-300">
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">Ready to work with us?</h2>
          <Button to="/contact" size="lg" icon>Get in Touch</Button>
      </section>
    </div>
  );
};