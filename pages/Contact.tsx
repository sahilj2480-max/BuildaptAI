import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Mail, MapPin, Clock, Shield, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  website?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.website.trim()) {
       const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
       if (!urlPattern.test(formData.website)) {
           newErrors.website = 'Please enter a valid URL';
       }
    }

    if (!formData.message.trim()) newErrors.message = 'Please tell us about your automation needs';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validate()) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', website: '', message: '' });
      setErrors({});
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      
      {/* Header */}
      <section className="bg-navy-950 py-20 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 font-display italic">Let's Build Something Great</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Schedule a free consultation to see how we can save you time and money. We typically respond within 2 hours during business days.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-20">
        <div className="bg-white dark:bg-navy-900 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-12 border border-slate-100 dark:border-navy-800 transition-colors duration-300">
            
            {/* Contact Info Sidebar */}
            <div className="md:col-span-5 bg-navy-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-10 font-display">Contact Information</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <Mail className="w-6 h-6 text-brand-400" />
                            </div>
                            <div>
                                <p className="text-xs text-brand-200 uppercase tracking-widest font-bold mb-1">Email</p>
                                <p className="font-medium text-lg">hello@buildapt.ai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <MapPin className="w-6 h-6 text-brand-400" />
                            </div>
                            <div>
                                <p className="text-xs text-brand-200 uppercase tracking-widest font-bold mb-1">HQ Location</p>
                                <p className="font-medium text-lg leading-relaxed">Maharashtra, India</p>
                                <p className="text-slate-400 text-sm mt-1">Serving clients globally (US & APAC)</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-5">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <Clock className="w-6 h-6 text-brand-400" />
                            </div>
                            <div>
                                <p className="text-xs text-brand-200 uppercase tracking-widest font-bold mb-1">Business Hours</p>
                                <p className="font-medium text-lg">Mon - Fri, 9am - 6pm EST</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 relative z-10">
                    <div className="p-6 bg-navy-800/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-2">
                             <Shield className="w-5 h-5 text-green-400" />
                             <span className="font-bold text-white">Privacy Guarantee</span>
                        </div>
                        <p className="text-sm text-slate-400">Your data is safe with us. We sign NDAs before every project kickoff.</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7 p-12 bg-white dark:bg-navy-900 transition-colors duration-300">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold text-navy-950 dark:text-white mb-2 font-display">Send us a message</h3>
                    <p className="text-slate-500 dark:text-slate-400">Fill out the form below and our team will get back to you.</p>
                </div>

                {isSuccess ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Message Sent!</h4>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                            Thank you for reaching out. A member of our team will review your inquiry and get back to you within 24 hours.
                        </p>
                        <button 
                            onClick={() => setIsSuccess(false)}
                            className="mt-8 text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-700 dark:hover:text-brand-300 underline"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 dark:bg-navy-800 dark:text-white focus:bg-white dark:focus:bg-navy-900 outline-none transition-all ${errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 dark:border-navy-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10'}`} 
                                    placeholder="John" 
                                />
                                {errors.firstName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.firstName}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 dark:bg-navy-800 dark:text-white focus:bg-white dark:focus:bg-navy-900 outline-none transition-all ${errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 dark:border-navy-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10'}`} 
                                    placeholder="Doe" 
                                />
                                {errors.lastName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.lastName}</p>}
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Email <span className="text-red-500">*</span></label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 dark:bg-navy-800 dark:text-white focus:bg-white dark:focus:bg-navy-900 outline-none transition-all ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 dark:border-navy-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10'}`} 
                                placeholder="john@company.com" 
                            />
                            {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Company Website</label>
                            <input 
                                type="url" 
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 dark:bg-navy-800 dark:text-white focus:bg-white dark:focus:bg-navy-900 outline-none transition-all ${errors.website ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 dark:border-navy-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10'}`} 
                                placeholder="company.com" 
                            />
                            {errors.website && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.website}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">What are you looking to automate? <span className="text-red-500">*</span></label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 dark:bg-navy-800 dark:text-white focus:bg-white dark:focus:bg-navy-900 outline-none transition-all h-32 resize-none ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' : 'border-slate-200 dark:border-navy-700 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10'}`} 
                                placeholder="Tell us about your manual processes..."
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full md:w-auto px-8 py-4 rounded-lg font-medium text-white shadow-xl shadow-brand-500/20 transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'bg-navy-800 dark:bg-navy-700 cursor-not-allowed opacity-80' : 'bg-navy-900 dark:bg-brand-600 hover:bg-navy-950 dark:hover:bg-brand-500 hover:shadow-navy-900/40'}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    "Send Inquiry"
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </div>
      
      {/* Visual Map Placeholder */}
      <div className="h-80 bg-slate-200 dark:bg-navy-800 w-full relative overflow-hidden group transition-colors duration-300">
         <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-30 grayscale dark:invert"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-navy-950 to-transparent"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center animate-bounce">
                <MapPin className="w-10 h-10 text-brand-600 dark:text-brand-400 mb-2 drop-shadow-md" />
                <div className="bg-white dark:bg-navy-900 px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-navy-900 dark:text-white border border-slate-100 dark:border-navy-700">Global HQ: Maharashtra</div>
            </div>
         </div>
      </div>
    </div>
  );
};