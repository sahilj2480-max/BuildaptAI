import React from 'react';
import { Button } from '../components/Button';
import { Workflow, Bot, Database, BarChart3, MessageSquare, Zap, ArrowRight, Check } from 'lucide-react';

const detailedServices = [
  {
    id: 'workflow',
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect your disjointed apps into a single, cohesive ecosystem. We build invisible bridges between your software stack.",
    features: ["Zapier/Make.com Orchestration", "Custom API Integrations", "Slack/Teams Notifications", "Automated Financial Reconciliation"],
  },
  {
    id: 'chatbots',
    icon: Bot,
    title: "AI Assistants & Agents",
    description: "Deploy intelligent conversational agents that handle support, sales qualification, and appointment booking 24/7.",
    features: ["Natural Language Processing", "Omnichannel Support", "Smart Appointment Booking", "Knowledge Base RAG Systems"],
  },
  {
    id: 'crm',
    icon: Database,
    title: "CRM & Pipeline Systems",
    description: "Automate the entire sales lifecycle. Ensure every lead is captured, enriched, and nurtured without manual input.",
    features: ["Lead Scoring Algorithms", "HubSpot/Salesforce Architecture", "Automated Email Sequences", "Data Enrichment Pipelines"],
  },
  {
    id: 'data',
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Turn raw data into executive clarity. We build real-time dashboards that aggregate metrics from all your tools.",
    features: ["Looker/PowerBI Dashboards", "Cross-platform Aggregation", "Automated KPI Reporting", "Predictive Analytics"],
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-navy-950 min-h-screen transition-colors duration-300">
       <section className="bg-white dark:bg-navy-950 py-24 border-b border-slate-100 dark:border-navy-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-6">Our Capabilities</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We don't just "use AI". We engineer robust, enterprise-grade automation systems designed for reliability and scale.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {detailedServices.map((service, index) => (
            <div key={service.id} className={`flex flex-col gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-50 dark:bg-navy-800 border border-brand-100 dark:border-navy-700 mb-4 shadow-sm">
                        <service.icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-950 dark:text-white">{service.title}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.description}
                    </p>
                    
                    <div className="border-t border-slate-100 dark:border-navy-800 pt-6">
                        <h4 className="text-sm font-bold text-navy-900 dark:text-white uppercase tracking-wide mb-4">Key Features</h4>
                        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="pt-4">
                        <Button to="/contact" variant="outline">Consult on {service.title.split(' ')[0]}</Button>
                    </div>
                </div>
                
                {/* Visual Representation */}
                <div className="flex-1 w-full">
                    <div className="relative aspect-square md:aspect-[4/3] bg-slate-50 dark:bg-navy-900 rounded-2xl border border-slate-100 dark:border-navy-800 overflow-hidden group hover:shadow-2xl hover:shadow-brand-900/5 dark:hover:shadow-black/40 hover:border-brand-200 dark:hover:border-navy-600 hover:-translate-y-2 transition-all duration-500 cursor-default">
                        {/* Abstract Tech Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent dark:from-navy-800 opacity-50 dark:opacity-20 group-hover:opacity-70 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        
                        {/* Center Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand-500/20 dark:bg-brand-500/10 blur-3xl rounded-full group-hover:bg-brand-500/30 dark:group-hover:bg-brand-500/20 transition-all duration-500"></div>
                                <service.icon className="relative w-32 h-32 text-slate-200 dark:text-navy-700 group-hover:text-brand-600/40 dark:group-hover:text-brand-400/40 transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:-rotate-3" strokeWidth={1} />
                            </div>
                        </div>

                         {/* Floating Tag */}
                         <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/90 dark:bg-navy-800/90 backdrop-blur-md border border-slate-200 dark:border-navy-700 p-4 rounded-xl flex items-center justify-between shadow-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <span className="text-sm font-semibold text-navy-900 dark:text-white">Explore Implementation</span>
                                <div className="p-1.5 bg-navy-900 dark:bg-brand-600 rounded-lg group-hover:bg-brand-600 dark:group-hover:bg-brand-500 transition-colors duration-300">
                                    <ArrowRight className="w-3 h-3 text-white" />
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <section className="bg-navy-950 py-24 border-t border-navy-900">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Custom Enterprise Solutions</h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  Need something that doesn't exist yet? Our engineering team builds custom AI models and infrastructure for specific enterprise use cases.
              </p>
              <Button to="/contact" variant="primary" size="lg" className="bg-brand-600 hover:bg-brand-500 text-white border-transparent">
                Discuss Custom Infrastructure
              </Button>
          </div>
      </section>
    </div>
  );
};