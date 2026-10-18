import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  Megaphone,
  Bot,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Headphones,
  ExternalLink,
  Crown,
  Zap,
  Building2,
  Image as ImageIcon,
  Video,
  AlertTriangle,
  FileText,
  Download,
  X,
} from 'lucide-react';
import {
  WEBSITE_PACKAGES,
  MARKETING_PACKAGES,
  AUTOMATION_PACKAGES,
  TRUST_FEATURES,
  WHY_CHOOSE_MAR,
  INDUSTRIES_SERVED,
  WEBSITE_DISCLAIMER,
  getWhatsAppUrl,
  DISPLAY_PHONE,
  DISPLAY_EMAIL,
  DISPLAY_PORTFOLIO,
  WebsitePackage,
  AutomationPackage,
} from '../data/workWithMar';
import { SpotlightCard } from './SpotlightCard';
import { SectionReveal } from './SectionReveal';
import { NavRoute } from './Navbar';
import { BrandLogo } from './BrandLogo';

interface WorkWithMarSectionProps {
  onRouteChange: (route: NavRoute) => void;
  isHomePage?: boolean;
}

export const WorkWithMarSection: React.FC<WorkWithMarSectionProps> = ({
  onRouteChange,
  isHomePage = false,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'quotation1' | 'quotation2'>('all');
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const handleWhatsApp = (serviceTitle: string, price?: string) => {
    const url = getWhatsAppUrl(serviceTitle, price);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="work-with-mar-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* SECTION MAIN HEADER */}
      <SectionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/35 text-xs font-semibold text-purple-300 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Official Quotations &amp; Pricing</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
                OUR QUOTATIONS
              </h2>
              <span className="hidden sm:inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-purple-900/40 border border-purple-400/40 text-purple-200">
                Quotation 1 &amp; 2
              </span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Professional Digital Solutions for Your Business — Websites, Branding, Marketing &amp; AI Automations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedPoster('/quotation-1-websites-marketing.jpg')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>View Quotation 1</span>
            </button>
            <button
              onClick={() => setSelectedPoster('/quotation-2-ai-automations.jpg')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-purple-200 bg-[#14102d] hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-400/60 transition-all shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            >
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              <span>View Quotation 2</span>
            </button>
          </div>
        </div>
      </SectionReveal>

      {/* FILTER TABS */}
      <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-10">
        {[
          { id: 'all', label: 'All Quotations (1 & 2)' },
          { id: 'quotation1', label: 'Quotation 1: Websites & Marketing' },
          { id: 'quotation2', label: 'Quotation 2: AI Automations' },
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

      <div className="space-y-16">
        {/* ========================================================== */}
        {/* QUOTATION 1: WEBSITES & DIGITAL MARKETING                 */}
        {/* ========================================================== */}
        {(activeTab === 'all' || activeTab === 'quotation1') && (
          <div className="space-y-10">
            {/* Banner for Quotation 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#170e36] via-[#100a26] to-[#170e36] border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">QUOTATION 1</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  OUR SERVICES — Websites, Branding, Marketing &amp; More
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Professional Digital Solutions for Your Business
                </p>
              </div>
              <button
                onClick={() => setSelectedPoster('/quotation-1-websites-marketing.jpg')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shrink-0 flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Full Poster 1</span>
              </button>
            </div>

            {/* PART 1: WEBSITE DESIGNING & DEVELOPMENT */}
            <div>
              <div className="mb-6 pb-3 border-b border-purple-900/30 flex items-center justify-between">
                <div>
                  <h4 className="text-lg sm:text-2xl font-extrabold text-white font-display flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span>1. WEBSITE DESIGNING &amp; DEVELOPMENT</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Modern, responsive and high-performing websites for businesses, startups and professionals.
                  </p>
                </div>
              </div>

              {/* 3 Website Designing Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {WEBSITE_PACKAGES.map((pkg: WebsitePackage, idx: number) => {
                  const isStandard = pkg.id === 'standard';

                  return (
                    <SectionReveal key={pkg.id} delay={idx * 0.1}>
                      <SpotlightCard
                        className={`h-full flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 relative rounded-2xl ${
                          isStandard
                            ? 'border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.3)] bg-gradient-to-b from-[#1b123d] via-[#100d29] to-[#0a081a]'
                            : 'border-purple-500/25 bg-[#0d0a20]/95'
                        }`}
                      >
                        <div className="flex flex-col h-full">
                          {pkg.badge && (
                            <div className="flex justify-center mb-3">
                              <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 text-white shadow-[0_0_16px_rgba(168,85,247,0.6)] border border-white/30 flex items-center gap-1.5">
                                <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                                <span>{pkg.badge}</span>
                              </span>
                            </div>
                          )}

                          <div className="text-center mb-2">
                            <h5 className="text-2xl font-extrabold text-white font-display tracking-tight">
                              {pkg.name}
                            </h5>
                          </div>

                          <div className="my-3 py-3 px-4 rounded-xl bg-purple-950/60 border border-purple-400/30 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                            <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                              {pkg.price}
                            </span>
                          </div>

                          <div className="flex-grow mb-5 pt-2">
                            <ul className="space-y-2.5">
                              {pkg.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                  <span className="leading-snug">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/25 text-center mb-4 text-xs text-purple-300 flex items-center justify-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                            <span>Domain &amp; Hosting need to be purchased by the client.</span>
                          </div>

                          <div className="pt-2 border-t border-purple-500/20">
                            <button
                              onClick={() => handleWhatsApp(`Website Designing - ${pkg.name}`, pkg.price)}
                              className={`w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                                isStandard
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
            </div>

            {/* PART 2: DIGITAL MARKETING */}
            <div className="pt-4">
              <div className="mb-6 pb-3 border-b border-purple-900/30">
                <h4 className="text-lg sm:text-2xl font-extrabold text-white font-display flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-purple-400" />
                  <span>2. DIGITAL MARKETING</span>
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Grow your brand, reach more customers and increase your business with result-driven digital marketing.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Option A: Digital Marketing Only (5 cols) */}
                <div className="lg:col-span-5">
                  <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7 border-purple-500/30 bg-[#0d0a20]/95 rounded-2xl">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-400/40 text-purple-200 flex items-center justify-center font-display font-extrabold text-lg shrink-0">
                          A
                        </span>
                        <div>
                          <h5 className="text-xl font-bold text-white font-display">
                            DIGITAL MARKETING
                          </h5>
                          <span className="text-xs text-purple-300 font-semibold">(ONLY PACKAGE)</span>
                        </div>
                      </div>

                      <div className="my-3 py-3 px-4 rounded-xl bg-purple-950/60 border border-purple-500/30 text-center">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                          ₹10,000 – ₹12,000
                        </span>
                        <span className="block text-[11px] text-purple-300 font-medium mt-0.5">/ MONTH</span>
                      </div>

                      <div className="flex-grow mb-4 space-y-3">
                        <ul className="space-y-2.5 text-xs text-slate-300">
                          {MARKETING_PACKAGES[0].features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/25 space-y-2 mt-3">
                          <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="p-2 rounded-lg bg-[#140f2b] border border-purple-500/20">
                              <span className="text-[11px] text-slate-300 block">Each Post (Image)</span>
                              <span className="text-xs font-bold text-purple-200">for ₹ 100</span>
                            </div>
                            <div className="p-2 rounded-lg bg-[#140f2b] border border-purple-500/20">
                              <span className="text-[11px] text-slate-300 block">Each Post (Video)</span>
                              <span className="text-xs font-bold text-purple-200">for ₹ 150 – ₹ 200</span>
                            </div>
                          </div>
                          <p className="text-[10px] text-slate-400 text-center">
                            Posting as per customer requirements (Daily, weekly, monthly, etc).
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-purple-500/20">
                        <button
                          onClick={() => handleWhatsApp('Package A: Digital Marketing (Only Package)', '₹10,000 – ₹12,000 / month')}
                          className="w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-purple-900/60 hover:bg-purple-800/80 text-white border border-purple-400/30 transition-all shadow-md"
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>Select Package A</span>
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Option B: Digital Marketing with Standard Website (7 cols) */}
                <div className="lg:col-span-7">
                  <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7 border-purple-400/50 shadow-[0_0_35px_rgba(168,85,247,0.2)] bg-gradient-to-b from-[#181038] via-[#100d28] to-[#0a081a] rounded-2xl">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-9 h-9 rounded-xl bg-fuchsia-900/60 border border-fuchsia-400/40 text-fuchsia-200 flex items-center justify-center font-display font-extrabold text-lg shrink-0">
                          B
                        </span>
                        <div>
                          <h5 className="text-xl sm:text-2xl font-bold text-white font-display">
                            DIGITAL MARKETING WITH STANDARD WEBSITE
                          </h5>
                          <p className="text-xs text-purple-300">
                            Complete solution to build your online presence and grow your business.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
                        <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/30">
                          <span className="text-xs font-bold text-purple-200 block uppercase mb-1">
                            1. STANDARD WEBSITE
                          </span>
                          <span className="text-[10px] text-slate-400 block mb-2">Includes all features from Standard Website:</span>
                          <ul className="space-y-1.5 text-[11px] text-slate-300">
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /><span>5 Pages Website</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /><span>Modern &amp; Professional Design</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /><span>Mobile Responsive (All Devices)</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /><span>Advanced Contact Form</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /><span>Logo Creation &amp; Social Links</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" /><span>Security Setup &amp; 3 Months Support</span></li>
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-purple-950/50 border border-purple-500/30">
                          <span className="text-xs font-bold text-fuchsia-200 block uppercase mb-1">
                            2. DIGITAL MARKETING (1 Month)
                          </span>
                          <span className="text-[10px] text-slate-400 block mb-2">Includes all Digital Marketing services:</span>
                          <ul className="space-y-1.5 text-[11px] text-slate-300">
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" /><span>Google My Business Profile</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" /><span>Logo Creation &amp; Social Channels</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" /><span>SEO, GEO, AEO</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" /><span>Google Ads &amp; Meta Ads</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" /><span>Social Media Posting</span></li>
                            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0 mt-0.5" /><span>Image ₹ 100 | Video ₹ 150 – ₹ 200</span></li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/80 via-violet-900/80 to-fuchsia-900/80 border border-purple-400/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)] my-2">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-200 block">
                            TOTAL PACKAGE PRICE
                          </span>
                          <span className="text-xs text-slate-200">
                            Complete Website + 1 Month Marketing Engine
                          </span>
                        </div>
                        <div className="sm:text-right">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                            ₹18,000 – ₹20,000
                          </span>
                          <span className="text-[11px] text-purple-200 block">(for 1 month)</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-purple-500/20 mt-auto">
                        <button
                          onClick={() => handleWhatsApp('Package B: Digital Marketing With Standard Website', 'Total: ₹18,000 – ₹20,000 (for 1 month)')}
                          className="w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_22px_rgba(168,85,247,0.45)] border border-purple-300/50 transition-all"
                        >
                          <MessageCircle className="w-4 h-4 text-purple-200" />
                          <span>Select Total Package B (₹18,000 – ₹20,000)</span>
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </div>

            {/* YELLOW DISCLAIMER BANNER */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/40 border-2 border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.2)] flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-extrabold text-amber-300 tracking-wide uppercase font-display">
                  WEBSITE PACKAGE PRICES EXCLUDE DOMAIN &amp; HOSTING
                </h5>
                <p className="text-xs text-amber-200/90 font-medium mt-0.5">
                  {WEBSITE_DISCLAIMER}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* QUOTATION 2: AI AUTOMATIONS                                */}
        {/* ========================================================== */}
        {(activeTab === 'all' || activeTab === 'quotation2') && (
          <div className="space-y-8 pt-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#170e36] via-[#100a26] to-[#170e36] border border-purple-500/40 shadow-[0_0_25px_rgba(168,85,247,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-400">QUOTATION 2</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  AI AUTOMATIONS
                </h3>
                <p className="text-xs text-purple-300 font-semibold mt-0.5">
                  Save Time | Get More Leads | Automate Your Business
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Custom AI Automations to Simplify, Scale and Grow Your Business
                </p>
              </div>
              <button
                onClick={() => setSelectedPoster('/quotation-2-ai-automations.jpg')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors shrink-0 flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Full Poster 2</span>
              </button>
            </div>

            {/* 3 AI Automations Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {AUTOMATION_PACKAGES.map((pkg: AutomationPackage, idx: number) => {
                const isStandard = pkg.id === 'standard-automations';
                const isPremium = pkg.id === 'premium-automations';

                return (
                  <SectionReveal key={pkg.id} delay={idx * 0.1}>
                    <SpotlightCard
                      className={`h-full flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 relative rounded-2xl ${
                        isStandard
                          ? 'border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.3)] bg-gradient-to-b from-[#1b123b] via-[#110d29] to-[#0a081a]'
                          : isPremium
                          ? 'border-fuchsia-400/80 shadow-[0_0_35px_rgba(217,70,239,0.25)] bg-gradient-to-b from-[#21113b] via-[#120d29] to-[#0a081a]'
                          : 'border-purple-500/25 bg-[#0d0a20]/95'
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        {pkg.badge && (
                          <div className="flex justify-center mb-3">
                            <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_0_16px_rgba(168,85,247,0.6)] border border-white/30 flex items-center gap-1.5">
                              <Crown className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                              <span>{pkg.badge}</span>
                            </span>
                          </div>
                        )}

                        <div className="text-center mb-1">
                          <h5 className="text-xl font-extrabold text-white font-display tracking-tight">
                            {pkg.name}
                          </h5>
                          <p className="text-[11px] font-semibold text-purple-300 mt-1">
                            {pkg.tagline}
                          </p>
                        </div>

                        <div className="my-3 py-3 px-4 rounded-xl bg-purple-950/60 border border-purple-400/30 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                          <span className="text-2xl sm:text-3xl font-extrabold text-white font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                            {pkg.price}
                          </span>
                          <span className="block text-[11px] text-purple-300 font-medium mt-0.5">
                            per month
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-4 text-center min-h-[32px]">
                          {pkg.description}
                        </p>

                        <div className="flex-grow mb-6 pt-1">
                          <ul className="space-y-2.5">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-purple-500/20">
                          <button
                            onClick={() => handleWhatsApp(`AI Automations - ${pkg.name}`, `${pkg.price} / month`)}
                            className={`w-full py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                              isStandard || isPremium
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
          </div>
        )}

        {/* TRUST PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {TRUST_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0f0b24] border border-purple-500/20 hover:border-purple-400/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-white font-display mb-1">{item.title}</h5>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FULL POSTER LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPoster && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl max-h-[92vh] bg-[#0c081e] border border-purple-400/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.3)] flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-purple-500/30 bg-[#140e2e]">
                <span className="text-sm font-bold text-white">Official Quotation Poster</span>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedPoster}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Poster</span>
                  </a>
                  <button
                    onClick={() => setSelectedPoster(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-auto p-2 bg-black flex items-center justify-center">
                <img
                  src={selectedPoster}
                  alt="Official Quotation Poster"
                  className="max-h-[82vh] w-auto object-contain rounded"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
