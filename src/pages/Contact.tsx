import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  MessageSquare,
  User,
  AtSign,
  FileText,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';
import { SpotlightCard } from '../components/SpotlightCard';
import { SectionReveal } from '../components/SectionReveal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Smooth simulated submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15102d] border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Let's Connect</span>
            </div>
            <span className="font-handwriting text-2xl text-purple-300 font-bold hidden sm:inline-block">
              Start something new
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
            Get in Touch with{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              MD Abdul Raheem
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Have a project in mind, need a quote for web development or brand identity, or want to discuss AI workflow automation? Send a direct message below.
          </p>
        </div>
      </section>

      {/* MAIN 2-COLUMN CONTACT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO CARDS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <SectionReveal delay={0.1}>
              <SpotlightCard className="p-6 border-purple-500/25 flex items-start justify-between group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-400">
                      Phone Number
                    </p>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-purple-300 transition-colors font-display block mt-0.5"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Direct call & WhatsApp support
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-[#141129] border border-purple-500/20 text-slate-400 hover:text-white hover:border-purple-400 transition-all"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </SpotlightCard>
            </SectionReveal>

            {/* Email Card */}
            <SectionReveal delay={0.2}>
              <SpotlightCard className="p-6 border-purple-500/25 flex items-start justify-between group">
                <div className="flex items-start gap-4 overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-purple-300" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold uppercase tracking-wider text-purple-400">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-purple-300 transition-colors font-display block mt-0.5 truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Official M.A.R Enterprise inbox
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-[#141129] border border-purple-500/20 text-slate-400 hover:text-white hover:border-purple-400 transition-all shrink-0 ml-2"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </SpotlightCard>
            </SectionReveal>

            {/* Location Card */}
            <SectionReveal delay={0.3}>
              <SpotlightCard className="p-6 border-purple-500/25 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-400/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    Location
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white font-display mt-0.5">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Available for local & global remote commissions
                  </p>
                </div>
              </SpotlightCard>
            </SectionReveal>

            {/* Availability Banner */}
            <SectionReveal delay={0.4}>
              <div className="p-6 rounded-2xl glass-panel border-purple-500/30 space-y-3">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-bold text-white font-display">
                    Response Guarantee
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  I typically review all inquiries and project briefs within 24 hours. For urgent project inquiries, reach out directly via WhatsApp or Phone.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-medium text-purple-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Currently accepting new clients for 2026</span>
                </div>
              </div>
            </SectionReveal>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7">
            <SectionReveal delay={0.2}>
              <div className="p-7 sm:p-10 rounded-3xl glass-panel border-purple-500/35 relative overflow-hidden shadow-2xl">
                
                {/* Form Heading */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white font-display">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill in the details below to request a quote or discuss a collaboration.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        
                        {/* Your Name */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="name"
                            className="block text-xs font-semibold text-slate-300 tracking-wide"
                          >
                            Your Name <span className="text-purple-400">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              placeholder="e.g. John Doe"
                              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f0b22]/90 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-1 focus:ring-purple-400 ${
                                errors.name
                                  ? 'border-rose-500/70 focus:border-rose-500'
                                  : 'border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                              }`}
                            />
                          </div>
                          {errors.name && (
                            <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3 h-3" /> {errors.name}
                            </p>
                          )}
                        </div>

                        {/* Your Email */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold text-slate-300 tracking-wide"
                          >
                            Your Email <span className="text-purple-400">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <AtSign className="w-4 h-4" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="name@example.com"
                              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f0b22]/90 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-1 focus:ring-purple-400 ${
                                errors.email
                                  ? 'border-rose-500/70 focus:border-rose-500'
                                  : 'border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                              }`}
                            />
                          </div>
                          {errors.email && (
                            <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3 h-3" /> {errors.email}
                            </p>
                          )}
                        </div>

                      </div>

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="subject"
                          className="block text-xs font-semibold text-slate-300 tracking-wide"
                        >
                          Subject <span className="text-purple-400">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FileText className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            placeholder="e.g. Website Design & Branding Inquiry"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f0b22]/90 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-1 focus:ring-purple-400 ${
                              errors.subject
                                ? 'border-rose-500/70 focus:border-rose-500'
                                : 'border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                            }`}
                          />
                        </div>
                        {errors.subject && (
                          <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-slate-300 tracking-wide"
                        >
                          Your Message <span className="text-purple-400">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <textarea
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Tell me about your project, goals, timeline and expectations..."
                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f0b22]/90 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-1 focus:ring-purple-400 resize-none ${
                              errors.message
                                ? 'border-rose-500/70 focus:border-rose-500'
                                : 'border-purple-500/30 focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                            }`}
                          />
                        </div>
                        {errors.message && (
                          <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-purple-500 shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] border border-purple-400/40 transition-all duration-200 active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Processing Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-center text-slate-400 pt-1">
                        🔒 Direct client communication. Information is held strictly confidential.
                      </p>
                    </motion.form>
                  ) : (
                    /* Polished Local Confirmation State */
                    <motion.div
                      key="contact-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 px-4 space-y-5"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-purple-600/20 border-2 border-emerald-400/60 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.35)]">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-white font-display">
                          Thank You, {formData.name}!
                        </h4>
                        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                          Your message regarding <strong className="text-purple-300">"{formData.subject}"</strong> has been recorded.
                        </p>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto">
                          (Local confirmation state confirmed. MD Abdul Raheem will be in touch via {formData.email}.)
                        </p>
                      </div>

                      <div className="pt-4">
                        <button
                          onClick={resetForm}
                          className="px-6 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/40 transition-colors"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </SectionReveal>
          </div>

        </div>
      </section>
    </div>
  );
};
