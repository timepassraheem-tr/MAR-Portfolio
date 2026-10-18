import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Globe,
  Megaphone,
  Bot,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Crown,
  Zap,
  Image as ImageIcon,
  Video,
  Download,
} from 'lucide-react';
import { NavRoute } from '../components/Navbar';
import { SectionReveal } from '../components/SectionReveal';
import { SpotlightCard } from '../components/SpotlightCard';
import { BrandLogo } from '../components/BrandLogo';
import {
  WEBSITE_PACKAGES,
  MARKETING_PACKAGES,
  AUTOMATION_PACKAGES,
  TRUST_FEATURES,
  WHY_CHOOSE_MAR,
  INDUSTRIES_SERVED,
  getWhatsAppUrl,
  DISPLAY_PHONE,
  DISPLAY_EMAIL,
  DISPLAY_PORTFOLIO,
  WebsitePackage,
  AutomationPackage,
} from '../data/workWithMar';

interface WorkWithMarProps {
  onRouteChange: (route: NavRoute) => void;
}

export const WorkWithMar: React.FC<WorkWithMarProps> = ({ onRouteChange }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'marketing' | 'automation'>('all');

  const scrollToServices = () => {
    const el = document.getElementById('work-pricing-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAction = (pkgTitle: string, price?: string) => {
    const url = getWhatsAppUrl(pkgTitle, price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
        {/* Subtle Ambient Radial Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16102e]/90 border border-purple-500/35 text-xs font-semibold text-purple-200 uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>MAR ENTERPRISE • OFFICIAL QUOTATION</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.1]">
              QUOTATION
            </h1>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
              Professional Digital Solutions for Your Business
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Websites, Branding, Marketing & AI Automations tailored with exact transparent scopes and guaranteed deliverables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-purple-400/30 transition-all active:scale-95 text-base"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/quotation-web-marketing.jpg"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 transition-all text-base"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Quotation Poster 1</span>
            </a>

            <a
              href="/quotation-ai-automations.jpg"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 transition-all text-base"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Quotation Poster 2</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES & PRICING CONTAINER */}
      <div id="work-pricing-details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        
        {/* CATEGORY FILTER SWITCHER */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Services & Quotations' },
            { id: 'web', label: '1. Website Designing & Development' },
            { id: 'marketing', label: '2. Digital Marketing' },
            { id: 'automation', label: '3. AI Automations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-300/40'
                  : 'bg-[#120f26] text-slate-300 hover:text-white hover:bg-purple-950/50 border border-purple-500/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION 1 — WEBSITE DESIGNING & DEVELOPMENT */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <section id="website-designing-full" className="scroll-mt-28">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-purple-900/30 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                      1. WEBSITE DESIGNING & DEVELOPMENT
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    Modern, responsive and high-performing websites for businesses, startups and professionals.
                  </p>
                </div>

                <div className="text-xs text-purple-300 font-mono bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20 w-fit">
                  3 Fixed Tiers • 1 Month Free Hosting on Vercel
                </div>
              </div>
            </SectionReveal>

            {/* 3 Website Designing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {WEBSITE_PACKAGES.map((pkg: WebsitePackage, idx: number) => {
                const isRecommended = pkg.highlight;

                return (
                  <SectionReveal key={pkg.id} delay={idx * 0.1}>
                    <SpotlightCard
                      className={`h-full flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 relative ${
                        isRecommended
                          ? 'border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.25)] bg-gradient-to-b from-[#1b123d] via-[#100d29] to-[#0a081a]'
                          : 'border-purple-500/25 bg-[#0d0a20]/90'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        {/* Top Recommended Tag cleanly placed above title */}
                        {pkg.badge && (
                          <div className="flex justify-center mb-3">
                            <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-[0_0_16px_rgba(168,85,247,0.6)] border border-white/30 flex items-center gap-1.5">
                              <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                              <span>{pkg.badge}</span>
                            </span>
                          </div>
                        )}
                        <div className="mb-2">
                          <h3 className="text-2xl font-extrabold text-white font-display tracking-tight">
                            {pkg.name}
                          </h3>
                          <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mt-0.5">
                            {pkg.tagline}
                          </p>
                        </div>

                        {/* Price Block */}
                        <div className="my-4 py-3.5 px-4 rounded-xl bg-purple-950/60 border border-purple-400/30 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                          <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                            {pkg.price}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-6 min-h-[36px]">
                          {pkg.description}
                        </p>

                        {/* Feature List */}
                        <div className="flex-grow mb-6">
                          <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-3.5">
                            Included in Quotation:
                          </p>
                          <ul className="space-y-3">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-5 border-t border-purple-500/20 space-y-2.5">
                          <button
                            onClick={() => handleAction(`Website Designing - ${pkg.name}`, pkg.price)}
                            className={`w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                              isRecommended
                                ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.45)] border border-purple-300/40'
                                : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                            }`}
                          >
                            <MessageCircle className="w-4 h-4 text-purple-200" />
                            <span>Select {pkg.name} ({pkg.price})</span>
                          </button>
                        </div>
                      </div>
                    </SpotlightCard>
                  </SectionReveal>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 2 — DIGITAL MARKETING */}
        {(activeTab === 'all' || activeTab === 'marketing') && (
          <section id="digital-marketing-full" className="scroll-mt-28">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-purple-900/30 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                      2. DIGITAL MARKETING
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    Grow your brand, reach more customers and increase your business with result-driven digital marketing.
                  </p>
                </div>

                <div className="text-xs text-fuchsia-300 font-mono bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20 w-fit">
                  Package A (Monthly) • Package B (Combined Website)
                </div>
              </div>
            </SectionReveal>

            {/* 2 Digital Marketing Options */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Option A: Monthly Package (5 cols) */}
              <div className="lg:col-span-5">
                <SectionReveal delay={0.1}>
                  <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-8 border-purple-500/30 bg-[#0d0a20]/95">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-400/40 text-purple-200 flex items-center justify-center font-display font-extrabold text-lg">
                          A
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-white font-display">
                            DIGITAL MARKETING
                          </h3>
                          <span className="text-xs text-purple-300 font-semibold">
                            (Monthly Package)
                          </span>
                        </div>
                      </div>

                      <div className="my-3 py-3 px-4 rounded-xl bg-purple-950/60 border border-purple-500/30 text-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                          ₹ 10,000 – ₹ 12,000
                        </span>
                        <span className="block text-[11px] text-purple-300 font-medium mt-0.5">
                          per month
                        </span>
                      </div>

                      <div className="flex-grow mb-6 space-y-3">
                        <p className="text-xs uppercase font-bold text-purple-300 tracking-wider">
                          Services Included:
                        </p>
                        <ul className="space-y-2.5 text-xs text-slate-300">
                          {MARKETING_PACKAGES[0].features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Post rate cards */}
                        <div className="pt-2 grid grid-cols-2 gap-2.5">
                          <div className="p-3 rounded-xl bg-[#140f2b] border border-purple-500/20 text-center">
                            <ImageIcon className="w-4 h-4 text-purple-300 mx-auto mb-1" />
                            <span className="text-[11px] text-slate-300 block">Each Post (Image)</span>
                            <span className="text-sm font-bold text-white">₹ 100</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#140f2b] border border-purple-500/20 text-center">
                            <Video className="w-4 h-4 text-purple-300 mx-auto mb-1" />
                            <span className="text-[11px] text-slate-300 block">Each Post (Video)</span>
                            <span className="text-sm font-bold text-white">₹ 150 – ₹ 200</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-500/20">
                        <button
                          onClick={() => handleAction('Package A: Digital Marketing (Monthly Package)', '₹ 10,000 – ₹ 12,000 / month')}
                          className="w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30 transition-all shadow-md"
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>Select Package A</span>
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </SectionReveal>
              </div>

              {/* Option B: Combined Total Package (7 cols) */}
              <div className="lg:col-span-7">
                <SectionReveal delay={0.2}>
                  <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-8 border-purple-400/50 shadow-[0_0_35px_rgba(168,85,247,0.2)] bg-gradient-to-b from-[#181038] via-[#100d28] to-[#0a081a]">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-9 h-9 rounded-xl bg-fuchsia-900/60 border border-fuchsia-400/40 text-fuchsia-200 flex items-center justify-center font-display font-extrabold text-lg">
                          B
                        </span>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                            DIGITAL MARKETING WITH WEBSITE
                          </h3>
                          <p className="text-xs text-purple-300">
                            Complete solution to build your online presence and grow your business.
                          </p>
                        </div>
                      </div>

                      {/* 2-Part Breakdown */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                        <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/30 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-purple-200 uppercase">
                                1. STANDARD WEBSITE
                              </span>
                              <span className="text-sm font-extrabold text-white">
                                ₹ 8,000
                              </span>
                            </div>
                            <ul className="space-y-1.5 text-[11px] text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>5 Pages Website (Home, About, Services, Blog, Contact)</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Modern & Professional Design</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Mobile Responsive (All Devices)</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Advanced Contact Form (Email Notifications)</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Logo Creation & Social Media Links</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Free Hosting on Vercel (1 Month) + SSL</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>Basic Support (3 Months)</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/30 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold text-fuchsia-200 uppercase">
                                2. DIGITAL MARKETING
                              </span>
                              <span className="text-xs font-extrabold text-white">
                                ₹ 10,000 – ₹ 12,000
                              </span>
                            </div>
                            <ul className="space-y-1.5 text-[11px] text-slate-300">
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Google My Business Profile Setup</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Social Media Channels & Pages Setup</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>SEO, GEO & AEO Campaigning</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Running Google Ads & Meta Ads</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Posting on Instagram, YouTube, FB, LinkedIn</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Image ₹ 100 | Video ₹ 150 – ₹ 200</span>
                              </li>
                              <li className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" />
                                <span>Posting as per customer requirements</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Total Box */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/80 via-violet-900/80 to-fuchsia-900/80 border border-purple-400/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)] my-2">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-200 block">
                            TOTAL PACKAGE (Website + Digital Marketing)
                          </span>
                          <span className="text-xs text-slate-200">
                            Standard Website ₹ 8,000 + Digital Marketing (1 Month) ₹ 10,000 – ₹ 12,000
                          </span>
                        </div>
                        <div className="sm:text-right">
                          <span className="text-[10px] uppercase font-bold text-purple-200 block">Total Investment</span>
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                            ₹ 18,000 – ₹ 20,000
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-purple-500/20 mt-auto">
                        <button
                          onClick={() => handleAction('Package B: Digital Marketing With Website', 'Total: ₹ 18,000 – ₹ 20,000')}
                          className="w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.45)] border border-purple-300/50 transition-all"
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>Select Total Package B (₹ 18,000 – ₹ 20,000)</span>
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </SectionReveal>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3 — AI AUTOMATIONS */}
        {(activeTab === 'all' || activeTab === 'automation') && (
          <section id="ai-automations-full" className="scroll-mt-28">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-purple-900/30 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                      3. AI AUTOMATIONS
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    Save Time | Get More Leads | Automate Your Business — Custom AI Automations to Simplify, Scale and Grow.
                  </p>
                </div>

                <div className="text-xs text-purple-300 font-mono bg-purple-950/40 px-3 py-1.5 rounded-lg border border-purple-500/20 w-fit">
                  Telegram • WhatsApp • CRM • Full Scale
                </div>
              </div>
            </SectionReveal>

            {/* 3 AI Automations Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {AUTOMATION_PACKAGES.map((pkg: AutomationPackage, idx: number) => {
                const isPopular = pkg.highlight;

                return (
                  <SectionReveal key={pkg.id} delay={idx * 0.1}>
                    <SpotlightCard
                      className={`h-full flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 relative ${
                        isPopular
                          ? 'border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.25)] bg-gradient-to-b from-[#1b123b] via-[#110d29] to-[#0a081a]'
                          : 'border-purple-500/25 bg-[#0d0a20]/90'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        {/* Popular Badge cleanly in flow */}
                        {pkg.badge && (
                          <div className="flex justify-center mb-3">
                            <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_16px_rgba(168,85,247,0.6)] border border-white/30 flex items-center gap-1.5">
                              <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                              <span>{pkg.badge}</span>
                            </span>
                          </div>
                        )}
                        <div className="mb-2">
                          <h3 className="text-xl font-extrabold text-white font-display tracking-tight">
                            {pkg.name}
                          </h3>
                          <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mt-0.5">
                            {pkg.tagline}
                          </p>
                        </div>

                        {/* Price Block */}
                        <div className="my-4 py-3.5 px-4 rounded-xl bg-purple-950/60 border border-purple-400/30 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                            {pkg.price}
                          </span>
                          <span className="block text-[11px] text-purple-300 font-medium mt-0.5">
                            per month
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-6 min-h-[36px]">
                          {pkg.description}
                        </p>

                        {/* Feature List */}
                        <div className="flex-grow mb-6">
                          <p className="text-xs uppercase font-bold text-purple-300 tracking-wider mb-3.5">
                            Included Automations:
                          </p>
                          <ul className="space-y-3">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-5 border-t border-purple-500/20 space-y-2.5">
                          <button
                            onClick={() => handleAction(`AI Automations - ${pkg.name}`, `${pkg.price} / month`)}
                            className={`w-full py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                              isPopular
                                ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.45)] border border-purple-300/40'
                                : 'bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30'
                            }`}
                          >
                            <MessageCircle className="w-4 h-4 text-purple-200" />
                            <span>Select {pkg.name}</span>
                          </button>
                        </div>
                      </div>
                    </SpotlightCard>
                  </SectionReveal>
                );
              })}
            </div>
          </section>
        )}

        {/* VALUE PILLARS & TRUST (FROM POSTERS) */}
        <SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0f0b24] border border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white font-display mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* WHY CHOOSE MAR ENTERPRISE & INDUSTRIES SERVED */}
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 p-7 rounded-3xl bg-gradient-to-br from-[#140e2e] via-[#0e0a24] to-[#090618] border border-purple-500/30 space-y-4">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>WHY CHOOSE MAR ENTERPRISE?</span>
              </h3>
              <ul className="space-y-3">
                {WHY_CHOOSE_MAR.map((reason, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{reason.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 p-7 rounded-3xl bg-gradient-to-br from-[#140e2e] via-[#0e0a24] to-[#090618] border border-purple-500/30 space-y-4">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-400" />
                <span>INDUSTRIES WE SERVE</span>
              </h3>
              <p className="text-xs text-slate-300">
                Tailored digital solutions developed for organizations across diverse sectors:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {INDUSTRIES_SERVED.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-center hover:border-purple-400/40 transition-colors"
                  >
                    <span className="text-xs font-semibold text-purple-200">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* BOTTOM DIRECT CONTACT REASSURANCE BANNER */}
        <SectionReveal>
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#170e36] via-[#100a26] to-[#170e36] border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.25)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <BrandLogo size="sm" showText={false} />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  YOUR DIGITAL GROWTH PARTNER
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Need a Custom Solution or Free Consultation?
              </h3>
              <p className="text-sm text-slate-300">
                Phone: <strong className="text-white">{DISPLAY_PHONE}</strong> | Email: <strong className="text-white">{DISPLAY_EMAIL}</strong> | Portfolio: <strong className="text-purple-300">{DISPLAY_PORTFOLIO}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => handleAction('Direct Consultation & Custom Quote')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-300/40 transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Let's Grow Your Business</span>
              </button>
            </div>
          </div>
        </SectionReveal>

      </div>
    </div>
  );
};
